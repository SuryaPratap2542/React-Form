import { useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "Select State",
    city: "",
    pin: "",
    notificationType: "Email",
  });

  const [showPopup, setShowPopup] = useState(false); // State for controlling the popup
  const [submittedData, setSubmittedData] = useState(null); // State for storing submitted data

  function ChangeHandler(event) {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // Save the submitted data to display in the popup
    setSubmittedData(formData);
    // Show the popup
    setShowPopup(true);
  }

  function closePopup() {
    // Close the popup
    setShowPopup(false);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-sky-200">
      <form onSubmit={submitHandler} className="border border-gray-300 shadow-md p-6 rounded-lg bg-purple-300 w-200">
      <h1 className="text-3xl font-bold mb-4">React Form</h1>

        <label htmlFor="firstname">First Name</label> <br />
        <input
          type="text"
          id="name"
          placeholder="Enter First Name"
          onChange={ChangeHandler}
          name="firstName"
          value={formData.firstName}
          className="border rounded-lg p-2 outline-none w-full"
        />
        <br />

        <label htmlFor="lasttname">Last Name</label> <br />
        <input
          type="text"
          id="lastname"
          placeholder="Enter Last Name"
          onChange={ChangeHandler}
          name="lastName"
          value={formData.lastName}
          className="border rounded-lg p-2 outline-none w-full"
        />
        <br />

        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          onChange={ChangeHandler}
          name="email"
          value={formData.email}
          className="border rounded-lg p-2 outline-none w-full"
        />
        <br />
        
        <label htmlFor="state">State</label> <br />
        <select
          name="state"
          id="state"
          value={formData.state}
          onChange={ChangeHandler}
          className="border rounded-lg p-2 outline-none w-full"
        >
          <option value="Select State">Select State</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
          <option value="New York">New York</option>
          {/* Add more state options as needed */}
        </select>
        <br />

        <label htmlFor="city">City</label> <br />
        <input
          type="text"
          id="city"
          placeholder="Enter City"
          onChange={ChangeHandler}
          name="city"
          value={formData.city}
          className="border rounded-lg p-2 outline-none w-full"
        />
        <br />

        <label htmlFor="pin">Pin</label> <br />
        <input
          type="text"
          id="pin"
          placeholder="Enter Pin"
          onChange={ChangeHandler}
          name="pin"
          value={formData.pin}
          className="border rounded-lg p-2 outline-none w-full"
        />
        <br />

        <fieldset className="border gap-4 rounded-lg flex flex-row">
          <legend>Notification Type:</legend>
          <input
            type="radio"
            name="notificationType"
            id="Email"
            onChange={ChangeHandler}
            value="Email"
            checked={formData.notificationType === "Email"}
          />
          <label htmlFor="Email">Email</label>

          <input
            type="radio"
            name="notificationType"
            id="SMS"
            onChange={ChangeHandler}
            value="SMS"
            checked={formData.notificationType === "SMS"}
          />
          <label htmlFor="SMS">SMS</label>

          <input
            type="radio"
            name="notificationType"
            id="Push"
            onChange={ChangeHandler}
            value="Push"
            checked={formData.notificationType === "Push"}
          />
          <label htmlFor="Push">Push Notification</label>
        </fieldset>

        <br />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Submit
        </button>
      </form>

      {/* Popup/Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Submitted Data</h2>
            {/* Display submitted data */}
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            <button
              onClick={closePopup}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
