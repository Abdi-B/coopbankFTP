import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import { BrowserRouter as Router,
  Switch,
  Routes ,
  Route,
  Link} from "react-router-dom";
import Create from './pages/Create';
import Layout from './components/Layout';
import DrawerList from './components/DrawerList';
import Note from './pages/Note';
import Department from './pages/Department';
import Announcement from './components/Announcement';
import CreateAnnouncement from './pages/CreateAnnouncement';
import AppContext from './context/AppContext';
import { useState } from 'react';
import AllAnnouncement from './components/AllAnnouncement';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import CoopLibrary from './components/CoopLibrary';
import Upload from './pages/Upload';
import {AuthContextProvider} from './context/AuthContext'




function App() {

  const [nameContext, SetNameContext] = useState(true);
  const [navbar, SetNavbar] = useState(true);

  return (
 
          <AppContext.Provider value={{ nameContext, SetNameContext, navbar, SetNavbar }} >
        
        <Router>
    
              <Layout >
                 <Routes >
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route exact path="/one/:item/:item2" element={<Department />} />
                    <Route  path='/coopLibrary' element={<CoopLibrary />} />
                    <Route path="/create" element={<Create />} />
                    
                    <Route path="/announcement" element={<CreateAnnouncement />} />
                    <Route path='/announcements' element={<AllAnnouncement />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/upload' element={<Upload />} /> 
                    
                  </Routes>
              </Layout>
              
        </Router>
    
         </AppContext.Provider>
   


  )
}

export default App;
