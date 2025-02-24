function Select({ text, change, id, tableau }) {
    return (
        <div className="input">
            <label htmlFor={id}>{text}</label>
            <select onChange={change} id={id}>
                {tableau.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default Select