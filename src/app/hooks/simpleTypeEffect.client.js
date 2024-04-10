'use client'
import { useState, useEffect } from 'react';

const SimpleTypingEffect = ({ text, speed = 200 }) => {
    const [subText, setSubText] = useState('');

    useEffect(() => {
        // Check if the current subText fully matches the latest text
        if (subText === text) return;

        // Determine the next step in the typing effect based on the current subText length
        const nextStepLength = subText.length < text.length ? subText.length + 1 : text.length;
        
        // Schedule the update to subText to simulate typing
        const timer = setTimeout(() => {
            setSubText(text.substring(0, nextStepLength));
        }, speed);

        // Cleanup timeout on component unmount or on update
        return () => clearTimeout(timer);
    }, [subText, speed, text]);

    return <span>{subText}|</span>;
};

export default SimpleTypingEffect;
