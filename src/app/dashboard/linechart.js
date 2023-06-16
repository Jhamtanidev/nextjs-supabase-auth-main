/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
// import {Chart} from 'chart.js';
import Chart from 'chart.js/auto';

import 'reactjs-popup/dist/index.css';
import './dashboard.module.css';

function Example({ records }) {
  useEffect(() => {
    // let myChart = null;
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: records.map((Record) => Record.created_at),
        datasets: [
          {
            data: records.map((Record) => Record.temp),
            label: 'Temperature',
            borderColor: '#3e95cd',
            backgroundColor: '#7bb6dd',
            fill: false,
          },
          {
            data: records.map((Record) => Record.ph),
            label: 'pH',
            borderColor: '#3cba9f',
            backgroundColor: '#71d1bd',
            fill: false,
          },
          {
            data: records.map((Record) => Record.turb),
            label: 'Turbidity',
            borderColor: '#ffa500',
            backgroundColor: '#ffc04d',
            fill: false,
          },
          {
            data: records.map((Record) => Record.tds),
            label: 'TDS',
            borderColor: '#c45850',
            backgroundColor: '#d78f89',
            fill: false,
          },
        ],
      },
    });
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [records]);

  // console.log(records);
  return (
    <>
      {/* line chart */}
      <div className="graph my-8 w-screen overflow-x-scroll rounded-xl bg-black py-12">
        <div className="m-auto flex max-md:w-[60rem] md:w-[1100px] ">
          <div className="my-auto w-full pt-0  shadow-xl md:rounded-xl md:border  md:border-gray-400">
            <canvas id="myChart" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Example;
