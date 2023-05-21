
export default function FooterLinksForm(props) {
  return (
    <div className='form-data'>
      <select name="cars" onChange={(e) => props.textChange(e, 'heading')}>
        <option value="">Select Heading</option>
         {
          props.footerHeadings.length && props.footerHeadings.map((headingsData) => (
             <option value={headingsData.id}>{headingsData.heading}</option>
          ))
         }
      </select>
      {' '}
      <input type="text" onChange={(e) => props.textChange(e, 'text')} placeholder="enter link name"></input>
      {' '}
      <input type="text" onChange={(e) => props.textChange(e, 'url')} placeholder="enter url"></input>
      {' '}
      <button onClick={props.submitData}>Submit</button>
    </div>
  );
}
