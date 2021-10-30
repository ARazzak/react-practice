import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';
import './index.css';
// import HookForm from './HookForm';
// import HookUseEffectApplied from './HookUseEffectApplied';
// import HookUseEffectConditional from './HookUseEffectConditional';
// import HookUseEffectOnce from './HookUseEffectOnce';
// import HookUseEffectUnmount from './HookUseEffectUnmount';
// import HookPreserveVal from './HookPreserveVal';
// import DependanceUseEffect from './DependanceUseEffect'; 
// import DependanceClassCounter from './DependanceClassCounter'; 
import DependanceArray from './DependanceArray';

// import Map from './Map';

import reportWebVitals from './reportWebVitals';
// import HookUseEffect from './HookUseEffect';
// import TryEffect from './TryEffect';
// import HookLearn from './HookLearn';

ReactDOM.render(

  //  <HookUseEffect/>,
  // <HookForm />,
  // <HookUseEffectApplied />,
  // <TryEffect />,

  // <DependanceUseEffect />,
  // <DependanceClassCounter />,
  <DependanceArray />,
  // <HookUseEffectOnce />,
  // <HookUseEffectConditional />,
  // <HookUseEffectApplied />,

  document.getElementById('root')
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
