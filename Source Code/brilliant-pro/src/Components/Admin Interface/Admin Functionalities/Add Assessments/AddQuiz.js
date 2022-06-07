import React from 'react';
import { useState } from 'react';
import './AddQuiz.css';

function AddQuiz() {

    var count = useState(0);

    return (
        <div className='main-div'>
            <div className='question-block'>
                <h5>Enter statement:</h5>
                <form>
                    <label>
                        <input type="text" name="name" className='statement-input' />
                    </label><br />

                    <h6>Option A:</h6>
                    <label>
                        <input type="text" name="name" className='option-input' />
                    </label><br />

                    <h6>Option B:</h6>
                    <label>
                        <input type="text" name="name" className='option-input' />
                    </label><br />

                    <h6>Option C:</h6>
                    <label>
                        <input type="text" name="name" className='option-input' />
                    </label><br />

                    <h6>Option D:</h6>
                    <label>
                        <input type="text" name="name" className='option-input' />
                    </label><br />

                    <input type="submit" value="Submit" className='submit-btn' />
                </form>
            </div>
        </div>
    )
}

export default AddQuiz