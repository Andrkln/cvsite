'use client'
import { useState, useEffect } from 'react';

const SimpleTypingEffect = ({ text, speed = 200 }) => {
    const [subText, setSubText] = useState('');

    useEffect(() => {
        if (subText === text) return;

        const nextStepLength = subText.length < text.length ? subText.length + 1 : text.length;
        
        const timer = setTimeout(() => {
            setSubText(text.substring(0, nextStepLength));
        }, speed);

        return () => clearTimeout(timer);
    }, [subText, speed, text]);

    return <span>{subText}|</span>;
};

export default SimpleTypingEffect;
