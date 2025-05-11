import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative">
      <div className="section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Feel free to reach out for collaboration opportunities, project inquiries,
            or just to say hello. I'm always open to discussing new projects and ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-dark-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-dark-700">
              <h3 className="text-2xl font-poppins font-semibold mb-6 neon-text-secondary">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-secondary-500/10 text-secondary-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:haileasaye51@gmail.com" 
                      className="text-gray-300 hover:text-secondary-400 transition-colors duration-300"
                    >
                      haileasaye51@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary-500/10 text-primary-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Let's Connect</h4>
                    <div className="flex space-x-3 mt-2">
                      <a
                        href="https://github.com/ispastro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-700 rounded-full hover:bg-dark-600 transition-colors duration-300"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com/in/haile-asaye21" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-dark-700 rounded-full hover:bg-dark-600 transition-colors duration-300"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-dark-900 rounded-lg border border-dark-700">
                <p className="text-gray-400 italic">
                  "I'm always looking for new challenges and opportunities to work on exciting projects."
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-dark-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-dark-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-poppins font-semibold mb-6 neon-text-primary">
                Send Me a Message
              </h3>
              
              {formState.isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <p className="text-green-300 font-medium">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <User size={18} />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="block w-full pl-10 pr-3 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Mail size={18} />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="block w-full pl-10 pr-3 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 text-gray-500">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Your message here..."
                        className="block w-full pl-10 pr-3 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-transparent transition-colors duration-300 resize-none"
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full"
                    icon={<Send size={18} />}
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;