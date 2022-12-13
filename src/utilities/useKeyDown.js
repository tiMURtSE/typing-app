import { useEffect } from 'react';

export const useKeyDown = (callback) => {
    const onKeyDown = (event) => {
        const span = document.querySelector(".current");
        if (span.textContent === event.key) {
            console.log("Correct!")
            callback();
        }
    };  
    
    useEffect(() => {
      document.addEventListener('keydown', onKeyDown);
    }, []);
};