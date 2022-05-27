import React, {useState} from 'react';


export default function TestFile() {
    const thingsArray = ['Thing 1', 'Thing 2'];
    const [things, setThings] = useState(thingsArray);

    const [stuff, setStuff] = useState('No');
    const [active, setActive] = useState(false);

    const thingsElement = things.map(item => <p key={item}>Thing: {item}</p>)
 
    const addItem = () => {
        let newItem = `Thing ${things.length + 1}`;
        setThings(prev => [...prev, newItem])

    }

    const handleClick = () => {
        if (active) {
            setStuff('No');
            setActive(false);
        } else{
            setStuff('Yes');
            setActive(true);
        }
    }

  return (
    <div className='container'>
        <button onClick={addItem}>Add Item</button>
        <button onClick={handleClick}>Change Stuff</button>
        {thingsElement}
        <h3>{stuff}</h3>
    </div>
  )
}
