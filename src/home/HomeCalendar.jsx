import { useState, useEffect } from 'react'

const formatRaceDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const customMonths = [
    "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
];

const formatRaceMonth = (dateStr) => {
    const date = new Date(dateStr);
  
    const month = customMonths[date.getMonth()];
    return month;
};

const checkLocation = (location) => {
    if (location === "Spa-Francorchamps") {
        return "Spa"
    } else {
        return location
    }
}

function HomeCalendar() {
    let [cL, setCL] = useState("Main")
    let [cLColor, setCLColor] = useState("#000984")

    const [races, setRaces] = useState([]);

    useEffect(() => {
        let apiBaseUrl = "https://grl.pindej.cz";
        let calendarEndpoint = "api/Calendar";
        let url = `${apiBaseUrl}/${calendarEndpoint}/${cL}/2024%2F25`;

        fetch(url)
            .then((response) => {
            if (!response.ok) {
                throw new Error("Couldn't load API data.");
            }
            return response.json();
            })
            .then((data) => {
                // Adding index as key to each race item
                const racesWithKeys = data.races.map((race, index) => ({
                    ...race,
                    key: index.toString(), // Assuming index can be converted to string
                }));
                setRaces(racesWithKeys);
            })
            .catch((error) => console.error(error));
    }, [cL]);

    function updateCurrentLeague(leagueName) {
        setCL(leagueName)
        if (leagueName === "Main") {setCLColor("#000984")}
        else if (leagueName === "Academy") {setCLColor("#00d126")}
        else if (leagueName === "Talent") {setCLColor("#a312b5")}
        else if (leagueName === "Junior") {setCLColor("#eabb00")}
        else if (leagueName === "Rookie") {setCLColor("#ae0000")}
    }

    return(
        <div id="home-calendar">
            <div id="home-calendar-top">
                <button className='home-calendar-top-btns' style={{ backgroundColor: cL === "Main" ? cLColor : "transparent", color: cL === "Main" && cLColor ? "white" : "black" }} onClick={() => updateCurrentLeague("Main")}>MAIN</button>
                <button className='home-calendar-top-btns' style={{ backgroundColor: cL === "Academy" ? cLColor : "transparent", color: cL === "Academy" && cLColor ? "white" : "black" }}onClick={() => updateCurrentLeague("Academy")}>ACADEMY</button>
                <button className='home-calendar-top-btns' style={{ backgroundColor: cL === "Talent" ? cLColor : "transparent", color: cL === "Talent" && cLColor ? "white" : "black" }}onClick={() => updateCurrentLeague("Talent")}>TALENT</button>
                <button className='home-calendar-top-btns' style={{ backgroundColor: cL === "Junior" ? cLColor : "transparent", color: cL === "Junior" && cLColor ? "white" : "black" }}onClick={() => updateCurrentLeague("Junior")}>JUNIOR</button>
                <button className='home-calendar-top-btns' style={{ backgroundColor: cL === "Rookie" ? cLColor : "transparent", color: cL === "Rookie" && cLColor ? "white" : "black" }}onClick={() => updateCurrentLeague("Rookie")}>ROOKIE</button>
            </div>
            <div id="home-calendar-bottom" style={{ backgroundColor: cLColor}}>
                <div id="home-calendar-bottom-scrollable">
                    {races.length > 0 ? (
                        races.map((race, index) => (
                            <div className="home-calendar-race" key={index}>
                                <img src={`/flags/${race.country}.png`} alt="My Image"></img>
                                <h4 className='home-calendar-h4'>{race.country}</h4>
                                <h3 className='home-calendar-h3'>{checkLocation(race.location)}</h3>
                                <h1 className='home-calendar-h1'>{formatRaceDate(race.date)}</h1>
                                <h3 className='home-calendar-h3'>{formatRaceMonth(race.date)}</h3>
                            </div>
                        ))
                        ) : (
                        <p>Loading races...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
// <div className="home-calendar-race">
// <img></img>
// <h4 className='home-calendar-h4'>ITÁLIE</h4>
// <h3 className='home-calendar-h3'>IMOLA</h3>
// <h1 className='home-calendar-h1'>02</h1>
// <h3 className='home-calendar-h3'>LEDEN</h3>
// </div>
export default HomeCalendar