
project Link:  https://pdfdata.netlify.app/




Description:
This project is a web application built using React.js for creating dynamic screens with form fields. It includes features for submitting user data to a backend API, storing the data in a MYSQL database, and generating PDF documents based on the submitted data.

Features:

Dynamic Form Screen:

The application includes a dynamic form screen with multiple input fields for collecting user data.
Users can input information such as SI number, applicant's name, and other relevant details.
API Integration:

An API endpoint is implemented to process form data submitted by users.
The API endpoint is responsible for storing the submitted data in a MYSQL database.
PDF Generation:

Users can save their form submissions as PDF documents.
Upon clicking the "Save Draft" button, the application sends a request to the backend to generate a PDF document based on the submitted data.
The generated PDF document contains the information provided by the user in the form.
Technologies Used:

React.js: Frontend framework for building dynamic user interfaces.
Node.js: Backend runtime environment for running JavaScript server-side code.
Express.js: Web framework for building APIs and handling HTTP requests.
MYSQL: database for storing form submission data.
HTML/CSS: Markup and styling languages for designing web pages.
Bootstrap: Frontend framework for responsive and mobile-first design.
JavaScript: Programming language used for both frontend and backend development.


Setup Instructions:

Clone the repository from [GitHub Repo URL].
Navigate to the project directory.
Install dependencies using npm install.
Start the development server using npm start.
Access the application in your web browser at [https://pdfdata.netlify.app/].
API Endpoints:

/store_user_data (POST): Endpoint for submitting form data.
Request Body: JSON object containing user data fields.
Response: JSON object with a success or error message.

/generate_pdf (POST): Endpoint for generating PDF documents.
Request Body: JSON object containing user data fields.
Response: PDF file or error message.




*************************************************************** BACKEND *****************************************************************





PDF Generation:

The backend provides an endpoint for generating PDF documents based on user-submitted data.
PDF documents are generated using the PDFKit library, allowing customization of document content and formatting.
Data Storage:

Form data submitted by users is stored in a MySQL database.
The backend includes functionality for connecting to the database, inserting data into the appropriate tables, and handling errors during database operations.
Technologies Used:

Node.js: Backend runtime environment for running JavaScript server-side code.
Express.js: Web framework for building APIs and handling HTTP requests.
PDFKit: Library for generating PDF documents programmatically.
MySQL: Relational database management system for storing user data.
dotenv: Library for loading environment variables from a .env file.
Moment.js: Library for parsing, validating, manipulating, and formatting dates.
Setup Instructions:

Clone the repository from [GitHub Repo URL].
Navigate to the project directory.
Install dependencies using npm install.
Configure environment variables by creating a .env file with the following variables:
makefile
Copy code
HOST=<MySQL Host>
USER=<MySQL Username>
PASSWORD=<MySQL Password>
DATABASE=<MySQL Database Name>
Start the server using npm start.
The backend API endpoints are now accessible for handling requests.
API Endpoints:

/store_user_data (POST): Endpoint for submitting form data.

Request Body: JSON object containing user data fields.
Response: JSON object with a success or error message.
/generate_pdf (POST): Endpoint for generating PDF documents.

Request Body: JSON object containing user data fields.
Response: PDF file or error message.
Database Schema:

The backend interacts with a MySQL database with the following schema:
scss
Copy code
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    si VARCHAR(255),
    applicantName VARCHAR(255),
    fatherName VARCHAR(255),
    dob DATE,
    introducerName VARCHAR(255),
    residentialAddress TEXT,
    currentState VARCHAR(255),
    currentCity VARCHAR(255),
    permanentAddress TEXT,
    permanentState VARCHAR(255),
    permanentCity VARCHAR(255),
    aadhaarNumber VARCHAR(255),
    membershipFee VARCHAR(255),
    amountPaid VARCHAR(255),
    familyDetail TEXT,
    mobile VARCHAR(255)
);