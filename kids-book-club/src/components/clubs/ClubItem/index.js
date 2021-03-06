import './styles.css';
import Card from '../../ui/card'

const ClubItem = (props) => {
    return (
        <li className="item">
            <Card>
            <div className="image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <h2>{props.name}</h2>
                <p>{props.when}</p>
                <address>{props.where}</address>
                <p>{props.details}</p>
            </div>
            <div className="actions">
                <button>Add To Favorites</button>
            </div>
            </Card>
        </li>
        )
    }
    
    export default ClubItem;