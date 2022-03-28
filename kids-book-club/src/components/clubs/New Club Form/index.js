import './styles.css';
import Card from '../../ui/card';

const NewClubForm = () => {
    return (
            <Card>
                <form className="form">
                    <div className="control">
                        <label htmlFor="name">Club Name</label> 
                        <input type="text" required id="name" />
                    </div>
                    <div className="control">
                        <label htmlFor="image">Book Image</label> 
                        <input type="url" required id="image" />
                    </div>
                    <div className="control">
                        <label htmlFor="when">When</label> 
                        <input type="text" required id="when" />
                    </div>
                    <div className="control">
                        <label htmlFor="where">Where</label> 
                        <input type="text" required id="where" />
                    </div>
                    <div className="control">
                        <label htmlFor="details">Details</label> 
                        <textarea id="details" required rows='7'></textarea>
                        <div className="actions">
                            <button>Add Book Club</button>
                        </div>
                    </div>
                </form>
            </Card>
            
      
        )
    }
    
    export default NewClubForm;