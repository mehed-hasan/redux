import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { increment,decrement } from "../../redux/slices/counterSlice";

function Counter({data}) {

    const count = useSelector((item)=> item.counter.value);
    const dispatch = useDispatch();

    const [item, setItem] = useState(0);
    const [cartedData, setCartedData] = useState([]);
    

    useEffect(() =>{
        // console.log(cartedData);

    },[data])


    const add = (id) =>{
        //Adding to local
        setItem(item +1);
        dispatch(increment());

        if(cartedData.length > 0){
            let row = 0; 
            cartedData.map((item)=>
               {
                if(item.id ==1){
                    row +=1;
                }
               }
            )
              
            if(row > 0){
                // Do not enter                 
            }else{
                // Enter data 
                const newData = {
                    id:5,
                    test:'s' 
                }
                // localStorage.setItem('carted', JSON.stringify([...cartedData,newData ]))
                setCartedData([...cartedData,newData ])
            }
        }else{
             // Enter data  
             const newData = {
                id:5,
                test:'s'
            }
            // localStorage.setItem('carted', JSON.stringify([...cartedData,newData ]))
            setCartedData([...cartedData,newData])
        }

    
    }
    const sub = (id) =>{
        setItem(item -1);
        dispatch(decrement());
    }
    console.log(cartedData);

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