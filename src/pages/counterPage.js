import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Counter from "../components/Counter/Counter";

const product = [
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },
    {
        id:4,
    },
    {
        id:5,
    },
    {
        id:6,
    },
];
function CounterPage() {
    const count = useSelector((item) => item.counter.value)

    return ( 

        <div className="container">
        <h3>Total {count}</h3>
            <div className="container mt-5">
                
                <div className="row">
                    {
                        product.map((item, index) =>
                        <div className="col-4">
                            <Counter key={index} data={item.id}/>
                        </div>
                        )
                    }
                </div>
            
            <br></br>
            <Link to='/' className="btn btn-success">Back</Link>
        </div>
        </div>
     );
}

export default CounterPage;