import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { store } from './Reducers/configureStore';
import BaiTapBurger from './BaiTapBurger/BaiTapBurger';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='' element={<BaiTapBurger/>}/>
  </Routes>
  </BrowserRouter>

 </Provider>
 </>
)

