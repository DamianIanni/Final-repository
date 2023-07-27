import { useEffect, useState } from "react";

export default function useWindowMeasurement () {

    const [WIDTH, setWIDTH] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWIDTH(window.innerWidth)
        }
        // Attach event listener to window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return WIDTH
}