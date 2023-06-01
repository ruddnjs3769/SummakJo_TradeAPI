import React from 'react'
import './App.scss'
import Home from './pages/home'
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

import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UserLayout from './layouts/UserLayout'
import Search from './pages/search'
function App() {
  return (
    <Routes>
      <Route path="/user" element={<UserLayout />}>
        <Route path="/user/mypage/:username" element={<Mypage />} />
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
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
