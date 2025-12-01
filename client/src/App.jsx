import Home from './pages/home'
import Layout from './pages/layout'
import Dashboard from './pages/dashboard'
import WriteArticle from './pages/writeArticle'
import BlogTitle from './pages/blogTitle'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-title' element={<BlogTitle />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App