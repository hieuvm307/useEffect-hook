import React, { useEffect, useState } from 'react'

const Timmer = () => {
    const [countdown, setCountdown] = useState(5);
    useEffect(() => {
        const timmerId = setInterval(() => {
            setCountdown((prevCount) => {
                if(prevCount <= 0) { 
                    clearInterval(timmerId);
                    return 0;
                } else {
                    return prevCount - 1;
                }
            })
            {console.log('counting.....')}
        }, 1000);

        return () => clearInterval(timmerId);
    }, [])
    return (
        <div>
            <div>count: {countdown}</div>
        </div>
    )
}

export default Timmer;
