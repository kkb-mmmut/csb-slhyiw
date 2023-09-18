import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import Music from './Music';
import Songs from './Songs';
import Settings from './Settings';
import Playing from './Playing';
import "../Css/Display.css"
import Themes from './Themes';
import WheelColor from './WheelColor';
import MainScreen from './MainScreen';
import Wallpaper from './Wallpaper.js';

// On the basis of what the current menu is this item will render only that component 
class Display extends React.Component {
    render() {
        const { active, currentMenu, menuItems, musicItems,songItems, playing, songIndex, audio, songUrl ,songImgUrl,wallpaper,wallpaperItems, noty, setNoty,notifyText} = this.props;
        
        return (
            <div style={{backgroundImage:`url(${wallpaperItems[wallpaper]})`}} className="display">
                <Navbar noty={noty} setNoty={setNoty} playing={playing} notifyText ={notifyText} />
                {currentMenu===-2&&<MainScreen/>}
                {currentMenu === -1 && <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} />}
                {currentMenu === 1 && <Music musicItems={musicItems} active={active} />}
                {currentMenu === 2 && <div className="blank-div"><h1 className="empty-text">Games</h1></div>}
                {currentMenu === 3 && <Settings active={active}/>}
                {currentMenu === 4 && <Songs songItems={songItems} active={active} />}
                {currentMenu === 5 && <div className="blank-div"><h1 className="empty-text">Artists</h1></div>}
                {currentMenu === 6 && <div className="blank-div"><h1 className="empty-text">Albums</h1></div>}
                {(currentMenu === 0 ||currentMenu===7) && <Playing songImgUrl={songImgUrl} audio={audio} songUrl={songUrl} playing={playing} songIndex={songIndex} songItems={songItems} />}
                {currentMenu===8&&<Themes active={active}/>}
                {currentMenu===9&&<WheelColor active={active}/>}
                {currentMenu===10&&<Wallpaper active={active}/>}
            </div>
        )
    }
}


export default Display;