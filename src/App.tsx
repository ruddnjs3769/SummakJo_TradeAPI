import React from 'react'
import './App.scss'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UserLayout from './layouts/UserLayout'

//Main!!!!
import Search from './pages/search'
import Detail from './pages/detail'
//MyPage!!!!
import MyPage from './pages/mypage'
import JjimItems from './pages/mypage/jjimItems'
import CertProfile from './pages/mypage/certProfile'
import EditProfile from './pages/mypage/certProfile/editProfile'
import CheckAccount from './pages/mypage/account'
import AddAccount from './pages/mypage/account/addAccount'
import BankName from './pages/mypage/account/banks'
//Access!!!!
import Access from './pages/access'
import AgeSignUp from './pages/access/ageSignUp'
import SignUpForm from './pages/access/signUpForm'
import LogIn from './pages/access/logIn'
import LogOut from './pages/access/logOut'
import PasswordCheck from './pages/access/passwordCheck'
import PasswordChangeForm from './pages/access/passwordChangeForm'
//Payment!!!!
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
        <Route path="/user/mypage/:username" element={<MyPage />} />
        {/* MyPage!!!! */}
        <Route path="/user/mypage/:username/jjimItems" element={<JjimItems />} />
        <Route path="/user/mypage/:username/certProfile" element={<CertProfile />} />
        <Route path="/user/mypage/:username/certProfile/editProfile" element={<EditProfile />} />
        <Route path="/user/mypage/:username/account" element={<CheckAccount />} />
        <Route path="/user/mypage/:username/account/addAccount" element={<AddAccount />} />
        <Route path="/user/mypage/:username/account/banks/:bankName" element={<BankName />} />
        {/* Access!!!! */}
        <Route path="/user/access/" element={<Access />} />
        <Route path="/user/access/agesignup" element={<AgeSignUp />} />
        <Route path="/user/access/signupform" element={<SignUpForm />} />
        <Route path="/user/access/login" element={<LogIn />} />
        <Route path="/user/access/logout" element={<LogOut />} />
        <Route path="/user/access/passwordcheck" element={<PasswordCheck />} />
        <Route path="/user/access/passwordchangeform" element={<PasswordChangeForm />} />
        {/* Payment!!!! */}
        <Route path="/user/:username/payment" element={<Payment />} />
        <Route path="/user/:username/payment/agreement" element={<Agreement />} />
        <Route path="/user/:username/payment/checkInfo" element={<CheckInfo />} />
        <Route path="/user/:username/payment/payMethod" element={<PayMethod />} />
        <Route path="/user/:username/payment/checkOrder" element={<CheckOrder />} />
        <Route path="/user/:username/payment/orderComplete" element={<OrderComplete />} />
      </Route>
      {/* Main!!!! */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:productId" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default App
