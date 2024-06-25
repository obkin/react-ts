import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodosPage/TodosPage';
import TrashPage from './pages/TrashPage/TrashPage';
import Navbar from './components/navbar/Navbar';
import TodoItemPage from './pages/TodosItemPage/TodoItemPage';
import ReduxPage from './pages/ReduxPage/ReduxPage';
import UserItemPage from './pages/UserItemPage/UserItemPage';
import UserPage from './pages/UsersPage/UsersPage';
import './App.css';

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