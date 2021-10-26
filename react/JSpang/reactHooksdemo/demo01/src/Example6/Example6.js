import React from 'react';
import Buttons from "./Buttons";
import { Color } from './color';
import ShowArea from "./showArea";

function Example6() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}
export default Example6