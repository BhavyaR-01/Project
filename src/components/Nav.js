
import React, {useEffect} from "react";

import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

const Nav=()=>{
    return (
        <React.Fragment>
            {/*<div img style={{
                backgroundImage:
                "url('https://www.turkeytradedata.com/images/outstorybg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "1000px"
            }}>*/}
            <div className="Title">
            <h1>All Customer</h1>
            </div>
            <div className="navbar">

                {/* <Link to="allColleges"><Button variant="contained" color="secondary"></Button></link>*/}
                <Link to="/home"><button type="button">Home</button></Link>
                <Link to="/about"><button type="button">About us</button></Link>
                <Link to="/allCustomer"><button type="button">AllCustomer</button></Link>
                <Link to="/deleteCustomer"><button type="button">DeleteCustomer</button></Link>
                <Link to="/UpdateCustomer"><button type="button">Update&Create Customer</button></Link>
            </div>
            <div className="Footer">

            </div>
        {/*</div>*/}
        </React.Fragment>
    )
}
export default Nav;