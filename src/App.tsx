import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingOverlay, Loader } from '@mantine/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import PublicLayout from './Layouts/PublicLayout';
import UserLayout from './Layouts/UserLayout';
import Home from './UI/Home/Home';
import NoPage from './UI/NoPage/NoPage';
import LogIn from './UI/Auth/Screens/LogInScreen';
import SignUp from './UI/Auth/Screens/SignUpScreen';
import UserTop from './UI/UserTop/Screens/UserTopScreen';
import TaskRegist from './UI/TaskRegist/Screens/TaskRegistScreen';
import Timetable from './UI/Timetable/Screens/TimetableScreen';
import { NewTask } from './UI/TaskRegist/Screens/NewTaskScreen';
import { TaskSelection } from './UI/TaskRegist/Screens/TaskSelectionScreen';
import { loadingState } from './Hooks/LoadingState';
import AccountOuterScreen from './UI/Settings/Screens/AccountOuterScreen';
import { TermsOfUse } from './UI/TermsOfUse/TermsOfUseScreen';
import { PrivacyPolicy } from './UI/PrivacyPolicy/PrivacyPolicyScreen';
import { Credits } from './UI/Credits/CreditsScreen';
import { alertContentState } from './Hooks/AlertContentState';
import { alertPresentationState } from './Hooks/AlertPresentationState';
import { CustomAlert } from './common/UI/Components/CustomAlert';

const App = () => {
  const [isErrorShown, setErrorVisivility] = useRecoilState(alertPresentationState);
  const alertContent = useRecoilValue(alertContentState);
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
            <Route path="credits" element={<Credits />} />
            <Route path="privacy_policy" element={<PrivacyPolicy />} />
            <Route path="terms_of_use" element={<TermsOfUse />} />
          </Route>
          <Route path="user/" element={<UserLayout />}>
            <Route index element={<UserTop />} />
            <Route path="regist_task" element={<TaskRegist />} />
            <Route path="create_new_task" element={<NewTask />} />
            <Route path="select_task" element={<TaskSelection />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="settings" element={<AccountOuterScreen />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <LoadingOverlay
        loader={<Loader size="lg" variant="dots" h="100%" />}
        style={{ position: 'fixed', height: '100%' }}
        visible={isLoading}
      />
      {isErrorShown && <CustomAlert content={alertContent} setErrorVisivility={setErrorVisivility} />}
    </>
  );
};

export default App;
