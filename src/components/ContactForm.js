import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm({ onSuccessCallback }) {
  const [state, handleSubmit] = useForm("mqkvpqye")
  
  if (state.succeeded) {
    onSuccessCallback && onSuccessCallback();
    return <p>Thank you!</p>;
}

  return (
    <div className="form-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label>
          Notes & Comments
          <textarea id="message" name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </label>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
