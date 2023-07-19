import React from 'react';
import HiddenContentBlock from './components/accordion';
import './App.css'
const App = () => {

  const dataFromDatabase = [
    { id: 'block1', content: <p>content 1</p> ,text:'some text' },
    { id: 'block2', content: <p>content 2</p> ,text:'some text'},
    { id: 'block3', content: <p>content 3</p>,text:'some text' },
    { id: 'block4', content: <p>content 4</p> ,text:'some text'},

  ];
  const customButtonStyle = {
    borderRadius: '25px', 
    margin:'2%',
  

  };

  const customContentStyle = {
    textAlign:'center',
    color:'#000',
  };

  
  return (


    <div className='example-block'>
      {dataFromDatabase.map((item) => (
        <div className='example--item'>
      
        <h2>Title example</h2>

        <p>{item.text}</p>

        <HiddenContentBlock key={item.id} id={item.id} hiddenContent={item.content}


        
buttonStyle={customButtonStyle}
contentStyle={customContentStyle}
useArrowButton={true} 
closedButtonText="Show content"
openButtonText="Hide content"
buttonAlignment="right" 
/>

        </div>
      ))}
    </div>
  );
};

export default App;
