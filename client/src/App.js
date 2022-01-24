import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
