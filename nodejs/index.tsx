import React, { useState } from 'react';
import { Code, Mail, Folder, BookOpen, Home, Github, Linkedin, Twitter } from 'lucide-react';

const MainLayout = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 h-screen w-16 bg-gray-800 flex flex-col items-center py-8 shadow-lg">
        {navigationItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            className={`p-3 mb-4 rounded-lg hover:bg-gray-700 transition-colors ${
              currentPage === id ? 'bg-blue-600' : ''
            }`}
            title={label}
          >
            <Icon size={24} />
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="ml-16 p-8">
        {renderPage()}
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
      <div className="flex items-center space-x-6">
        <img
          src="/api/placeholder/150/150"
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-blue-600"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <h2 className="text-xl text-blue-400 font-mono">Senior Software Engineer</h2>
          <div className="flex space-x-4 mt-4">
            <Github className="hover:text-blue-400 cursor-pointer" />
            <Linkedin className="hover:text-blue-400 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-8 font-mono">
        <p className="text-gray-300 leading-relaxed">
          {">"} const aboutMe = {"{"}
          <br />
          &nbsp;&nbsp;passion: "Building elegant solutions to complex problems",
          <br />
          &nbsp;&nbsp;skills: ["React", "Node.js", "Python", "AWS"],
          <br />
          &nbsp;&nbsp;experience: "8+ years in full-stack development"
          <br />
          {"};"}
        </p>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {[1, 2, 3, 4].map((project) => (
      <div key={project} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <Code className="text-blue-400 mr-2" />
          <h3 className="text-xl font-bold">Project {project}</h3>
        </div>
        <p className="text-gray-300 mb-4">
          A brief description of project {project} and its key features.
        </p>
        <div className="flex space-x-2">
          <span className="px-2 py-1 bg-gray-700 rounded text-sm">React</span>
          <span className="px-2 py-1 bg-gray-700 rounded text-sm">TypeScript</span>
          <span className="px-2 py-1 bg-gray-700 rounded text-sm">Node.js</span>
        </div>
      </div>
    ))}
  </div>
);

const BlogPage = () => (
  <div className="max-w-4xl mx-auto space-y-6">
    {[1, 2, 3].map((post) => (
      <div key={post} className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-2 text-blue-400">
          Building Scalable Applications with React
        </h3>
        <p className="text-gray-400 mb-4">Posted on January {post}, 2024</p>
        <p className="text-gray-300">
          An in-depth look at best practices for building large-scale React applications...
        </p>
        <button className="mt-4 text-blue-400 hover:text-blue-300">Read more →</button>
      </div>
    ))}
  </div>
);

const ContactPage = () => (
  <div className="max-w-2xl mx-auto">
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default MainLayout;