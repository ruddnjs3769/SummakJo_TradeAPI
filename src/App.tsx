import React from 'react'
import './App.scss'
import Home from './pages/home'
import Mypage from './pages/mypage'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UserLayout from './layouts/UserLayout'
import Search from './pages/search'
import Access from './pages/access'
import AgeSignUp from './pages/access/ageSignUp'
import SignUpForm from './pages/access/signUpForm'
import LogIn from './pages/access/logIn'
import LogOut from './pages/access/logOut'
import PasswordCheck from './pages/access/passwordCheck'
import PasswordChangeForm from './pages/access/passwordChangeForm'

function App() {
  return (
    <Routes>
      <Route path="/user" element={<UserLayout />}>
        <Route path="/user/mypage/:username" element={<Mypage />} />
        <Route path="/user/access/" element={<Access />} />
        <Route path="/user/access/agesignup" element={<AgeSignUp />} />
        <Route path="/user/access/signupform" element={<SignUpForm />} />
        <Route path="/user/access/login" element={<LogIn />} />
        <Route path="/user/access/logout" element={<LogOut />} />
        <Route path="/user/access/passwordcheck" element={<PasswordCheck />} />
        <Route path="/user/access/passwordchangeform" element={<PasswordChangeForm />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
