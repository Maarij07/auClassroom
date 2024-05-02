import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectUsers } from './store/userSlice';
import { Home, Login, Signup } from './components/index';
import { useLocalContext } from './context/context';
import { onSnapshot, doc } from 'firebase/firestore';
import db from './lib/firebase';

function App() {
  const user = useSelector(SelectUsers);

  const {loggedInMail} =useLocalContext();
  const [createdClasses,setCreatedClasses]=useState([]);

  useEffect(()=>{
    if(loggedInMail){
      const mainDoc=doc(db,`CreatedClasses/${loggedInMail}`);
      // const childDoc=doc(mainDoc,`classes`);
      const unsubscribe = onSnapshot(doc(db, "CreatedClasses",`${loggedInMail}`),(doc)=>{
        console.log(" current Data: ", doc.data());
      })
      return ()=> unsubscribe();
    }
  },[loggedInMail])

  console.log(createdClasses);

  if (user.currentUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
