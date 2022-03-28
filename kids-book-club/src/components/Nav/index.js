import { Link } from 'react-router-dom';
import './styles.css';


const MainNav = () => {
    return (
        <header className="header">
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