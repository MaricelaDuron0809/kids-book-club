import ClubItem from '../components/clubs/ClubItem/index.js';
import ClubList from '../components/clubs/ClubList/index.js';


const DUMMY_DATA = [
    {
        id: "c1",
        name: "Cosmos",
        image: "https://images-na.ssl-images-amazon.com/images/I/71+TrVeM+tL.jpg",
        when: "April 17",
        where: "Galaxy",
        details:"rawr"
    },
    {
        id: "c2",
        name: "Shrek Lovers",
        image: "https://images-na.ssl-images-amazon.com/images/I/A1nQGC9cRqL.jpg",
        when: "April 17",
        where: "Far Far Away",
        details:"rawr"
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