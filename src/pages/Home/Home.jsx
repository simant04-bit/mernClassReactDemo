import React from 'react'
import './Home.css'

// home should be made Home(capital). It will create difficulty in auto import
const Home = () => { // Home is functional component not a function as we are returning html components or elements
  return (
    <div>
        <header>
            <nav>
                <div className="container">
                    <h1>My Website</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <section className="hero">
            <div className="container">
                <h2>Welcome to My Website</h2>
                <p>Your one-stop destination for great content.</p>
            </div>
        </section>

        <section className="about">
            <div className="container">
                <h2>About Us</h2>
                <p>We are a passionate team dedicated to creating amazing websites.</p>
            </div>
        </section>

        <footer>
            <div className="container">
                &copy; 2023 My Website
            </div>
        </footer>

    </div>
  )
}

export default Home