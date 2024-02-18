import React from 'react';

type FAQAnswerProps = {
  answer: string;
};

const FAQAnswer: React.FC<FAQAnswerProps> = ({ answer }) => {
  return <p>{answer}</p>;
};

export default FAQAnswer;
