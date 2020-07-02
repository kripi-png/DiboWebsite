import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import messages from '../helpMessages.json'

const CommandsPage = () => {
  console.log(messages.messages);
  return (
    <div id="CommandsPage">
    <div id="navbarHolder"><Navbar/></div>
    <div id="footerHolder"><Footer/></div>
    </div>
  );
}

export default CommandsPage;
