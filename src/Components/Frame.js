import React from 'react'
import "../Css/Frame.css"
import Wheel from './Wheel.js'
import Display from './Display.js'
import $ from 'jquery';

class Frame extends React.Component{
    rotatePod=()=>
    {
        /* screen rotation feature */
        $('.App').toggleClass('rotate-anti-clockwise');
        $('.wheel-container').toggleClass('rotate-clockwise');
        $('.display').toggleClass('rotate-clockwise');
        $('.frame').toggleClass('rframe');
        $('.speaker').toggleClass('rspeaker');
    }
    render(){
        const {active,updateActiveMenu, currentMenu, changeMenuBackward,changeMenuForward, menuItems, musicItems,togglePlayPause, songItems,playing, songIndex,theme, audio, songUrl, songImgUrl, seekSongForward, seekSongReverse, wheelColor ,wallpaper, wallpaperItems, noty, setNoty, notifyText} = this.props;
        // const theme="blue";
        return(
            <div className="case-container">
                <div style={{backgroundColor:theme}} className="frame" id={!playing? " ":"color-frame"}>
                    <div className='speaker'></div>
                    <Display songIndex={songIndex} playing={playing} active={active} musicItems={musicItems} menuItems={menuItems} currentMenu={currentMenu} songItems={songItems} audio={audio} songUrl={songUrl} songImgUrl={songImgUrl} wallpaper={wallpaper} wallpaperItems={wallpaperItems} noty={noty} setNoty={setNoty} notifyText ={notifyText}/>
                    <Wheel playing={playing} theme={theme} active={active}  menuItems={menuItems} currentMenu={currentMenu} changeMenuForward={changeMenuForward} changeMenuBackward={changeMenuBackward} updateActiveMenu={updateActiveMenu} togglePlayPause={togglePlayPause} seekSongForward={seekSongForward} seekSongReverse={seekSongReverse} wheelColor={wheelColor}/>
                    <button className="rotate" onClick={this.rotatePod}>
                    <i className="fa fa-undo"></i>
                </button>
                </div>
            </div>  
        )  
    }
}

export default Frame
