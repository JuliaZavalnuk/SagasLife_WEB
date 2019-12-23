import React, { Component } from 'react';
import '../../styles/User_styles/styledPage.css';
import Link from 'next/link'


class Page extends Component {

    render() {
      return (
        <>
        <div className="page">
<div className="user">
    <div className="foto">image</div>
    <div className="name">name</div>
    <Link href="/settings" passHref>
    <div className="edit"><img src='/static/edit.png'/></div>
    </Link>
    <div className="text">text</div>
    <div className="Timelapses">Timelapses:</div>
    <div className="Shots">Shots:</div>
</div>
</div>
</>
      )
    }
  }
  
  export default Page