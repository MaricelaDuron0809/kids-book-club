import './styles.css';

const ClubItem = (props) => {
    return (
        <li className="item">
            <div className="image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <h2>{props.name}</h2>
                <address>{props.location}</address>
                <p>{props.description}</p>
            </div>
            <div className="actions">
                <button>Add To Favorites</button>
            </div>
        </li>
        )
    }
    
    export default ClubItem;