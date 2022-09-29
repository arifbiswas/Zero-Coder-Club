
import { useEffect, useState } from 'react';
import './App.css';
import Practices from './components/Practices/Practices';
import Questions from './components/Questions/Questions';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  // load data 
  const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    // time add handler
    const [time,setTime]=useState([0])
    const timeHabdler =(id)=>{
      const selectItem = items.find(item =>item.id === id)
      const time = selectItem.time;
      setTime(time)
    }

  return (
   <div>
     <div className="main-container">
    <div className=" bg-[#f2f4fa]">
    <Practices items={items} timeHabdler={timeHabdler}></Practices>
    </div>
    <div className="bg-white">
    <Sidebar time={time}></Sidebar>
    </div>
    </div>
    <div className="bg-white max-w-[1700px] my-10 mx-auto ">
    <Questions></Questions>
    </div>
   </div>
  );
}

export default App;
