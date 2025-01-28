import p1Img from './../assets/p1.png'
import ferrariImg from './../assets/Ferrari.png'
import { useState } from 'react'
function homeRaceResult() {
    let [top10Display, setDriverDisplay] = useState(true)

    const drivers = Array.from({ lenght: 10},(_, index) => index + 1);

    return (
        <div id="home-raceResult">
            <h1>VÝSLEDKY ZÁVODU:</h1>
            <h3 className="home-raceResult-h3">MAIN LEAGUE</h3>
            <h3 className="home-raceResult-h3">ŠPANĚLSKO</h3>
            <div id="home-results-container">
                <div id="home-results-top10" style={{ display: top10Display ? "block" : "none"}}>
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
                <div id="home-results-bottom10" style={{ display: top10Display ? "none" : "block", marginTop: "3.45rem"}}>
                    <div id="home-results-bottom" style={{ marginTop: "0rem"}}>
                        <div className="home-results-bottom-driver" style={{ marginTop: "0rem"}}>
                            <div className="home-results-bottom-driver-pos">11</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">12</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">13</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">14</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">15</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">16</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">17</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">18</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">19</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                        <div className="home-results-bottom-driver">
                            <div className="home-results-bottom-driver-pos">20</div>
                            <img className="home-results-bottom-driver-img" src={p1Img}></img>
                            <div className="home-results-bottom-driver-name">
                                <h3 className="home-results-bottom-driver-name-first">Tomáš</h3>
                                <h3 className="home-results-bottom-driver-name-last">Spousta</h3>
                            </div>
                            <img className="home-results-bottom-team" src={ferrariImg}></img>
                        </div>
                    </div>
                </div>
            </div>
            <button id="home-results-changeBtn" onClick={() => setDriverDisplay((prev) => !prev)}>{top10Display ? "Bottom 10" : "Top 10"}</button>
        </div>
    )
}

export default homeRaceResult