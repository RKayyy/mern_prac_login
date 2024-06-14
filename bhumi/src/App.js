// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import RegisterPage from './pages/registerpage';
import LoginPage from './pages/loginpage';
import Dashboard from './pages/dashboard';
import ErrorPage from './pages/errorpage';
import LogoutPage from './pages/logout';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
