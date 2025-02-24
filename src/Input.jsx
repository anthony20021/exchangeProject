import './Input.css';


function Input({ text, change, type, id }) {
    return (
        <>
            <div className="input">
                <label htmlFor={id}>{text}</label>
                <input type={type} onChange={change} id={id} placeholder={text}/>
            </div>
        </>
    );
}

export default Input
