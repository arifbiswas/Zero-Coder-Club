
import './App.css';
import Practices from './components/Practices/Practices';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="main-container">
    <div className=" bg-[#f2f4fa]">
    <Practices></Practices>
    </div>
    <Sidebar></Sidebar>
    </div>
  );
}

export default App;
