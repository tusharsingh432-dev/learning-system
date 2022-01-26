import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswers } from '../actions/examActions';
export default function Question({ question }) {

    const examStateReducer = useSelector(state => state.examStateReducer);
    useEffect(() => {
        const wasAnswered = examStateReducer.examState.answered.includes(question.questionId);
        if (wasAnswered == true) { setWillSubmit(false) }
        else setWillSubmit(true);
    }, [])
    const dispatch = useDispatch();
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [willSubmit, setWillSubmit] = useState('');
    function handleSubmit(e) {
        // e.target.disabled = true;
        setWillSubmit(false);
        const newQues = {
            ...question,
            option1: { name: question.option1.name, isCorrect: option1 !== '' ? option1 : false },
            option2: { name: question.option2.name, isCorrect: option2 !== '' ? option2 : false },
            option3: { name: question.option3.name, isCorrect: option3 !== '' ? option3 : false },
            option4: { name: question.option4.name, isCorrect: option4 !== '' ? option4 : false }
        }
        dispatch(checkAnswers(newQues))
    }


    return <div className="container">
        <div className="row p-3 mb-5 bg-white rounded" style={{ border: '1px solid' }}>
            <h4 style={{ textAlign: 'left' }}>{question.question}</h4>
            <p style={{ fontStyle: 'italic', textAlign: 'left' }}>Choose if the following options are correct or not.</p>
            <div className='row '>
                <h5 className='col-md-5 my-auto' style={{ textAlign: 'left', fontWeight: 'normal' }}>{'a) ' + question.option1.name}</h5>
                <div className='col-md-3 my-auto'>
                    <select className="form-control my-auto" value={option1} onChange={(e) => setOption1(e.target.value)}>
                        <option value=''>Choose</option>
                        <option value={true}>Correct</option>
                        <option value={false}>Incorrect</option>
                    </select>
                </div>
            </div>
            <hr style={{ marginBottom: '5px', marginTop: '5px' }} />
            <div className='row '>
                <h5 className='col-md-5 my-auto' style={{ textAlign: 'left', fontWeight: 'normal' }}>{'b) ' + question.option2.name}</h5>
                <div className='col-md-3 my-auto'>
                    <select className="form-control my-auto" value={option2} onChange={(e) => setOption2(e.target.value)}>
                        <option value=''>Choose</option>
                        <option value={true}>Correct</option>
                        <option value={false}>Incorrect</option>
                    </select>
                </div>
            </div>
            <hr style={{ marginBottom: '5px', marginTop: '5px' }} />
            <div className='row '>
                <h5 className='col-md-5 my-auto' style={{ textAlign: 'left', fontWeight: 'normal' }}>{'c) ' + question.option3.name}</h5>
                <div className='col-md-3 my-auto'>
                    <select className="form-control my-auto" value={option3} onChange={(e) => setOption3(e.target.value)}>
                        <option value=''>Choose</option>
                        <option value={true}>Correct</option>
                        <option value={false}>Incorrect</option>
                    </select>
                </div>
            </div>
            <hr style={{ marginBottom: '5px', marginTop: '5px' }} />
            <div className='row '>
                <h5 className='col-md-5 my-auto' style={{ textAlign: 'left', fontWeight: 'normal' }}>{'d) ' + question.option4.name}</h5>
                <div className='col-md-3 my-auto'>
                    <select className="form-control my-auto" value={option4} onChange={(e) => setOption4(e.target.value)}>
                        <option value=''>Choose</option>
                        <option value={true}>Correct</option>
                        <option value={false}>Incorrect</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-success mt-3" onClick={handleSubmit} disabled={!willSubmit}>Submit</button>
        </div>
    </div>
}
