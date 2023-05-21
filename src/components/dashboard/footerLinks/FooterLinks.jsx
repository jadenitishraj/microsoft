import { useState, useEffect } from 'react';
import FooterHeadingForm from './FooterLinksForm';
import UpdateFooterHeadingForm from './UpdateFooterLinksForm';

import FooterHeadingList from "./FooterLinksList";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersons } from "../../../actions/fetchPosts";
import { fetchFooterHeading, addFooterHeading, deleteFooterHeading, updateFooterHeading, updateFooterHeadingPatch } from "../../../actions/fetchFooterHeading";


export default function FooterLinks() {
  // const [navList, setNavList] = useState(['test1','test2']);
  const [navText, setNavText] = useState('');
  const [url, setUrl] = useState('');
  const [headingId, setHeadingId] = useState('');
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateText, setUpdateText] = useState({});


  const dispatch = useDispatch();
  const footerHeadingList = useSelector((state) => state.footerHeadingData.footerHeading);


  useEffect(() => {
    if (navText.length > 10) {
    }
  }, [navText]);

  useEffect(() => {
    dispatch(fetchFooterHeading())
  }, []);

  const textChange = (e, type) => {
    if (type === 'text') {
      setNavText(e.target.value);
    } else if(type === 'url') {
      setUrl(e.target.value)
    } else {
      setHeadingId(e.target.value)
    }
  }

  const submitData = async () => {
    if (navText.length && url.length && headingId.length) {

      const selectedHeading = footerHeadingList.filter((footerHeading) => {
        return footerHeading.id == headingId;
      });

      const linksData =  [...selectedHeading[0].links, { name: navText, link: url}];
      dispatch(updateFooterHeadingPatch({
        links: linksData
      }, headingId));
    } else {
      alert("please enter all the details")
    }
  }

  const deleteNav = (id) => {
    dispatch(deleteFooterHeading(id))

  }

  const updateNav = (indexData, navListData) => {
    setShowUpdate(true);
    const updateJson = { ...updateText };
    updateJson.key = indexData;
    updateJson.value = navListData;
    setUpdateText(updateJson);
  }

  const submitUpdateForm = (updatedNavText, id) => {
    dispatch(updateFooterHeading({
      heading: updatedNavText,
      links: []
    }, id));
  }

  return (
    <section className="admin-header container">
      <h1>This Footer Links</h1>
      {!showUpdate && <FooterHeadingForm textChange={textChange} submitData={submitData} footerHeadings={footerHeadingList} />}
      {showUpdate && <UpdateFooterHeadingForm setShowUpdate={setShowUpdate} updateText={updateText} submitUpdateForm={submitUpdateForm} />}
      <FooterHeadingList footerData={footerHeadingList} deleteNav={deleteNav} updateNav={updateNav} />
    </section>
  );
}
