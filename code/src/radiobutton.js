import React from 'react';

export const RadioButton = (props) => {
    const { question, name, array, arrayItem, setArrayItem } = props;

    return (
        <div>
            <h2>{question}</h2>
            <div className='radio-buttons'>
               {array.map(item => (
                    <label className='radio-container' key={item}>
                        <input 
                            type='radio'
                            name={name}
                            value={item}
                            onChange={event => setArrayItem(event.target.value)}
                            checked={arrayItem === item}
                            required
                        />
                        <span className='radiomark'></span>
                        {item}
                    </label>
                ))} 
            </div>
        </div>
    );
};