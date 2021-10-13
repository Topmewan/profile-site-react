import './menu.scss';

const Menu = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"menu " +(menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#">Home</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#">Home</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#">Home</a>
                </li>


            </ul>
        </div>

    );
}

export default Menu;