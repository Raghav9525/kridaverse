import React, { useState } from 'react';

function Form() {
  const apiUrl = process.env.REACT_APP_SERVER_URL;
  const [userData, setUserData] = useState({
    name: ''
  });

  async function submitForm(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/store_user_data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        let data = await response.json()
        console.log(data)
          
      } else {
        console.log("Error fetching delivery details");
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  }

  async function generatePDF(e) {
    e.preventDefault();
    console.log(userData);
    console.log(apiUrl);

    try {
      const response = await fetch(`${apiUrl}/generate_pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        
        // Handle the PDF file response
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'userData.pdf'); // Setting the file name for download
        document.body.appendChild(link);
        link.click(); // Programmatically click the link to trigger the download
        link.parentNode.removeChild(link); // Clean up: remove the link from DOM
        window.URL.revokeObjectURL(url); // Clean up: free up memory used by the blob
      } else {
        console.log("Error fetching delivery details");
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  }

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={handleNameChange}
        />

        <button className="btn bg-primary" type="button" onClick={submitForm}>
          Submit
        </button>

        <button className='btn bg-success' type="button" onClick={generatePDF}>Save to draft</button>
      </form>
    </div>
  );
}

export default Form;
