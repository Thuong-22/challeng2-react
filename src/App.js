import './App.css';
import SlideBar from './components/Slidebar'; 
import InputGroup from './components/InputGroup';

function App() {
  return (
    <div className="App inter-font">
       <SlideBar/>
       <div className='main'>
        <h1>Inputs</h1>
         <InputGroup/>
      </div>
    </div>
  );
} 

export default App;
