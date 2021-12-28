import React from 'react';
import Search from './components/Search';
import Browse from './components/Browse';
import MyList from './components/MyList';
import NavBar from './navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
       <NavBar />
       <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/browse' element= {<Browse />} />
          <Route path='/mylist' element={ <MyList />} />
      </Routes>
    </Router>
  );
}

export default App;
