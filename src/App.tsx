import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Home from './pages/home'
import Mypage from './pages/mypage/mypage'

function App() {
	return (
		<div className="App">
			<Home />
			<Mypage />
			<header className="App-header" />
		</div>
	)
}

export default App
