'use client';
// dashboard/resources/page.tsx
import React, { useState } from 'react';
import ResourceForm from '../components/ResourceForm';

const initialResources = [
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
const DashboardResourcesPage = () => {
  const [resources, setResources] = useState(initialResources);
  const [editingResource, setEditingResource] = useState(null);

  const handleEdit = (resource) => {
    setEditingResource(resource);
  };

  const handleDelete = (resourceId) => {
    setResources(resources.filter(resource => resource.title !== resourceId));
  };

  const handleSave = (newResource) => {
    if (editingResource) {
      setResources(resources.map(resource => resource.title === editingResource.title ? newResource : resource));
    } else {
      setResources([...resources, newResource]);
    }
    setEditingResource(null);
  };

  return (
    <div className="flex h-screen bg-gray-100 p-10">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        {editingResource ? (
          <ResourceForm onSave={handleSave} initialResource={editingResource} />
        ) : (
          <button
            onClick={() => setEditingResource({ title: '', url: '', description: '' })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
          >
            Add New Resource
          </button>
        )}

        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white shadow-md rounded px-4 py-3">
              <h2 className="text-xl font-semibold">{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{resource.url}</a>
              <div className="flex justify-end space-x-2 mt-2">
                <button onClick={() => handleEdit(resource)} className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(resource.title)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default DashboardResourcesPage;