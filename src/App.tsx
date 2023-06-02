import React from 'react'
import './App.scss'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UserLayout from './layouts/UserLayout'
import Search from './pages/search'
//MyPage!!!!
import Mypage from './pages/mypage'
import Jjimitems from './pages/mypage/jjim-items'
import Certprofile from './pages/mypage/cert-profile'
import Editprofile from './pages/mypage/cert-profile/edit-profile'
import Checkaccount from './pages/mypage/account'
import Addaccount from './pages/mypage/account/add-account'
import Wooribankaccount from './pages/mypage/account/bank-account-woori'
import Shbankaccount from './pages/mypage/account/bank-account-sh'
import Nhbankaccount from './pages/mypage/account/bank-account-nh'
import Kbbankaccount from './pages/mypage/account/bank-account-kb'
import Kakaobankaccount from './pages/mypage/account/bank-account-kakao'
import Kbankaccount from './pages/mypage/account/bank-account-k'
import Hanabankaccount from './pages/mypage/account/bank-account-hana'
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
        <Route path="/user/mypage/:username" element={<Mypage />} />
        //Mypage!!!!
        <Route path="/user/mypage/:username/jjim-items" element={<Jjimitems />} />
        <Route path="/user/mypage/:username/cert-profile" element={<Certprofile />} />
        <Route path="/user/mypage/:username/cert-profile/edit-profile" element={<Editprofile />} />
        <Route path="/user/mypage/:username/account" element={<Checkaccount />} />
        <Route path="/user/mypage/:username/account/add-account" element={<Addaccount />} />
        <Route path="/user/mypage/:username/account/bank-account-woori" element={<Wooribankaccount />} />
        <Route path="/user/mypage/:username/account/bank-account-sh" element={<Shbankaccount />} />
        <Route path="/user/mypage/:username/account/bank-account-nh" element={<Nhbankaccount />} />
        <Route path="/user/mypage/:username/account/bank-account-kb" element={<Kbbankaccount />} />
        <Route path="/user/mypage/:username/account/bank-account-kakao" element={<Kakaobankaccount />} />
        <Route path="/user/mypage/:username/account/bank-account-k" element={<Kbankaccount />} />
        <Route path="/user/mypage/:username/account/bank-account-hana" element={<Hanabankaccount />} />
         //Access!!!!
        <Route path="/user/access/" element={<Access />} />
        <Route path="/user/access/agesignup" element={<AgeSignUp />} />
        <Route path="/user/access/signupform" element={<SignUpForm />} />
        <Route path="/user/access/login" element={<LogIn />} />
        <Route path="/user/access/logout" element={<LogOut />} />
        <Route path="/user/access/passwordcheck" element={<PasswordCheck />} />
        <Route path="/user/access/passwordchangeform" element={<PasswordChangeForm />} />
        //Payment!!!!
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
