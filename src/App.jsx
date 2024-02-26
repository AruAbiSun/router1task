
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import Navbar from './components/Navbar';

const App = () => {
   let data = [
     {
       image:
         "https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg",
       head: "Full Stack Development",
       content:
         "Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development.",
     },
     {
       image:
         "https://media.istockphoto.com/id/1483358448/photo/programmer-people-working-laptops-or-smartphones-with-ai-artificial-intelligence-software.jpg?s=1024x1024&w=is&k=20&c=IivvfOtx7Rrj1OOkAqcPNiY6gXWUOh2itxLRr2qN_O0=",
       head: "Data Science",
       content:
         "Data science is a multidisciplinary field that uses scientific methods, processes, and systems to extract knowledge from data in various forms. Data scientists use methods from many disciplines, including statistics. However, the fields differ in their processes and the problems they study.",
     },
     {
       image:
         "https://media.istockphoto.com/id/1331943958/photo/digital-cloud-security-background-concept.webp?s=1024x1024&w=is&k=20&c=qLz9zh2fEn5j2WS_is5QYRzOO2wUlT5AjI2FtzA5TBo=",
       head: "Cyber Security",
       content:
         "Cyber security can be described as the collective methods, technologies, and processes to help protect the confidentiality, integrity, and availability of computer systems, networks and data, against cyber-attacks or unauthorized access.",
     },
     {
       image:
         "https://media.istockphoto.com/id/1346675635/photo/modern-medical-research-laboratory-portrait-of-latin-and-black-young-scientists-using.webp?s=1024x1024&w=is&k=20&c=BIvYfjYgaaTNyaQBoKHUilB0LCRmuax7Ym2XcNTNkro=",
       head: "Career Science",
       content:
         "Career is an important aspect of any person's life. It determines the kind of lifestyle one will lead and his/her position in the society. While everyone dreams of a good lifestyle not everyone is able to build a strong career that can ensure the same.",
     },
   ];
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstackdevelopment" element={<FullStackDevelopment data={data} />} />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route path="/cybersecurity" element={<CyberSecurity data={data} />} />
          <Route path="/career" element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;