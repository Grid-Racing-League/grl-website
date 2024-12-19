import './Header.css'
import GRLLogo from './../assets/Grl.svg'
import { useState } from 'react'

function Header() {
    let [displayLeagues, updateLeagueDisplay] = useState(false)

    return(
        <nav id="header">
            <div id="header-top">
                <div id="header-left">
                    <button id="header-top-Home"><img src={GRLLogo} alt="Grl logo"></img></button>
                    <button className="header-top-btn">O nás</button>
                    <button className="header-top-btn">Sponzoři</button>
                    <button className="header-top-btn" onClick={() => updateLeagueDisplay((prev) => !prev)}>Ligy</button>
                </div>
                <div id="header-right">
                    <button className="header-top-btn">Archiv</button>
                    <button id="header-top-JoinUs">Přidej se</button>
                </div>
            </div>
            <div id="triangle" style={{display: displayLeagues ? "block" : "none"}}></div>
            <div id="header-bottom" style={{display: displayLeagues ? "flex" : "none"}}>
                <button className="header-bottom-btn">
                    <img src={GRLLogo} alt="Grl logo"></img>
                    <h2>Main League</h2>
                </button>
                <button className="header-bottom-btn">
                    <img src={GRLLogo} alt="Grl logo"></img>
                    <h2>Academy League</h2>
                </button>
                <button className="header-bottom-btn">
                    <img src={GRLLogo} alt="Grl logo"></img>
                    <h2>Talent League</h2>
                </button>
                <button className="header-bottom-btn">
                    <img src={GRLLogo} alt="Grl logo"></img>
                    <h2>Junior League</h2>
                </button>
                <button className="header-bottom-btn">
                    <img src={GRLLogo} alt="Grl logo"></img>
                    <h2>Rookie League</h2>
                </button>
            </div>
        </nav>
    )
}
export default Header