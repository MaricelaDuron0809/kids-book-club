import ClubItem from '../ClubItem/index'
import './styles.css';


const ClubList = (props) => {
    return (
        <ul className="list">
            {props.clubs.map(club => 
            <ClubItem 
            key={club.id}
            id={club.id}
            image={club.image}
            name={club.name}
            when={club.when}
            where={club.where}
            details={club.details}
            />)}

        </ul>
        )
    }
    
    export default ClubList;