
export default function FooterHeadingForm(props) {
  return (
        <div className='form-data'>
          <input type="text" onChange= {props.textChange}></input>
          <button onClick={props.submitData}>Submit</button>
        </div>
  );
}
