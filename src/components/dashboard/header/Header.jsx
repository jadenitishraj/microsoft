import {useState, useEffect} from 'react';
import HeaderForm from './HeaderForm';
import HeaderList from "./HeaderList";

export default function AdminHeader() {
const [navList, setNavList] = useState([]);

const [navText, setNavText] = useState('');


useEffect(() => {
  if(navText.length > 10) {
    console.log("cannot be more than 10")
  }
},[navText]);

const textChange = (e) => {
  setNavText(e.target.value);
}

const submitData = () => {
  if(navText.length) {
    const updatedNavData = [...navList, navText];
    setNavList(updatedNavData);
  } else {
    alert("navtext cannot be empty")
  }
}

const deleteNav = (indexData) => {
  const updatedNavData = [...navList];
  const deletedArray = updatedNavData.filter((updatedNavDatas, index) => {
    if(indexData === index) {
      return false; //delete
    }
    return true
  })

  setNavList(deletedArray);

}


console.log("add testing changes")
  return (
    <section className="admin-header container">
        <h1>This is admin Header</h1>
        <HeaderForm textChange={textChange} submitData={submitData}/>
        <HeaderList navList={navList} deleteNav={deleteNav}/>
    </section>
  );
}
