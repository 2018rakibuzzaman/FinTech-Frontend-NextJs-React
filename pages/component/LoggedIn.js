import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoggedIn () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('user');
    if (!session) {
      router.push('/auth/login');
    }
  }, []);

  return null;
};

