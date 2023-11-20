import React from 'react';
import { Content, Header, SideMenu, Modal } from '../../layout'

export const Home = () => {
  return (
    <>
        <Header/>
        <SideMenu content={<Content/>}/>
        <Modal/>
    </>
  )
}