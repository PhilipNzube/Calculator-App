import CloseBut from './images/CloseBut.png';
import Standard from './images/StandardCalc.png';
import Scientific from './images/ScientificCalc.png';
export default function NavBar() {
    return (
        <>
            <div id="NContainer">
            <img id="CloseBut" src={CloseBut} alt="CloseBut" />
                <p id="NName">Calculator</p>
                <div id="NCalcCon"><img id="StandardImg" src={Standard} alt=""/><p id="NCalc">Standard</p></div>
                <div id="NCalcCon2"><img id="ScientificImg" src={Scientific} alt=""/><p id="NCalc2">Scientific</p></div>
            </div>   
        </>
    )
}