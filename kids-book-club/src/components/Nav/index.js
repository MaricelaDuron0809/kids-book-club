import { Link } from 'react-router-dom';
import './styles.css';
import background from '../../images/background.png'

const MainNav = () => {
    return (
        <header className="header"
        style={{ backgroundImage: `url(${background})` }}
        >
            <div className="logo">Kids Book Club</div>
            <nav>
                <ul>
                    <li><Link to="/">All Book Clubs</Link></li>
                    <li><Link to="/new-book">Add New Book Club</Link></li>
                    <li><Link to="/favorites">My Favorites</Link></li>
                </ul>
            </nav>

        </header>
        )
    }
    
    export default MainNav;