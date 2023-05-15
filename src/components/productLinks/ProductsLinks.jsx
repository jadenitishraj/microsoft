import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductlinks } from "../../actions/fetchproductlinks";

export default function ProductLinks() {

  const dispatch = useDispatch();
  const productlinkitem = useSelector((state) => state.productlinkData.product_links)


  useEffect(() => {
    dispatch(fetchproductlinks())
  }, [])
  return (


    <section className="product-links container">

      {

        productlinkitem && productlinkitem.map((item) => {

          return (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <a href="#">{item.linkname}</a>
            </div>
          )

        })
      }
    </section>

  );
}



/////safe side data:
{/* 
      <div>
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40"
          alt=""
        />
        <a href="#">Choose your Microsoft 365</a>

      </div>
      <div>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40"
          alt=""
        />
        <a href="#">Choose your Microsoft 365</a>
      </div>
      <div>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Xbox-Logo-80x80?wid=40&hei=40"
          alt=""
        />
        <a href="#">Choose your Microsoft 365</a>
      </div>
      <div>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40"
          alt=""
        />
        <a href="#">Choose your Microsoft 365</a>
      </div> */}

