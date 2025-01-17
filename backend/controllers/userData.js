const PDFDocument = require('pdfkit');
const mysql = require('mysql2');
require('dotenv').config();
const moment = require('moment'); // Require moment


//database connection
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



function pdfGenerator(userData, res) {
    console.log("hii")
    try {
        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="userData.pdf"');
        doc.pipe(res);

        doc.fontSize(20)
            .text('Application Form', { align: 'center' })
            .moveDown(1.5);

        doc.fontSize(16)
            .text('User Data:', { underline: true })
            .moveDown(0.5);

        for (const [key, value] of Object.entries(userData)) {
            let displayValue = value;
            // Check if the value is a date
            if (key === 'dob' && value instanceof Date) {
                // Format the date using moment.js
                displayValue = moment(value).format('DD-MM-YYYY');
            }
            doc.text(`${key}: ${displayValue}`, {
                indent: 72,
                align: 'left'
            }).moveDown(0.5);
        }
        doc.end();
    } catch (error) {
        console.error('Error generating PDF', error);
        res.status(500).send('Error generating PDF');
    }
}


// Function to generate PDF and send it as a download
const generatePDF = (req, res) => {
    const sql = "SELECT * FROM user ORDER BY id DESC LIMIT 1"; // Selecting the last row based on the primary key 'id'

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database', err);
            res.status(500).send('Database connection error');
            return;
        }

        connection.query(sql, (err, results) => {
            connection.release(); // Always release the connection back to the pool

            if (err) {
                console.error('Error querying database', err);
                res.status(500).send('Error querying database');
                return;
            }

            if (results.length === 0) {
                res.status(404).send('User not found');
                return;
            }

            const userData = results[0]; // Assuming the query returns at least one row
            pdfGenerator(userData, res); // Pass the user data and response object to the PDF generator
        });
    });
};








// to store userData in database
function storeData(userData) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO user (si, applicantName, fatherName, dob, introducerName, residentialAddress, currentState, currentCity, permanentAddress, permanentState, permanentCity, aadhaarNumber, membershipFee, amountPaid, familyDetail, mobile) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        pool.getConnection((err, connection) => {
            if (err) {
                reject('Error connecting to database');
                return;
            }

            // const membershipFee = userData.membershipFee ? userData.membershipFee : null; // Set to null if membershipFee is not provided

            const dob = new Date(userData.dob);
            const year = dob.getFullYear();
            const month = (dob.getMonth() + 1).toString().padStart(2, '0');
            const day = dob.getDate().toString().padStart(2, '0');
            
            const formattedDate = `${year}-${month}-${day}`;
            
            console.log(formattedDate); // Output: 2024-04-02
            
                        
            const values = [
                userData.si,
                userData.applicantName,
                userData.fatherName,
                formattedDate,
                userData.introducerName,
                userData.residentialAddress,
                userData.currentState,
                userData.currentCity,
                userData.permanentAddress,
                userData.permanentState,
                userData.permanentCity,
                userData.aadhaarNumber,
                userData.membershipFee,
                userData.amountPaid,
                userData.familyDetail,
                userData.mobile,

            ];

            connection.query(sql, values, (err, result) => {
                connection.release(); // Release the connection
                if (err) {
                    console.log(err);
                    reject('Error inserting data into database');
                } else {
                    console.log("Data inserted successfully");
                    resolve('Data inserted successfully');
                }
            });
        });
    });
}


// Function to store user Info
const storeUserData = (req, res) => {
    const userData = req.body;
    console.log(userData);

    storeData(userData)
        .then(message => {
            res.status(200).send({ message: "Data stored in Database" });
        })
        .catch(error => {
            res.status(500).send({ message: "Error, Data not stored" });
        });
};



module.exports = {
    storeUserData,
    generatePDF
};
