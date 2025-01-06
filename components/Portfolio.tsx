import React from 'react';
import { Github, Mail, Link, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Customer Segmentation",
      description: "Performed RFM (recency, frequency, and monetary) analysis on large customer dataset to create segments for targeted marketing.",
      tags: ["Python", "Data Analysis", "Marketing", "RFM"],
      link: "#",
      image: "/images/customersegmentation.jpg"
    },
    {
      title: "Machine Learning for Medical Imaging",
      description: "Developed a deep learning model to assist in the early detection of abnormalities in medical images, achieving 94% accuracy.",
      tags: ["Machine Learning", "Python", "TensorFlow", "Healthcare"],
      link: "#",
      image: "/images/climate_change.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Arthur Turner</h1>
          <p className="text-xl text-gray-600 mb-6">
            Machine Learning Engineer | AWS Certified | Ph.D. Quanitative Social Science
          </p>
          <div className="flex gap-4">
          <a
            href="https://github.com/artturner/machine-learning"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <Github size={16} />
              GitHub
            </Button>
          </a>
            <Button variant="outline" className="flex items-center gap-2">
              <Link size={16} />
              LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail size={16} />
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">
            Experienced researcher with a focus on data analysis and machine learning.
            Multiple AWS certifications.
            
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Machine Learning Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                    <div className="relative w-full h-48">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <a href={project.link} className="text-blue-500 hover:text-blue-600">
                      <ExternalLink size={20} />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;