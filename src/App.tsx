import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import TodoPage from './pages/TodoPage';
import TrashPage from './pages/TrashPage';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <Router>
      <Navbar />

      <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/trash" element={<TrashPage />} />
      </Routes>
      
    </Router>
  );
};

export default App;