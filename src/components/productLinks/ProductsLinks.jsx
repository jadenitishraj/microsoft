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


