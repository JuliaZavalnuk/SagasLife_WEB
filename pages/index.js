
import React from 'react';

import Login from '../components/Login';

import Notifications from '../components/Notifications/Notifications';
import ProgressBar from '../components/ProgressBar/ProgressBar';

import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <Login />
    <Notifications/>
    <ProgressBar />
  </Layout>
)

export default Home


// import { useRouter } from 'next/router'

// export default function ActiveLink({ children, href }) {
//   const router = useRouter()
//   const style = {
//     marginRight: 10,
//     color: router.pathname === href ? 'red' : 'black',
//   }

//   const handleClick = e => {
//     e.preventDefault()
//     router.push(href)
//   }

//   return (
//     <a href={href} onClick={handleClick} style={style}>
//       {children}
//     </a>
//   )
// }
