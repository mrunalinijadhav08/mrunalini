import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import ContactPage from './pages/ContactPage';

import Home from './pages/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';


const App = () => {
const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Mrunalini Anup Jadhav"
          studentPhotoUrl="/images/saniya.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
  <div>
   < BrowserRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/Admission' element={<AdmissionsPage/>}/>
      </Routes>
      <div>
       <Footer/>
      </div>
      <ChatbotComponent/>
       
    </BrowserRouter>
  </div>
  </>
)
}

export default App;