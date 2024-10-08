import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact(props) {
    return (
        <div className="container">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>

            <div className="contact-container">
                <div className="left">
                    <div className="info">
                        <h3>Address</h3>
                    </div>
                    <ul className="list">
                        <li>
                            <strong>Email</strong>
                            <span>test@gmail.com</span>
                        </li>
                        <li>
                            <strong>Mobile</strong>
                            <span>9988665544</span>
                        </li>
                        <li>
                            <strong>Address</strong>
                            <address>
                                #12, <br />
                                2nd cross, <br />
                                12th main, <br />
                                Rajaji nagar, <br />
                                Bengaluru - 560010
                            </address>
                        </li>
                    </ul>
                    <div className="info">
                        <h3>Social Media Links</h3>
                    </div>
                    <div className="icons">
                        <Link to={`https://github.com/dganesh22`} className="link" target='_blank'>
                            <FaGithubSquare/>
                        </Link>

                        <Link to={`https://facebook.com`} className="link" target='_blank'>             
                             <FaFacebook/>
                        </Link>

                        <Link to={`https://twitter.com`} className="link" target='_blank'>
                            <FaXTwitter/>
                        </Link>
                        
                        <Link to={`https://linkedin.com`} className="link" target='_blank'>
                            <FaLinkedin/>
                        </Link>
                    </div>
                </div>

                <div className="right">
                    <form autoComplete="off">
                       <fieldset>
                                <legend className="form-title">Contact Me</legend>
                                <div className="input-item">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className="form-input" required />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email"  className="form-input" id="email" required />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="msg">Message</label>
                                    <textarea name="msg" id="msg"  className="form-input" cols={30} rows={6} required></textarea>
                                </div>
                                <div className="input-item">
                                    <input type="submit" value="Send" className="btn success" />
                                </div>
                       </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

