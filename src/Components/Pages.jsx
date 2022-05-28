import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from "./Body"
import Header from "./Header"
import TestFile from './assets/TestFile'
import React from 'react'

export default function Pages() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Body />}/>
                <Route path='/test' element={<TestFile />}/>
            </Routes>
            
        </Router>

    )
}
