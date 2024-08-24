import emailjs from 'emailjs-com';
import React from 'react';
import { ServiceID, TemplateID, PublicKey } from '../../data';

const sendEmail = async (name, email, query) => {
  const templateParams = {
    name,
    email,
    query
  };

  try {

    const response = await emailjs.send(ServiceID, TemplateID, templateParams, PublicKey);
    console.log('SUCCESS!', response.status, response.text);
    return true;
  } catch (err) {
    console.error('FAILED...', err);
    return false;
  }
};

export default sendEmail;
