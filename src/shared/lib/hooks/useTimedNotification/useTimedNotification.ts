import { useEffect, useState } from 'react';

function useTimedNotification(notification : string | null, delay : number = 2000) {
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        if (notification) {
            setShowNotification(true);
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, delay); // Adjust the delay as needed
            return () => clearTimeout(timer);
        }
    }, [notification, delay]);

    return showNotification
}

export default useTimedNotification
