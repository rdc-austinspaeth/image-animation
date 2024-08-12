import './App.css'

function App() {
  return (
    <div className='imageAnimationContainer'>
      <div className='fluidContainer'>
        <div className='beforeImageContainer'>
          <img src='/before-fixed.png' className='beforeImage' />
        </div>
        <div className='afterImageContainer'>
          <div className='realtorLogo'>R</div>
          <div className='imageShaver'>
            <img src='/after-fixed.png' className='afterImage' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
