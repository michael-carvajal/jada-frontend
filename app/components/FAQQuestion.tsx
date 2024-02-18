import React from 'react';

type FAQQuestionProps = {
  question: string;
};


const FAQQuestion: React.FC<FAQQuestionProps> = ({ question }) => {
  return <h2 className="text-xl font-semibold mb-2">{question}</h2>;
};

export default FAQQuestion;
