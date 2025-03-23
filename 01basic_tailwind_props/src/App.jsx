import Card from './components/card'
import './css/main.css'

function App() {
  let props={
    headingOne:'Card One Heading',
    descOne: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At explicabo eos nesciunt nemo fugit maxime, assumenda, minima sunt, molestiae consequuntur quibusdam sequi earum quae voluptatum ducimus eum. Sapiente, porro maxime.',
    headingTwo:'Card Two Heading',
    descTwo: ' Second Desc Lorem ipsum, dolor sit amet consectetur adipisicing elit. At explicabo eos nesciunt nemo fugit maxime, assumenda, minima sunt, molestiae consequuntur quibusdam sequi earum quae voluptatum ducimus eum. Sapiente, porro maxime.'
  }
  return (
    <>     
     <Card heading={props.headingOne} desc={props.descOne} />   
     <Card heading={props.headingTwo} desc={props.descTwo}/>   
    </>
  )
}

export default App
