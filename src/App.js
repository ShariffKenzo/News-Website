
import './App.css';
import {useState} from 'react';
import NewsList from './components/NewsList';


function App() {

  const [keyword, setKeyword] = useState('');
  

  const getInputValue = (event)=>{
    
    const userValue = event.target.value;

        console.log(userValue);
        setKeyword(userValue);
};

  return (
    
    <div className="App">
  
     
     
     <NewsList/>

    
    </div>
    
  );
}

export default App;
