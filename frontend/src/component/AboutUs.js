import React from 'react';
import { motion } from 'framer-motion';
import './../CSS/aboutus.css'; // Import your CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-container">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="about-content"
            >
                <h2>Welcome to Our Story</h2>
                <p>
                    We are a team of passionate individuals dedicated to providing you
                    with the best experience possible. Our journey started with a simple
                    idea and has grown into something truly special.
                </p>
                <p>
                    Our mission is to create innovative solutions that make your life
                    easier and more enjoyable. We believe in the power of technology to
                    connect people and enhance everyday experiences.
                </p>
                <p>
                    Whether you're a long-time customer or just discovering us, we're
                    thrilled to have you join us on this adventure. Thank you for being a
                    part of our story.
                </p>
            </motion.div>
            <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                src="./../images/first.png"
                alt="Team Photo"
                className="about-image"
            />
        </div>
    );
};

export default AboutUs;
