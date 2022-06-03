import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./styles/App.css"

import Home from '../containers/Home'

import Layout from '../components/Layout'
import NotFound from '../containers/NotFound'
import Blog from '../containers/Blog'
import Writer from '../containers/Writer'

const App = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/*" element={<NotFound/>}/>
                <Route path='blog' >
                  <Route path='' element={<Blog/>}/>
                  <Route path='writer' element={<Writer/>}/>
                </Route>
                
            </Routes>
        </Layout>
    </Router>
  )
}

export default App