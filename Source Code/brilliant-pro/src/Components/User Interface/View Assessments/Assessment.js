import React from 'react';
import data  from './Data/Quiz.json';
import "./Assessment.css";

function Assessment() {

    function onChangeValue(key, option) {
        
    }

    return (
        <>
            <div className='text-center-div'>
                <h1>{data[0].Name}</h1>
            </div>
            <div className='whole-block'>
                {data[0].Questions.map((data, key) => {
                    return (
                        <div key={key} className='question-block'> 
                            <h4> Question #{key + 1}</h4>
                            <h5>{data.Statement}</h5>

                            <div onChange={onChangeValue(key, data.Options[0].Option)}>
                                <input type="radio" value={data.Options[0].Text} name={key} /> {data.Options[0].Text} <br /><br />
                                <input type="radio" value={data.Options[1].Text} name={key} /> {data.Options[1].Text} <br /><br />
                                <input type="radio" value={data.Options[2].Text} name={key} /> {data.Options[2].Text} <br /><br />
                                <input type="radio" value={data.Options[3].Text} name={key} /> {data.Options[3].Text} <br /><br />
                            </div>
                        </div>
                    );
                })}
                <div className='text-center-div'>
                    <button className="quiz-submit-btn">
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default Assessment;