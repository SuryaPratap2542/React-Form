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

  console.log(formData);

  function ChangeHandler(event) {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finallyyyyyyyyyyy.");
    console.log(formData);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={submitHandler} className="border border-gray-300 shadow-md p-6 rounded-lg">
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

        <fieldset className="border p-2 rounded-lg">
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
    </div>
  );
}

export default App;
