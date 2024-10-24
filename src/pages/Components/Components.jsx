import Temperatures from '../Temperatures/Temperatures.jsx';
import Timer from '../Timer/Timer.jsx';
import Add from '../Add/Add.jsx';
import Counter from '../Counter/Counter.jsx';

import './Components.css'


function Components() {
  return (
    <div className="components-container">
      <h1 style={{ textAlign: 'center' }}>
        <span className='badge bg-primary'>
          COMPONENTS</span></h1>

      <div className='components-items'>
        <Counter />
        <Add />
        <Timer />
      </div>

      <div className='components-temperatures'>
        <Temperatures />
      </div>

      <h2 style={{ textAlign: 'center' }}>
        <span className='badge bg-primary'>
          นาย ปัณณวัฒน์ คงเมือง รหัส 66014862</span></h2>
    </div>
  );
}
// <div className='components-timer'> 

// </div>

export default Components;






