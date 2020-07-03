import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

class NotFoundPage extends React.Component {
  componentDidMount(){
    document.title = "Page Not Found - Dibo"
  }

  render() {
    return (
      <div id="NotFoundPage">
        <main>
          <div id="navbarHolder"><Navbar/></div>
          <div className="notFoundBox">
            <p class="notfound">404</p>
            <p>Page was not found! Go back to the front page by clicking the button below.</p>
            <p class="backButton"><a href="/">Back to the<br></br>Front Page</a></p>
          </div>
        </main>
        <div id="footerHolder"><Footer/></div>
      </div>
    );
  }
}

export default NotFoundPage;
