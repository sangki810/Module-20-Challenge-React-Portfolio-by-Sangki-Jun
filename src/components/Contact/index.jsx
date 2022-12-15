import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o7v6bje",
        "template_jq2oxro",
        form.current,
        "wy8lERfJqzUl-RB7J"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!")
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!")
        }
      );
      e.target.reset();
  };

  return (
    <form className="container pt-3" ref={form} onSubmit={sendEmail}>
      <h1>
        <u>Contact Me</u>
      </h1>
      <div className="form-group mt-3">
        <label for="name">Name</label>
        <input
          name="user_name"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          required
        ></input>
      </div>
      <div className="form-group mt-3">
        <label for="subject">Subject</label>
        <input
          name="subject"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Type your subject here"
          required
        ></input>
      </div>
      <div className="form-group mt-3">
        <label for="email">Email address</label>
        <input
          name="user_email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        ></input>
      </div>
      <div className="form-group mt-3">
        <label for="message">Message</label>
        <textarea
          name="message"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Type your message here"
          required
        ></textarea>
      </div>
      <button className="btn btn-primary mt-3" type="submit" value="Send">
        Submit
      </button>
    </form>
  );
};

export default Contact;
