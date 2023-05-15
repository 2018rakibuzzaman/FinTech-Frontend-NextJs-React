import Layout from '../merchant_components/layout'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Profile() {
    const [user, setUser] = useState(null);
    const [imagePath, setimagePath] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
        {
            const session = JSON.parse(sessionStorage.getItem('user'));
          setUser(session);
                      
        }
     
      }, []);
      
      useEffect(() => {
        if (user) {
          setimagePath('http://localhost:3000/uploads/' + user.profile_image);
          setName(user.name);
          setEmail(user.email);
          setPhone(user.phone);
        }
      }, [user]);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSaveChanges = () => {
      // Add your logic to save the changes
      // This is just a placeholder function
      console.log('Changes saved!');
    };
  
    return (
      <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center">
          <img
            src={imagePath} // Replace with the actual image source
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-4"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-4"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-4"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-4"
          />
        </div>
        <button
          onClick={handleSaveChanges}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Save Changes
        </button>
      </div>
    )
}

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

