import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Form2 from './Form/Form2.jsx'
// import Slider from './Projects/Slider.jsx'
// import Landing1 from './Projects/Landing1.jsx'
// import Images from './Projects/Images.jsx'
// import Intro from './gsap-demo/Intro.jsx'
// import Text from './gsap-demo/Text.jsx'
// import Index from './Projects/Elastic-clone/Index.jsx'
import Demo1 from './tailwind-css/Demo1'
// import Demo2 from './tailwind-css/Demo2' 
// import Demo3 from './tailwind-css/Demo3' 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Demo1   />    
  </StrictMode>,
)
