import React from 'react';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AddPost from './components/AddPost';
import Header from './components/header';
import Home from './components/Home';




function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
    <Route path="/Addpost" element={<AddPost/>}/>
    <Route path="/ViewPost" element={<Home/>}/>
    </Routes>
   
    </Router>
    </div>
  );
}

export default App;
