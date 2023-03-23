import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingOverlay, Loader } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import PublicLayout from './Layouts/PublicLayout';
import UserLayout from './Layouts/UserLayout';
import Home from './UI/Home/Home';
import NoPage from './UI/NoPage/NoPage';
import LogIn from './UI/Auth/Screens/LogInScreen';
import SignUp from './UI/Auth/Screens/SignUpScreen';
import UserTop from './UI/UserTop/Screens/UserTopScreen';
import Settings from './UI/Settings/Screens/Settings';
import TaskRegist from './UI/TaskRegist/Screens/TaskRegistScreen';
import Timetable from './UI/Timetable/Screens/TimetableScreen';
import { NewTask } from './UI/TaskRegist/Screens/NewTaskScreen';
import { TaskSelection } from './UI/TaskRegist/Screens/TaskSelectionScreen';
import { loadingState } from './Hooks/LoadingState';

const App = () => {
  const isLoading = useRecoilValue(loadingState);

  return (
    <>
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
            <Route path="create_new_task" element={<NewTask />} />
            <Route path="select_task" element={<TaskSelection />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <LoadingOverlay loader={<Loader size="lg" variant="dots" />} visible={isLoading} />
    </>
  );
};

export default App;
