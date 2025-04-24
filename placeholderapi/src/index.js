import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from './pages/Posts';
import Users from './pages/Users';
import UserPosts from './pages/UserPosts';
import UsersList from './pages/UsersList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts></Posts>} />
        <Route path="/user/:idUser" element={<Users></Users>} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id/posts" element={<UserPosts />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
