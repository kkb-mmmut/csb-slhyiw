import React from 'react';
import "../Css/MainScreen.css";
// Renderse lockscreen
class MainScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime(),
        }
        this.stateId = "";
    }

    // if there is no notification then iPod logo, time and battery iconv
    componentDidMount() {
        const { noty} = this.props;
        if (noty === true) {
            return;
        }
        this.stateId = setInterval(() => {
            this.setState({ time: this.getCurrentTime() });
        }, 60000);
    }

    componentDidUpdate(){
        const {setNoty, noty } = this.props;
        if(noty===true){
            setTimeout(function () {
                setNoty();
            },1000)
        }
    }

    // Clear the update time interval
    componentWillUnmount() {
        const { noty } = this.props;
        if (noty !== true)
            clearInterval(this.stateId);
    }

    // fir getting current time in string
    getCurrentTime() {
        const today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        if (today.getMinutes() < 10) {
            time = today.getHours() + ":0" + today.getMinutes();
        }
        return time;
    }
    // Render playing screen
    render() {  
         
        const { time } = this.state; 
        return (
            <div>
                <div className="lock-display">
                <div className="upper-div-lock">
                    <h3>Mini iPod!</h3>
                </div>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                    
                 <h3 className="lockscreen-time">{time}</h3>
                </div>
                <div className="bottom-div-lock">
                    <h3>Power Button to unlock!</h3>
                </div>
            </div>
        )
    }

}


export default MainScreen;