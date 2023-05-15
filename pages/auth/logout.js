import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Logout () {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      const session = sessionStorage.getItem('user');
      if (session) {
        try {
          const response = await axios.get('http://localhost:3000/merchant/auth/signout');
          console.log(response.data);
          sessionStorage.removeItem('user');
          router.push('/auth/login');
        } catch (error) {
          console.error(error);
        }
      } else {
        router.push('/auth/login');
      }
    };

    logout();

    // Return a cleanup function or undefined
    return () => {
      // Cleanup logic (if needed)
    };
  }, []);

  return null;
}
