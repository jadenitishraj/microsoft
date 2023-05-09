import {useState, useEffect} from 'react';
import HeaderForm from './HeaderForm';
import UpdateHeaderForm from './UpdateHeaderForm';

import HeaderList from "./HeaderList";
import { useSelector, useDispatch  } from 'react-redux';
import { fetchPersons } from "../../../actions/fetchPosts";
import { fetchMenu } from "../../../actions/fetchMenu";


export default function AdminHeader() {
const [navList, setNavList] = useState(['test1','test2']);
const [navText, setNavText] = useState('');
const [showUpdate, setShowUpdate] = useState(false);
const [updateText, setUpdateText] = useState({});

const dispatch = useDispatch();

const menuList = useSelector((state) => state.menuData.menu);
console.log(menuList);

useEffect(() => {
  if(navText.length > 10) {
    console.log("cannot be more than 10")
  }
},[navText]);

useEffect(() => {
  dispatch(fetchPersons())
  dispatch(fetchMenu())
},[]);

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
  
  setNavList(updatedNavData);
  setShowUpdate(false);

}

  return (
    <section className="admin-header container">
        <h1>This is admin Header</h1>
        {!showUpdate && <HeaderForm textChange={textChange} submitData={submitData}/>}
        { showUpdate && <UpdateHeaderForm setShowUpdate={setShowUpdate} updateText={updateText} submitUpdateForm={submitUpdateForm}/> }
        <HeaderList navList={menuList} deleteNav={deleteNav} updateNav={updateNav}/>
    </section>
  );
}
