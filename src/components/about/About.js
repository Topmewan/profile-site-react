import './About.css';

function About() {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card bg">
                </div>
                <div className="about-card">
                    <img
                        src="https://images.pexels.com/photos/4841641/pexels-photo-4841641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        className="about-img"/>


                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    In my free time from writing code, I go in for sports. And in the evening I like to watch a good movie or TV series over a cup of tea.
                </p>
            </div>
        </div>
    );
}

export default About;
