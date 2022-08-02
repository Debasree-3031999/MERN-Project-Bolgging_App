import React,{useEffect} from 'react'
import {Layout} from 'antd'
import StoryForm from '../StoryForm'
import StoryList from '../StoryList'
import styles from './styles'
import { useDispatch } from 'react-redux'
import {getStories} from "../../actions/stories";



const {Sider,Content}=Layout
export default function Home() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getStories());
  },[dispatch])
  
  return (
    <Layout>
        <Sider style={styles.sider} width={400}>
            <StoryForm/>
        </Sider>
        <Content style={styles.content}>
            <StoryList/>
        </Content>
    </Layout>
  )
}
