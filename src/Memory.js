// import { useNavigate } from 'react-router-dom';
// import CloseBut from './images/CloseBut.png';
// import ProfilePic from './images/ProfilePic.jpg';
// import Proj1Img from './images/Proj1Img.png';
// import Proj2Img from './images/Proj2Img.png';
// import Proj3Img from './images/Proj3Img.png';
// import Proj4Img from './images/Proj4Img.png';
// import Proj5Img from './images/Proj5Img.png';
import Delete from './images/Delete.png';
export default function Memory() {
    // const navigate = useNavigate();
    setTimeout(() => {
        document.getElementById("MDelete").addEventListener('click', () => {
            if (document.getElementById("MemoryCont")) {
                var Timer = setInterval(() => {
                    document.getElementById("MContainer").removeChild(document.getElementById("MemoryCont"));
                    if (!document.getElementById("MemoryCont")) {
                        document.getElementById("MDelete").style.display = "none";
                        document.getElementById("MInfo").style.display = "block";
                        clearInterval(Timer);
                    }
                }, 1);
            }
        });
    }, 1000);
    return (
        <>
            <div id="MContainer">
                <p id="MInfo">There's nothing saved in memory</p>
                <img id="MDelete" src={Delete} alt="Delete" />
            </div>
        </>
    )
}