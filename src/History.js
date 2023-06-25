// import { useNavigate } from 'react-router-dom';
import Delete from './images/Delete.png';
export default function History() {
    // const navigate = useNavigate();
    setTimeout(() => {
        document.getElementById("Delete").addEventListener('click', () => {
            if (document.getElementById("HistoryCont")) {
                var Timer = setInterval(() => {
                    document.getElementById("HContainer").removeChild(document.getElementById("HistoryCont"));
                    if (!document.getElementById("HistoryCont")) {
                        document.getElementById("Delete").style.display = "none";
                        document.getElementById("HInfo").style.display = "block";
                        clearInterval(Timer);
                    }
                }, 1);
            }
        });
    }, 1000);
    return (
        <>
            <div id="HContainer">
                <p id="HInfo">There's no history yet</p>
                <img id="Delete" src={Delete} alt="Delete" />
                {/* <div id="HistoryCont">
                <p id="HistoryDisplay"></p>
                    <p id="HistoryDisplay2"></p>
                    </div> */}
            </div>
        </>
    )
}