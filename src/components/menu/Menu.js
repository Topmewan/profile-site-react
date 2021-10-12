import './menu.scss';

const Menu = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"menu " +(menuOpen && 'active')}>
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#intro">portfolio</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>


            </ul>
        </div>

    );
}

export default Menu;