import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch, connect } from 'react-redux'
import { darkMode, lightMode } from "./features/modeSlice"
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'
import { useEffect } from 'react';

function App() {

  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }

  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{ 'width': '25vw' }} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [data.objectId, dispatch])

  return (
    <div style={{ backgroundColor: mode.color4, color: 'black' }} className="App">
      <Nav />
      <button onClick={toggleMode}>{mode.darkMode ? "Light Mode" : "Dark Mode"}</button>
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => {
        dispatch(inputId(Number(e.target.value)))
      }} />
      <div>
        {/* {data.objectId} */}
        {renderImg()}
      </div>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})

export default connect(mapStateToProps)(App)