import React, { useState } from 'react';
import Layout from './component/layout';
import Head from 'next/head';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = {};
    if (name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (message.trim() === '') {
      validationErrors.message = 'Message is required';
    }

    // Display validation errors, if any
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear validation errors
    setErrors({});

    // Proceed with form submission
    // Your submission logic goes here
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <h1 className="text-2xl font-bold mb-4 text-green-500">Contact Us</h1>
            <p className="text-gray-700 mb-6">
              If you have any questions or need assistance, please fill out the form below or reach out to us via email or phone.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full px-3 py-2 border border-gray-400 rounded"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full px-3 py-2 border border-gray-400 rounded"
                  id="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-400 rounded"
                  id="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) =>                  setMessage(e.target.value)}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  Submit
                </button>
              </form>
              <div className="mt-8">
                <p className="text-gray-700">Alternatively, you can reach us directly:</p>
                <p className="text-gray-700">Email: info@justpay.com</p>
                <p className="text-gray-700">Phone: +880 xxxx-xxx-xxx</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  Contact.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    );
  };
  