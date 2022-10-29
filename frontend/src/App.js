import React from 'react';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AddPost from './components/AddPost';
import Header from './components/Header';
import Home from './components/Home';
import "./App.css"
import UpdateForm from './components/UpdateForm';



function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
    <Route path="/Addpost" element={<AddPost/>}/>
    <Route path="/ViewPost" element={<Home/>}/>
    <Route path="/UpdatePost/:id" element={<UpdateForm/>}/>
    </Routes>
   
    </Router>
    </div>
  );
}

export default App;
