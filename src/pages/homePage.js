import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {

    const count = useSelector((item) => item.counter.value)
    return ( 
        <>
        <p>Home page</p>
        <h1 >Toatal {count}</h1>

        <br></br>
        <Link to='/shop' className="btn btn-success">Go to shop</Link>
        </>
     );
}

export default HomePage;