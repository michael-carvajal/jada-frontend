import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const resources = [
  {
    title: "Autism Speaks",
    url: "https://www.autismspeaks.org",
    description: "An organization dedicated to promoting solutions for individuals with autism and their families through advocacy and support."
  },
  {
    title: "Child Mind Institute",
    url: "https://childmind.org",
    description: "An independent, national nonprofit dedicated to transforming the lives of children and families struggling with mental health and learning disorders."
  },
  {
    title: "Understood",
    url: "https://www.understood.org",
    description: "Resources for people with learning and attention issues that empower them to understand their challenges and thrive."
  },
  {
    title: "CDC's Parent Information",
    url: "https://www.cdc.gov/parents",
    description: "The Centers for Disease Control and Prevention provides parents with credible, reliable health information."
  },
  {
    title: "Parenting Special Needs Magazine",
    url: "https://parentingspecialneeds.org",
    description: "An online magazine that provides practical tips, shares life’s lessons, tackles the challenges and celebrates the joys of parenting children with special needs."
  }
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-8">Resources for Parents</h1>
        <ul>
          {resources.map((resource, index) => (
            <li key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}       
                </a>
              </h2>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
                {resource.url} <FaExternalLinkAlt className="inline-block ml-1 mb-1" />
              </a>
              <p className="mt-2">{resource.description}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}