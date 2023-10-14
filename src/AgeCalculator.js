import React, { useState } from "react";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000); // Approximate milliseconds in a year
    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <p></p>
      <button onClick={calculateAge}>Calculate Age</button>
      <p></p>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default AgeCalculator;