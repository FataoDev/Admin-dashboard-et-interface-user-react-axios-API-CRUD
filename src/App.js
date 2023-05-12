import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter';

import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthRouter from '@/pages/Auth/AuthRouter';
import AuthGuard from '@/_helpers/AuthGuard';
import './App.css';
// const user ={
//   nom:'Fatao',
//   ville:'Ouaga'
// }
function App (){
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>

          <Route path="/*"element={<PublicRouter/>}/>
          <Route path="/admin/*" element={
            <AuthGuard>
              <AdminRouter/>
            </AuthGuard>
          }/>
          <Route path='/auth/*' element={<AuthRouter/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
  }

export default App;
