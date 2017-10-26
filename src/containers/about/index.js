import React from 'react'
import Content from '../../components/Content'
import ContentHeader from '../../components/ContentHeader'

const About = () => (
  <div>
    <ContentHeader title="About Page" subtitle="demo page" />
    <Content>
      <p>Did you get here via Redux?</p>
    </Content>
  </div>
)

export default About
