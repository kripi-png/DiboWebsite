import React from 'react'
import fetch from 'node-fetch' 
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const CommandsPage = () => {
  return (
    <div id="CommandsPage">
    <div id="navbarHolder"><Navbar/></div>
    <div id="footerHolder"><Footer/></div>
    </div>
  );
}

export default CommandsPage;
