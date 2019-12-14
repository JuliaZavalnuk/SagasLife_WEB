import React from 'react'
import Head from 'next/head'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/Login';

import Notifications from '../components/Notifications/Notifications';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* <BrowserRouter>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/userProfile" component={ UserProfile } />
    </BrowserRouter> */}

    <Notifications />
    <ProgressBar />
    <Login/>
  </div>
)

export default Home
