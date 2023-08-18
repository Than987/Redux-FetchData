import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { FetchData } from './slices/CartSlice';
import { useState } from 'react';

function App() {
  const state = useSelector((state) => state)
  console.log("STATE", state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  if (state.cart.isLoading) {
    return (
      <div>
        <h1 style={{ marginLeft: '30%', color: 'green', fontFamily: 'cursive' }}>Fetching Data From Database...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <h2 style={{fontFamily:'fantasy', color:'GrayText'}}>FETCHING DATA FROM API USING REACT-REDUX</h2>
      <button className='btn btn-info' style={{fontFamily:'cursive', color:'white'}}  onClick={() => dispatch(FetchData())}>Fetch Items</button>
      <input type='text' placeholder='Search Item...' onChange={(e) => setSearch(e.target.value)} />
      <div>
        {state.cart.data && state.cart.data.filter((items) => search.toLowerCase === "" || items.title.toLowerCase().includes(search)).map((item) => <ul style={{ color: 'green', fontSize: '18px' }} key={item.id}><li>{item.title}</li></ul>)}
      </div>
    </div>
  );
}

export default App;
