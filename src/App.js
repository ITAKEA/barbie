import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsList from './PostsList';  
import PostDetail from './PostDetail'; 
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

