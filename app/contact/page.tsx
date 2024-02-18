import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Contact Jada</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;