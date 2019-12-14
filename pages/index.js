import React from 'react'
import Head from 'next/head'
import Login from '../components/Login'

//import '../styles/notifications.css';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {<Login/>}
    {/* {User profile Jenya} */}
  </div>
)

export default Home
