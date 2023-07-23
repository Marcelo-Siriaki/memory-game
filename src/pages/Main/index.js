import { useState } from 'react';
import Cards from '../../cards';
import Sidebar from '../sidebar';
import Table from '../table';
import './style.css';

function Main() {

  const [stateCards, setStateCards] = useState(Cards);
  return (
    <div className='container'>
      <Sidebar
        stateCards={stateCards}
        setStateCards={setStateCards}
        cards={Cards}
      />
      <Table
        stateCards={stateCards}
        setStateCards={setStateCards}
      />
    </div>
  );
}

export default Main;
