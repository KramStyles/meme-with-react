import React, {useState} from 'react';


export default function TestFile() {
    const thingsArray = ['Thing 1', 'Thing 2'];
    const [things, setThings] = useState(thingsArray);

    const thingsElement = things.map(item => <p key={item}>Thing: {item}</p>)

    const addItem = () => {
        let newItem = `Thing ${thingsArray.length + 1}`;
        things.push(newItem);

        console.log(things);
    }

  return (
    <div className='container'>
        <button onClick={addItem}>Add Item</button>
        {thingsElement}
    </div>
  )
}
