import ClubItem from '../components/ClubItem/index.js';
import ClubList from '../components/ClubList/index.js';


const DUMMY_DATA = [
    {
        id: "c1",
        name: "Cosmos",
        image: "https://images-na.ssl-images-amazon.com/images/I/71+TrVeM+tL.jpg",
        location: "Galaxy",
        description:"rawr"
    },
    {
        id: "c2",
        name: "Shrek Lovers",
        image: "https://images-na.ssl-images-amazon.com/images/I/A1nQGC9cRqL.jpg",
        location: "Far Far Away",
        description:"rawr"
    }


];





const AllBookClubsPage = () => {
    return (
        <section>
            <h1>All Book Clubs</h1>
           <ClubList clubs={DUMMY_DATA} />
        </section>
        )
    }
    
    export default AllBookClubsPage;