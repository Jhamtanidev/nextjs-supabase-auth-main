'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../components/AuthProvider';
import supabase from 'src/lib/supabase-browser';

const Data = () => {
  const { user } = useAuth();
  const [name, setname] = useState('');
  const [pH, setph] = useState('');

  const [loading, setLoading] = useState(false);
  const [Records, setRecords] = useState([]);
  const [Reco, setReco] = useState([]);
  const [RecopH, setRecopH] = useState([]);
  const [Recoturb, setRecoturb] = useState([]);
  const [Recotds, setRecotds] = useState([]);

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
    wanderfloatesp;
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
    .channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'wanderfloatesp' },
      (payload) => {
        console.log('Change received!', payload);
      }
    )
    .subscribe();

  const handlegetItems = async () => {
    try {
      setLoading(true);
      const { data: Records } = await supabase
        .from('wanderfloatesp')
        .select('ph,tds,turb,temp,sol_vol,bat_vol,created_at'); //columns to select from the database
      // .eq("id", user?.id) //comparison function to return only data with the user id matching the current logged in user
      //check if the done column is equal to false
      // .order("id", { ascending: false }); // sort the data so the last item comes on top;
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
        .select('created_at,temp ') //columns to select from the database
        .gt('temp', 20);
      // .eq("id", user?.id) //comparison function to return only data with the user id matching the current logged in user
      //check if the done column is equal to false
      // .order("id", { ascending: false }); // sort the data so the last item comes on top;
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
        .select('created_at,ph ') //columns to select from the database
        .gt('ph', 8.5);

      console.log(RecopH);
      if (RecopH != null) {
        setRecopH(RecopH); // [product1,product2,product3]
      }
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
        .select('created_at,turb ') //columns to select from the database
        .gt('turb', 5);

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
        .select('created_at,tds ') //columns to select from the database
        .gt('tds', 2000);

      console.log(Recotds);
      if (Recotds != null) {
        setRecotds(Recotds); // [product1,product2,product3]
      }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div className="dashboard">
      <div className="container">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Created_at
                </th>

                <th scope="col" class="px-6 py-3">
                  Temp
                </th>
                <th scope="col" class="px-6 py-3">
                  pH
                </th>
                <th scope="col" class="px-6 py-3">
                  Turbidity
                </th>
                <th scope="col" class="px-6 py-3">
                  TDS
                </th>
                <th scope="col" class="px-6 py-3">
                  Solar_voltage
                </th>
                <th scope="col" class="px-6 py-3">
                  Battery_voltage
                </th>
              </tr>
            </thead>
            <tbody>
              {Records.map((Record) => (
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {Record.created_at}
                  </th>

                  <td class="px-6 py-4">{Record.temp}</td>
                  <td class="px-6 py-4">{Record.ph}</td>
                  <td class="px-6 py-4">{Record.turb}</td>
                  <td class="px-6 py-4">{Record.tds}</td>
                  <td class="px-6 py-4">{Record.sol_vol}</td>
                  <td class="px-6 py-4">{Record.bat_vol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2>Records having greater than 20 temp</h2>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Created_at
                </th>
                <th scope="col" class="px-6 py-3">
                  Temp
                </th>
              </tr>
            </thead>
            <tbody>
              {Reco.map((Record) => (
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {Record.created_at}
                  </th>
                  <td class="px-6 py-4">{Record.temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="align-items-right container">
          <div class="card shadow-0 border">
            <div class="card-body p-4">
              <h4 class="sfw-normal mb-1">Temperature range</h4>

              <p>
                Max: <strong>20°C</strong>, Min: <strong>10°C</strong>
              </p>

              <div class="d-flex align-items-center flex-row">
                <i class="fas fa-cloud fa-3x"></i>
              </div>
            </div>
          </div>
        </div>

        <h2>Records having greater than 8.5 pH</h2>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Created_at
                </th>
                <th scope="col" class="px-6 py-3">
                  pH
                </th>
              </tr>
            </thead>
            <tbody>
              {RecopH.map((Record) => (
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {Record.created_at}
                  </th>
                  <td class="px-6 py-4">{Record.ph}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="align-items-right container">
          <div class="card shadow-0 border">
            <div class="card-body p-4">
              <h3 class="sfw-normal mb-1">pH range</h3>

              <p>
                Max: <strong>8.5</strong>, Min: <strong>6.5</strong>
              </p>

              <div class="d-flex align-items-center flex-row">
                <i class="fas fa-cloud fa-3x">
                  1.IS 10500-2012 Acceptable limits:6.5-8.5
                  <br />
                  permissible:No relaxation<br></br>
                  2.Suggestions:Increase pH by soda ash Decrease pH by white
                  vinegar/citric acid
                </i>
              </div>
            </div>
          </div>
        </div>


        <h2>Records having greater than 5 NTU Turbidity</h2>

         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Created_at
                </th>
                <th scope="col" class="px-6 py-3">
                    Turbidity
                </th>
                
                
            </tr>
        </thead>
        <tbody>
        {Recoturb.map((Record)=>(
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {Record.created_at}
                </th>
                <td class="px-6 py-4">
                {Record.turb}
                </td>
                
                
            </tr>
            ))}
            
        </tbody>
    </table>
</div>


<div className='container align-items-right' >
<div class="card shadow-0 border">
          <div class="card-body p-4">

            <h4 class="mb-1 sfw-normal">Turbidity range</h4>
            
            <p>Max: <strong>5 NTU</strong>, Min: <strong>1 NTU</strong></p>

            <div class="d-flex flex-row align-items-center">
              
              <i class="fas fa-cloud fa-3x" >
              1.IS 10500:2010<br/>
Acceptable unit:1 NTU
Permissible limits:5 NTU<br/>
2.Suggestions:Settling or filtrations process using sand filtration,settling tanks and clarifiers.
              </i>
            </div>

          </div>
</div>
</div>
</div>
      

<h2>Records having greater than 2000 mg/l TDS</h2>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
   <tr>
       <th scope="col" class="px-6 py-3">
           Created_at
       </th>
       <th scope="col" class="px-6 py-3">
           TDS
       </th>
       
       
   </tr>
</thead>
<tbody>
{Recotds.map((Record)=>(
   <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       {Record.created_at}
       </th>
       <td class="px-6 py-4">
       {Record.tds}
       </td>
       
       
   </tr>
   ))}
   
</tbody>
</table>
</div>


<div className='container align-items-right' >
<div class="card shadow-0 border">
 <div class="card-body p-4">

   <h4 class="mb-1 sfw-normal">TDS range</h4>
   
   <p>Max: <strong>2000 mg/l</strong>, Min: <strong>5000 mg/l</strong></p>

   <div class="d-flex flex-row align-items-center">
     
     <i class="fas fa-cloud fa-3x" >1.IS 10500-2012<br/>
Acceptable limit:500 mg/I
permissible:2000mg/l<br/>
2.Suggestions:Reverse osmosis
                     Distillation
                     deionization by Ion Exchange</i>
   </div>

 </div>
</div>
</div>

      // {/* <div>You are logged in and your email address is {user.email}</div> */}
    </div>
  );
};

export default Data;
