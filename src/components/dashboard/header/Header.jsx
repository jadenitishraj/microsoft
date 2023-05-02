import {useState, useEffect} from 'react';
import HeaderForm from './HeaderForm';
import UpdateHeaderForm from './UpdateHeaderForm';

import HeaderList from "./HeaderList";

export default function AdminHeader() {
const [navList, setNavList] = useState(['test1','test2']);
const [navText, setNavText] = useState('');
const [showUpdate, setShowUpdate] = useState(false);
const [updateText, setUpdateText] = useState({});


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

const updateNav = (indexData, navListData) => {
  setShowUpdate(true);
  const updateJson = {...updateText};
  updateJson.key = indexData;
  updateJson.value = navListData;
  setUpdateText(updateJson);
}


const submitUpdateForm = (updatedNavText,key) => {
  const updatedNavData = [...navList];

  updatedNavData[key] = updatedNavText;
  
  // const updatedArray = updatedNavData.map((updatedNavDatas, index) => {
  //   if(index === key) {
  //     return updatedNavText; 
  //   }
  //   return updatedNavDatas
  // })
  
  setNavList(updatedNavData);
  setShowUpdate(false);

}


  return (
    <section className="admin-header container">
        <h1>This is admin Header</h1>
        {!showUpdate && <HeaderForm textChange={textChange} submitData={submitData}/>}
        { showUpdate && <UpdateHeaderForm setShowUpdate={setShowUpdate} updateText={updateText} submitUpdateForm={submitUpdateForm}/> }
        <HeaderList navList={navList} deleteNav={deleteNav} updateNav={updateNav}/>
    </section>
  );
}
