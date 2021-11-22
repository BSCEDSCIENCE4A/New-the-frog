import React from "react";
import ThreeJsCanvas from "./components/threejs_canvas";
// import PropTypes from "prop-types";
export default function Anatomy() {
  return (
    <div className={"common-container anatomy-container col-md-12"}>
      <ThreeJsCanvas  orientation="landscape"/>
    </div>
  )
}
Anatomy.propTypes = {};



