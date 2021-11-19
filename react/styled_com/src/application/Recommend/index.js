import React from 'react';
import { renderRoutes } from "react-router-config";

function Recommend({route}) {
  return (
    <>
    Recommend
    {renderRoutes(route.routes)}
    </>
  )
}

export default Recommend
