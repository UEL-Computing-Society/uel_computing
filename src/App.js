import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
      <div className="logo-container">
        {/* <img src={logo} alt="Website Logo" className="logo-image" /> */}
        <h1 className="logo">UEL COMPUTING SOCIETY</h1>
      </div>
      {/* <ul className="nav-links">
        <li className="nav-item">
            Home
        </li> */}
        {/* <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li> */}
      {/* </ul> */}
      {/* <button className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button> */}
    </nav>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Metus magna vel. Sodales integer lorem turpis metus iaculis.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Events</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature One</h3>
            <p>Integer nostra gravida. Mattis turpis purus ullamcorper, ultrices facilisis. Id.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Two</h3>
            <p>Urna at metus habitant montes vivamus lacinia magnis tincidunt facilisis.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Three</h3>
            <p>Per natoque mauris, dis aptent luctus, rutrum. Dui ultricies habitasse.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"This website changed my life! Highly recommend it to everyone!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial-item">
            <p>"Amazing user experience and fantastic features!"</p>
            <p>- Jane Smith</p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="contact" >
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="contact-button" type="submit">Send Message</button>
        </form>
      </section> */}
    </div>
);
};

export default App;
