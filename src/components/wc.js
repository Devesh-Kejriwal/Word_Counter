import React, { useState } from 'react';
export function Counter() {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const handleChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
        const words = inputText.trim().split(/\s+/);
        setCount(words.length);
    }
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <h1 className="text-center">Responsive paragraph word counter</h1>
            <div className="col-md-6">
                <textarea className="form-control" placeholder="Enter text..." onChange={handleChange}></textarea>
            </div>
            <p>Word count: {count}</p>
        </div>
    )
}
