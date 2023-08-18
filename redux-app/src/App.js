import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { FetchData } from './slices/CartSlice';

function App() {
  const state = useSelector((state) => state)
  console.log("STATE", state);
  const dispatch = useDispatch();

  if (state.cart.isLoading) {
    return (
      <div>
        <h1 style={{ marginLeft: '30%', color: 'green', fontFamily: 'cursive' }}>Fetching Data From Database...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <h2>FETCHING DATA FROM API USING REACT-REDUX</h2>
      <button className='btn btn-success' onClick={() => dispatch(FetchData())}>Fetch Items</button>
      <div>
        {state.cart.data && state.cart.data.map((item) => <ul style={{ color: 'green', fontSize: '20px' }} key={item.id}><li>{item.title}</li></ul>)}
      </div>
    </div>
  );
}

export default App;
