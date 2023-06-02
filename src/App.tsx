import React from 'react'
import './App.scss'
import Home from './pages/home'
import Mypage from './pages/mypage'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UserLayout from './layouts/UserLayout'
import Search from './pages/search'

//Access
import Access from './pages/access'
import AgeSignUp from './pages/access/ageSignUp'
import SignUpForm from './pages/access/signUpForm'
import LogIn from './pages/access/logIn'
import LogOut from './pages/access/logOut'
import PasswordCheck from './pages/access/passwordCheck'
import PasswordChangeForm from './pages/access/passwordChangeForm'
//Payment
import Payment from './pages/payment'
import Agreement from './pages/payment/agreement'
import CheckInfo from './pages/payment/checkInfo'
import PayMethod from './pages/payment/payMethod'
import CheckOrder from './pages/payment/checkOrder'
import OrderComplete from './pages/payment/orderComplete'


function App() {
  return (
    <Routes>
      <Route path="/user" element={<UserLayout />}>
        <Route path="/user/mypage/:username" element={<Mypage />} />
         //Access
        <Route path="/user/access/" element={<Access />} />
        <Route path="/user/access/agesignup" element={<AgeSignUp />} />
        <Route path="/user/access/signupform" element={<SignUpForm />} />
        <Route path="/user/access/login" element={<LogIn />} />
        <Route path="/user/access/logout" element={<LogOut />} />
        <Route path="/user/access/passwordcheck" element={<PasswordCheck />} />
        <Route path="/user/access/passwordchangeform" element={<PasswordChangeForm />} />
        //Payment
        <Route path="/user/payment/" element={<Payment />} />
        <Route path="/user/payment/agreement" element={<Agreement />} />
        <Route path="/user/payment/checkInfo" element={<CheckInfo />} />
        <Route path="/user/payment/payMethod" element={<PayMethod />} />
        <Route path="/user/payment/checkOrder" element={<CheckOrder />} />
        <Route path="/user/payment/orderComplete" element={<OrderComplete />} />

      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
