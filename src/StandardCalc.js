// import ProfilePic from './images/buttonrofilePic.jpg';
// import Twitter from './images/Twitter.png';
// import GitHub from './images/GitHub.png';
// import LinkedIn from './images/LinkedIn.png';
import History from './images/History.png';
// import { useNavigate } from 'react-router-dom';
export default function StandardCalc() {
    // const navigate = useNavigate();
    let answer = "";
    let expression;
    let RootActive = 0;
    let SquareActive = 0;
    let OneDivisor = 0;
    let MCActive = 0;
    let MRActive = 0;
    let MplusActive = 1;
    let MminusActive = 1;
    let MSActive = 1;
    let previousMinusDisplay = "";
    let previousPlusDisplay = "";
    setTimeout(() => {
        document.getElementById("Loading").style.display = "none";
        document.getElementById("MainContainer").style.display = "block";
        document.getElementById("Key").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                RootActive = 0;
                SquareActive = 0;
                OneDivisor = 0;
                document.getElementById("SCDisplay").innerHTML += "%";
            }
        });


        document.getElementById("Key2").addEventListener('click', () => {
            document.getElementById("SCDisplay").innerHTML = 0;
        });

        document.getElementById("Key3").addEventListener('click', () => {
            document.getElementById("SCDisplay").innerHTML = 0;
        });

        document.getElementById("Key7").addEventListener('click', () => {
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 1;
            let AbsoluteValue = Math.abs(document.getElementById("SCDisplay").innerHTML)
            expression = "√" + "(" + AbsoluteValue + ")";
            answer = Math.sqrt(AbsoluteValue);
            document.getElementById("SCDisplay").innerHTML = answer;
            // if (document.getElementById("SCDisplay").innerHTML === "0") {
            //     document.getElementById("SCDisplay").innerHTML = "";
            // }
            // if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
            //     document.getElementById("SCDisplay").innerHTML += "√";
            // }
        });

        document.getElementById("Key8").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SCDisplay").innerHTML += "/";
            }
        });

        document.getElementById("Key12").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SCDisplay").innerHTML += "*";
            }
        });

        document.getElementById("Key16").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SCDisplay").innerHTML += "-";
            }
        });

        document.getElementById("Key20").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SCDisplay").innerHTML += "+";
            }
        });

        document.getElementById("Key21").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML !== "0") {
                if (Math.sign(document.getElementById("SCDisplay").innerHTML) == 1) {
                    document.getElementById("SCDisplay").innerHTML = Math.abs(document.getElementById("SCDisplay").innerHTML);
                    document.getElementById("SCDisplay").innerHTML = "-" + document.getElementById("SCDisplay").innerHTML;
                }
                else
                    if (Math.sign(document.getElementById("SCDisplay").innerHTML) == -1) {
                        document.getElementById("SCDisplay").innerHTML = Math.abs(document.getElementById("SCDisplay").innerHTML);
                    }
            }
        });


        document.getElementById("Key23").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += ".";
            }
        });

        document.getElementById("Key24").addEventListener('click', () => {
            // let Spacer = 0;
            const Container = document.getElementById("HContainer");
            const HContent = document.createElement("div");
            const HD = document.createElement("p");
            const HD2 = document.createElement("p");
            HD.id = "HistoryDisplay";
            HD2.id = "HistoryDisplay2";
            HContent.id = "HistoryCont";
            document.getElementById("HInfo").style.display = "none";
            document.getElementById("Delete").style.display = "block";
            // if (Spacer == 1) {
            //     HContent.style.tobutton = "500px";
            // }
            Container.appendChild(HContent);
            if (RootActive == 1 || SquareActive == 1 || OneDivisor == 1) {
                HD.innerHTML = expression + "" + "=";
            }
            else {
                HD.innerHTML = document.getElementById("SCDisplay").innerHTML + "" + "=";
            }
            answer = eval(document.getElementById("SCDisplay").innerHTML);
            document.getElementById("SCDisplay").innerHTML = answer;
            HD2.innerHTML = answer;
            HContent.appendChild(HD);
            HContent.appendChild(HD2);
            // Spacer++;
            // document.getElementById("HistoryDisplay").innerHTML = document.getElementById("SCDisplay").innerHTML +""+"=";
            // answer = eval(document.getElementById("SCDisplay").innerHTML);
            // document.getElementById("SCDisplay").innerHTML = answer;
            // document.getElementById("HistoryDisplay2").innerHTML = answer;
        });

        document.getElementById("Key4").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML.length > 1) {
                document.getElementById("SCDisplay").innerHTML = document.getElementById("SCDisplay").innerHTML.substring(0, document.getElementById("SCDisplay").innerHTML.length - 1);
            }
            else if (document.getElementById("SCDisplay").innerHTML.length == 1) {
                document.getElementById("SCDisplay").innerHTML = 0;
            }
        });

        document.getElementById("Key5").addEventListener('click', () => {
            OneDivisor = 1;
            SquareActive = 0;
            RootActive = 0;
            expression = "1" + "/" + "(" + document.getElementById("SCDisplay").innerHTML + ")";
            answer = eval(document.getElementById("SCDisplay").innerHTML);
            document.getElementById("SCDisplay").innerHTML = 1 / answer;
        });

        document.getElementById("Key6").addEventListener('click', () => {
            OneDivisor = 0;
            SquareActive = 1;
            RootActive = 0;
            expression = "(" + document.getElementById("SCDisplay").innerHTML + ")" + "²";
            answer = eval(document.getElementById("SCDisplay").innerHTML);
            document.getElementById("SCDisplay").innerHTML = answer * answer;
        });

        document.getElementById("Key9").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 7;
            }
        });


        document.getElementById("Key10").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 8;
            }
        });


        document.getElementById("Key11").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 9;
            }
        });


        document.getElementById("Key13").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 4;
            }
        });

        document.getElementById("Key14").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 5;
            }
        });


        document.getElementById("Key15").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 6;
            }
        });

        document.getElementById("Key17").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 1;
            }
        });


        document.getElementById("Key18").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 2;
            }
        });

        document.getElementById("Key19").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 3;
            }
        });

        document.getElementById("Key22").addEventListener('click', () => {
            if (document.getElementById("SCDisplay").innerHTML === "0") {
                document.getElementById("SCDisplay").innerHTML = "";
            }
            if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                document.getElementById("SCDisplay").innerHTML += 0;
            }
        });
        document.addEventListener("keydown", (e) => {
            var keycode = e.key;
            // console.log(keycode);    
            if (keycode == "Backspace") {
                document.getElementById("Key4").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key4").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML.length > 1) {
                    document.getElementById("SCDisplay").innerHTML = document.getElementById("SCDisplay").innerHTML.substring(0, document.getElementById("SCDisplay").innerHTML.length - 1);
                }
                else if (document.getElementById("SCDisplay").innerHTML.length == 1) {
                    document.getElementById("SCDisplay").innerHTML = 0;
                }
            }

            if (keycode == "%") {
                document.getElementById("Key").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SCDisplay").innerHTML += "%";
                }
            }

            if (keycode == "/") {
                document.getElementById("Key8").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key8").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SCDisplay").innerHTML += "/";
                }
            }

            if (keycode == "*") {
                document.getElementById("Key12").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key12").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SCDisplay").innerHTML += "*";
                }
            }

            if (keycode == "-") {
                document.getElementById("Key16").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key16").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SCDisplay").innerHTML += "-";
                }
            }

            if (keycode == "+") {
                document.getElementById("Key20").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key20").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SCDisplay").innerHTML += "+";
                }
            }

            if (keycode == ".") {
                document.getElementById("Key23").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key23").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += ".";
                }
            }

            if (keycode == "=" || keycode == "Enter") {
                if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                    document.getElementById("Key24").style.backgroundColor = "rgb(184, 6, 6)";
                    document.getElementById("Key24").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                    const Container = document.getElementById("HContainer");
                    const HContent = document.createElement("div");
                    const HD = document.createElement("p");
                    const HD2 = document.createElement("p");
                    HD.id = "HistoryDisplay";
                    HD2.id = "HistoryDisplay2";
                    HContent.id = "HistoryCont";
                    document.getElementById("HInfo").style.display = "none";
                    document.getElementById("Delete").style.display = "block";
                    Container.appendChild(HContent);
                    if (RootActive == 1 || SquareActive == 1 || OneDivisor == 1) {
                        HD.innerHTML = expression + "" + "=";
                    }
                    else {
                        HD.innerHTML = document.getElementById("SCDisplay").innerHTML + "" + "=";
                    }
                    answer = eval(document.getElementById("SCDisplay").innerHTML);
                    document.getElementById("SCDisplay").innerHTML = answer;
                    HD2.innerHTML = answer;
                    HContent.appendChild(HD);
                    HContent.appendChild(HD2);
                }
            }


            if (keycode == 7) {
                document.getElementById("Key9").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key9").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 7;
                }
            }


            if (keycode == 8) {
                document.getElementById("Key10").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key10").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 8;
                }
            }


            if (keycode == 9) {
                document.getElementById("Key11").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key11").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 9;
                }
            }


            if (keycode == 4) {
                document.getElementById("Key13").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key13").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 4;
                }
            }

            if (keycode == 5) {
                document.getElementById("Key14").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key14").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 5;
                }
            }


            if (keycode == 6) {
                document.getElementById("Key15").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key15").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 6;
                }
            }

            if (keycode == 1) {
                document.getElementById("Key17").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key17").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 1;
                }
            }


            if (keycode == 2) {
                document.getElementById("Key18").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key18").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 2;
                }
            }

            if (keycode == 3) {
                document.getElementById("Key19").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key19").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 3;
                }
            }

            if (keycode == 0) {
                document.getElementById("Key22").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Key22").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SCDisplay").innerHTML === "0") {
                    document.getElementById("SCDisplay").innerHTML = "";
                }
                if (document.getElementById("SCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SCDisplay").innerHTML += 0;
                }
            }
        });




        document.addEventListener("keyup", (e) => {
            var keycode = e.key;

            if (keycode == "Backspace") {
                document.getElementById("Key4").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("Key4").style.boxShadow = "0 0 0";
            }

            if (keycode == "%") {
                document.getElementById("Key").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("Key").style.boxShadow = "0 0 0";
            }

            if (keycode == "/") {
                document.getElementById("Key8").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("Key8").style.boxShadow = "0 0 0";
            }

            if (keycode == "*") {
                document.getElementById("Key12").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("Key12").style.boxShadow = "0 0 0";
            }

            if (keycode == "-") {
                document.getElementById("Key16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("Key16").style.boxShadow = "0 0 0";
            }

            if (keycode == "+") {
                document.getElementById("Key20").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("Key20").style.boxShadow = "0 0 0";
            }

            if (keycode == ".") {
                document.getElementById("Key23").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key23").style.boxShadow = "0 0 0";
            }

            if (keycode == "=" || keycode == "Enter") {
                document.getElementById("Key24").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
                document.getElementById("Key24").style.boxShadow = "0 0 0";
            }

            if (keycode == 7) {
                document.getElementById("Key9").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key9").style.boxShadow = "0 0 0";
            }


            if (keycode == 8) {
                document.getElementById("Key10").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key10").style.boxShadow = "0 0 0";
            }


            if (keycode == 9) {
                document.getElementById("Key11").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key11").style.boxShadow = "0 0 0";
            }


            if (keycode == 4) {
                document.getElementById("Key13").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key13").style.boxShadow = "0 0 0";
            }

            if (keycode == 5) {
                document.getElementById("Key14").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key14").style.boxShadow = "0 0 0";
            }


            if (keycode == 6) {
                document.getElementById("Key15").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key15").style.boxShadow = "0 0 0";
            }

            if (keycode == 1) {
                document.getElementById("Key17").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key17").style.boxShadow = "0 0 0";
            }


            if (keycode == 2) {
                document.getElementById("Key18").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key18").style.boxShadow = "0 0 0";
            }

            if (keycode == 3) {
                document.getElementById("Key19").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key19").style.boxShadow = "0 0 0";
            }

            if (keycode == 0) {
                document.getElementById("Key22").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("Key22").style.boxShadow = "0 0 0";
            }
        });



        document.getElementById("Key").addEventListener('mouseover', () => {
            document.getElementById("Key").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key").addEventListener('mouseleave', () => {
            document.getElementById("Key").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key2").addEventListener('mouseover', () => {
            document.getElementById("Key2").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key2").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key2").addEventListener('mouseleave', () => {
            document.getElementById("Key2").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key2").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key3").addEventListener('mouseover', () => {
            document.getElementById("Key3").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key3").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key3").addEventListener('mouseleave', () => {
            document.getElementById("Key3").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key3").style.boxShadow = "0 0 0";
        });



        document.getElementById("Key4").addEventListener('mouseover', () => {
            document.getElementById("Key4").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key4").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key4").addEventListener('mouseleave', () => {
            document.getElementById("Key4").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key4").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key5").addEventListener('mouseover', () => {
            document.getElementById("Key5").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key5").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key5").addEventListener('mouseleave', () => {
            document.getElementById("Key5").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key5").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key6").addEventListener('mouseover', () => {
            document.getElementById("Key6").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key6").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key6").addEventListener('mouseleave', () => {
            document.getElementById("Key6").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key6").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key7").addEventListener('mouseover', () => {
            document.getElementById("Key7").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key7").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key7").addEventListener('mouseleave', () => {
            document.getElementById("Key7").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key7").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key8").addEventListener('mouseover', () => {
            document.getElementById("Key8").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key8").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key8").addEventListener('mouseleave', () => {
            document.getElementById("Key8").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key8").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key9").addEventListener('mouseover', () => {
            document.getElementById("Key9").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key9").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key9").addEventListener('mouseleave', () => {
            document.getElementById("Key9").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key9").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key10").addEventListener('mouseover', () => {
            document.getElementById("Key10").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key10").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key10").addEventListener('mouseleave', () => {
            document.getElementById("Key10").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key10").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key11").addEventListener('mouseover', () => {
            document.getElementById("Key11").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key11").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key11").addEventListener('mouseleave', () => {
            document.getElementById("Key11").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key11").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key12").addEventListener('mouseover', () => {
            document.getElementById("Key12").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key12").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key12").addEventListener('mouseleave', () => {
            document.getElementById("Key12").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key12").style.boxShadow = "0 0 0";
        });



        document.getElementById("Key13").addEventListener('mouseover', () => {
            document.getElementById("Key13").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key13").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key13").addEventListener('mouseleave', () => {
            document.getElementById("Key13").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key13").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key14").addEventListener('mouseover', () => {
            document.getElementById("Key14").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key14").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key14").addEventListener('mouseleave', () => {
            document.getElementById("Key14").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key14").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key15").addEventListener('mouseover', () => {
            document.getElementById("Key15").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key15").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key15").addEventListener('mouseleave', () => {
            document.getElementById("Key15").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key15").style.boxShadow = "0 0 0";
        });



        document.getElementById("Key16").addEventListener('mouseover', () => {
            document.getElementById("Key16").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key16").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key16").addEventListener('mouseleave', () => {
            document.getElementById("Key16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key16").style.boxShadow = "0 0 0";
        });



        document.getElementById("Key17").addEventListener('mouseover', () => {
            document.getElementById("Key17").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key17").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key17").addEventListener('mouseleave', () => {
            document.getElementById("Key17").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key17").style.boxShadow = "0 0 0";
        });



        document.getElementById("Key18").addEventListener('mouseover', () => {
            document.getElementById("Key18").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key18").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key18").addEventListener('mouseleave', () => {
            document.getElementById("Key18").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key18").style.boxShadow = "0 0 0";
        });



        document.getElementById("Key19").addEventListener('mouseover', () => {
            document.getElementById("Key19").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key19").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key19").addEventListener('mouseleave', () => {
            document.getElementById("Key19").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key19").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key20").addEventListener('mouseover', () => {
            document.getElementById("Key20").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key20").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key20").addEventListener('mouseleave', () => {
            document.getElementById("Key20").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("Key20").style.boxShadow = "0 0 0";
        });


        document.getElementById("Key21").addEventListener('mouseover', () => {
            document.getElementById("Key21").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key21").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key21").addEventListener('mouseleave', () => {
            document.getElementById("Key21").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key21").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key22").addEventListener('mouseover', () => {
            document.getElementById("Key22").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key22").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key22").addEventListener('mouseleave', () => {
            document.getElementById("Key22").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key22").style.boxShadow = "0 0 0";
        });



        document.getElementById("Key23").addEventListener('mouseover', () => {
            document.getElementById("Key23").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("Key23").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key23").addEventListener('mouseleave', () => {
            document.getElementById("Key23").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("Key23").style.boxShadow = "0 0 0";
        });

        document.getElementById("Key24").addEventListener('mouseover', () => {
            document.getElementById("Key24").style.backgroundColor = "rgb(184, 6, 6)";
            document.getElementById("Key24").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("Key24").addEventListener('mouseleave', () => {
            document.getElementById("Key24").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
            document.getElementById("Key24").style.boxShadow = "0 0 0";
        });



        document.getElementById("MDelete").addEventListener('click', () => {
            previousMinusDisplay = "";
            document.getElementById("MC").style.opacity = "0.3";
            MCActive = 0;
            document.getElementById("MR").style.opacity = "0.3";
            MRActive = 0;
        });


        document.getElementById("HistoryImg").addEventListener('click', () => {
            if (document.getElementById("HContainer").style.display != "block") {
                document.getElementById("HContainer").style.display = "block";
            }
            else
                if (document.getElementById("HContainer").style.display = "block") {
                    document.getElementById("HContainer").style.display = "none";
                }
        });

        document.getElementById("HistoryReplaceImg").addEventListener('click', () => {
            document.getElementById("MContainer").style.display = "none";
            document.getElementById("HistoryReplaceImg").style.display = "none";
            document.getElementById("HistoryImg").style.display = "block";

        });

        document.getElementById("M").addEventListener('click', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                if (document.getElementById("MContainer").style.display != "block") {
                    document.getElementById("MContainer").style.display = "block";
                    document.getElementById("HistoryReplaceImg").style.display = "block";
                    document.getElementById("HistoryImg").style.display = "none";
                }
                // else
                //     if (document.getElementById("MContainer").style.display = "block") {
                //         document.getElementById("MContainer").style.display = "none";
                //     }
            }
        });



        document.getElementById("MC").addEventListener('click', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                if (MCActive == 1) {
                    if (document.getElementById("MemoryCont")) {
                        var Timer = setInterval(() => {
                            document.getElementById("MContainer").removeChild(document.getElementById("MemoryCont"));
                            if (!document.getElementById("MemoryCont")) {
                                previousMinusDisplay = "";
                                document.getElementById("MC").style.opacity = "0.3";
                                MCActive = 0;
                                document.getElementById("MR").style.opacity = "0.3";
                                MRActive = 0;
                                document.getElementById("MDelete").style.display = "none";
                                document.getElementById("MInfo").style.display = "block";
                                clearInterval(Timer);
                            }
                        }, 1);
                    }
                }
            }
        });


        document.getElementById("MR").addEventListener('click', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                document.getElementById("SCDisplay").innerHTML = document.getElementById("MemoryDisplay").innerHTML;
            }
        });


        document.getElementById("Mplus").addEventListener('click', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                if (!document.getElementById("MemoryCont")) {
                    document.getElementById("MC").style.opacity = "1";
                    MCActive = 1;
                    document.getElementById("MR").style.opacity = "1";
                    MRActive = 1;
                    const Container = document.getElementById("MContainer");
                    const MContent = document.createElement("div");
                    const MD = document.createElement("p");
                    MD.id = "MemoryDisplay";
                    MContent.id = "MemoryCont";
                    document.getElementById("MInfo").style.display = "none";
                    document.getElementById("MDelete").style.display = "block";
                    Container.appendChild(MContent);
                    MD.innerHTML += document.getElementById("SCDisplay").innerHTML;
                    MContent.appendChild(MD);
                } else {
                    if (previousMinusDisplay == "") {
                        previousMinusDisplay = document.getElementById("MemoryDisplay").innerHTML;
                    }
                    let Num = document.getElementById("MemoryDisplay").innerHTML;
                    Num = Number(Num) + Number(previousMinusDisplay);
                    document.getElementById("MemoryDisplay").innerHTML = Num;
                }
            }
        });


        document.getElementById("Mminus").addEventListener('click', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                if (!document.getElementById("MemoryCont")) {
                    document.getElementById("MC").style.opacity = "1";
                    MCActive = 1;
                    document.getElementById("MR").style.opacity = "1";
                    MRActive = 1;
                    const Container = document.getElementById("MContainer");
                    const MContent = document.createElement("div");
                    const MD = document.createElement("p");
                    MD.id = "MemoryDisplay";
                    MContent.id = "MemoryCont";
                    document.getElementById("MInfo").style.display = "none";
                    document.getElementById("MDelete").style.display = "block";
                    Container.appendChild(MContent);
                    MD.innerHTML = document.getElementById("SCDisplay").innerHTML;
                    MContent.appendChild(MD);
                } else {
                    if (previousMinusDisplay == "") {
                        previousMinusDisplay = document.getElementById("MemoryDisplay").innerHTML;
                    }
                    let Num = document.getElementById("MemoryDisplay").innerHTML;
                    Num = Number(Num) - Number(previousMinusDisplay);
                    document.getElementById("MemoryDisplay").innerHTML = Num;
                }
            }
        });

        document.getElementById("MS").addEventListener('click', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                document.getElementById("MC").style.opacity = "1";
                MCActive = 1;
                document.getElementById("MR").style.opacity = "1";
                MRActive = 1;
                const Container = document.getElementById("MContainer");
                const MContent = document.createElement("div");
                const MD = document.createElement("p");
                MD.id = "MemoryDisplay";
                MContent.id = "MemoryCont";
                document.getElementById("MInfo").style.display = "none";
                document.getElementById("MDelete").style.display = "block";
                Container.appendChild(MContent);
                MD.innerHTML = document.getElementById("SCDisplay").innerHTML;
                MContent.appendChild(MD);
            }
        });






        document.getElementById("MC").addEventListener('mouseover', () => {
            if (MCActive == 1) {
                document.getElementById("MC").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("MC").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("MC").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("MC").addEventListener('mouseleave', () => {
            document.getElementById("MC").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("MC").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("MC").style.boxShadow = "0 0 0";
        });



        document.getElementById("MR").addEventListener('mouseover', () => {
            if (MRActive == 1) {
                document.getElementById("MR").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("MR").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("MR").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("MR").addEventListener('mouseleave', () => {
            document.getElementById("MR").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("MR").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("MR").style.boxShadow = "0 0 0";
        });


        document.getElementById("Mplus").addEventListener('mouseover', () => {
            if (MplusActive == 1) {
                document.getElementById("Mplus").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Mplus").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("Mplus").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("Mplus").addEventListener('mouseleave', () => {
            document.getElementById("Mplus").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("Mplus").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("Mplus").style.boxShadow = "0 0 0";
        });


        document.getElementById("Mminus").addEventListener('mouseover', () => {
            if (MminusActive == 1) {
                document.getElementById("Mminus").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("Mminus").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("Mminus").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("Mminus").addEventListener('mouseleave', () => {
            document.getElementById("Mminus").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("Mminus").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("Mminus").style.boxShadow = "0 0 0";
        });

        document.getElementById("MS").addEventListener('mouseover', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                if (MSActive == 1) {
                    document.getElementById("MS").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                    document.getElementById("MS").style.border = "1px solid rgb(102, 101, 101)";
                    document.getElementById("MS").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                }
            }
        });


        document.getElementById("MS").addEventListener('mouseleave', () => {
            if (document.getElementById("SCContainer").style.display != "none" && document.getElementById("SiCContainer").style.display != "block") {
                document.getElementById("MS").style.backgroundColor = "rgb(199, 196, 194)";
                document.getElementById("MS").style.border = "1px solid rgb(226, 223, 223)";
                document.getElementById("MS").style.boxShadow = "0 0 0";
            }
        });


    }, 1000);


    return (
        <>
            <div id="SCContainer">
                <div id="SCDisplay">0</div>
                <div id="UpperKeyCon">
                    <button id="MC">MC</button>
                    <button id="MR">MR</button>
                    <button id="Mplus">M+</button>
                    <button id="Mminus">M-</button>
                    <button id="MS">MS</button>
                    <button id="M">M<b>&#8744;</b></button>
                </div>
                <div id="KeysCon">
                    <div id="Key">&#37;</div>
                    <div id="Key2">CE</div>
                    <div id="Key3">C</div>
                    <div id="Key4">⌫</div>
                    <div id="Key5">1/x</div>
                    <div id="Key6">x²</div>
                    <div id="Key7">&#8730;</div>
                    <div id="Key8">&#247;</div>
                    <div id="Key9">7</div>
                    <div id="Key10">8</div>
                    <div id="Key11">9</div>
                    <div id="Key12">&#215;</div>
                    <div id="Key13">4</div>
                    <div id="Key14">5</div>
                    <div id="Key15">6</div>
                    <div id="Key16">&#8722;</div>
                    <div id="Key17">1</div>
                    <div id="Key18">2</div>
                    <div id="Key19">3</div>
                    <div id="Key20">&#43;</div>
                    <div id="Key21">&#43;/&#8722;</div>
                    <div id="Key22">0</div>
                    <div id="Key23">.</div>
                    <div id="Key24">&#61;</div>
                </div>
                <img id="HistoryImg" src={History} alt="" />
                <button id="HistoryReplaceImg">M<b>&#8744;</b></button>
            </div>
        </>
    )

}