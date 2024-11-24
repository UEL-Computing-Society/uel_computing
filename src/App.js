import './App.css';

function App() {
  return (
    <div className="landing-page">
    {/* Hero Section */}
    <header className="hero">
      <h1>Welcome to Our Website</h1>
      <p>Your one-stop solution for amazing services.</p>
      <button>Get Started</button>
    </header>

    {/* About Section */}
    <section className="about" id="about">
      <h2>About Us</h2>
      <p>
        We are dedicated to providing top-notch solutions tailored to your
        needs. Explore what we have to offer and discover how we can help you
        succeed.
      </p>
    </section>

    {/* Features Section */}
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Feature One</h3>
          <p>Experience the best performance with our services.</p>
        </div>
        <div className="feature-card">
          <h3>Feature Two</h3>
          <p>Easy to use and implement in your workflow.</p>
        </div>
        <div className="feature-card">
          <h3>Feature Three</h3>
          <p>Reliable support whenever you need it.</p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <p>© 2024 Your Website. All rights reserved.</p>
    </footer>
  </div>
);
};

export default App;
