import {useState, useEffect} from 'react';
import FooterHeadingForm from './FooterHeadingForm';
import UpdateFooterHeadingForm from './UpdateFooterHeadingForm';

import FooterHeadingList from "./FooterHeadingList";
import { useSelector, useDispatch  } from 'react-redux';
import { fetchPersons } from "../../../actions/fetchPosts";
import { fetchFooterHeading, addFooterHeading, deleteFooterHeading, updateFooterHeading } from "../../../actions/fetchFooterHeading";


export default function FooterHeading() {
// const [navList, setNavList] = useState(['test1','test2']);
const [navText, setNavText] = useState('');
const [showUpdate, setShowUpdate] = useState(false);
const [updateText, setUpdateText] = useState({});

const dispatch = useDispatch();
const footerHeadingList = useSelector((state) => state.footerHeadingData.footerHeading);


useEffect(() => {
  if(navText.length > 10) {
  }
},[navText]);

useEffect(() => {
  dispatch(fetchFooterHeading())
},[]);

const textChange = (e) => {
  setNavText(e.target.value);
}

const submitData = async() => {
  if(navText.length) {
    // const updatedNavData = [...navList, navText];
    // setNavList(updatedNavData);
    
    dispatch(addFooterHeading(  {
      heading: navText,
      links: []
    },));
  } else {
    alert("navtext cannot be empty")
  }
}

const deleteNav = (id) => {


  dispatch(deleteFooterHeading(id))
  // const updatedNavData = [...navList];
  // const deletedArray = updatedNavData.filter((updatedNavDatas, index) => {
  //   if(indexData === index) {
  //     return false; //delete
  //   }
  //   return true
  // })

  // setNavList(deletedArray);

}

const updateNav = (indexData, navListData) => {
  setShowUpdate(true);
  const updateJson = {...updateText};



  updateJson.key = indexData;
  updateJson.value = navListData;

  setUpdateText(updateJson);
}


const submitUpdateForm = (updatedNavText,id) => {


  
  dispatch(updateFooterHeading({
    heading: updatedNavText,
    links: []
  }, id));


  // const updatedNavData = [...navList];

  // updatedNavData[key] = updatedNavText;
  
  // setNavList(updatedNavData);
  // setShowUpdate(false);

}

  return (
    <section className="admin-header container">
        <h1>This Footer Heading Page</h1>
        {!showUpdate && <FooterHeadingForm textChange={textChange} submitData={submitData}/>}
        { showUpdate && <UpdateFooterHeadingForm setShowUpdate={setShowUpdate} updateText={updateText} submitUpdateForm={submitUpdateForm}/> }
        <FooterHeadingList navList={footerHeadingList} deleteNav={deleteNav} updateNav={updateNav}/>
    </section>
  );
}
