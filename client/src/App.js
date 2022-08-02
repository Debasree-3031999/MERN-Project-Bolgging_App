import React from 'react';
import {Layout,Image,Typography} from "antd";
import Logo from './images/m-icon.png';
import './App.css';
// import { Footer } from 'antd/lib/layout/layout';
import Home from './components/Home';
import styles from './styles'

const {Title}=Typography;
const{Header,Footer}=Layout

function App() {
  return (
<Layout style={styles.layout}>
  <Header style={styles.header}>
<Image style={styles.image} width="45" preview="false" src={Logo}/>
<Title style={styles.title}>moodify</Title>
  </Header>
  <Home/>
  <Footer style={styles.footer}>2022 moodify</Footer>
</Layout>

  )
}

export default App;
