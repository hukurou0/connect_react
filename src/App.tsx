import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './Layouts/PublicLayout';
import UserLayout from './Layouts/UserLayout';
import Home from './features/Home/Home';
import NoPage from './features/NoPage/NoPage';
import LogIn from './features/Auth/UI/Screens/LogInScreen';
import SignUp from './features/Auth/UI/Screens/SignUpScreen';
import UserTop from './features/UserTop/UI/Screens/UserTopScreen';
import Settings from './features/Settings/UI/Screens/Settings';
import TaskRegist from './features/TaskRegist/UI/Screens/TaskRegistScreen';
import Timetable from './features/Timetable/UI/Screens/TimetableScreen';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="usertop" element={<UserTop />} />
      </Route>
      <Route path="user/" element={<UserLayout />}>
        <Route index element={<UserTop />} />
        <Route path="regist_task" element={<TaskRegist />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
