import React from 'react';
import Head from 'next/head';
import UserProfile from '../components/UserProfile/UserProfile';

//import '../styles/notifications.css';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* {login Vlad} */}
    <UserProfile />
  </div>
)

export default Home
