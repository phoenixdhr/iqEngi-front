import React, { useState } from 'react';

interface CounterProps {
    value: number;
    children?: React.ReactNode;
}

export default function Counter(counterProps: CounterProps) {
    const [count, setCount] = useState(counterProps.value);

    return (
        <>
            {counterProps.children}
            <h1>Counter</h1>
            <h3>value : {count}</h3>
            <button
                className="bg-red-500 p-2 mr-2 rounded-2xl"
                onClick={() => setCount(count + 1)}
            >
                +1
            </button>
            <button
                className="bg-red-500 p-2 mr-2 rounded-2xl"
                onClick={() => setCount(count - 1)}
            >
                -1
            </button>
        </>
    );
}
