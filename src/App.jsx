import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import ContactPage from './pages/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
const App = () => {

  return (
  <div>
   < BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
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
)
}

export default App;