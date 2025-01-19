import Formula from './assets/Formula.jpg'
import './home/Home.css'
import ytLogo from './assets/icons/ytLogo.png'
import igLogo from './assets/icons/igLogo.png'
import dcLogo from './assets/icons/dcLogo.png'
import ttLogo from './assets/icons/ttLogo.png'
import sponsor1 from './assets/sponsor1.png'
import sponsor2 from './assets/sponsor2.png'
import pattern from './assets/weekScheduleBackgroundPattern.png'
import JuniorVolno from './assets/JuniorVolno.png'
import backgroundPattern from './assets/tracks01.png'

import HomeCalendar from './home/HomeCalendar.jsx'
import HomeRaceResult from './home/HomeRaceResult.jsx'

import { useState } from 'react'

function Home() {

    return(
        <div id="home">
            <div id="home-img">
                <img src={Formula} alt='Home image' style={{ border: "1px black solid" }}></img>
            </div>
            <div id="home-top-links">
                <h2>PŘIDEJ SE K NÁM</h2>
                <div id="home-top-icons">
                    <a href="https://www.youtube.com/@GridRacingLeague" aria-label="Visit our YouTube channel">
                        <img src={ytLogo} alt="YouTube Logo" ></img>
                    </a>
                    <a href="https://www.instagram.com/grid_racing_league/" aria-label="Visit our YouTube channel">
                        <img src={igLogo} alt="YouTube Logo" ></img>
                    </a>
                    <a href="tba" aria-label="Visit our YouTube channel">
                        <img src={dcLogo} alt="YouTube Logo" ></img>
                    </a>
                    <a href="https://www.tiktok.com/@gridracingleague" aria-label="Visit our YouTube channel">
                        <img src={ttLogo} alt="YouTube Logo"></img>
                    </a>
                </div>
            </div>
            <div id="home-sponsors">
                <h1>SPONZOŘI</h1>
                <div id="home-sponsors-row">
                    <img src={sponsor2}></img>
                    <div id="home-sponsor-spacer"></div>
                    <img src={sponsor1}></img>
                </div>
            </div>
            <div id="home-weekSchedule">
                <img id="home-weekSchedule-pattern" src={backgroundPattern}></img>
                <h1 id="home-weekSchedule-h1">GRL THIS WEEK SCHEDULE</h1>
                <div id="home-weekSchedule-leagues">
                    <div className="weekSchedule-league-background">
                        <img className="weekSchedule-pattern" src={pattern}></img>
                        <div className="weekSchedule-league week-Main">
                            <div className="weekSchedule-league-spacer">
                                <h1 className="wSchdl-h1">MAIN</h1>
                                <h4 className="wSchdl-h4">Kanada</h4>
                                <h3 className="wSchdl-h3">neděle</h3>
                                <h2 className="wSchdl-h2">10.11 19:00</h2>
                            </div>
                        </div>
                    </div>
                    <div className="weekSchedule-league-background">
                        <img className="weekSchedule-pattern" src={pattern}></img>
                        <div className="weekSchedule-league week-Academy">
                            <div className="weekSchedule-league-spacer">
                                <h1 className="wSchdl-h1">ACADEMY</h1>
                                <h4 className="wSchdl-h4">Kanada</h4>
                                <h3 className="wSchdl-h3">neděle</h3>
                                <h2 className="wSchdl-h2">10.11 19:00</h2>
                            </div>
                        </div>
                    </div>
                    <div className="weekSchedule-league-background">
                        <img className="weekSchedule-pattern" src={pattern}></img>
                        <div className="weekSchedule-league week-Talent">
                            <div className="weekSchedule-league-spacer">
                                <h1 className="wSchdl-h1">TALENT</h1>
                                <h4 className="wSchdl-h4">Kanada</h4>
                                <h3 className="wSchdl-h3">neděle</h3>
                                <h2 className="wSchdl-h2">10.11 19:00</h2>
                            </div>
                        </div>
                    </div>
                    <div className="weekSchedule-league-background">
                        <img src={JuniorVolno} alt="Junior volno" style={{ width: "44rem"}}></img>
                    </div>
                    <div className="weekSchedule-league-background">
                        <img className="weekSchedule-pattern" src={pattern}></img>
                        <div className="weekSchedule-league week-Rookie">
                            <div className="weekSchedule-league-spacer">
                                <h1 className="wSchdl-h1">ROOKIE</h1>
                                <h4 className="wSchdl-h4">Kanada</h4>
                                <h3 className="wSchdl-h3">neděle</h3>
                                <h2 className="wSchdl-h2">10.11 19:00</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {<HomeCalendar></HomeCalendar>}
            {<HomeRaceResult></HomeRaceResult>}
        </div>
        
    )
}
export default Home