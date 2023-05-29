// export default function HomeCards2() {
//   return (
//     <section className="home-cards container">
//       <div>
//         <img
//           src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Family-2022-M2-1?wid=297&hei=167&fit=crop"
//           alt=""
//         />
//         <h3>Surface for Business Family</h3>
//         <p>
//           Unleash the power of your team. Surface for Business devices include
//           Windows 10 Pro
//         </p>
//         <a href="#">
//           LEARN MORE <i className="fas fa-chevron-right"></i>
//         </a>
//       </div>
//       <div>
//         <img
//           src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call?wid=297&hei=167&fit=crop"
//           alt=""
//         />
//         <h3>Try Microsoft 365 for free</h3>
//         <p>
//           Get students future-ready with Windows 10 devices. Starting at $219.
//         </p>
//         <a href="#">
//           Shop Now <i className="fas fa-chevron-right"></i>
//         </a>
//       </div>
//       <div>
//         <img
//           src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Brand-Hybrid-Work?wid=297&hei=167&fit=crop"
//           alt=""
//         />
//         <h3>Thrive in a hybrid world</h3>
//         <p>Download the free 90-day evaluation for IT professionals.</p>
//         <a href="#">
//           Download Now <i className="fas fa-chevron-right"></i>
//         </a>
//       </div>
//       <div>
//         <img
//           src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Visual-Studio-Icon?wid=297&hei=167&fit=crop"
//           alt=""
//         />
//         <h3>Visual Studio 2022</h3>
//         <p>
//           Microsoft launches its affordable Surface Laptop Go and updated
//           Surface Pro X: Price, specs and more
//         </p>
//         <a href="#">
//           Get Started <i className="fas fa-chevron-right"></i>
//         </a>
//       </div>
//     </section>
//   );
// }

// import { useSelector, useDispatch } from "react-redux";
// import { Homecards } from '../../actions/Homecards'
// import { useEffect } from "react";

// export default function HomeCards() {

//   const homecardslistdata = useSelector((state) => state.Homecardslist.Homecardslistarray);
//   const dispatch = useDispatch();


//   useEffect(()=>{
//     dispatch(Homecards());
//   },[])
//   return (

//     <h2>Testing</h2>
//     {homecardslistdata}
//   )
// }
// <section className="home-cards container">


{/* <div>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=297&hei=167&fit=crop"
          alt=""
        />
        <h3>Surface Laptop 5</h3>
        <p>
          Make life easier with the Samsung Galaxy Note10 Essentials Bundle .
          Buy the Note10 phone and get up to $100
        </p>
        <a href="#">
          Learn More <i className="fas fa-chevron-right"></i>{" "}
        </a>
      </div>
      <div>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=297&hei=167&fit=crop"
          alt=""
        />
        <h3>Surface Laptop Studio</h3>
        <p>
          Bundle now and save Save up to $250 with Surface Laptop 3 for Business
          + Surface Dock for Business Bundle.
        </p>
        <a href="#">
          Learn More <i className="fas fa-chevron-right"></i>{" "}
        </a>
      </div>
      <div>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Pro-9-M1-Platinum-02-1?wid=297&hei=167&fit=crop"
          alt=""
        />
        <h3>Surface Pro 9</h3>
        <p>Give the gift of endless possibilities.</p>
        <a href="#">
          Shop now <i className="fas fa-chevron-right"></i>{" "}
        </a>
      </div>
      <div>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bing-AI-No-Text?wid=297&hei=167&fit=crop"
          alt=""
        />
        <h3>Introducing a new Bing</h3>
        <p>
          Your AI-powered copilot for the web. Ask questions. Chat to refine
          results. Get comprehensive answers and creative inspiration.
        </p>
        <a href="#">
          Learn More <i className="fas fa-chevron-right"></i>{" "}
        </a>
      </div> */}



{/* </section> */ }


//   )

// }


import { useSelector, useDispatch } from "react-redux";
import { Homecards } from '../../actions/Homecards'
import { useEffect } from "react";

export default function HomeCards2() {
  const homecardslistdata = useSelector((state) => state.Homecardslist.Homecardslistarray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Homecards());
  }, []);

  return (

    <div>
      <section className="home-cards container">
        {homecardslistdata && homecardslistdata.map((item, index) => {
          if (item.HomeCardsType === 'Type2') {
            return (
            <div key={index}>
              <img src={item.urldata} alt="" />
              <h3>{item.Headingdata}</h3>
              <p>{item.Contentdata}</p>
              <a href="#">{item.Contentlinkdata}{" "}</a>
            </div>
            )
          }
        })
        }
      </section>

    </div>
  );
}

