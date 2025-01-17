
--  used mysql to store data


CREATE TABLE user (
    id SERIAL PRIMARY KEY auto_increment,
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
    aadhaarNumber VARCHAR(12), -- Assuming Aadhaar numbers are 12 characters long
    membershipFee DECIMAL(10, 2), -- Assuming membership fee and amount paid are decimal values
    amountPaid DECIMAL(10, 2),
    familyDetail TEXT,
    mobile VARCHAR(10) -- Assuming mobile numbers are 10 digits long
);
