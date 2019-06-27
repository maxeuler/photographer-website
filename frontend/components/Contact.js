import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import { Heading } from './Landing';

const SuccessMessage = styled.p`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-size: 3rem;
`;

class Contact extends Component {
  state = {
    isSubmitted: false,
  };

  submit = ({ name, email, reason, message }) => {
    this.setState({ isSubmitted: true });
    console.log(name, email, reason, message);
  };

  render() {
    return (
      <div>
        <Heading>Melde Dich gerne!</Heading>
        {this.state.isSubmitted ? (
          <SuccessMessage>Danke! Ich antworte Dir in Kürze 🔜</SuccessMessage>
        ) : null}
        <ContactForm submit={this.submit} />}
      </div>
    );
  }
}

export default Contact;
