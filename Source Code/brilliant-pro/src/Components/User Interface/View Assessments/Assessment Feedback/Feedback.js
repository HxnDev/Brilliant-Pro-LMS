import React from 'react';
import UserNavbar from '../../User Dashboard/User Navbar/UserNavbar';
import './Feedback.css';

function IsPass(marks){
    var marks1 = parseInt(marks)
    if ((marks1 / 5)*100 < 50){
        return false;
    }
    else
    {
        return true;
    }
}

function Feedback(props) {

  return (
    <>
    <UserNavbar />
      <div className='feedback-title'>
        <h1 className='feedback-heading'>Assessment Feedback</h1>
        <div className='feedback-desc'>
            <p>Dear {props.username}</p>
            <p>You have achieved {props.usermarks} marks out of a total of 5 marks.</p>
            {IsPass(props.usermarks) ? 
                <div className='feedback-desc'>
                <p>You have hereby passed the assessment.</p>
                <img src='./assessmentFeedback-extras/pass.png' className='feedback-img'/>
            </div>
            :
            <div className='feedback-desc'>
                    <p>You haven't passed the assessment. You can retry sometime later.</p>
                    <img src='./assessmentFeedback-extras/fail.png' className='feedback-img'/>
                </div>
        
        }
            {/* if (IsPass(props.usermarks)){
                <div className='feedback-desc'>
                    <p>You have hereby passed the assessment.</p>
                    <img src='./assessmentFeedback-extras/pass.png' className='feedback-img'/>
                </div>
                
            }
            else{
                <div className='feedback-desc'>
                    <p>You haven't passed the assessment. You can retry sometime later.</p>
                    <img src='./assessmentFeedback-extras/fail.png' className='feedback-img'/>
                </div>
                
            } */}
        </div>
    </div>
    </>
  );
}

export default Feedback;