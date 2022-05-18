import React, {Fragment} from 'react';
import {Link, useMatch , useResolvedPath} from "react-router-dom";


const CustomLink = ({ children, to, ...props }) => {

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Fragment>
  <div >
      <Link
        style={{ color: match ? "chocolate" : "white" }}
        
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
    </Fragment>
  );
};

export default CustomLink;