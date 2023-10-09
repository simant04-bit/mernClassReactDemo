import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header>
        <nav>
            <div className="container">
                <h1><a href="index.html">Digital Pathshala</a></h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Navbar