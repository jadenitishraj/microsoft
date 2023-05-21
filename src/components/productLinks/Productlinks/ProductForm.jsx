export default function ProductForm(props) {


    return (
        <div>
            <input type="text" onChange={props.textChange}></input>
            {/* <button onClick={props.submitData}>Submit</button> */}
        </div>
    )
}