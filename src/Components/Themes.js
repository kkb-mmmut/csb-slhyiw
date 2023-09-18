import React from 'react';
import "../Css/Themes.css"

// Renders themes menu
class Themes extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="music">
                <h2>Theme Select</h2>
                <ul>
                    {["Rosy Gold","Soil Gray","Illuminati Gold","Breathing Purple","Black"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">&nbsp;&raquo;&nbsp;{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}


export default Themes;