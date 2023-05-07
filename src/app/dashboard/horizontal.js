import React, { useState } from 'react';
// import Warper from './Warper';
import Popup from 'reactjs-popup';
//

const ControlledPopup = () => {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  return (
    <div>
      {/* <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button> */}
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div role="alert">
      <button className="close" onClick={closeModal}>
            &times;
          </button>
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Danger
  </div>
  
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>pH is grater than  10 </p><br/>
    <p>pH range

Max: 8.5, Min: 6.5
1.IS 10500-2012 Acceptable limits:6.5-8.5
permissible:No relaxation
2.Suggestions:Increase pH by soda ash Decrease pH by white vinegar/citric acid</p>
  </div>
</div>
      </Popup>
    </div>
  );
};


const Alertaverage=( {newReco})=>{
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  return (
    <div>
      {/* <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button> */}
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div role="alert">
      <button className="close" onClick={closeModal}>
            &times;
          </button>
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Danger
  </div>
  
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>average difference is grater than 3 </p><br/>
    <p> lat long:
   <h6> {newReco.map(Record=>Record.sol_vol)}</h6>
   <h6> {newReco.map(Record=>Record.bat_vol)}</h6>


</p>
  </div>
</div>
      </Popup>
    </div>
  );
}
export { ControlledPopup,Alertaverage};