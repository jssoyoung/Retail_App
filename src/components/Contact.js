import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setErrorMessage('');

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleValidation = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(email)) {
     console.log("Success");
    } else {
   console.log("Invalid email");
    }
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    } else {
        window.alert('Your mesage was sent!')
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <h3>Contact Us</h3>
       <form className="form">
        <fieldset>
          <label for="name">Name <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleValidation}
            type="text"
            placeholder="Enter your name"
          /></label>
          <label for="email">Email <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleValidation}
            type="email"
            placeholder="Enter your email"
          /></label>
        </fieldset>
        <fieldset>
          <label for="message">Message <textarea
            rows="5"
            cols="30"
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleValidation}
            type="text"
            placeholder="Enter message here..."
          /></label>
        </fieldset>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
