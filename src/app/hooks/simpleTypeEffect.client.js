'use client';
import { useState, useEffect } from 'react';

const SimpleTypingEffect = ({ text, speed = 200, id, ids }) => {
    const [subText, setSubText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        if (ids.includes(id)) {
            setSubText(text);
            setIsTypingComplete(true);
            return;
        }

        if (subText === text) {
            ids.push(id);
            setIsTypingComplete(true);
            return;
        }

        const nextStepLength = subText.length < text.length ? subText.length + 1 : text.length;

        const timer = setTimeout(() => {
            setSubText(text.substring(0, nextStepLength));
        }, speed);

        return () => clearTimeout(timer);
    }, [subText, speed, text, id, ids]);

    return <span>{subText}{!isTypingComplete && '|'}</span>;
};

export default SimpleTypingEffect;
