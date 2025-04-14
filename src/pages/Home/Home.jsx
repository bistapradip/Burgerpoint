import React from 'react'
import Layout from '../../components/Layouts/layout'
import Section  from './Section'
import  "../../styles/HomeStyle.css"
import Section2 from './Section2'
import Menu from './Menu'


function Home() {
  return (
    <div>
      <Layout>
        <Section/>
        <Section2/>
        <Menu/>
      </Layout>
    </div>
  )
}

export default Home
