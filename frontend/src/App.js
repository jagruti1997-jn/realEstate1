import React from "react";
import './App.css'

import Login from "./components/Login"
import Register from "./components/Register";
import Home from "./components/Home"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <>
    {/* <Routes>

   
    <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes> */}


      
    <BrowserRouter>
    <SideBar>
     <Routes>
    
            <Route path="/property" element={<Property/>}/>

              <Route path='/' element={<NewPage/>}>
                 <Route path='' element={<BasicInfo/>} />
                 <Route path='propertydetails' element={<PropertyDetails/>} />
                 <Route path='generalinfo' element={<GeneralInfo/>} />
                 <Route path='locationinfo' element={<Locationinfo/>} />
              </Route>
            <Route path="/assistance" element={<Assistance/>}/>
            <Route path="/recievedinterest" element={<RecievedInterest/>}/>
            <Route path="/sentinterest" element={<SentInterest/>}/>
            <Route path="/propertyviews" element={<PropertyViews/>}/>
            <Route path="/tariffplan" element={<TariffPlan/>}/>
            <Route path='/newpage' element={<NewPage/>}/>

           
        </Routes>
        </SideBar>
  </BrowserRouter> 
  
    </>
  );
}

export default App;
