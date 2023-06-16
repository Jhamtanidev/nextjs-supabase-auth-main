/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */

'use client';

import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

import supabase from 'src/lib/supabase-browser';

import { useAuth } from '../../components/AuthProvider';

import alertaverage, { Alertaverage, ControlledPopup } from './horizontal';
import Example from './linechart';
// import MapWithSupabaseData from './map';
import MapWithSupabaseData from './MapWithSupabaseData';
// import OlMap from './OLmap';
import MyComponent from './OLmap';

import 'reactjs-popup/dist/index.css';
import './dashboard.module.css';
// import Map from './OLmap';
// import Track from './OLmap';
// import Olmap from './OLmap';
// import OpenStreetMap from './OLmap';

const Data = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [Open, setOpen] = useState(false);
  const [Records, setRecords] = useState([]);
  const [Reco, setReco] = useState([]);
  const [RecopH, setRecopH] = useState([]);
  const [Recoturb, setRecoturb] = useState([]);
  const [Recotds, setRecotds] = useState([]);
  const [RecoAvg, setRecoAvg] = useState([]);

  // useEffect(() => {
  //   if (user.email === null) {
  //     navigate("/login");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps

  // }, []);

  //  const handleDelete = (id)=>{
  //   setRecords(prevRecords => {
  //     return prevRecords.filter(rc=> rc.id !== id)
  //   })
  //  }

  useEffect(() => {
    handlegetItems();
    filtergetItems();
    filtergetpHItems();
    filtergettdsItems();
    filtergetturbItems();
    // filterAvg();
    // wanderfloatesp;
    // alertpop();
    // popup();
  }, []);

  // const handleAddItem = async (e) => {
  //   e.preventDefault()

  //   try {
  //     setLoading(true);
  //     await supabase.from("wandertable").insert({ name, pH, userId: user?.id });
  //     setname("");
  //     setph("");
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setLoading(false);
  //   handlegetItems();
  //   filtergetItems();

  // };

  const wanderfloatesp = supabase
    .channel('custom-insert-channel')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'wanderfloatesp' },
      (payload) => {
        console.log('Change received!');
        handlegetItems();
        filtergetItems();
        filtergetpHItems();
        filtergettdsItems();
        filtergetturbItems();
        // popup();
        // filterAvg();
      }
    )
    .subscribe();

  const handlegetItems = async () => {
    try {
      setLoading(true);
      const { data: Records } = await supabase
        .from('wanderfloatesp')
        .select('ph,tds,turb,temp,sol_vol,bat_vol,created_at') // columns to select from the database
        .range(0, 9)
        // .eq("id", user?.id) //comparison function to return only data with the user id matching the current logged in user
        // check if the done column is equal to false
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;
      console.log(Records);
      if (Records != null) {
        setRecords(Records); // [product1,product2,product3]
      }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };

  const filtergetItems = async () => {
    try {
      setLoading(true);
      const { data: Reco } = await supabase
        .from('wanderfloatesp')
        .select('created_at,temp ') // columns to select from the database
        .gt('temp', 20)
        .range(0, 9)
        // .eq("id", user?.id) //comparison function to return only data with the user id matching the current logged in user
        // check if the done column is equal to false
        // .order("id", { ascending: false }); // sort the data so the last item comes on top;
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      console.log(Reco);
      if (Reco != null) {
        setReco(Reco); // [product1,product2,product3]
      }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };

  const filtergetpHItems = async () => {
    try {
      setLoading(true);
      const { data: RecopH } = await supabase
        .from('wanderfloatesp')
        .select('created_at,ph ') // columns to select from the database
        .gt('ph', 8.5)
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      console.log(RecopH);
      if (RecopH != null) {
        setRecopH(RecopH); // [product1,product2,product3]
        // { (RecopH>10) ?  <Horizontalchart/> : false }
      }
      // if (RecopH.map((Record)=>Record.ph>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };

  const filtergetturbItems = async () => {
    try {
      setLoading(true);
      const { data: Recoturb } = await supabase
        .from('wanderfloatesp')
        .select('created_at,turb ') // columns to select from the database
        .gt('turb', 5)
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      console.log(Recoturb);
      if (Recoturb != null) {
        setRecoturb(Recoturb); // [product1,product2,product3]
      }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };

  const filtergettdsItems = async () => {
    try {
      setLoading(true);
      const { data: Recotds } = await supabase
        .from('wanderfloatesp')
        .select('created_at,tds ') // columns to select from the database
        .gt('tds', 2000)
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      console.log(Recotds);
      if (Recotds != null) {
        setRecotds(Recotds); // [product1,product2,product3]
      }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };

  const filterAvg = async () => {
    try {
      setLoading(true);
      const { data: RecoAvg, error } = await supabase.rpc('average');

      // const { data: RecoAvg } = await supabase
      //   .from('wanderfloatesp')
      //   .select('AVG(temp)') //columns to select from the database
      // .in('created_at', function(subquery){
      //   subquery.select('created_at')
      //   .from('wanderfloatesp')
      //   .order('created_at', { ascending: false })
      //   .limit(10);
      // });
      // .eq('created_at')
      // .limit(10);

      if (RecoAvg != null) {
        setRecoAvg(RecoAvg); // [product1,product2,product3]
      }
      console.log(RecoAvg);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  // const alertpop = () => {
  //   console.log(Records.temp);
  //   setLoading(true);

  //   if (Reco) {
  //     console.log(Records.temp);
  //     <Popup position="right center">
  //       <div>Popup content here !!</div>
  //     </Popup>;
  //   }
  //   setLoading(false);
  // };

  const popup = () => {
    if (Records.map((Record) => Record.ph > 10)) {
      setOpen(true);
    }

    // { (Records.map((record) => record.ph)>10) ?  <Horizontalchart/> : false }
  };

  return (
    <>
      <>
        <div className="dashboard">
          <div className="container mx-auto">
            <div className="mx-auto w-screen overflow-hidden  overflow-x-scroll rounded-lg px-8">
              <div className="relative shadow-md max-sm:ml-0 sm:rounded-lg md:overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 md:px-6">
                        Created_at
                      </th>

                      <th scope="col" className="py-3 md:px-6">
                        Temp
                      </th>
                      <th scope="col" className="py-3 md:px-6">
                        pH
                      </th>
                      <th scope="col" className="py-3 md:px-6">
                        Turbidity
                      </th>
                      <th scope="col" className="py-3 md:px-6">
                        TDS
                      </th>
                      <th scope="col" className="py-3 md:px-6">
                        Solar_voltage
                      </th>
                      <th scope="col" className="py-3 md:px-6">
                        Battery_voltage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Records.map((Record) => (
                      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900 ">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          {Record.created_at}
                        </th>

                        <td className="px-6 py-4">{Record.temp}</td>
                        <td className="px-6 py-4">{Record.ph}</td>
                        <td className="px-6 py-4">{Record.turb}</td>
                        <td className="px-6 py-4">{Record.tds}</td>
                        <td className="px-6 py-4">{Record.sol_vol}</td>
                        <td className="px-6 py-4">{Record.bat_vol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h2 className="mt-4 text-3xl">Records having greater than 20 temp</h2>

          <div className="relative overflow-x-auto px-8 shadow-md  sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Created_at
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Temp
                  </th>
                </tr>
              </thead>
              <tbody>
                {Reco.map((Record) => (
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {Record.created_at}
                    </th>
                    <td className="px-6 py-4">{Record.temp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="align-items-right container mt-4">
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="sfw-normal mb-1">Temperature range</h4>

                <p>
                  Max: <strong>20°C</strong>, Min: <strong>10°C</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i className="fas fa-cloud fa-3x" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-4 text-3xl">Records having greater than 8.5 pH</h2>

          <div className="overflow-x-auto px-8 shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Created_at
                  </th>
                  <th scope="col" className="px-6 py-3">
                    pH
                  </th>
                </tr>
              </thead>
              <tbody>
                {RecopH.map((Record) => (
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {Record.created_at}
                    </th>
                    <td className="px-6 py-4">{Record.ph}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="align-items-right container  mt-4">
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h3 className="sfw-normal mb-1">pH range</h3>

                <p>
                  Max: <strong>8.5</strong>, Min: <strong>6.5</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i className="fas fa-cloud fa-3x">
                    1.IS 10500-2012 Acceptable limits:6.5-8.5
                    <br />
                    permissible:No relaxation
                    <br />
                    2.Suggestions:Increase pH by soda ash Decrease pH by white
                    vinegar/citric acid
                  </i>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-4 text-3xl">Records having greater than 5 NTU Turbidity</h2>

          <div className="relative px-8 shadow-md sm:rounded-lg lg:overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Created_at
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Turbidity
                  </th>
                </tr>
              </thead>
              <tbody>
                {Recoturb.map((Record) => (
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {Record.created_at}
                    </th>
                    <td className="px-6 py-4">{Record.turb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="align-items-right container">
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="sfw-normal mb-1">Turbidity range</h4>

                <p>
                  Max: <strong>5 NTU</strong>, Min: <strong>1 NTU</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i className="fas fa-cloud fa-3x">
                    1.IS 10500:2010
                    <br />
                    Acceptable unit:1 NTU Permissible limits:5 NTU
                    <br />
                    2.Suggestions:Settling or filtrations process using sand
                    filtration,settling tanks and clarifiers.
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-4 text-3xl">Records having greater than 2000 mg/l TDS</h2>
        <div className="relative overflow-x-auto px-8 shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Created_at
                </th>
                <th scope="col" className="px-6 py-3">
                  TDS
                </th>
              </tr>
            </thead>
            <tbody>
              {Recotds.map((Record) => (
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {Record.created_at}
                  </th>
                  <td className="px-6 py-4">{Record.tds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container mx-auto flex h-fit w-fit items-center justify-center">
          <div className="card shadow-0 border">
            <div className="card-body p-4">
              <h4 className="sfw-normal mb-1">TDS range</h4>

              <p>
                Max: <strong>2000 mg/l</strong>, Min: <strong>5000 mg/l</strong>
              </p>

              <div className="d-flex align-items-center flex-row">
                <i className="fas fa-cloud fa-3x">
                  1.IS 10500-2012
                  <br />
                  Acceptable limit:500 mg/I permissible:2000mg/l
                  <br />
                  2.Suggestions:Reverse osmosis Distillation deionization by Ion Exchange
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg px-12">
          <Example records={Records.map((record) => record)} />
          {/* <Horizontalchart records={Records.map((record)=>record)}/> */}
        </div>
      </>
      {/* // <div>  <MapWithSupabaseData />   hey               </div> */}
      {/* // {Open ? <ControlledPopup /> : false} */}
      {/* // {RecoAvg ? <Alertaverage newReco={Records.map((record) => record)} /> : false} */}
      <div className="container">
        {/* <Map />    */}
        {/* <OlMap />    */}
        <MyComponent />

        {/* <h5>avg of ph is {RecoAvg}</h5> */}
      </div>
    </>
    // {/* <div>You are logged in and your email address is {user.email}</div> */}
  );
};

export default Data;
