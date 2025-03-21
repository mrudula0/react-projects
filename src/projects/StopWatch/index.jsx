import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [data, setData] = useState(0);
    const [flag, setFlag] = useState(false)
    const getSec=`0${data%60}`.slice(-2);
    const Min=`${Math.floor(data/60)}`;
    const getMin=`0${Min%60}`.slice(-2);
    const getHours =`0${Math.floor(data/3600)}`.slice(-2)

    useEffect(() => {
        if (flag) {
            const interval = setInterval(() => {
                setData(prev => prev + 1)
            }, 1000);
            return () => clearInterval(interval)
        }
    }, [flag])

    function handleReset() {
        setData(0);
    }
    return (
        <>
            <h3>{`${getHours}:${getMin}:${getSec}`}</h3>
            <button onClick={() => setFlag(true)}>Start</button>
            <button onClick={() => setFlag(false)}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
 
}

export default StopWatch