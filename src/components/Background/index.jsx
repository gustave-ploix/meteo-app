import React from "react";

import './background.scss'

export default function Background({ sunDown, sunUp }) {

  const date = new Date();
  const hour = date.getHours();
  
  let sunset = parseInt(sunDown)
  let classname = "";

    if(sunset + 1 == hour){
        classname = "plusOne"
    }else if(sunset + 2 === hour) {
        classname = "plusTwo"
    }else if(sunset + 3 === hour){
        classname = "plusThree"
    }else if(sunset + 4 === hour){
        classname = "plusFour"
    }else if(sunset + 5 === hour){
        classname = "plusFive"
    }else if(sunset + 6 === hour){
        classname = "plusSix"
    }else if(sunset + 7 === hour){
        classname = "plusSeven"
    }else if(sunset + 8 === hour){
        classname = "plusEight"
    }else if(sunset + 9 === hour){
        classname = "plusNine"
    }



  return(
      <div className={classname}>
          {/* {classname} */}
      </div>
  )
  
}
