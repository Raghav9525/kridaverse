import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addresses } from './constant';
import { useNavigate } from 'react-router-dom';

function Form1() {
    const apiUrl = process.env.REACT_APP_SERVER_URL;
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(''); // Added useState for message
    const navigate = useNavigate()
    const [selectedCurrentState, setSelectedCurrentState] = useState('');
    const [selectedCurrentCity, setSelectedCurrentCity] = useState('');

    const [selectedPermanentState, setSelectedPermanentState] = useState('');
    const [selectedPermanentCity, setSelectedPermanentCity] = useState('');

    const [userData, setUserData] = useState({
        si: '',
        applicantName: '',
        fatherName: '',
        dob: '',
        introducerName: '',
        residentialAddress: '',
        currentState: '',
        currentCity: '',
        permanentAddress: '',
        permanentState: '',
        permanentCity: '',
        aadhaarNumber: '',
        membershipFee: '',
        amountPaid: '',
        familyDetail: '',
        mobile: ''
    });

    const handleCurrentStateChange = (event) => {
        const state = event.target.value;
        setSelectedCurrentState(state);
        setUserData(prevData => ({ ...prevData, currentState: state, currentCity: '' }));
    };

    const handleCurrentCityChange = (event) => {
        const city = event.target.value;
        setSelectedCurrentCity(city);
        setUserData(prevData => ({ ...prevData, currentCity: city }));
    };

    const handlePermanentStateChange = (event) => {
        const state = event.target.value;
        setSelectedPermanentState(state);
        setUserData(prevData => ({ ...prevData, permanentState: state, permanentCity: '' }));
    };

    const handlePermanentCityChange = (event) => {
        const city = event.target.value;
        setSelectedPermanentCity(city);
        setUserData(prevData => ({ ...prevData, permanentCity: city }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
        if (!value) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: 'Please enter value' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

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
            const data = await response.json();
            const message = data.message
            console.log(message)
            if (response.ok) {

                navigate(`/success`, { state: { message: message } });

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
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'userData.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                window.URL.revokeObjectURL(url);
            } else {
                console.log("Error fetching delivery details");
            }
        } catch (err) {
            console.error("Network error:", err);
        }
    }

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    return (
        <div>
            <div className="form-section container">
                <div className="top-section w-50 mx-auto text-center">
                    <h1>Application Form</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
                </div>
                <hr />

                <form className="row">
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="siNumber" className="form-label">SI Number</label>
                        <input type="text" className="form-control" id="siNumber" name="si" value={userData.si} onChange={handleChange} required />
                        <div className="invalid-feedback">
                            should not be empty
                        </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="applicantName" className="form-label">Applicant's Name</label>
                        <input type="text" className="form-control" id="applicantName" name="applicantName" value={userData.applicantName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="fhName" className="form-label">Father/Husband Name</label>
                        <input type="text" className="form-control" id="fhName" name="fatherName" value={userData.fatherName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label className="form-label">DOB</label>
                        <div className="d-flex">
                            <input type="date" name="dob" value={userData.dob} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="introducerName" className="form-label">Introducer Name</label>
                        <input type="text" className="form-control" id="introducerName" name="introducerName" value={userData.introducerName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="mrAddress" className="form-label">Member Residential Address</label>
                        <input type="text" className="form-control" id="mrAddress" name="residentialAddress" value={userData.residentialAddress} onChange={handleChange} required />
                    </div>

                    {/* current Address */}
                    <div className="mb-3 col-12 col-md-6">
                        <label className="form-label">State</label>
                        <select id="currentState" className="form-select form-control" value={selectedCurrentState} onChange={handleCurrentStateChange} required>
                            <option value="">Select State</option>
                            {addresses.map((address, index) => (
                                <option key={index} value={address.state}>{address.state}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label className="form-label">City</label>
                        <select id="currentCity" className="form-select form-control" value={selectedCurrentCity} onChange={handleCurrentCityChange} disabled={!selectedCurrentState} required>
                            <option value="">Select City</option>
                            {selectedCurrentState && addresses.find(address => address.state === selectedCurrentState)?.city.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>


                    <hr className='mt-2 mb-2' />


                    {/* permanentAddress */}
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="mpAddress" className="form-label">Member Permanent Address</label>
                        <input type="text" className="form-control" id="mpAddress" name="permanentAddress" value={userData.permanentAddress} onChange={handleChange} required />
                    </div>

                    <div className="mb-3 col-12 col-md-6">
                        <label className="form-label">State</label>
                        <select id="permanentState" className="form-select form-control" value={selectedPermanentState} onChange={handlePermanentStateChange} required>
                            <option value="">Select State</option>
                            {addresses.map((address1, index) => (
                                <option key={index} value={address1.state}>{address1.state}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label className="form-label">City</label>
                        <select id="permanentCity" className="form-select form-control" value={selectedPermanentCity} onChange={handlePermanentCityChange} disabled={!selectedPermanentState} required>
                            <option value="">Select City</option>
                            {selectedPermanentState && addresses.find(address1 => address1.state === selectedPermanentState)?.city.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="familyDetail" className="form-label">Family Detail</label>
                        <input type="text" className="form-control" id="familyDetail" name="familyDetail" value={userData.familyDetail} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="phNumber" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phNumber" name="mobile" value={userData.mobile} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="aadhaarNumber" the="form-label">Aadhaar Number</label>
                        <input type="number" className="form-control" id="aadhaarNumber" name="aadhaarNumber" value={userData.aadhaarNumber} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="mbFee" className="form-label">Membership Fee</label>
                        <input type="number" className="form-control" id="mbFee" name="membershipFee" value={userData.membershipFee} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="amPaid" className="form-label">Amount paid in cash</label>
                        <input type="number" className="form-control" id="amPaid" name="amountPaid" value={userData.amountPaid} onChange={handleChange} required />
                    </div>

                    {/* button to submit form */}
                    <div className="d-flex gap-3 justify-content-center mb-4">
                        <button type="button" className="btn btn-outline-secondary" onClick={generatePDF}>Save Draft</button>
                        <button type="button" className="btn btn-danger" onClick={submitForm}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Form1;



