// import './Intro.css';
import './intro.scss';
import Me from '../../img/me.png';
import down from '../../img/down.png'
import {init} from "ityped";
import {useEffect,useRef} from "react";

const Intro = () => {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ['Engineer', 'Sportsmen' ]
            });

    },[])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={Me} alt=""/>
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Denis</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                </div>
                <a href="">
                    <img src={down} alt=""/>
                </a>


            </div>

        </div>
    );


}

export default Intro;