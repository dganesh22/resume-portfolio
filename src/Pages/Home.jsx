import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home(props) {
   const [txt,setTxt] = useState('')

    const handler = () => {
        let arr = ["FullStack Developer", "FrontEnd Developer", "MERN Developer"]
       setTxt(arr[Math.round(Math.random() * 2)])
    }
 

    useEffect(() => {
        setInterval(handler,5000)
        // clearInterval(function(){
        //     handler()
        // },1000)
    },[])

    return (
        <div className="container">
            <div className="background">
                <div className="name">
                    <h1>D.Ganesh</h1>
                    <h3>I'm a <span className="desg"> { txt } </span> </h3>
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
                <div className="user-image"></div>
            </div>
        </div>
    )
}

