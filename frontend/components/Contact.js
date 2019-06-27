import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { Heading } from './Landing';

class Contact extends Component {
  render() {
    return (
      <div>
        <Heading>Melde dich gerne!</Heading>
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
