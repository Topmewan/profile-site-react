import './Intro.css';
import Me from '../../img/me.png';

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className='i-intro'>Hi, My name is</h1>
                    <h2 className='i-name'>Denis</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Engineer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a web developer, I study new technologies with interest and enjoy life. I am constantly putting my knowledge into practice and improving my skills. My main guideline is the result.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-image"/>
            </div>
        </div>
    );


}

export default Intro;