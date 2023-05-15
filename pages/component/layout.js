import Head from 'next/head'
import React, { useState,useEffect } from 'react';

export default function Layout({ children }) {
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, []);

  return (
    <>
    <header className=' sticky top-0 z-50'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-500">Just </span><span className="self-center text-2xl font-semibold whitespace-nowrap"> Pay</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>              
              <li>
                <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
              
              {user && (
                <>
                  <li>
                    <a href="/merchant/dashboard" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
                  </li>
                  <li>
                    <a href="/auth/logout" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
                  </li>
                </>
              )}
              {!user && (
                <>
                  <li>
                    <a href="/auth/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                  </li>
                  <li>
                    <a href="/auth/signup" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</a>
                  </li>
                </>
              )}


            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="bg-gray-200 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">© 2023 Just Pay all rights reserved.</p>
          <ul className="flex justify-center mt-4 space-x-4">
            <li><a href="/terms-of-service" className="text-gray-700 hover:text-gray-900">Terms of Service</a></li>
            <li><a href="/privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="/cookie-policy" className="text-gray-700 hover:text-gray-900">Cookie Policy</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
