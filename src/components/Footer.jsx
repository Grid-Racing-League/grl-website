import ytLogo from './../assets/icons/ytLogoWhite.png'
import igLogo from './../assets/icons/igLogoWhite.png'
import dcLogo from './../assets/icons/dcLogoWhite.png'
import ttLogo from './../assets/icons/ttLogoWhite.png'
import './Footer.css'
import GRLLogo from './../assets/Grl.svg'
function Footer () {
    return(
        <div id="footer">
            <div id="footer-top">
                <button className="footer-btn">O nás</button>
                <button className="footer-btn">Sponzoři</button>
                <button className="footer-btn">Ligy</button>
                <button className="footer-btn">Archiv</button>
                <button className="footer-btn">Přidej se</button>
            </div>
            <div id="footer-joinUs">
                <h2>PŘIDEJ SE K NÁM</h2>
                <div id="footer-joinUs-icons">
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
            <div id="footer-bottom">
                <img src={GRLLogo} alt="Grl logo"></img>
                <h3>Grid Racing League 2024</h3>
            </div>
        </div>
    )
}
export default Footer