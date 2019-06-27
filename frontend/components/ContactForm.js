import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  margin-bottom: 10rem;
  @media (max-width: 700px) {
    margin: 2rem 2rem;
  }
  label {
    font-size: 2rem;
  }
  input,
  textarea,
  select {
    display: block;
    width: 100%;
    margin: 1.5rem 0;
    font-size: 2rem;
    line-height: 1.5;
    border: 2px solid ${props => props.theme.secondary};
    border-radius: 3px;
  }
  button {
    padding: 1.5rem 2rem;
    margin: 1.5rem 0;
    float: right;
    background: ${props => props.theme.primary};
    color: #fff;
    font-size: 1.4rem;
    font-weight: 300;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    opacity: 0.9;
    :hover {
      opacity: 1;
    }
  }
`;

class ContactForm extends Component {
  render() {
    return (
      <Form action="POST">
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          E-Mail
          <input type="email" name="email" />
        </label>
        <label htmlFor="reason">
          Grund für deine Anfrage
          <select name="reason">
            <option value="general">Allgemein</option>
            <option value="shooting">Shooting</option>
            <option value="work">Zusammenarbeit</option>
          </select>
        </label>
        <label htmlFor="message">
          Nachricht
          <textarea name="message" rows="5"></textarea>
        </label>
        <button type="submit">Absenden</button>
        <br />
      </Form>
    );
  }
}

export default ContactForm;
