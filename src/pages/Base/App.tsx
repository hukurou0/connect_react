import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from '../Home';
import NoPage from '../NoPage';
import LogIn from "../Auth/LogIn";
import SignUp from "../Auth/SignUp";

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