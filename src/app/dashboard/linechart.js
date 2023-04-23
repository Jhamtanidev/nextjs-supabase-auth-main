import { useEffect, useState } from "react"
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Chart } from "chart.js";
import './dashboard.css'
function Example({records}) {

  const [Reco, setReco] = useState([]);
  const [RecopH, setRecopH] = useState([]);
  const [Recoturb, setRecoturb] = useState([]);
  const [Recotds, setRecotds] = useState([]);
  const [RecoCa, setRecoCa] = useState([],10);

 const handle=()=>{ 
  console.log(records);
  {records.map((Record)=>(
setReco(Record.temp),
console.log(Record.temp),
setRecopH(Record.ph),
setRecotds(Record.tds),
setRecoturb(Record.turb),
setRecoCa(Record.created_at)
  ))}}
  
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx
    , {
      type: 'line',
      
      data: {
        labels:records.map(Record=>Record.created_at),
        datasets: [{
          data: records.map(Record=>Record.temp),
          label: "Temperature",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: records.map(Record=>Record.ph),
          label: "pH",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, {
          data: records.map(Record=>Record.turb),
          label: "Turbidity",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }, {
          data: records.map(Record=>Record.tds),
          label: "TDS",
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
          fill: false,
        }
        ]
      },
    });
    handle();
  }, [records])
  
  
  // console.log(records);
  return (
    <>
   
      {/* line chart */}
      <div className="graph" style={{backgroundColor:"black"}}>
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">line Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
      </div>
    </>
  )
}

export default Example;