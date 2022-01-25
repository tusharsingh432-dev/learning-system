import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddQuizScreen from './screens/AddQuizScreen';
import EditCourseScreen from './screens/EditCourseScreen';
import EditQuizScreen from './screens/EditQuizScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import StudentScreen from './screens/StudentScreen';
import TeacherScreen from './screens/TeacherScreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/teacherhome' component={TeacherScreen} />
          <Route path='/studenthome' component={StudentScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/editcourse/:courseid' component={EditCourseScreen} />
          <Route path='/addquiz/:courseid' component={AddQuizScreen} />
          <Route path='/editquiz/:quizid' component={EditQuizScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
