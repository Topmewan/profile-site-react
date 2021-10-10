import './Intro.css';

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className='i-intro'>Hi, My name is</h1>
                    <h2 className='i-name'>Denis</h2>
                    <div className="i-title">
                        <div className="-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Engineer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    );


}

export default Intro;