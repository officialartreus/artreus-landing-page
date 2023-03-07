import React, { Fragment } from "react";
import Footer from "../Footer/Footer";



const Layout = (props) => {
    return <Fragment>
                <div>
                    {props.children}
                </div>
            <Footer/>
        </Fragment>
}

export default Layout;

