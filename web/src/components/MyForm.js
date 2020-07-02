import React, { useState } from "react"
import styled from "styled-components"
import CircularProgress from "@material-ui/core/CircularProgress"
import DoneOutlineIcon from "@material-ui/icons/DoneOutline"

function MyForm() {
  let [data, setData] = useState({ email: "", name: "", message: "" })

  // const handleSubmit = e => {
  //   setLoading(true)
  //   e.preventDefault()
  //   fetch("https://formspree.io/xdodpwda", {
  //     method: "Post",
  //     body: JSON.stringify(data),
  //     mode: "no-cors",
  //   }).then(() => {
  //     setLoading(false)
  //     setSuccess(true)
  //     setData({ email: "", name: "", message: "" })
  //   })
  // }
  //
  const handleInput = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <div>
      <ContactForm
        onSubmit={handleSubmit}
        name="contact"
        method={"POST"}
        data-netlify="true"
        data-netlify-honeypot={"bot-field"}
      >
        <input type="hidden" name={"bot-field"} />
        <input type="hidden" name={"form-name"} value={"contact"} />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInput}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleInput}
          value={data.email}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          name="message"
          onChange={handleInput}
          value={data.message}
          required
        />

        <SubmitButton type={"submit"}>Send</SubmitButton>
        {/*<Loading>*/}
        {/*  {isLoading ? (*/}
        {/*    <CircularProgress />*/}
        {/*  ) : isSuccess ? (*/}
        {/*    <DoneOutlineIcon fontSize="large" style={{ color: "green" }} />*/}
        {/*  ) : (*/}
        {/*    "Send"*/}
        {/*  )}*/}
        {/*</Loading>*/}
        {/*</SubmitButton>*/}
      </ContactForm>
    </div>
  )
}

const ContactForm = styled.form`
  /* max-width: 600px; */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: #252525;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin: 5px;
  }
  input {
    margin: 5px;
  }
  textarea {
    margin: 5px;
    min-width: 350px;
    min-height: 100px;
    @media (max-width: 700px) {
      min-width: 250px;
    }
  }
`
const Loading = styled.div``

const SubmitButton = styled.button`
  margin: 10px auto;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 25px;
  padding: 10px;
  border-radius: 2px;
  font-weight: 500;
  min-width: 100px;
  min-height: 62px;
  transition: all 0.3s ease-in-out;
  background-color: white;
  outline: none;
  border: none;

  &:hover {
    background-color: #000000b8;
    color: white;
  }
`

export default MyForm
