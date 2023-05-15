import Head from 'next/head'
import { FaAddressBook, FaBars, FaHome, FaMoneyBill, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa'
import LoggedIn from '../component/LoggedIn'
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [user, setUser] = useState(null);
  const [imagePath, setimagePath] = useState(null);

  const handleImageError = () => {
    setImageError(true);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };

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
    }
  }, [user]);
  //console.log(user);
  return (
    <>
    <LoggedIn/>
      {/* <header>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/merchant/dashboard'>Dashboard</a></li>
            <li><a href='/merchant/payment'>Payment</a></li>
            <li><a href='/merchant/cashout'>Cashout</a></li>
            <li><a href='/merchant/sendmoney'>Send Money</a></li>
            <li><a href='/auth/bonus'>Bonus/Commission</a></li>
            <li><a href='/auth/refferel'>Refferel</a></li>
            <li><a href='/auth/profile'>Profile Info</a></li>
            <li><a href='/auth/offer'>Offer Page</a></li>
            <li><a href='/auth/faq'>FAQ</a></li>
            <li><a href='/auth/help-token'>Help Token</a></li>
          </ul>
        </nav>
      </header> */}
        <nav className="text-white fixed top-0 left-0 w-full z-10 pl-2 pr-2"> 
          <div className="flex bg-green-500 items-center rounded-xl justify-between shadow-xl px-4 py-2">
            <div className="flex items-center">
            {!imageError ? (
             <a href='/merchant/dashboard'>
              <img
                src={imagePath}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-white"
                onError={handleImageError}
              />
             </a> 
            ) : (
              <FaUser className="w-8 h-8 rounded-full  border-2 border-white p-1" />
            )}

              <span className="ml-2 bg-white text-green-500 rounded-2xl p-1 pl-2 pr-2">BDT {user && user.balance}</span>
            </div>
            <button className="text-green-500 p-2 rounded-full bg-white" onClick={toggleSidebar}>
              <FaBars />
            </button>
          </div>
        </nav>

      {sidebarOpen && (<>
        <div className="bg-gray-500 w-64 h-full fixed top-0 right-0 mt-14 mb-40 z-20 rounded-xl">
          {/* Sidebar content */}
          <ul className="">
            <li>
              <a href="#" className="block py-2 px-4 bg-white text-green-500 m-2 rounded-xl">Link 1</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 bg-white text-green-500 m-2 rounded-xl">Link 2</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 bg-white text-green-500 m-2 rounded-xl">Link 3</a>
            </li>
          </ul>
        </div>
        </>)}


        <main className='mt-20 mb-20'>{children}</main>
        <nav className="fixed bottom-0 left-0 w-full pl-2 pr-2">
          <div className="flex justify-around py-2 bg-green-500 shadow-lg rounded-xl ">
            <a href="/" className="flex flex-col items-center p-2 rounded-full bg-white text-green-500">
              <FaHome className="text-xl" />
            </a>            
            <a href="/contact" className="flex flex-col items-center p-2 rounded-full bg-white text-green-500">
              <FaAddressBook className="text-xl" />
            </a>
            <a href="/merchant/profile" className="flex flex-col items-center p-2 rounded-full bg-white text-green-500">
              <FaUser className="text-xl" />
            </a>
            <a href="/auth/logout" className="flex flex-col items-center p-2 rounded-full bg-white text-green-500">
              <FaSignOutAlt className="text-xl" />
            </a>
          </div>
        </nav>
    </>
  )
}
