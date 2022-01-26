import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionForTest } from '../actions/quizActions';
import { passUser } from '../actions/userActions';
import Question from '../components/Question';



export default function QuizScreen({ match }) {
    const quizId = match.params.quizid;
    const dispatch = useDispatch();
    const [passingMarks, setPassingMarks] = useState(1000);
    const [courseId, setCourseId] = useState('');
    useEffect(() => {
        dispatch(getQuestionForTest(quizId));
    }, [])
    useEffect(() => {
        async function fetchData() {
            const quiz = await axios.post('/api/quiz/getById', { quizId: quizId });
            setCourseId(quiz.data.courseId);
            setPassingMarks(parseInt(quiz.data.passingMarks))
        }
        fetchData();
    }, [])
    const questionsState = useSelector(state => state.getQuestionForTestReducer);

    const examState = useSelector(state => state.examStateReducer);
    useEffect(() => {
        if (examState.examState.score >= passingMarks) {
            alert('You have passed');
            dispatch(passUser(courseId));
        }
    }, [examState])


    return <div>
        <p>You will not be able to change your answer after you click submit on a question</p>
        <p>Do not close or reload the quiz</p>
        {questionsState.questions && questionsState.questions.map((question) =>
            <div key={question.questionId}><Question question={question} /></div>
        )}
    </div>;
}
