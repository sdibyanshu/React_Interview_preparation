import React, { useState } from "react";

function Input() {
  const [input, setinput] = useState({});
  const [singlevalue, setsinglevalue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };

  const handleSUbmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  //   SIngle input box value
  const handlekro = () => {
    console.log(singlevalue);
  };

  return (
    <div>
      <form onSubmit={handleSUbmit}>

        <input
          type="text"
          placeholder="Enter Your gmail"
          onChange={handleChange}
          name="email"
        />

        <input
          type="text"
          placeholder="Enter Your name"
          onChange={handleChange}
          name="naame"
        />

        <input
          type="number"
          placeholder="Enter Your age"
          onChange={handleChange}
          name="age"
        />
        
        <input
          type="password"
          placeholder="Enter Your password"
          onChange={handleChange}
          name="password"
        />

        <input type="submit" value="Submit" />
      </form>



{/* A single input box */}
      <input
        type="text"
        placeholder="I am a single input box"
        onChange={(e) => setsinglevalue(e.target.value)}
      />
      <button onClick={handlekro}>Submit</button>
    </div>
  );
}

export default Input;
