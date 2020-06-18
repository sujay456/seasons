import React from 'react';
import ReactDOM from 'react-dom';

 


class App extends React.Component{
    
    // This is not react specific but js script
    constructor(props)
    {
        super(props);
        this.state={
            // when we want to make some key but dont want to assign yet but eventually will fill it up ,then we use null
            lat:null,
            errorMssg:''
        };
        
         window.navigator.geolocation.getCurrentPosition(
            (pos)=>{ 
                // To update our state we use setState 
                this.setState({ lat:pos.coords.latitude })
             },
            (err)=>{ 
                console.log(err);
                this.setState({ errorMssg: err.message }); 
            }
        )
    }
    // render method (Which is required by react )
    render()
    {
        
        if(this.state.errorMssg && !this.state.lat)
        {
            return <div>Error:{this.state.errorMssg} </div>
        }

        if(!this.state.errorMssg && this.state.lat )
        {
            return <div>latitude:{this.state.lat} </div>
        }

        return <div>Loading!!</div>
    }

};
ReactDOM.render(<App/> ,document.querySelector('#root'));