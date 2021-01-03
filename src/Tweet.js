import React,{useState} from 'react';

function Tweet(props) {

    const[count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);  
    };

    return(
        <div className="tweet">
            <h1>{props.name}</h1>
            <p>{props.message}</p>
            <button onClick={increment}>❤️{count}</button>
        </div>
    );
}

export default Tweet;  