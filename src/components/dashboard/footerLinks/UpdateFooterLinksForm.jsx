import { useState } from 'react';



export default function UpdateFooterLinksForm(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  console.log(name)
  console.log(link)

  return (
    <div className='form-data'>
      <span>{props.selectedHeading.heading}</span>
      {' '}
      <input type="text" defaultValue={props.selectedLink.name}  onChange={(e) => setName(e.target.value)} placeholder="enter link name"></input>
      {' '}
      <input type="text" defaultValue={props.selectedLink.link}  onChange={(e) => setLink(e.target.value)} placeholder="enter url"></input>
      {' '}
      <button onClick={() => props.submitUpdateForm(name, link, props.selectedHeading.id, props.linkIndex)}>Update</button>
    </div>
  );
}
