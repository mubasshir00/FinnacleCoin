import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div>
                    <ul>
                        <h2>FinnacleCoin</h2>
                        <li><Link>Twitter</Link></li>
                        <li><Link>Instagram</Link></li>
                        <li><Link>Medium</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>Product</h2>
                        <li>Wallet</li>
                        <li>Exchange</li>
                        <li>Explore</li>
                        <li>Learn</li>
                        <li>Price</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>Resources</h2>
                        <li>APIs</li>
                        <li>Status</li>
                        <li>Open Source</li>
                        <li>Research</li>
                        <li>Legal & privay</li>
                        <li>Waller Support</li>
                        <li>Exchange Support</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>Company</h2>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Press Center</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
