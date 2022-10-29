import React from 'react';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AddPost from './components/AddPost';
import Header from './components/Header';
import Home from './components/Home';
import "./App.css"
import UpdatePost from './components/UpdatePost';



function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
    <Route path="/Addpost" element={<AddPost/>}/>
    <Route path="/ViewPost" element={<Home/>}/>
    <Route path="/UpdatePost" element={<UpdatePost/>}/>
    </Routes>
   
    </Router>
    </div>
  );
}

export default App;
