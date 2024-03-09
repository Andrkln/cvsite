'use client'
import { useState, useEffect } from 'react';


const TypingEffect = ({ text, speed = 200 }) => {
    const [index, setIndex] = useState(0);
    const [subText, setSubText] = useState('');
    const [backspace, setBackspace] = useState(false);

    useEffect(() => {
        // This function manages the typing effect, including typing and deleting text
        const manageTyping = () => {
            // Determine if we're typing or deleting
            if (!backspace) {
                // Typing forward
                if (index < text.length) {
                    setIndex(index + 1);
                } else {
                    // Once we've reached the end of the text, start deleting after a slight pause
                    setTimeout(() => setBackspace(true), 1000);
                }
            } else {
                // Deleting text
                if (index > 0) {
                    setIndex(index - 1);
                } else {
                    // Once all text is deleted, start typing again
                    setBackspace(false);
                }
            }
        };

        // Setup a timer for typing or deleting
        const timer = setTimeout(manageTyping, backspace ? speed - 10 : speed);

        // Update the displayed text based on the current index
        setSubText(text.substring(0, index));

        // Cleanup function to clear the timeout if the component unmounts or before the next useEffect call
        return () => clearTimeout(timer);
    }, [index, backspace, speed, text]); // Dependencies array to control when useEffect runs

    return subText + '|';
};

export default TypingEffect;