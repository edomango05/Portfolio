"use client"

import { useEffect } from "react";
const baffle = require('baffle');

export default function ObfuscatedText() {
    useEffect(() => {
        import('modernizr').then((mod) => { 
            const eh1 = baffle("h1", {
                characters: "没吗我█▓▒░█▓▒░█▓▒░<>/"
            });
            mod.mq("(min-width: 1024px)") && setTimeout(() => {
                eh1.start().reveal(700, 800)
            }, 200)
        });
    }, []);
    return null;
}