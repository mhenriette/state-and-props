import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0)
    const startCount = () => {
        setCount(prev => prev + 1)
    }

    return <div className="count">
        <h1>{`Button Has been clicked ${count} ${count === 0 ? 'time' : 'times'}`}</h1>
        <button className="count__btn" onClick={startCount}>Start Count</button>
    </div>;
};

export default Count;
