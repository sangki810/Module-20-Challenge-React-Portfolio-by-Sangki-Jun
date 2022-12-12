import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const validateEmail = (text) => {
    var expression =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(text.toLowerCase());
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(email)) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validateEmail(email));

    if (error != "") {
      alert("Something went wrong: " + error);
    } else {
      alert("Email sent! (Not functional yet)");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter name"
        ></input>
      </div>
      <div className="form-group mt-3">
        <label for="email">Email address</label>
        <input
          type="text"
          onChange={handleInputChange}
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        ></input>
      </div>
      <div className="form-group mt-3">
        <label for="message">Message</label>
        <textarea
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter name"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default Contact;
