import MainNav from "../Nav"
import './styles.css'


const Layout = (props) => {
    return <div>
        <MainNav />
        <main className="main">
        
            {props.children}
        </main>
    </div>
}

export default Layout;