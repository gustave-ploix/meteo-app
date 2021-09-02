import React from "react";

import './background.scss'

export default function Background({ sunDown, sunUp, temp, clouds }) {

  const date = new Date();
  const hour = date.getHours();
// const hour = 4
  
    const cloudPercentage = parseInt(clouds)
    const temperature = parseInt(temp);

  let sunset = parseInt(sunDown)
  let classname = "";

  const sunrise = parseInt(sunUp);

    const journey = () => {
        if(cloudPercentage >= 0 && cloudPercentage <= 10){
            classname="cloudZero"
        }else if(cloudPercentage >= 10 && cloudPercentage <= 20) {
            classname="cloudOne"
        }else if(cloudPercentage >= 20 && cloudPercentage <= 30) {
            classname="cloudTwo"
        }else if(cloudPercentage >= 30 && cloudPercentage <= 40) {
            classname="cloudThree"
        }else if(cloudPercentage >= 40 && cloudPercentage <= 50) {
            classname="cloudFour"
        }else if(cloudPercentage >= 50 && cloudPercentage <= 60) {
            classname="cloudFive"
        }else if(cloudPercentage >= 60 && cloudPercentage <= 70) {
            classname="cloudSix"
        }else if(cloudPercentage >= 70 && cloudPercentage <= 80) {
            classname='cloudSeven'
        }else if(cloudPercentage >= 80 && cloudPercentage <= 90) {
            classname="cloudEight"
        }else if(cloudPercentage >= 90 && cloudPercentage <= 101) {
            classname="cloudNine"
        }
    }

   
    
    
    
    if(hour >= sunrise + 2 && hour <= sunset + 3) {
        journey()
        console.log("journey");
    }else if(   hour === 22|| 
                hour === 23||
                hour === 0 ||
                hour === 1 ||
                hour === 2 ||
                hour === 3 ||
                hour === 4 ||
                hour === 5){
        classname="night"
    }


  return(
      <div className={`bg ${classname}`}>
          {/* {classname} */}
      </div>
  )
  
}
