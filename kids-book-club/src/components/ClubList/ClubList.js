
import ClubItem from './ClubItem/ClubItem';
import './styles.css';


const ClubList = (props) => {
    return (
        <ul className="list">
            {props.clubs.map(club => 
            <ClubItem 
            key={club.id}
            id={club.is}
            image={club.image}
            name={club.name}
            location={club.location}
            description={club.description}
            />)}

        </ul>
        )
    }
    
    export default ClubList;