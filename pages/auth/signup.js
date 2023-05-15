import Layout from '../component/layout'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaLink, FaPhone, FaRegEnvelope, FaUser } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Signup() {
  
  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      router.push('/merchant/dashboard');
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [profile_image, setProfileImage] = useState(''); // Updated: Use null as initial value
  const [refferelId, setRefferelId] = useState('');
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleAlertClose = () => {
    setErrorMessage('');
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    
      // Perform frontend validation
      if (!name.trim()) {
        setErrorMessage('Name is required');
        return;
      }
    
      if (!email.trim()) {
        setErrorMessage('Email is required');
        return;
      }
    
      if (!phone.trim()) {
        setErrorMessage('Phone is required');
        return;
      }
    
      if (!password.trim()) {
        setErrorMessage('Password is required');
        return;
      } else if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long');
        return;
      }
    
      if (password !== confirmpassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
    
      // Reset error message if all validations pass
      setErrorMessage('');

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('password', password);
      formData.append('confirmpassword', confirmpassword);
      formData.append('refferelId', refferelId);

      // Check if a profile image is selected
      if (profile_image) {
        formData.append('profile_image', profile_image);
      }

      const response = await fetch('http://localhost:3000/merchant/auth/signup', {
        
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      var errorMessage = '';
      if (Array.isArray(data.message)) {
        errorMessage = data.message.map((message) => <div key={message}>{message}</div>);
      } else {
        errorMessage = data.message;
      }
    
        if (response.ok) {
            router.push('/auth/login');
        }
        else{
          setErrorMessage(errorMessage);
        }

    }
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center p-10'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          
          <div className='w-3/5 p-5'>
            <div className='text-center font-bold'>
              <span className='text-green-500'>Just </span> Pay
            </div>
            <div>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>Singn Up to Merchant</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>  
              {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative z-0 mb-5" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {errorMessage}.</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleAlertClose}>
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
              </div>
              )}
              <form onSubmit={handleSignup}>
                <div className='flex flex-col items-center'>
                  
                  <div className='bg-gray-100 w-96 p-2 flex items-center mb-3'>
                    <FaUser className='text-gray-400 m-2'/>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-100 outline-none text-sm flex-1"/>  
                  </div>

                  <div className='bg-gray-100 w-96 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-400 m-2'/>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-100 outline-none text-sm flex-1"/>  
                  </div>

                  
                  <div className='bg-gray-100 w-96 p-2 flex items-center mb-3'>
                    <FaPhone className='text-gray-400 m-2'/>
                    <input type="text" name="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-100 outline-none text-sm flex-1"/>  
                  </div>

                  <div className='bg-gray-100 w-96 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-400 m-2'/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-100 outline-none text-sm flex-1"/>  
                  </div>

                  <div className='bg-gray-100 w-96 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-400 m-2'/>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bg-gray-100 outline-none text-sm flex-1"/>  
                  </div>
                  
                  <div className='bg-gray-100 w-96 p-2 flex items-center mb-3'>
                    <input type="file" name="profile_image" onChange={(e) => setProfileImage(e.target.files[0])} className="bg-gray-100 outline-none text-sm flex-1"/>  
                  </div>

                  <div className='bg-gray-100 w-96 p-2 flex items-center mb-3'>
                    <FaLink className='text-gray-400 m-2'/>
                    <input type="text" name="refferelId" placeholder="Refferel Id" value={refferelId} onChange={(e) => setRefferelId(e.target.value)} className="bg-gray-100 outline-none text-sm flex-1"/>  
                  </div>

                  <button type='submit' className='border-2 border-green-500 text-gray-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign Up</button>
                </div>
              </form>
            </div>          
          </div>{/*Signup*/}

          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h1 className='text-3xl font-bold mb-2'>Hello, Merchant!</h1>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <p className='mb-10'>Log in to your account if you already sign up.</p>
            <a href='/auth/login' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Login</a>
          </div>{/*Login*/}

        </div>
      </div>
    </>
  )
}

Signup.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
