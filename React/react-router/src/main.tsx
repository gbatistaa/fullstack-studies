import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home'
import { About } from './components/About/About';
import { Menu } from './components/Menu/Menu';
import { Posts } from "./components/Posts/Posts";
import { Redirect } from './components/Redirect/Redirect';
import { NotFound } from './components/Error/Error';
import { Post } from './components/Posts/Post/Post';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Posts />} /> */}
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<Post />} />
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
