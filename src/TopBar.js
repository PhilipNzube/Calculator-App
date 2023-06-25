// import ProfilePic from './images/ProfilePic.jpg';
// import Twitter from './images/Twitter.png';
// import GitHub from './images/GitHub.png';
// import LinkedIn from './images/LinkedIn.png';
// import CloseBut from './images/CloseBut.png';
// import DownloadIcon from './images/Download.png';
// import { useNavigate } from 'react-router-dom';
import HamBurger from './images/HamBurger.png';
export default function TopBar() {
    setTimeout(() => {
        document.getElementById("MContainer").style.display = "none";
        document.getElementById("SiCContainer").style.display = "none";
        document.getElementById("SCContainer").style.display = "block";
    }, 100);

    setTimeout(() => {
        document.getElementById("Memory").addEventListener('click', () => {
            // navigate("/Memory");
            document.getElementById("HContainer").style.display = "none";
            document.getElementById("MContainer").style.display = "block";
            document.getElementById("Memory").style.textDecorationLine = "underline";
            document.getElementById("Memory").style.textDecorationThickness = "4px";
            document.getElementById("Memory").style.textUnderlineOffset = "10px";
            document.getElementById("Memory").style.textDecorationColor = "rgb(184, 6, 6)";

            document.getElementById("History").style.textDecorationLine = "none";
        });

        document.getElementById("History").addEventListener('click', () => {
            // navigate("/History");
            document.getElementById("MContainer").style.display = "none";
            document.getElementById("HContainer").style.display = "block";
            document.getElementById("History").style.textDecorationLine = "underline";
            document.getElementById("History").style.textDecorationThickness = "4px";
            document.getElementById("History").style.textUnderlineOffset = "10px";
            document.getElementById("History").style.textDecorationColor = "rgb(184, 6, 6)";

            document.getElementById("Memory").style.textDecorationLine = "none";
        });


        document.getElementById("HamBurger").addEventListener('click', () => {
            document.getElementById("NContainer").style.display = "block";
        });

        document.getElementById("CloseBut").addEventListener('click', () => {
            document.getElementById("NContainer").style.animationName = "SlideOut";
            document.getElementById("NContainer").style.animationDuration = "0.5s";
            setTimeout(() => {
                document.getElementById("NContainer").style.animationDuration = "1s";
                document.getElementById("NContainer").style.animationName = "SlideIn";
                document.getElementById("NContainer").style.display = "none";
            }, 300);
        });

        document.getElementById("NCalcCon").addEventListener('click', () => {
            document.getElementById("CurrentCalc").innerHTML = "Standard";
            document.getElementById("NCalcCon").style.borderLeftColor = "rgb(184, 6, 6)";
            document.getElementById("NCalcCon").style.borderLeftWidth = "2px";
            document.getElementById("NCalcCon").style.borderLeftStyle = "solid";

            document.getElementById("NCalcCon2").style.borderLeft = "none";
            document.getElementById("SiCContainer").style.display = "none";
            document.getElementById("SCContainer").style.display = "block";
        });

        document.getElementById("NCalcCon2").addEventListener('click', () => {
            document.getElementById("CurrentCalc").innerHTML = "Scientific";
            document.getElementById("NCalcCon2").style.borderLeftColor = "rgb(184, 6, 6)";
            document.getElementById("NCalcCon2").style.borderLeftWidth = "2px";
            document.getElementById("NCalcCon2").style.borderLeftStyle = "solid";

            document.getElementById("NCalcCon").style.borderLeft = "none";
            document.getElementById("SCContainer").style.display = "none";
            document.getElementById("SiCContainer").style.display = "block";
        });
    }, 1000);
    return (
        <>
            <div id="TBContainer">
                <div id="Name">
                    <img id="HamBurger" src={HamBurger} alt="HamBurger" />
                    <p id="CurrentCalc">Standard</p>
                    <p id="History">History</p>
                    <p id="Memory">Memory</p>
                </div>
            </div>
        </>
    )

}