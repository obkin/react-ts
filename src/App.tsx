import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UsersPage';
import TodoPage from './pages/TodosPage';
import TrashPage from './pages/TrashPage';
import Navbar from './components/navbar/Navbar';
import UserItemPage from './pages/UserItemPage';
import TodoItemPage from './pages/TodoItemPage';
import ReduxPage from './pages/ReduxPage/ReduxPage';

const App = () => {

  return (
    <Router>
      <Navbar />

      <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
          <Route path="/redux" element={<ReduxPage />} />
      </Routes>
      
    </Router>
  );
};

export default App;