// src/components/Form.jsx
import React, { useState } from "react";

function Form({ tipusEstudiantSelect }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setWelcomeMessage(`Hola ${firstName} ${lastName}!`);
  };

  const title = tipusEstudiantSelect === "no-graduat" ? "Estudiants No-Graduats" : "Estudiants Graduats";

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-8">
          {title}
        </h1>
        <label>Nom:</label>
        <input 
          type="text" 
          name="fname" 
          className="w-full mb-4 rounded-lg bg-gray-200"  
          onBlur={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Cognom:</label>
        <input 
          type="text" 
          name="lname" 
          className="w-full mb-4 rounded-lg bg-gray-200" 
          onBlur={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" className="w-full mb-4 p-2 rounded-lg text-white bg-blue-500" />
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}           

export default Form;