import './App.css';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getAllPosts} from './store/Actions/TestActions'
import Users from './components/Users'  

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getAllPosts());
  },[])

  return (
    <div className="App">
       <h1>React redux thunk demo App</h1>
       <Users />
    </div>
  );
}

export default App;
