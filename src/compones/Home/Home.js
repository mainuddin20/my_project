// src/pages/Home.js

import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {motion} from 'framer-motion'; // Corrected import
import {Typewriter} from 'react-simple-typewriter';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub} from "react-icons/fa"; // Combined imports for cleaner code
import {SiFiverr} from "react-icons/si";
import mypic from '../../assets/images/mainu.jpg';
function Home() {
    return (

        <Fragment >
            <Container>
                <Row  className="topp">

                    <div className=" home" id="home">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <motion.h3 className="slideTop" initial={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    // Start 100px above
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    // Slide into position
                                    transition={{
                                        duration: 2
                                    }}
                                    // Duration of the animation
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '20px',
                                        fontWeight: 700
                                    }}
                                    // Inline font styling
                                >
                                    Hello, It's Me
                                </motion.h3>

                                {/* Name Sliding from the Left */}
                                <motion.h1 className="slideRight" initial={{
                                        x: -200,
                                        opacity: 0
                                    }}
                                    // Start 200px to the left
                                    animate={{
                                        x: 0,
                                        opacity: 1
                                    }}
                                    // Slide into position
                                    transition={{
                                        duration: 2
                                    }}
                                    // Duration of the animation
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '45px',
                                        fontWeight: 900
                                    }}
                                    // Inline font styling
                                >
                                    MAI<span
                                        style={{
                                            color: '#0ef',
                                            fontSize: '50px',
                                            fontWeight: 900
                                        }}>NUD</span>DIN <span
                                                                    style={{
                                            color: '#0ef',
                                            fontSize: '50px',
                                            fontWeight: 900
                                        }}></span>
                                </motion.h1>

                                {/* Text Sliding from the Top */}
                                <motion.h3 className="slideTop" initial={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    // Start 100px above
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    // Slide into position
                                    transition={{
                                        duration: 2
                                    }}
                                    // Duration of the animation
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '30px',
                                        fontWeight: 800
                                    }}>
                                    And I'm a{' '}
                                    <span
                                        style={{
                                            color: '#0ef',
                                            fontSize: '50px'
                                        }}>
                                        {/* Styling the typewriter text */}
                                        <Typewriter words={['Eat', 'Sleep', 'Code', 'Repeat!']} loop={5}
                                            // The animation will repeat 5 times
                                            cursor="cursor"
                                            // Shows the cursor
                                            cursorStyle='|'
                                            // Customize the cursor style
                                            typeSpeed={70}
                                            // Typing speed
                                            deleteSpeed={50}
                                            // Deleting speed
                                            delaySpeed={1000}
                                            // Delay between words
                                        />
                                    </span>
                                </motion.h3>

                                {/* Slide Left Animation */}
                                <motion.div className="slideLeft" initial={{
                                        x: 100,
                                        opacity: 0
                                    }}
                                    // Start 100px to the right
                                    animate={{
                                        x: 0,
                                        opacity: 1
                                    }}
                                    // Animate to its original position
                                    transition={{
                                        duration: 2
                                    }}
                                    // Duration of the animation
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 600
                                    }}>
                                    <p>I'm Mainuddin, a dedicated front-end developer with a deep passion for
                                        creating websites that not only look great but also provide an exceptional user
                                        experience. I understand that your website is more than just an online
                                        presence—it's a reflection of your brand and the gateway to your customers'
                                        trust and loyalty.</p>

                                </motion.div>

                                <div className="home-sci">
                                    <a
                                        href="https://www.facebook.com/itexpertmainud"
                                        style={{
                                            "--i" : 1
                                        }}><FaFacebook/></a>
                                    <a
                                        href="#"
                                        style={{
                                            "--i" : 2
                                        }}><FaTwitter/></a>
                                    <a
                                        href="#"
                                        style={{
                                            "--i" : 3
                                        }}><FaInstagram/></a>
                                    <a
                                        href="#"
                                        style={{
                                            "--i" : 4
                                        }}><FaYoutube/></a>
                                    <a
                                        href="#"
                                        style={{
                                            "--i" : 5
                                        }}><FaGithub/></a>
                                    <a
                                        href="#"
                                        style={{
                                            "--i" : 6
                                        }}><SiFiverr/></a>
                                </div>

                                {/* Button */}

                                <motion.div
                                    style={{
                                        display: 'flex',
                                        gap: '20px'
                                    }}>
                                    {/* Downlode CV Button sliding to the right */}
                                    <motion.a href="#" className="btn-box" initial={{
                                            x: -200,
                                            opacity: 0
                                        }}
                                        // Start 200px to the left
                                        animate={{
                                            x: 0,
                                            opacity: 1
                                        }}
                                        // Slide into position
                                        transition={{
                                            duration: 3
                                        }}
                                        // Duration of the animation
                                        style={{
                                            display: 'inline-block'
                                        }}
                                        // Ensure inline block layout
                                    >
                                        Download CV
                                    </motion.a>

                                    {/* Contact me Button sliding to the left */}
                                    <motion.a href="#" className="btn-box" initial={{
                                            x: 200,
                                            opacity: 0
                                        }}
                                        // Start 200px to the right
                                        animate={{
                                            x: 0,
                                            opacity: 1
                                        }}
                                        // Slide into position
                                        transition={{
                                            duration: 2
                                        }}
                                        // Duration of the animation
                                        style={{
                                            display: 'inline-block'
                                        }}
                                        // Ensure inline block layout
                                    >
                                        Contact me
                                    </motion.a>
                                </motion.div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="right">
                                    <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
                                        <img src={mypic} alt="hero"/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Row>
            </Container>
        </Fragment>

    );
}

export default Home;
