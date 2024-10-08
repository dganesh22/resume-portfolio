import React from 'react'

export default function About(props) {
    return (
        <div className="container">
             <div className="about-title">
                <h1>About Me</h1>
             </div>

             <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius qui perspiciatis quisquam aliquid dicta aperiam blanditiis necessitatibus atque delectus eos, obcaecati libero, tenetur iste? Ipsa, nobis mollitia. Porro, voluptates?</p>
             </div>

             <div className="content">
                 <div className="user">
                    <img src="male.svg" alt="no user pic" />
                 </div>
                 <div className="info">
                     <div className="info-title">
                        <h4>Personal details</h4>
                     </div>
                     <div className="personal">
                        <ul className="list">
                            <li>
                                <strong>Email</strong>
                                <span>dganesh22@gmail.com</span>
                            </li>
                            <li>
                                <strong>Mobile</strong>
                                <span>9482855864</span>
                            </li>
                            <li>
                                <strong>City</strong>
                                <span>Bengaluru</span>
                            </li>
                        </ul>

                     <ul className="list">
                        <li>
                            <strong>Website</strong>
                            <span>www.dganesh22.com</span>
                        </li>
                        <li>
                            <strong>Degree</strong>
                            <span>Masters</span>
                        </li>
                        <li>
                            <strong>Status</strong>
                            <span>Fresher</span>
                        </li>
                     </ul>

                     </div>
                 </div>
             </div>

             {/* technical details */}
            <div className="info">
                <div className="info-title">
                    <h4>Technogies</h4>
                </div>
                <div className="tech">
                 <ul className="list">
                    <li>
                        <strong>HTML(90%) </strong>
                        <meter id="html" min="0" max="100" value="90"></meter>
                    </li>
                    <li>
                        <strong>Css (85%) </strong>
                        <meter id="css" min="0" max="100" value="85"></meter>
                    </li>
                    <li>
                        <strong>JavaScript (90%) </strong>
                        <meter id="js" min="0" max="100" value="90"></meter>
                    </li>
                    <li>
                        <strong>ReactJS (85%) </strong>
                        <meter id="react" min="0" max="100" value="85"></meter>
                    </li>
                 </ul>
                 <ul className="list">
                    <li>
                        <strong>NodeJS (75%) </strong>
                        <meter id="node" min="0" max="100" value="75"></meter>
                    </li>
                    <li>
                        <strong>ExpressJS (70%) </strong>
                        <meter id="ex" min="0" max="100" value="70"></meter>
                    </li>
                    <li>
                        <strong>MongoDb (80%) </strong>
                        <meter id="mongo" min="0" max="100" value="80"></meter>
                    </li>
                    <li>
                        <strong>MySQL (85%) </strong>
                        <meter id="mysql" min="0" max="100" value="85"></meter>
                    </li>
                 </ul>
             </div>
            </div>
        </div>
    )
}

