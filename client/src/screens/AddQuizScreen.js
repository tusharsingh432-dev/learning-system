import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuiz } from '../actions/quizActions';
export default function AddQuizScreen({ match }) {
    const [title, setTitle] = useState('')
    const [totalMarks, setTotalMarks] = useState('')
    const [passingMarks, setPassingMarks] = useState('')
    const [question, setQuestion] = useState('')
    const [option1, setOption1] = useState({ name: '', isCorrect: false })
    const [option2, setOption2] = useState({ name: '', isCorrect: false })
    const [option3, setOption3] = useState({ name: '', isCorrect: false })
    const [option4, setOption4] = useState({ name: '', isCorrect: false })
    const [marks, setMarks] = useState()
    const dispatch = useDispatch();
    const [currentTotalMarks, setCurrentTotalMarks] = useState(0);
    const [questions, setQuestions] = useState([]);

    function handleDeleteQuestion(e) {
        // setCurrentTotalMarks(currentTotalMarks - ques.marks);
        const statement = e.target.parentElement.getAttribute('value');
        console.log(statement);
        var newQuestion = [];
        questions.forEach((q) => {
            if (q.question !== statement) newQuestion.push(q);
        });
        setQuestions(newQuestion);
    }


    function handleCreateQuiz() {
        if (title === '') { alert('Please enter Title'); return; }
        if (questions.length === 0) { alert('Please enter Question'); return; }
        if (passingMarks === '') { alert('Please enter Passing Marks'); return; }
        if (totalMarks === '') { alert('Please enter Total Marks'); return; }
        if (parseInt(totalMarks) !== parseInt(currentTotalMarks)) { alert('Total Marks and total of questions marks must be equal'); console.log(parseInt(totalMarks), parseInt(currentTotalMarks)); return; }
        if (parseInt(passingMarks) > parseInt(totalMarks)) { alert('Passing Marks must be less than total marks'); return; }

        const quiz = {
            name: title,
            totalMarks,
            passingMarks
        }

        console.log({ quiz, questions, courseId: match.params.courseid })
        dispatch(createQuiz({ quiz, questions, courseId: match.params.courseid }));
    }


    function handleAddQuestion() {
        if (question === '') { alert('Please enter a Statement'); return; }
        if (marks === '') { alert('Please enter Marks'); return; }
        if (option1.name === '') { alert('Please enter all Options'); return; }
        if (option2.name === '') { alert('Please enter all Options'); return; }
        if (option3.name === '') { alert('Please enter all Options'); return; }
        if (option4.name === '') { alert('Please enter all Options'); return; }
        const newQuestion = {
            question,
            option1,
            option2,
            option3,
            option4,
            marks: parseInt(marks, 10)
        }
        setQuestion('');
        setMarks('');
        setOption1({ name: '', isCorrect: false });
        setOption2({ name: '', isCorrect: false });
        setOption3({ name: '', isCorrect: false });
        setOption4({ name: '', isCorrect: false });
        setCurrentTotalMarks(currentTotalMarks + newQuestion.marks);
        questions.push(newQuestion);
    }


    return <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                <h2>Quiz Details</h2>
                <input type="text" placeholder="Title" className="form-control mt-2" required value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <input type="number" placeholder="Total Marks" className="form-control mt-2" required value={totalMarks}
                    onChange={(e) => { setTotalMarks(e.target.value) }}
                />
                <input type="number" placeholder="Passing Marks" className="form-control mt-2" required value={passingMarks}
                    onChange={(e) => { setPassingMarks(e.target.value) }}
                />
                <p className="mt-2">Add Questions before creating quiz</p>
                <button className="btn btn-primary" type="submit" onClick={handleCreateQuiz}>Create Quiz</button>
                <a href='/teacherhome' className="btn btn-primary" style={{ marginLeft: '20px' }}>Cancel</a>
            </div>
            <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded" style={{ marginLeft: "30px" }}>
                <h3>Add Question</h3>
                <input type="text" placeholder="Statement" className="form-control mt-2" required value={question}
                    onChange={(e) => { setQuestion(e.target.value) }}
                />
                <input type="number" placeholder="Marks" className="form-control mt-2" required value={marks}
                    onChange={(e) => { setMarks(e.target.value) }} max="10" min="1"
                />
                <div className='row'>
                    <div className='col-md-4'>
                        <select className="form-control m-auto mt-2" value={option1.isCorrect} onChange={(e) => { setOption1({ ...option1, isCorrect: e.target.value }) }}>
                            <option value={true}>Correct</option>
                            <option value={false}>Incorrect</option>
                        </select>
                    </div>
                    <div className='col-md-8'>
                        <input type="text" placeholder="Option 1" className="form-control mt-2" required value={option1.name}
                            onChange={(e) => { setOption1({ ...option1, name: e.target.value }) }}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <select className="form-control m-auto mt-2" required value={option2.isCorrect} onChange={(e) => { setOption2({ ...option2, isCorrect: e.target.value }) }}>
                            <option value={true}>Correct</option>
                            <option value={false}>Incorrect</option>
                        </select>
                    </div>
                    <div className='col-md-8'>
                        <input type="text" placeholder="Option 2" className="form-control mt-2" required value={option2.name}
                            onChange={(e) => { setOption2({ ...option2, name: e.target.value }) }}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <select className="form-control m-auto mt-2" value={option3.isCorrect} onChange={(e) => { setOption3({ ...option3, isCorrect: e.target.value }) }}>
                            <option value={true}>Correct</option>
                            <option value={false}>Incorrect</option>
                        </select>
                    </div>
                    <div className='col-md-8'>
                        <input type="text" placeholder="Option 3" className="form-control mt-2" required value={option3.name}
                            onChange={(e) => { setOption3({ ...option3, name: e.target.value }) }}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <select className="form-control m-auto mt-2" value={option4.isCorrect} onChange={(e) => { setOption4({ ...option4, isCorrect: e.target.value }) }}>
                            <option value={true}>Correct</option>
                            <option value={false}>Incorrect</option>
                        </select>
                    </div>
                    <div className='col-md-8'>
                        <input type="text" placeholder="Option 4" className="form-control mt-2" required value={option4.name}
                            onChange={(e) => { setOption4({ ...option4, name: e.target.value }) }}
                        />
                    </div>
                </div>
                <button className="btn btn-primary mt-2" style={{ marginRight: '20px' }}
                    onClick={handleAddQuestion}>
                    Add Question
                </button>
            </div>
            <div className='col-md-11'>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <td>Statement</td>
                            <td>Marks</td>
                            <td>Option 1</td>
                            <td>Option 2</td>
                            <td>Option 3</td>
                            <td>Option 4</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(curQuestion =>
                            <tr>
                                <td>{curQuestion.question}</td>
                                <td>{curQuestion.marks}</td>
                                <td>{curQuestion.option1.name + ' ' + curQuestion.option1.isCorrect}</td>
                                <td>{curQuestion.option2.name + ' ' + curQuestion.option2.isCorrect}</td>
                                <td>{curQuestion.option3.name + ' ' + curQuestion.option3.isCorrect}</td>
                                <td>{curQuestion.option4.name + ' ' + curQuestion.option4.isCorrect}</td>
                                <td onClick={handleDeleteQuestion} value={curQuestion.question}><i className="fas fa-trash-alt"></i></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>;
}
