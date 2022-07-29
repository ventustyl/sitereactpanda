import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageIndex from './components/PageIndex';
import PageProduits from './components/PageProduits'
import PagePacks from './components/PagePacks';
import PagePropos from './components/PagePropos';
import PageForum from './components/PageForum';
import PageContact from './components/PageContact';


function App() {
  return (
    <Router>
    <Routes>
      <Route path ="/" element={<PageIndex />} />
      <Route path='/PageProduits' element= {<PageProduits/>}/>
      <Route path='/PagePacks' element= {<PagePacks/>}/>
      <Route path='/PagePropos' element= {<PagePropos/>}/>
      <Route path='/PageForum' element= {<PageForum/>}/>
      <Route path='/PageContact' element= {<PageContact/>}/>
    </Routes>

    </Router>
  );
}

export default App;