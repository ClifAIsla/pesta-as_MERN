import React, {useState} from 'react';
import './App.css';

import Tap from './Componentes/Tap';

function App() {
  
  const posicionInicial = [1,2,3]
  const [tapOption,setTapOption] = useState( posicionInicial );
  const [actualTap,setActualTap] = useState( 1 );


  return (
    <div className='container'>
      <div className='etiqueta'>

        {
          tapOption.map( (etiqueta) => (

            <div onClick={() => setActualTap(etiqueta)} key={etiqueta} >
              Tab {etiqueta}
            </div>
          ))

        }


      </div>

      {actualTap == 1 ? <Tap relleno="Tap 1 esta aqui." ></Tap> : ""}
      {actualTap == 2 ? <Tap relleno="Tap 2 esta aqui." ></Tap> : ""}
      {actualTap == 3 ? <Tap relleno="Tap 3 esta aqui." ></Tap> : ""}
    </div>
  );
}

export default App;
