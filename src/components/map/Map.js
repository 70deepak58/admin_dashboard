import React , { useState }from 'react';
import statesData from './statesData';




const Map = () => {
  const [col, setCol] = useState("#c0c0c0");
  const [statesel, setStateSel] = useState(statesData[0]["id"]);
  const [stateselpath, setStateSelPath] = useState(statesData[0]["path"]);
  function handleStateClick(id){
    // setStateSel(id);
    // console.log(statesel);
    // setStateSelPath(statesData.map((a)=>(a.id==id?a.path:"")));
     
    // console.log(statesel);
    // console.log(stateselpath);
    setCol("#FF0000");
    
    console.log(id);


      //const doubledNumbers = numbers.map((num) => (num % 2 === 0 ? num * 2 : num));
  }




    return (
      <><div>
      <svg baseProfile="tiny" fill="#ececec" height="1136" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1" version="1.2"  width="1000" >
        {/* Render the map paths for each state */}
        {statesData.map((state) => (
          <path
            key={state.id}
            d={state.path}
            fill={col} // Fill color for states
            stroke="#fff"
            strokeWidth="1"
            onClick={() => handleStateClick(state.id)}
          />
        ))}
      </svg>
      </div>
      <svg baseProfile="tiny" fill="#ececec" height="1136" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1" version="1.2" viewBox="0 0 1000 1136" width="1000" >
      <path
            key={statesel}
            d={stateselpath}
            fill="#FF0000" // Fill color for states
            stroke="#fff"
            strokeWidth="1"
          />
        
        </svg>
        </>

    );
  };
  
  export default Map;


