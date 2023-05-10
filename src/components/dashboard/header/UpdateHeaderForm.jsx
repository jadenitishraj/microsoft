import {useState} from 'react';

export default function UpdateHeaderForm(props) {
    const [updatedNavText, setUpdatedNavText] = useState('');

    return (
          <div className='form-data'>
            <input type="text" onChange={(e) => setUpdatedNavText(e.target.value)} defaultValue={props.updateText.value}></input>
            <button onClick={() => props.submitUpdateForm(updatedNavText, props.updateText.key)}>Update</button>
            <button onClick={() => props.setShowUpdate(false)}>Cancel</button>
          </div>
    );
  }
  