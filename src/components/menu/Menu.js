import './menu.scss';

const Menu = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"menu " +(menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#skill">Skills</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#form">Contact</a>
                </li>
            </ul>
        </div>

    );
}

export default Menu;