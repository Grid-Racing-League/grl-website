import Formula from './assets/Formula.jpg'
import './Home.css'
import ytLogo from './assets/icons/ytLogo.png'
import igLogo from './assets/icons/igLogo.png'
import dcLogo from './assets/icons/dcLogo.png'
import ttLogo from './assets/icons/ttLogo.png'
import sponsor1 from './assets/sponsor1.png'
import sponsor2 from './assets/sponsor2.png'
import pattern from './assets/weekScheduleBackgroundPattern.png'
import JuniorVolno from './assets/JuniorVolno.png'
import p1Img from './assets/p1.png'
import ferrariImg from './assets/Ferrari.png'
import backgroundPattern from './assets/tracks01.png'

import flagPlaceholder from './assets/flags/Italy.png'
import { useState } from 'react'

function Home() {
    let [calBackgroundCol, setCalendarBackground] = useState("#000984")

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
            <div id="home-calendar">
                <div id="home-calendar-top">
                    <button className='home-calendar-top-btns' onClick={() => setCalendarBackground("#000984")}>MAIN</button>
                    <button className='home-calendar-top-btns' onClick={() => setCalendarBackground("#00d126")}>ACADEMY</button>
                    <button className='home-calendar-top-btns' onClick={() => setCalendarBackground("#a312b5")}>TALENT</button>
                    <button className='home-calendar-top-btns' onClick={() => setCalendarBackground("#eabb00")}>JUNIOR</button>
                    <button className='home-calendar-top-btns' onClick={() => setCalendarBackground("#ae0000")}>ROOKIE</button>
                </div>
                <div id="home-calendar-bottom" style={{ backgroundColor: calBackgroundCol}}>
                    <div id="home-calendar-bottom-scrollable">
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                        <div className="home-calendar-race">
                            <img src={flagPlaceholder}></img>
                            <h4 className='home-calendar-h4'>ITÁLIE</h4>
                            <h3 className='home-calendar-h3'>IMOLA</h3>
                            <h1 className='home-calendar-h1'>02</h1>
                            <h3 className='home-calendar-h3'>LEDEN</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-raceResult">
                <h1>VÝSLEDKY ZÁVODU:</h1>
                <h3 className="home-raceResult-h3">MAIN LEAGUE</h3>
                <h3 className="home-raceResult-h3">ŠPANĚLSKO</h3>
                <div id="home-results-container">
                    <div id="home-results-top">
                        <div className="results-top-driver">
                            <div className='res-top-top'>
                                <img src={p1Img}></img>
                            </div>
                            <div className='res-top-bottom'>
                                <h3>TOMÁŠ</h3>
                                <h2>SPOUSTA</h2>
                                <h3>2</h3>
                            </div>
                        </div>
                        <div className="results-top-driver">
                            <div className='res-top-top'>
                                <img src={p1Img}></img>
                            </div>
                            <div className='res-top-bottom'>
                                <h3>TOMÁŠ</h3>
                                <h2>SPOUSTA</h2>
                                <h3>WINNER</h3>
                            </div>
                        </div>
                        <div className="results-top-driver">
                            <div className='res-top-top'>
                                <img src={p1Img}></img>
                            </div>
                            <div className='res-top-bottom'>
                                <h3>TOMÁŠ</h3>
                                <h2>SPOUSTA</h2>
                                <h3>3</h3>
                            </div>
                        </div>
                    </div>
                    <div id="home-results-bottom">
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">4</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">5</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">6</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">7</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">8</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">9</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">10</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                    </div>
                </div>
                <button id="home-results-changeBtn">Bottom 10</button>
            </div>
        </div>
        
    )
}
export default Home