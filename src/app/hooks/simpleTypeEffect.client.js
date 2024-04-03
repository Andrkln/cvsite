'use client'
import { useState, useEffect } from 'react';

const SimpleTypingEffect = ({ text, speed = 200 }) => {
    const [subText, setSubText] = useState('');
    useEffect(() => {
        if (subText.length === text.length) return;

        const timer = setTimeout(() => {
            setSubText(text.substring(0, subText.length + 1));
        }, speed);

        return () => clearTimeout(timer);
    }, [subText, speed, text]);

    return subText + '|';
};

export default SimpleTypingEffect;
