"use client"

import { useState, useEffect } from 'react'
import { useAuth } from './AuthProvider'
import supabase from 'src/lib/supabase-browser';





const Data = () => {
  const { user } = useAuth();
  const [name, setname] = useState("");
  const [pH, setph] = useState("");
  // const { addItem, adding } = useAuth();
  // const navigate = useNavigate();
  // const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [Records, setRecords] = useState([]);
  const [Reco, setReco] = useState([]);

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
    wandertable;
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

  const wandertable = supabase.channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'wandertable' },
    (payload) => {
      console.log('Change received!', payload)
      handlegetItems();
    }
  )
  .subscribe()
  


  const handlegetItems = async () => {
    try {
      setLoading(true);
      const { data: Records } = await supabase
        .from("wandertable")
        .select("temp, hum, id") //columns to select from the database
        // .eq("id", user?.id) //comparison function to return only data with the user id matching the current logged in user
        //check if the done column is equal to false
        .order("id", { ascending: false }); // sort the data so the last item comes on top;
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
        .from("wandertable")
        .select("temp, hum, id") //columns to select from the database
        .gt('temp',40)
        // .eq("id", user?.id) //comparison function to return only data with the user id matching the current logged in user
        //check if the done column is equal to false
        .order("id", { ascending: false }); // sort the data so the last item comes on top;
      console.log(Reco);
      if (Reco != null) {
        setReco(Reco); // [product1,product2,product3]
      }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };



  
  return (
    
<div className='container'>
          
<table className="table-auto">
  <thead>
    <tr>
      <th>id</th>
      <th>Temp</th>
      <th>Humidity</th>
    </tr>
  </thead>
  <tbody>
  {Records.map((Record)=>(
                <tr>
                  <td>{Record.id}</td>

                  <td>{Record.temp}</td>
                  <td>{Record.hum}</td>
                </tr>
                 ))}
  </tbody>
</table>
         <h2>Records having greater than 40 temp</h2>

         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                    Temp
                </th>
                <th scope="col" class="px-6 py-3">
                    Humidity
                </th>
                
            </tr>
        </thead>
        <tbody>
        {Reco.map((Record)=>(
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {Record.id}
                </th>
                <td class="px-6 py-4">
                {Record.temp}
                </td>
                <td class="px-6 py-4">
                {Record.hum}
                </td>
                
            </tr>
            ))}
            
        </tbody>
    </table>
</div>
        
            


      // {/* <div>You are logged in and your email address is {user.email}</div> */}
  </div>
    
  );
};

export default Data;
