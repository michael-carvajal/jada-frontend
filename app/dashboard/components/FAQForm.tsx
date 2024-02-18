
import React, { useState } from 'react';

const FAQForm = ({ onSave, initialFAQ = { question: '', answer: '' } }) => {
  const [faq, setFaq] = useState(initialFAQ);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq({ ...faq, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(faq);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="question" className="block text-lg font-medium text-gray-700">Question</label>
        <input
          type="text"
          name="question"
          id="question"
          value={faq.question}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="answer" className="block text-lg font-medium text-gray-700">Answer</label>
        <textarea
          name="answer"
          id="answer"
          value={faq.answer}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save FAQ
      </button>
    </form>
  );
};

export default FAQForm;
