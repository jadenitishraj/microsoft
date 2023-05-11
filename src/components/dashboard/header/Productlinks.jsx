
import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux";

import { fetchproductlinks } from "../../../actions/fetchproductlinks";

export default function Productlinks() {

    const dispatch = useDispatch();
    const productlinklist = useSelector((state) => state.productlinkData.product_links);


    useEffect(() => {
        dispatch(fetchproductlinks())
    }, [])
    //     const productlinklist = useSelector((state) => { 
    // state.productlinkData.product_links })



    return (
        <div>
            <h2>Productlinks</h2>

            {
                productlinklist &&
                productlinklist.map((item) => {
                    return (
                      <div>  
                    <div>

                        <li key={item.id} >hi {item.linkname}</li>
                    </div>
                    </div>
                    );
                }
                )


            }

         

            <input type="text" />
            <button> Submit</button>


        </div>
    )
}


