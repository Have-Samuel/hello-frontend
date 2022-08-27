import { useEffect }from 'react';
import { useDispatch } from 'react-redux';
import { thunkReducer } from './redux/reducer';
import Greeting from './Greeting';
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunkReducer())
  }, [])

  return (
    <div className='App'>
      <Greeting />
    </div>
  )
}

export default App;
