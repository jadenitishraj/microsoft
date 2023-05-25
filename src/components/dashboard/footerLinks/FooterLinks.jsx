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
  const [selectedHeading, setSelectedHeading] = useState('');
  const [selectedLink, setSelectedLink] = useState('');
  const [linkIndex, setLinkIndex] = useState('');
  


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
    } else if (type === 'url') {
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

      const linksData = [...selectedHeading[0].links, { name: navText, link: url }];
      dispatch(updateFooterHeadingPatch({
        links: linksData
      }, headingId));
    } else {
      alert("please enter all the details")
    }
  }

  const deleteFooterLink = (indexValue, headingId) => {

    const selectedHeading = footerHeadingList.filter((footerHeading) => {
      return headingId == footerHeading.id;
    });

    const linksData = selectedHeading[0].links;
    const deletedLinksData = linksData.filter((links, index) => {
      return index !== indexValue;
    });

    // console.log(selectedHeading[0]); 

    // selectedHeading[0].links = deletedLinksData;
    // console.log(selectedHeading);

    //  const updatedHeading = {...selectedHeading[0], links: deletedLinksData};

    //  console.log(updatedHeading);

    dispatch(updateFooterHeadingPatch({
      links: deletedLinksData
    }, headingId));



  }

  const updateFooterLinks = (indexValue, headingId) => {
    setSelectedHeading(headingId);
    setShowUpdate(true);

    const selectedHeading = footerHeadingList.filter((footerHeading) => {
      return headingId == footerHeading.id;
    });

    const linksData = selectedHeading[0].links;
    const editLinksData = linksData.filter((links, index) => {
      return index == indexValue;
    });

    setSelectedHeading(selectedHeading[0]);
    setSelectedLink(editLinksData[0]);
    setLinkIndex(indexValue);


  }

  const submitUpdateForm = (name, link, headingId , indexValue) => {

    console.log(name, link, headingId)
    console.log(name.length , link.length, headingId.length);

    console.log(indexValue);

    if (name.length && link.length && headingId) {

      const selectedHeading = footerHeadingList.filter((footerHeading) => {
        return footerHeading.id == headingId;
      });

      const linksData = selectedHeading[0].links.map((linksData, index) => {

        if(index == indexValue)  {
          return  { name: name, link: link }
        }

      })

      dispatch(updateFooterHeadingPatch({
        links: linksData
      }, headingId));
    } else {
      alert("please enter all the details")
    }
  }

  return (
    <section className="admin-header container">
      <h1>This Footer Links</h1>
      {!showUpdate && <FooterHeadingForm textChange={textChange} submitData={submitData} footerHeadings={footerHeadingList} />}
      {showUpdate && <UpdateFooterHeadingForm
        setShowUpdate={setShowUpdate}
        updateText={updateText}
        submitUpdateForm={submitUpdateForm}
        footerHeadings={footerHeadingList}
        selectedHeading={selectedHeading}
        selectedLink={selectedLink} 
        linkIndex={linkIndex}
        />
        }
      <FooterHeadingList footerData={footerHeadingList} deleteFooterLink={deleteFooterLink} updateFooterLinks={updateFooterLinks} />
    </section>
  );
}
