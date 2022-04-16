import React from 'react'
import "./NavCss/FooterAbout.css"
import 'font-awesome/css/font-awesome.min.css'
import { useNavigate } from 'react-router-dom'


export default function FooterAbout() {

    const about1 = useNavigate()
    return (
        <div className='bigB'>
            <footer className="footer">
                <div className="containerF">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="/about" onClick={() => about1(`/about`)}>about us</a></li>
                                <li><a href="/">our services</a></li>
                                <li><a href="/">privacy policy</a></li>
                                <li><a href="/">affiliate program</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">shipping</a></li>
                                <li><a href="/">returns</a></li>
                                <li><a href="/">order status</a></li>
                                <li><a href="/">payment options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="/">Plants</a></li>
                                <li><a href="/">Saplings</a></li>
                                <li><a href="/">Tools</a></li>
                                <li><a href="/">Gardening Plants</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="/"><i className="fa fa-facebook"></i></a>
                                <a href="/"><i className="fa fa-twitter"></i></a>
                                <a href="/"><i className="fa fa-instagram"></i></a>
                                <a href="/"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
