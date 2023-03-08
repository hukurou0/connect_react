import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './features/Home/Home';
import NoPage from './features/NoPage/NoPage';
import LogIn from './features/Auth/UI/Screens/LogInScreen';
import SignUp from './features/Auth/UI/Screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;