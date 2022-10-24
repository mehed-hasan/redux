import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { increment,decrement } from "../../redux/slices/counterSlice";

function Counter({data}) {

    const count = useSelector((item)=> item.counter.value);
    const dispatch = useDispatch();

    const [item, setItem] = useState(0);
    const [cartedData, setCartedData] = useState([]);
    
    const getData = JSON.parse(localStorage.getItem('carted'));

    useEffect(() =>{
        if(getData == null){
            setCartedData([])
        }else{
            setCartedData(getData)
        }
    },[])

    console.log(cartedData);

    const add = (id) =>{
        //Adding to local
        setItem(item +1);
        dispatch(increment());

        console.log(getData.length);
    }
    const sub = (id) =>{
        setItem(item -1);
        dispatch(decrement());
    }

    return ( 
        <>
        <div class="card mb-4" style={{width:'18rem'}}>
            <h1 className="text-center">{item}</h1>
        <div class="card-body d-flex justify-content-around">
            <a onClick={() => add(data)} href="#" className="btn btn-primary">+</a>
            <a onClick={() => sub(data)} className="btn btn-warning ">-</a>
        </div>
        <p className="text-center">Product id : {data}</p>

        </div>
        </>
     );
}

export default Counter;