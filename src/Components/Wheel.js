import React from 'react';
import "../Css/Wheel.css"
import ZingTouch from "zingtouch";
// Render wheel
class Wheel extends React.Component {
    constructor() {
        super();
        this.angle = 0;
    }
    render() {
        const { playing, changeMenuForward, active, currentMenu, theme,wheelColor} = this.props;
        // const color="red";
        return (
            <div className="wheel-container" id="wheel-container">
                <div style={{backgroundColor:wheelColor}} className={!playing? "wheel" :"wheel colored"} id="wheel" >
                    <div className="controll" id="menu">
                        <div style={{color:theme}}><span style={styles.style}>MENU</span></div>
                    </div>
                    <div className="controll" id="forward">
                        <i style={{color:theme}} className="fa fa-fast-forward"></i>
                    </div>
                    <div className="controll" id="play-pause">
                        <div> 
                            {playing?<i style={{color:theme}} className="fa fa-pause"></i>:<i style={{color:theme}} className="fa fa-play"></i> }
                        </div>
                        
                    </div>
                    <div className="controll" id="reverse">
                        <i style={{color:theme}} className="fa fa-fast-backward"></i>
                    </div>
                </div>

                <div style={{backgroundColor:theme}} className={!playing? "blank" :"blank pulsating-circle"} id="blank" onClick={() => { changeMenuForward(active, currentMenu) }}>
                    <i style={styles.stylee} className={playing? " " :"fa fa-power-off"}></i></div> 
            </div>
        )
    }

    // control the wheel roatation action if rotation is more than 15 degrees and also check direction of rotation
    wheelControll = (e) => {
        const { updateActiveMenu, currentMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        }
    }

    // Bind components with zingtouch logic
    componentDidMount() {
        const { changeMenuBackward ,togglePlayPause, seekSongForward, seekSongReverse} = this.props; 
        const wheelControll = this.wheelControll;
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        const menuIcon = document.getElementById("menu");
        const playPause = document.getElementById("play-pause");
        const reverse = document.getElementById("reverse");
        const forward = document.getElementById("forward");

        const longTapGesture = new ZingTouch.Tap({
            maxDelay:10000,
            numInputs: 1,
            tolerance: 1,
        })

        activeRegion.bind(menuIcon, 'tap', function (e) {
            changeMenuBackward();
        });
        activeRegion.bind(wheel, 'rotate', function (e) {
            wheelControll(e);
        });
        activeRegion.bind(playPause, 'tap', function (e) {
            togglePlayPause();
        });

        activeRegion.bind(reverse, longTapGesture, function (e) {
            seekSongReverse(e);
        });

        activeRegion.bind(forward, longTapGesture, function (e) {
            seekSongForward(e);
        });
        

    }

}
const styles={
    style:{
        color:"rgba(7, 31, 46, 0.367)" 
    },
    stylee:{
        color:"rgba(7, 31, 46, 0.367)", 
        fontSize:"2rem",
        lineHeight:"75px", 

    }
}

export default Wheel;