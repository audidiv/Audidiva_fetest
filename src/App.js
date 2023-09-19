import React, { Component } from 'react'

import NavbarComponent from './components/NavbarComponent';
import JumbotronComponent from './components/JumbotronComponent';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import AddContactPage from './pages/AddContactPage';
import EditContactPage from './pages/EditContactpage';
import DetailContactPage from './pages/DetailContactPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <JumbotronComponent/>
        <Routes>
          <Route path='/' exact element={<HomePages/>}/>
          <Route path='/add' exact element={<AddContactPage/>}/>
          <Route path='/detail/:id' exact Component={DetailContactPage} element={<DetailContactPage/>}/>
          <Route path='/edit/:id' exact element={<EditContactPage/>}/>
        </Routes>
      </div>
    )
  }
}

