import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect (()=>{
        
    }, [])

    return (
        <div>
            <h2>This my watch</h2>
            <h3>My current step: {steps}</h3>
            <button onClick={increaseSteps}>GO</button>
        </div>
    );
};

export default Watch;