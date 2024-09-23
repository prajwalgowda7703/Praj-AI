import { Link } from 'react-router-dom';
import './homepage.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Homepage = () => {

    const [typingStatus,setTypingStatus] = useState("human1");

    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className='orbital'/>
            <div className="left">
                <h1>PRAJ AI</h1>
                <h2>Fuel for your Creation and Production.</h2>
                <h3>Developed and Managed by Prajwal.</h3>
                <Link to="/dashboard">Let's Start</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="" className='bot' />
                    <div className="chat">
                    <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "/bot.png"} alt="" />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Human: What is Praj AI',
                            2000, ()=>{
                                setTypingStatus("bot")
                            },
                            'Bot: Praj AI is the Generative AI',
                            2000, ()=>{
                                setTypingStatus("human2")
                            },
                            'Human: What information can I get from Praj AI',
                            2000, ()=>{
                                setTypingStatus("bot")
                            },
                            'Bot: You will get information any topic',
                            2000, ()=>{
                                setTypingStatus("human1")
                            },
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}
                    />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                    <Link to="/">Terms of Usage</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
}

export default Homepage;