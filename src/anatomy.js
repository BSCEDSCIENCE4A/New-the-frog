import React from "react";
import ThreeJsCanvas from "./components/threejs_canvas";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
// import PropTypes from "prop-types";
export default function Anatomy() {
  return (
    <PerfectScrollbar>
    <div className={"common-container anatomy-container col-md-12"}>
      <ThreeJsCanvas  orientation="landscape"/>
    </div>
    </PerfectScrollbar>
  )
}
Anatomy.propTypes = {};



