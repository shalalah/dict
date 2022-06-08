import React from 'react';

export const TextArea = ({text}) => {
    return (
        <div style={{ width: "50vw", border: "1px solid #888", minHeight: "20vh" }}>
            <pre>{text}</pre>
        </div>
    );
};

export const Input = ({input_ref}) => {
    return (
        <input ref={input_ref}/>        
    );
};

export const Button = ({input_ref, setText }) => {
    return (
        <button onClick={() => {
            console.log(input_ref.current.value);
            // textarea로 옮겨줌
            setText(input_ref.current.value);
            // 옮기고 난 후 인풋박스 clear
            input_ref.current.value="";
        }}>버튼</button>
        
    );
};

