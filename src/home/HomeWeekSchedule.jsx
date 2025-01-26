import pattern from './../assets/weekScheduleBackgroundPattern.png'
import JuniorVolno from './../assets/JuniorVolno.png'
import backgroundPattern from './../assets/tracks01.png'

import { useState, useEffect } from 'react'

function HomeWeekSchedule() {
    function isInSameWeek(currentDateString, calendarRetrievedDateString) {
        const currentDate = new Date(currentDateString);
        const retrievedDate = new Date(calendarRetrievedDateString);
    
        const startOfWeek = date => {
            const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
            const adjustedDay = (dayOfWeek === 0 ? 6 : dayOfWeek - 1); // Adjust to Monday-based week
            const diff = date.getDate() - adjustedDay;
            return new Date(date.setDate(diff));
        };
    
        const startOfCurrentWeek = startOfWeek(new Date(currentDate));
        const startOfRetrievedWeek = startOfWeek(new Date(retrievedDate));
    
        return startOfCurrentWeek.toDateString() === startOfRetrievedWeek.toDateString();
    }

    const [MainTrackName, setMainTrackName] = useState(null);
    const [MainDayName, setMainDayName] = useState("Volno");
    const [MainDate, setMainDate] = useState(null);

    const [AcademyTrackName, setAcademyTrackName] = useState(null);
    const [AcademyDayName, setAcademyDayName] = useState("Volno");
    const [AcademyDate, setAcademyDate] = useState(null);

    const [TalentTrackName, setTalentTrackName] = useState(null);
    const [TalentDayName, setTalentDayName] = useState("Volno");
    const [TalentDate, setTalentDate] = useState(null);

    const [JuniorTrackName, setJuniorTrackName] = useState(null);
    const [JuniorDayName, setJuniorDayName] = useState("Volno");
    const [JuniorDate, setJuniorDate] = useState(null);

    const [RookieTrackName, setRookieTrackName] = useState(null);
    const [RookieDayName, setRookieDayName] = useState("Volno");
    const [RookieDate, setRookieDate] = useState(null);
    
    function CheckRaceWeek(league) {
        useEffect(() => {
            const apiBaseUrl = "https://grl.pindej.cz";
            const calendarEndpoint = "api/Calendar";
            const url = `${apiBaseUrl}/${calendarEndpoint}/${league}/2024%2F25`;
    
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Couldn't load API data.");
                    }
                    return response.json();
                })
                .then(data => {
                    const today = new Date().toISOString();
                    const racesThisWeek = data.races.filter(race =>
                        isInSameWeek(today, race.date)
                    );
                
                    if (racesThisWeek.length > 0) {
                        racesThisWeek.forEach(race => {
                            if (league === "Main") {
                                setMainTrackName(race.location);
                                setMainDayName("Neděle");
                                const raceDate = new Date(race.date);
                                const formattedDate = `${String(raceDate.getDate()).padStart(2, '0')}.${String(raceDate.getMonth() + 1).padStart(2, '0')} 19:00`;
                                setMainDate(formattedDate);
                            }
                            if (league === "Academy") {
                                setAcademyTrackName(race.location);
                                setAcademyDayName("Pondělí");
                                const raceDate = new Date(race.date);
                                const formattedDate = `${String(raceDate.getDate()).padStart(2, '0')}.${String(raceDate.getMonth() + 1).padStart(2, '0')} 19:00`;
                                setAcademyDate(formattedDate);
                            }
                            if (league === "Talent") {
                                setTalentTrackName(race.location);
                                setTalentDayName("Sobota");
                                const raceDate = new Date(race.date);
                                const formattedDate = `${String(raceDate.getDate()).padStart(2, '0')}.${String(raceDate.getMonth() + 1).padStart(2, '0')} 20:00`;
                                setTalentDate(formattedDate);
                            }
                            if (league === "Junior") {
                                setJuniorTrackName(race.location);
                                setJuniorDayName("Úterý");
                                const raceDate = new Date(race.date);
                                const formattedDate = `${String(raceDate.getDate()).padStart(2, '0')}.${String(raceDate.getMonth() + 1).padStart(2, '0')} 20:00`;
                                setJuniorDate(formattedDate);
                            }
                            if (league === "Rookie") {
                                setRookieTrackName(race.location);
                                setRookieDayName("Středa");
                                const raceDate = new Date(race.date);
                                const formattedDate = `${String(raceDate.getDate()).padStart(2, '0')}.${String(raceDate.getMonth() + 1).padStart(2, '0')} 20:00`;
                                setRookieDate(formattedDate);
                            }
                        });
                    } else {
                        //console.log(`${league} má tento týden volno!`)
                    }
                });
        },);
    
        return null; // No UI rendering necessary
    }
    for (let i = 0;i < 5;i++) {
        if (i === 0) {
            CheckRaceWeek("Main")
        } else if (i === 1) {
            CheckRaceWeek("Academy")
        } else if (i === 2) {
            CheckRaceWeek("Talent")
        } else if (i === 3) {
            CheckRaceWeek("Junior")
        } else if (i === 4) {
            CheckRaceWeek("Rookie")
        }
    }
    return(
        <div id="home-weekSchedule">
            <img id="home-weekSchedule-pattern" src={backgroundPattern}></img>
            <h1 id="home-weekSchedule-h1">GRL THIS WEEK SCHEDULE</h1>
            <div id="home-weekSchedule-leagues">
                <div className="weekSchedule-league-background">
                    <img className="weekSchedule-pattern" src={pattern}></img>
                    <div className="weekSchedule-league week-Main">
                        <div className="weekSchedule-league-spacer">
                            <h1 className="wSchdl-h1">MAIN</h1>
                            <h4 className="wSchdl-h4">{MainTrackName}</h4>
                            <h3 className="wSchdl-h3">{MainDayName}</h3>
                            <h2 className="wSchdl-h2">{MainDate}</h2>
                        </div>
                    </div>
                </div>
                <div className="weekSchedule-league-background">
                    <img className="weekSchedule-pattern" src={pattern}></img>
                    <div className="weekSchedule-league week-Academy">
                        <div className="weekSchedule-league-spacer">
                            <h1 className="wSchdl-h1">ACADEMY</h1>
                            <h4 className="wSchdl-h4">{AcademyTrackName}</h4>
                            <h3 className="wSchdl-h3">{AcademyDayName}</h3>
                            <h2 className="wSchdl-h2">{AcademyDate}</h2>
                        </div>
                    </div>
                </div>
                <div className="weekSchedule-league-background">
                    <img className="weekSchedule-pattern" src={pattern}></img>
                    <div className="weekSchedule-league week-Talent">
                        <div className="weekSchedule-league-spacer">
                            <h1 className="wSchdl-h1">TALENT</h1>
                            <h4 className="wSchdl-h4">{TalentTrackName}</h4>
                            <h3 className="wSchdl-h3">{TalentDayName}</h3>
                            <h2 className="wSchdl-h2">{TalentDate}</h2>
                        </div>
                    </div>
                </div>
                <div className="weekSchedule-league-background">
                    <img className="weekSchedule-pattern" src={pattern}></img>
                    <div className="weekSchedule-league week-Junior">
                        <div className="weekSchedule-league-spacer">
                            <h1 className="wSchdl-h1">Junior</h1>
                            <h4 className="wSchdl-h4">{JuniorTrackName}</h4>
                            <h3 className="wSchdl-h3">{JuniorDayName}</h3>
                            <h2 className="wSchdl-h2">{JuniorDate}</h2>
                        </div>
                    </div>
                </div>
                <div className="weekSchedule-league-background">
                    <img className="weekSchedule-pattern" src={pattern}></img>
                    <div className="weekSchedule-league week-Rookie">
                        <div className="weekSchedule-league-spacer">
                            <h1 className="wSchdl-h1">ROOKIE</h1>
                            <h4 className="wSchdl-h4">{RookieTrackName}</h4>
                            <h3 className="wSchdl-h3">{RookieDayName}</h3>
                            <h2 className="wSchdl-h2">{RookieDate}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWeekSchedule