import Home from './pages/home'
import Layout from './pages/Layout'
import Dashboard from './pages/dashboard'
import WriteArticle from './pages/writeArticle'
import BlogTitle from './pages/blogTitle'
import GenerateImage from './pages/generateImage'
import RemoveBackground from './pages/removeBackground'
import RemoveObject from './pages/removeObject'
import ReviewResume from './pages/reviewResume'
import Comunity from './pages/comunity'
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
          <Route path='generate-image' element={<GenerateImage />} />
          <Route path='Remove-Background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='Comunity' element={<Comunity />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App