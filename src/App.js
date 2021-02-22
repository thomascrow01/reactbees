import drawing from './beedrawing.png';
import './App.css';
import React, {useEffect} from 'react';

let canvas;
let ctx;

let beesx;
let beesy
let beePopulation;

let bee = {
  img: new Image()
};

// const App = () => {

//   useEffect = () => {

//   }

//   return(
// <div className="App">
//           <header className="App-header">
//             <canvas ref="canvas" id="bee-game" />
//           </header>
//         </div>
//   )
// }

class App extends React.Component {


  componentDidMount() {

    beePopulation = Math.round(50 * Math.random()) + 50;

    //console.log(beePopulation);

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    bee.img.src = drawing;

    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight + 27;

    beesx = new Array(beePopulation);
    beesy = new Array(beePopulation);
    var i;
    for(i = 0; i < beePopulation; i++){
      
      // bees.push(bee);
      beesx[i] = canvas.width * Math.random();
      beesy[i] = canvas.height * Math.random();

    }

    bee.img.onload = () => {
      var i;
      for(i = 0; i < beePopulation; i++){
        //ctx.save();
        ctx.drawImage(bee.img, beesx[i], beesy[i], bee.img.width * 0.25, bee.img.height * 0.25)
        //ctx.restore();
      }
      this.Update(canvas, ctx);
    }
    
  }

  Update(canvas, ctx) {
    //console.log("update");
    setTimeout(() => {
      //console.log("timeout");
      canvas.width = document.body.offsetWidth;
      canvas.height = document.body.offsetHeight;
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      var i;
      for(i = 0; i < beePopulation; i++){
        //ctx.save();
        ctx.drawImage(bee.img, beesx[i] + 5 * Math.random(), beesy[i] + 5 * Math.random(), bee.img.width * 0.25, bee.img.height * 0.25);
        beesx[i] += beesx[i] < canvas.width && beesx[i] > 0 ? 3 * (Math.random() - 0.5) : beesx[i] ;
        beesy[i] += beesy[i] < canvas.height && beesy[i] > 0 ? 3 * (Math.random() - 0.5) : beesy[i] ;
        //ctx.restore();
      }

      // bee.xpos += 3 * (Math.random() - 0.5);
      // bee.ypos += 3 * (Math.random() - 0.5);
      // ctx.drawImage(bee.img, bee.xpos, bee.ypos, bee.img.width * 0.25, bee.img.height * 0.25);
  
      this.Update(canvas, ctx);
    }, 5)
  }

  render() {
      return(
        <div className="App">
           <header className="App-header">
             <canvas ref="canvas" id="bee-game" />
           </header>
        </div>
      )
    }
  }

export default App;
