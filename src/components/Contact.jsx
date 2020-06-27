import React from "react"
import styled from "@emotion/styled"
import Button from "components/_ui/Button"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

const ContactBox = styled.div`
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`

const EmailInput = styled.input`
  padding: 0.75rem 0.5rem;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: #e2e8f0;
  border-style: solid;
  line-height: 1.25;
  margin: 0.25rem 0;
  font-family: "Inter", sans-serif;

  ::placeholder {
    font-family: inherit;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    margin: 1rem 0;
    font-size: 16px;
    width: 48%;

    ::placeholder {
      font-size: 16px;
    }
  }
`
const NameInput = styled.input`
  padding: 0.75rem 0.5rem;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: #e2e8f0;
  border-style: solid;
  line-height: 1.25;
  margin: 0.25rem 0;
  font-family: "Inter", sans-serif;

  ::placeholder {
    font-family: inherit;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    margin: 1rem 0;
    font-size: 16px;
    width: 48%;

    ::placeholder {
      font-size: 16px;
    }
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem 0.5rem;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: #e2e8f0;
  border-style: solid;
  line-height: 1.25;
  margin: 0.25rem 0;
  font-family: "Inter", sans-serif;

  ::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    margin: 1rem 0;

    ::placeholder {
      font-size: 16px;
    }
  }
`

const EmailAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ContactBoxHeader = styled.p`
  font-size: 1.75rem;
  text-align: center;
  margin: 0;
`

const ContactForm = () => {
  return (
    <ContactBox>
      <FormContainer
        action="https://getform.io/f/dea5aab3-4e5f-413f-8aad-9c217a10bea4"
        method="POST"
      >
        <EmailAndNameContainer>
          <NameInput type="text" name="name" placeholder="Name" />
          <EmailInput type="email" name="email" placeholder="Email" />
        </EmailAndNameContainer>

        <TextArea type="text" name="message" rows="5" placeholder="Message" />
        <Button style={{ margin: "1rem 0" }} type="submit">
          Send Message
        </Button>
      </FormContainer>
    </ContactBox>
  )
}

export default ContactForm
