import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import Communities from './components/Communities';
import Explore from './components/Explore';
import Messages from './components/Messages';
import Profile from './components/Profile';
import More from './components/More';
import Notifications from './components/Notifications';
// import Main from './components/Main';

import LandingPage from './components/LandingPage';
import { UserGuard } from './guards/userGuard';
import Error from './components/Error';

function App() {
  return (
    <>
    <Router >
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/' element={<UserGuard/>} children={
                [
                    <Route path='/home' element={<Homepage/>}/>,
                    <Route path='/communities' element={<Communities/>}/>,
                    <Route path='/explore' element={<Explore/>}/>,
                    <Route path='/notifications' element={<Notifications/>}/>,
                    <Route path='/msgs' element={<Messages/>}/>,
                    <Route path='/profile/:firstname' element={<Profile/>}/>,
                    <Route path='/more' element={<More/>}/>
                ]
            } />
            <Route path='*' element={<Error/>}/>
        
            
            
        </Routes>
    </Router>
    </>
  );
}

export default App;
