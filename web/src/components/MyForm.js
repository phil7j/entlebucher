import React from "react"
import styled from "styled-components"

function MyForm() {
  return (
    <div>
      <ContactForm
        name="contact"
        method={"POST"}
        data-netlify="true"
        data-netlify-honeypot={"bot-field"}
      >
        <input type="hidden" name={"bot-field"} />
        <input type="hidden" name={"form-name"} value={"contact"} />
        <label htmlFor="name">Name *</label>
        <input type="text" name="name" required />
        <label htmlFor="email">Email *</label>
        <input type="email" name="email" required />
        <label htmlFor="nachricht">Nachricht *</label>
        <textarea type="text" name="nachricht" required />

        <SubmitButton type={"submit"}>Senden!</SubmitButton>
      </ContactForm>
    </div>
  )
}

const ContactForm = styled.form`
  /* max-width: 600px; */
  font-family: "Abhaya Libre", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 1px;
  label {
    font-size: 25px;
    min-width: 350px;
    margin-top: 25px;
    margin-bottom: 5px;
  }
  input {
    border: 3px solid #d9d9d9;
    min-width: 350px;
  }
  textarea {
    border: 3px solid #d9d9d9;
    min-width: 350px;
    min-height: 100px;
    @media (max-width: 700px) {
      min-width: 250px;
    }
  }
`

const SubmitButton = styled.button`
  margin: 30px 0;
  font-family: "Dosis", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  padding: 10px 35px;
  transition: all 0.3s ease-in-out;
  background-color: #d59d82;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`

export default MyForm
