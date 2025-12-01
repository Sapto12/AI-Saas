import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout  from "./pages/layout";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import writeArticle from "./pages/writeArticle";
import blogTitle from "./pages/blogTitle";
const App = () => {
  return(
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ai" element={<Layout/>} >
            <Route index element={<Dashboard/>} />
            <Route path="write-article" element={<writeArticle/>} />
            <Route path="blog-title" element={<blogTitle/>} />
             
        </Route>
      </Routes>
    </div>
  )
}
export default App;