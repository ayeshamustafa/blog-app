import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Edit from "./pages/Edit";

const App = () => {
  
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog/:id/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

