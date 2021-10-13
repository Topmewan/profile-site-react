import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Me from '../../img/me.png';
import Down from '../../img/down.png'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Web Developer", "Engineer", "Coffee Lovae"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={Me} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Denis</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src={Down} alt="" />
                </a>
            </div>
        </div>
    );
}