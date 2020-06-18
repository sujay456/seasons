import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './Seasondisplay';
 import Loader from './loading';


class App extends React.Component{
    
    // This is not react specific but js script
    state={lat:null,errorMssg:''};  

    componentDidMount(){
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
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Loader/>
    }

};
ReactDOM.render(<App/> ,document.querySelector('#root'));