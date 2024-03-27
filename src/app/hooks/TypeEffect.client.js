'use client'
import { useState, useEffect } from 'react';


const TypingEffect = ({ text, speed = 200 }) => {
    const [index, setIndex] = useState(0);
    const [subText, setSubText] = useState('');
    const [backspace, setBackspace] = useState(false);

    useEffect(() => {
        const manageTyping = () => {
            if (!backspace) {
                if (index < text.length) {
                    setIndex(index + 1);
                } else {
                    setTimeout(() => setBackspace(true), 1000);
                }
            } else {
                if (index > 0) {
                    setIndex(index - 1);
                } else {
                    setBackspace(false);
                }
            }
        };

        const timer = setTimeout(manageTyping, backspace ? speed - 10 : speed);

        setSubText(text.substring(0, index));

        return () => clearTimeout(timer);
    }, [index, backspace, speed, text]);

    return subText + '|';
};

export default TypingEffect;