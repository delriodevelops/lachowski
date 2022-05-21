import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./styles/App.css"

import Home from '../containers/Home'

import Layout from '../components/Layout'

const App = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<h1>Not found</h1>}/>
            </Routes>
        </Layout>
    </Router>
  )
}

export default App