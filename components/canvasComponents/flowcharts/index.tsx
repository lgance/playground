import React, { useEffect ,useCallback } from "react";





const testData = [
  {


  },


]




function FlowChart() {




  const connectItems = useCallback(()=>{





  },[]);


  useEffect(()=>{
      console.warn('Mount');

      let {innerWidth,innerHeight} = window;
      console.warn(window);
      console.log(innerWidth);
      console.log(innerHeight);



      connectItems();
  },[])
  return (

    <>
     <div className="wrapper">
          <div className="canvas-wrapper">
                  <canvas id="myCanvas" width="700" height="700"></canvas>
                  <button id="button1" className="button">Button 1</button>
                  <button id="button2" className="button">Button 2</button>
                  <button id="button3" className="button">Button 3</button>
                  <button id="button4" className="button">Button 4</button>
            </div>
     </div> 
    
    <style jsx >{`

          .wrapper{
            width:inherit;
            height:inherit;
            overflow:auto;
            
            // background-color:#FFD9FA;
          }
          .canvas-wrapper{
            width:1500px;
            height:1500px;
            position:relative;
            z-index:11;
          }
          canvas {
            background: pink;
            position: absolute;
            z-index: -1;
            border:1px solid #000000;

            width:100%;
            height:100%;

          }


          .button {
            padding: 20px;
            margin: 20px;
          }
          
          #button1 {
            position: absolute;
            top: 20px;
            left: 30px;
          }
          
          #button2 {
            position: absolute;
            top: 120px;
            left: 150px;
          }
          
          #button3 {
            position: absolute;
            top: 300px;
            left: 150px;
          }
          
          #button4 {
            position: absolute;
            top: 240px;
            left: 900px;
          }
    
    `}</style>
    </>
  )
}

const equalComparison = (prevProps:any,nextProps:any)=>{
  
  // default Rendering Y
  let returnValue = false;

  // true = render X
  
  return returnValue;
}

export default React.memo(FlowChart,equalComparison);



// Sample Code


// $(() => {
  
//   $('#myCanvas').attr('width', window.innerWidth);
//   $('#myCanvas').attr('height', window.innerHeight);
  
//   let button1 = $("#button1")[0];
//   let button2 = $("#button2")[0];
//   let button3 = $("#button3")[0];
//   let button4 = $("#button4")[0];
  
//   connectItems(button1, button2, "right", "top");
//   connectItems(button1, button3, "bottom", "left");
//   connectItems(button1, button4, "right", "top");
//   connectItems(button2, button4, "bottom", "left");
//   connectItems(button3, button4, "right", "bottom");
// });

// function connectItems(item1, item2, startPosition, endPosition) {
//   let canvas = document.getElementById("myCanvas");
//   let ctx = canvas.getContext("2d");
  
//   item1 = item1.getBoundingClientRect();
//   item2 = item2.getBoundingClientRect();
//   console.log("connecting ", item1, " to ", item2);
  
//   let startX, startY, endX, endY = 0.0;
  
//   switch (startPosition) {
//     case "top":
//       startX = item1.width / 2 + item1.left;
//       startY = item1.top;
//       break;
//     case "right":
//       startX = item1.width + item1.left;
//       startY = item1.height / 2 + item1.top;
//       break;
//     case "bottom":
//       startX = item1.width / 2 + item1.left;
//       startY = item1.height + item1.top;
//       break;
//     case "left":
//       startX = item1.left;
//       startY = item1.width / 2 + item1.top;
//       break;
//     default:
//       // invalid input
//   }
  
//   switch (endPosition) {
//     case "top":
//       endX = item2.width / 2 + item2.left;
//       endY = item2.top;
//       break;
//     case "right":
//       endX = item2.width + item2.left;
//       endY = item2.height / 2 + item2.top;
//       break;
//     case "bottom":
//       endX = item2.width / 2 + item2.left;
//       endY = item2.height + item2.top;
//       break;
//     case "left":
//       endX = item2.left;
//       endY = item2.height / 2 + item2.top;
//       break;
//     default:
//       // invalid input
//   }
  
//   ctx.moveTo(startX, startY);
//   if (startPosition === "bottom" || startPosition === "top") {
//     ctx.lineTo(startX, endY);
//   } else {
//     ctx.lineTo(endX, startY);
//   }
//   ctx.lineTo(endX, endY);
//   ctx.stroke();
// }