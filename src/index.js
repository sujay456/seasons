import React from 'react';
import ReactDOM from 'react-dom';

 


class App extends React.Component{
    
    // render method
    render()
    {
        window.navigator.geolocation.getCurrentPosition(
            (pos)=>{  console.log(pos); },
            (err)=>{ console.log(err); }
        )
        return <div>Lattitude:</div>
    }

};
ReactDOM.render(<App/> ,document.querySelector('#root'));