import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HomePage from './screens/Home/home';

function Index() {
  const router = useRouter();
  const [message, setMessage] = useState('Loading');

  useEffect(() => {
    fetch('http://localhost:6969/api/test-connection')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setMessage('Failed to fetch data');
      });
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default Index;
