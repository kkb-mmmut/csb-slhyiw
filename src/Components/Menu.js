import React from 'react';
import "../Css/Menu.css"
import game from "../Wallet/Gifs/game.gif"
import music from "../Wallet/Gifs/songs.gif"
import settings from "../Wallet/Gifs/setting.gif"

// Renders main menu
class Menu extends React.Component {
    render() {
        const { active,menuItems, songImgUrl} = this.props;
        return (

            <div className="menu-container">
                <div className="menu">
                    <ul>
                        {menuItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;&raquo;&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                        })}
                    </ul>
                </div>
                <div className="leaf">
                    {active === 0 && <img className="leaf-img" src={songImgUrl} alt=""></img>}
                    {active === 1 && <img className="leaf-img" src={music} alt=""></img>}
                    {active === 2 && <img className="leaf-img" src={game} alt=""></img>}
                    {active === 3 && <img className="leaf-img" src={settings} alt=""></img>}
                </div>
            </div>
        )
    }
}


export default Menu;