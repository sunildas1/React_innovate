import { useState } from 'react'
import Navbar from './sections/navbar/Navbar'
import Banner from './sections/banner/Banner'
import Company from './sections/company/Company'
import Tools from './sections/tool/Tools'
import Business from './sections/business/Business'
import Distribution from './sections/distribution/Distribution'
import Plan from './sections/plan/Plan'
import Watch from './sections/watch/Watch'
import Team from './sections/team/Team'
import Email from './sections/email;/Email'
import Footer from './sections/footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Company/>
      <Tools/>
      <Business/>
      <Distribution/>
      <Plan/>
      <Watch/>
      <Team/>
      <Email/>
      <Footer/>
    </>
  )
}

export default App
