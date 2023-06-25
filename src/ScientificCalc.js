// import ProfilePic from './images/buttonrofilePic.jpg';
// import Twitter from './images/Twitter.png';
// import GitHub from './images/GitHub.png';
// import LinkedIn from './images/LinkedIn.png';
// import CloseBut from './images/CloseBut.png';
import History from './images/History.png';
// import { useNavigate } from 'react-router-dom';
export default function ScientificCalc() {
    // const navigate = useNavigate();
    let answer = "";
    let expression;
    let RootActive = 0;
    let SquareActive = 0;
    let AbsoluteActive = 0;
    let OneDivisor = 0;
    let Power = 0;
    let LNActive = 0;
    let FactActive = 0;
    let TrigActive = 0;
    let logActive = 0;
    let TenPowerActive = 0;
    let Mod = 0;
    let powerVal;
    let modVal;
    let currentDisplayValue;
    let MCSiCActive = 0;
    let MRSiCActive = 0;
    let MSiCplusActive = 1;
    let MSiCminusActive = 1;
    let MSSiCActive = 1;
    let previousMinusDisplay = "";
    let previousPlusDisplay = "";
    setTimeout(() => {
        setInterval(() => {
            currentDisplayValue = document.getElementById("SiCDisplay").innerHTML;
        }, 100);

        function factorialize(num) {
            answer = num;
            if (num === 0 || num === 1) {
                return 1;
            }
            while (num > 1) {
                num--;
                answer *= num;
            }
            document.getElementById("SiCDisplay").innerHTML = answer;
        }

        document.getElementById("SiCKey14").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 1;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 0;
            Power = 0;
            AbsoluteActive = 0;
            RootActive = 0;
            SquareActive = 0;
            OneDivisor = 0;
            expression = "fact" + "(" + document.getElementById("SiCDisplay").innerHTML + ")";
            factorialize(document.getElementById("SiCDisplay").innerHTML);
        });

        document.getElementById("SiCKey").addEventListener('click', () => {

        });


        document.getElementById("SiCKey2").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                RootActive = 0;
                SquareActive = 0;
                OneDivisor = 0;
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    let PI = 3.14159;
                    document.getElementById("SiCDisplay").innerHTML = PI;
                }
                else if (document.getElementById("SiCDisplay").innerHTML !== "0") {
                    let PI = 3.14159;
                    document.getElementById("SiCDisplay").innerHTML += "+" + PI;
                }
            }
        });


        document.getElementById("SiCKey3").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                RootActive = 0;
                SquareActive = 0;
                OneDivisor = 0;
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    let e = 2.71828;
                    document.getElementById("SiCDisplay").innerHTML = e;
                }
                else if (document.getElementById("SiCDisplay").innerHTML !== "0") {
                    let e = 2.71828;
                    document.getElementById("SiCDisplay").innerHTML += "+" + e;
                }
            }
        });


        document.getElementById("SiCKey4").addEventListener('click', () => {
            document.getElementById("SiCDisplay").innerHTML = 0;
        });

        document.getElementById("SiCKey8").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 0;
            Power = 0;
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 0;
            AbsoluteActive = 1;
            let AbsoluteValue = Math.abs(document.getElementById("SiCDisplay").innerHTML)
            expression = "|" + "(" + document.getElementById("SiCDisplay").innerHTML + ")" + "|";
            document.getElementById("SiCDisplay").innerHTML = AbsoluteValue;
        });

        document.getElementById("SiCKey9").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                RootActive = 0;
                SquareActive = 0;
                OneDivisor = 0;
                document.getElementById("SiCDisplay").innerHTML += "." + "e" + "+" + 0;
            }
        });

        document.getElementById("SiCKey10").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 1;
            Power = 0;
            AbsoluteActive = 0;
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 0;
            modVal = document.getElementById("SiCDisplay").innerHTML;
            document.getElementById("SiCKey10").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });

        document.getElementById("SiCKey11").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 0;
            Power = 0;
            AbsoluteActive = 0;
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 1;
            let AbsoluteValue = Math.abs(document.getElementById("SiCDisplay").innerHTML)
            expression = "√" + "(" + AbsoluteValue + ")";
            answer = Math.sqrt(AbsoluteValue);
            document.getElementById("SiCDisplay").innerHTML = answer;
            // if (document.getElementById("SiCDisplay").innerHTML === "0") {
            //     document.getElementById("SiCDisplay").innerHTML = "";
            // }
            // if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
            //     document.getElementById("SiCDisplay").innerHTML += "√";
            // }
        });

        document.getElementById("SiCKey12").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML === "0") {
                document.getElementById("SiCDisplay").innerHTML = "";
            }
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SiCDisplay").innerHTML += "(";
            }
        });

        document.getElementById("SiCKey13").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML === "0") {
                document.getElementById("SiCDisplay").innerHTML = "";
            }
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SiCDisplay").innerHTML += ")";
            }
        });

        document.getElementById("SiCKey15").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML === "0") {
                document.getElementById("SiCDisplay").innerHTML = "";
            }
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SiCDisplay").innerHTML += "/";
            }
        });

        document.getElementById("SiCKey16").addEventListener('click', () => {
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 0;
            Power = 1;
            AbsoluteActive = 0;
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 0;
            powerVal = document.getElementById("SiCDisplay").innerHTML;
            document.getElementById("SiCKey16").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });

        document.getElementById("SiCKey20").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML === "0") {
                document.getElementById("SiCDisplay").innerHTML = "";
            }
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SiCDisplay").innerHTML += "*";
            }
        });

        document.getElementById("SiCKey21").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 1;
            Mod = 0;
            Power = 0;
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 0;
            expression = "10" + "^" + "(" + currentDisplayValue + ")";
            answer = Math.pow(10, eval(document.getElementById("SiCDisplay").innerHTML));
            document.getElementById("SiCDisplay").innerHTML = answer;
        });


        document.getElementById("SiCKey25").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML === "0") {
                document.getElementById("SiCDisplay").innerHTML = "";
            }
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SiCDisplay").innerHTML += "-";
            }
        });

        document.getElementById("SiCKey26").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 1;
            TenPowerActive = 0;
            Mod = 0;
            Power = 0;
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 0;
            expression = "log" + "(" + currentDisplayValue + ")";
            answer = Math.log10(eval(document.getElementById("SiCDisplay").innerHTML));
            document.getElementById("SiCDisplay").innerHTML = answer;
        });


        document.getElementById("SiCKey30").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML === "0") {
                document.getElementById("SiCDisplay").innerHTML = "";
            }
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                document.getElementById("SiCDisplay").innerHTML += "+";
            }
        });

        document.getElementById("SiCKey31").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 1;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 0;
            Power = 0;
            OneDivisor = 0;
            SquareActive = 0;
            RootActive = 0;
            expression = "ln" + "(" + currentDisplayValue + ")";
            answer = Math.log(eval(document.getElementById("SiCDisplay").innerHTML));
            document.getElementById("SiCDisplay").innerHTML = answer;
        });

        document.getElementById("SiCKey32").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML !== "0") {
                if (Math.sign(document.getElementById("SiCDisplay").innerHTML) == 1) {
                    document.getElementById("SiCDisplay").innerHTML = Math.abs(document.getElementById("SiCDisplay").innerHTML);
                    document.getElementById("SiCDisplay").innerHTML = "-" + document.getElementById("SiCDisplay").innerHTML;
                }
                else
                    if (Math.sign(document.getElementById("SiCDisplay").innerHTML) == -1) {
                        document.getElementById("SiCDisplay").innerHTML = Math.abs(document.getElementById("SiCDisplay").innerHTML);
                    }
            }
        });


        document.getElementById("SiCKey34").addEventListener('click', () => {
            if (document.getElementById("SiCDisplay").innerHTML === "0") {
                document.getElementById("SiCDisplay").innerHTML = "";
            }
            if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                document.getElementById("SiCDisplay").innerHTML += ".";
            }
        });

        document.getElementById("SiCKey35").addEventListener('click', () => {
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
            if (RootActive == 1 || SquareActive == 1 || OneDivisor == 1 || AbsoluteActive == 1 || TenPowerActive == 1 || logActive == 1 || TrigActive == 1 || FactActive == 1 || LNActive == 1) {
                HD.innerHTML = expression + "" + "=";
            }
            else
                if (Power == 1) {
                    HD.innerHTML = powerVal + "^" + currentDisplayValue + "" + "=";
                }
                else
                    if (Mod == 1) {
                        HD.innerHTML = modVal + "Mod" + currentDisplayValue + "" + "=";
                    }
                    else {
                        HD.innerHTML = document.getElementById("SiCDisplay").innerHTML + "" + "=";
                    }


            if (Power == 0 && Mod == 0) {
                answer = eval(document.getElementById("SiCDisplay").innerHTML);
            }
            else
                if (Power == 1) {
                    answer = Math.pow(eval(powerVal), eval(document.getElementById("SiCDisplay").innerHTML));
                }
                else
                    if (Mod == 1) {
                        answer = eval(eval(modVal) + "%" + eval(document.getElementById("SiCDisplay").innerHTML));
                    }
            document.getElementById("SiCDisplay").innerHTML = answer;
            HD2.innerHTML = answer;
            HContent.appendChild(HD);
            HContent.appendChild(HD2);
            // Spacer++;
            // document.getElementById("HistoryDisplay").innerHTML = document.getElementById("SiCDisplay").innerHTML +""+"=";
            // answer = eval(document.getElementById("SiCDisplay").innerHTML);
            // document.getElementById("SiCDisplay").innerHTML = answer;
            // document.getElementById("HistoryDisplay2").innerHTML = answer;
        });

        document.getElementById("SiCKey5").addEventListener('click', () => {
            // if (Power == 0 && Mod == 0) {
            if (document.getElementById("SiCDisplay").innerHTML.length > 1) {
                document.getElementById("SiCDisplay").innerHTML = document.getElementById("SiCDisplay").innerHTML.substring(0, document.getElementById("SiCDisplay").innerHTML.length - 1);
            }
            else if (document.getElementById("SiCDisplay").innerHTML.length == 1) {
                document.getElementById("SiCDisplay").innerHTML = 0;
            }
            // }
        });

        document.getElementById("SiCKey7").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 0;
            Power = 0;
            AbsoluteActive = 0;
            OneDivisor = 1;
            SquareActive = 0;
            RootActive = 0;
            expression = "1" + "/" + "(" + document.getElementById("SiCDisplay").innerHTML + ")";
            answer = eval(document.getElementById("SiCDisplay").innerHTML);
            document.getElementById("SiCDisplay").innerHTML = 1 / answer;
        });

        document.getElementById("SiCKey6").addEventListener('click', () => {
            document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            LNActive = 0;
            FactActive = 0;
            TrigActive = 0;
            logActive = 0;
            TenPowerActive = 0;
            Mod = 0;
            Power = 0;
            AbsoluteActive = 0;
            OneDivisor = 0;
            SquareActive = 1;
            RootActive = 0;
            expression = "(" + document.getElementById("SiCDisplay").innerHTML + ")" + "²";
            answer = eval(document.getElementById("SiCDisplay").innerHTML);
            document.getElementById("SiCDisplay").innerHTML = answer * answer;
        });

        document.getElementById("SiCKey17").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 7;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 7;
                }
        });


        document.getElementById("SiCKey18").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 8;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 8;
                }
        });


        document.getElementById("SiCKey19").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 9;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 9;
                }
        });


        document.getElementById("SiCKey22").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 4;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 8;
                }
        });

        document.getElementById("SiCKey23").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 5;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 5;
                }
        });


        document.getElementById("SiCKey24").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 6;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 6;
                }
        });

        document.getElementById("SiCKey27").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 1;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 1;
                }
        });


        document.getElementById("SiCKey28").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 2;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 2;
                }
        });

        document.getElementById("SiCKey29").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 3;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 3;
                }
        });

        document.getElementById("SiCKey33").addEventListener('click', () => {
            if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += 0;
                }
            }
            else
                if (Power == 1 || Mod == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 0;
                }
        });
        document.addEventListener("keydown", (e) => {
            var SiCkeycode = e.key;
            // console.log(SiCkeycode);    
            if (SiCkeycode == "Backspace") {
                document.getElementById("SiCKey5").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey5").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                // if (Power == 0 && Mod == 0) {
                if (document.getElementById("SiCDisplay").innerHTML.length > 1) {
                    document.getElementById("SiCDisplay").innerHTML = document.getElementById("SiCDisplay").innerHTML.substring(0, document.getElementById("SiCDisplay").innerHTML.length - 1);
                }
                else if (document.getElementById("SiCDisplay").innerHTML.length == 1) {
                    document.getElementById("SiCDisplay").innerHTML = 0;
                }
                // }
            }

            if (SiCkeycode == "%") {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 1;
                Power = 0;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                modVal = document.getElementById("SiCDisplay").innerHTML;
                document.getElementById("SiCKey10").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }

            if (SiCkeycode == "(") {
                document.getElementById("SiCKey12").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey12").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                    document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                    LNActive = 0;
                    FactActive = 0;
                    TrigActive = 0;
                    logActive = 0;
                    TenPowerActive = 0;
                    Mod = 0;
                    Power = 0;
                    AbsoluteActive = 0;
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SiCDisplay").innerHTML += "(";
                }
            }

            if (SiCkeycode == ")") {
                document.getElementById("SiCKey13").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey13").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                    document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                    LNActive = 0;
                    FactActive = 0;
                    TrigActive = 0;
                    logActive = 0;
                    TenPowerActive = 0;
                    Mod = 0;
                    Power = 0;
                    AbsoluteActive = 0;
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SiCDisplay").innerHTML += ")";
                }
            }

            if (SiCkeycode == "!") {
                document.getElementById("SiCKey14").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey14").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 1;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 0;
                AbsoluteActive = 0;
                RootActive = 0;
                SquareActive = 0;
                OneDivisor = 0;
                expression = "fact" + "(" + document.getElementById("SiCDisplay").innerHTML + ")";
                factorialize(document.getElementById("SiCDisplay").innerHTML);
            }

            if (SiCkeycode == "/") {
                document.getElementById("SiCKey15").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey15").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                    document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                    LNActive = 0;
                    FactActive = 0;
                    TrigActive = 0;
                    logActive = 0;
                    TenPowerActive = 0;
                    Mod = 0;
                    Power = 0;
                    AbsoluteActive = 0;
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SiCDisplay").innerHTML += "/";
                }
            }

            if (SiCkeycode == "^") {
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                LNActive = 0;
                FactActive = 0;
                TrigActive = 0;
                logActive = 0;
                TenPowerActive = 0;
                Mod = 0;
                Power = 1;
                AbsoluteActive = 0;
                OneDivisor = 0;
                SquareActive = 0;
                RootActive = 0;
                powerVal = document.getElementById("SiCDisplay").innerHTML;
                document.getElementById("SiCKey16").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }

            if (SiCkeycode == "*") {
                document.getElementById("SiCKey20").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey20").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                    document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                    LNActive = 0;
                    FactActive = 0;
                    TrigActive = 0;
                    logActive = 0;
                    TenPowerActive = 0;
                    Mod = 0;
                    Power = 0;
                    AbsoluteActive = 0;
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SiCDisplay").innerHTML += "*";
                }
            }

            if (SiCkeycode == "-") {
                document.getElementById("SiCKey25").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey25").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                    document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                    LNActive = 0;
                    FactActive = 0;
                    TrigActive = 0;
                    logActive = 0;
                    TenPowerActive = 0;
                    Mod = 0;
                    Power = 0;
                    AbsoluteActive = 0;
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SiCDisplay").innerHTML += "-";
                }
            }

            if (SiCkeycode == "+") {
                document.getElementById("SiCKey30").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey30").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
                    document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                    document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
                    LNActive = 0;
                    FactActive = 0;
                    TrigActive = 0;
                    logActive = 0;
                    TenPowerActive = 0;
                    Mod = 0;
                    Power = 0;
                    AbsoluteActive = 0;
                    OneDivisor = 0;
                    SquareActive = 0;
                    RootActive = 0;
                    document.getElementById("SiCDisplay").innerHTML += "+";
                }
            }

            if (SiCkeycode == ".") {
                document.getElementById("SiCKey34").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey34").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (document.getElementById("SiCDisplay").innerHTML === "0") {
                    document.getElementById("SiCDisplay").innerHTML = "";
                }
                if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                    document.getElementById("SiCDisplay").innerHTML += ".";
                }
            }

            if (SiCkeycode == "=" || SiCkeycode == "Enter") {
                if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                    document.getElementById("SiCKey35").style.backgroundColor = "rgb(184, 6, 6)";
                    document.getElementById("SiCKey35").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
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
                    if (RootActive == 1 || SquareActive == 1 || OneDivisor == 1 || AbsoluteActive == 1 || TenPowerActive == 1 || logActive == 1 || TrigActive == 1 || FactActive == 1 || LNActive == 1) {
                        HD.innerHTML = expression + "" + "=";
                    }
                    else
                        if (Power == 1) {
                            HD.innerHTML = powerVal + "^" + currentDisplayValue + "" + "=";
                        }
                        else
                            if (Mod == 1) {
                                HD.innerHTML = modVal + "Mod" + currentDisplayValue + "" + "=";
                            }
                            else {
                                HD.innerHTML = document.getElementById("SiCDisplay").innerHTML + "" + "=";
                            }


                    if (Power == 0 && Mod == 0) {
                        answer = eval(document.getElementById("SiCDisplay").innerHTML);
                    }
                    else
                        if (Power == 1) {
                            answer = Math.pow(eval(powerVal), eval(document.getElementById("SiCDisplay").innerHTML));
                        }
                        else
                            if (Mod == 1) {
                                answer = eval(eval(modVal) + "%" + eval(document.getElementById("SiCDisplay").innerHTML));
                            }
                    document.getElementById("SiCDisplay").innerHTML = answer;
                    HD2.innerHTML = answer;
                    HContent.appendChild(HD);
                    HContent.appendChild(HD2);
                }
            }


            if (SiCkeycode == 7) {
                document.getElementById("SiCKey17").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey17").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 7;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 7;
                    }
            }


            if (SiCkeycode == 8) {
                document.getElementById("SiCKey18").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey18").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 8;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 8;
                    }
            }


            if (SiCkeycode == 9) {
                document.getElementById("SiCKey19").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey19").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 9;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 9;
                    }
            }


            if (SiCkeycode == 4) {
                document.getElementById("SiCKey22").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey22").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 4;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 8;
                    }
            }

            if (SiCkeycode == 5) {
                document.getElementById("SiCKey23").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey23").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 5;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 5;
                    }
            }


            if (SiCkeycode == 6) {
                document.getElementById("SiCKey24").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey24").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 6;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 6;
                    }
            }

            if (SiCkeycode == 1) {
                document.getElementById("SiCKey27").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey27").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 1;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 1;
                    }
            }


            if (SiCkeycode == 2) {
                document.getElementById("SiCKey28").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey28").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 2;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 2;
                    }
            }

            if (SiCkeycode == 3) {
                document.getElementById("SiCKey29").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey29").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 3;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 3;
                    }
            }

            if (SiCkeycode == 0) {
                document.getElementById("SiCKey33").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey33").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                if (Power == 0 && Mod == 0) {
                    if (document.getElementById("SiCDisplay").innerHTML === "0") {
                        document.getElementById("SiCDisplay").innerHTML = "";
                    }
                    if (document.getElementById("SiCDisplay").innerHTML.length <= 15) {
                        document.getElementById("SiCDisplay").innerHTML += 0;
                    }
                }
                else
                    if (Power == 1 || Mod == 1) {
                        document.getElementById("SiCDisplay").innerHTML = 0;
                    }
            }
        });




        document.addEventListener("keyup", (e) => {
            var SiCkeycode = e.key;

            if (SiCkeycode == "Backspace") {
                document.getElementById("SiCKey5").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey5").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == "(") {
                document.getElementById("SiCKey12").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey12").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == ")") {
                document.getElementById("SiCKey13").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey13").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == "!") {
                document.getElementById("SiCKey14").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey14").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == "/") {
                document.getElementById("SiCKey15").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey15").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == "*") {
                document.getElementById("SiCKey20").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey20").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == "-") {
                document.getElementById("SiCKey25").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey25").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == "+") {
                document.getElementById("SiCKey30").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey30").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == ".") {
                document.getElementById("SiCKey34").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey34").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == "=" || SiCkeycode == "Enter") {
                document.getElementById("SiCKey35").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
                document.getElementById("SiCKey35").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == 7) {
                document.getElementById("SiCKey17").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey17").style.boxShadow = "0 0 0";
            }


            if (SiCkeycode == 8) {
                document.getElementById("SiCKey18").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey18").style.boxShadow = "0 0 0";
            }


            if (SiCkeycode == 9) {
                document.getElementById("SiCKey19").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey19").style.boxShadow = "0 0 0";
            }


            if (SiCkeycode == 4) {
                document.getElementById("SiCKey22").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey22").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == 5) {
                document.getElementById("SiCKey23").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey23").style.boxShadow = "0 0 0";
            }


            if (SiCkeycode == 6) {
                document.getElementById("SiCKey24").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey24").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == 1) {
                document.getElementById("SiCKey27").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey17").style.boxShadow = "0 0 0";
            }


            if (SiCkeycode == 2) {
                document.getElementById("SiCKey28").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey28").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == 3) {
                document.getElementById("SiCKey29").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey29").style.boxShadow = "0 0 0";
            }

            if (SiCkeycode == 0) {
                document.getElementById("SiCKey33").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
                document.getElementById("SiCKey33").style.boxShadow = "0 0 0";
            }
        });



        document.getElementById("SiCKey").addEventListener('mouseover', () => {
            document.getElementById("SiCKey").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey2").addEventListener('mouseover', () => {
            document.getElementById("SiCKey2").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey2").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey2").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey2").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey2").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey3").addEventListener('mouseover', () => {
            document.getElementById("SiCKey3").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey3").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey3").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey3").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey3").style.boxShadow = "0 0 0";
        });




        document.getElementById("SiCKey4").addEventListener('mouseover', () => {
            document.getElementById("SiCKey4").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey4").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey4").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey4").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey4").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey5").addEventListener('mouseover', () => {
            document.getElementById("SiCKey5").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey5").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey5").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey5").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey5").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey6").addEventListener('mouseover', () => {
            document.getElementById("SiCKey6").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey6").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey6").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey6").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey6").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey7").addEventListener('mouseover', () => {
            document.getElementById("SiCKey7").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey7").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey7").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey7").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey7").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey8").addEventListener('mouseover', () => {
            document.getElementById("SiCKey8").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey8").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey8").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey8").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey8").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey9").addEventListener('mouseover', () => {
            document.getElementById("SiCKey9").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey9").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey9").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey9").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey9").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey10").addEventListener('mouseover', () => {
            if (Mod == 0) {
                document.getElementById("SiCKey10").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("SiCKey10").addEventListener('mouseleave', () => {
            if (Mod == 0) {
                document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
            }
        });

        document.getElementById("SiCKey11").addEventListener('mouseover', () => {
            document.getElementById("SiCKey11").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey11").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey11").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey11").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey11").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey12").addEventListener('mouseover', () => {
            document.getElementById("SiCKey12").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey12").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey12").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey12").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey12").style.boxShadow = "0 0 0";
        });



        document.getElementById("SiCKey13").addEventListener('mouseover', () => {
            document.getElementById("SiCKey13").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey13").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey13").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey13").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey13").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey14").addEventListener('mouseover', () => {
            document.getElementById("SiCKey14").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey14").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey14").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey14").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey14").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey15").addEventListener('mouseover', () => {
            document.getElementById("SiCKey15").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey15").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey15").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey15").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey15").style.boxShadow = "0 0 0";
        });



        document.getElementById("SiCKey16").addEventListener('mouseover', () => {
            if (Power == 0) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("SiCKey16").addEventListener('mouseleave', () => {
            if (Power == 0) {
                document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
                document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
            }
        });



        document.getElementById("SiCKey17").addEventListener('mouseover', () => {
            document.getElementById("SiCKey17").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey17").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey17").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey17").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey17").style.boxShadow = "0 0 0";
        });



        document.getElementById("SiCKey18").addEventListener('mouseover', () => {
            document.getElementById("SiCKey18").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey18").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey18").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey18").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey18").style.boxShadow = "0 0 0";
        });



        document.getElementById("SiCKey19").addEventListener('mouseover', () => {
            document.getElementById("SiCKey19").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey19").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey19").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey19").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey19").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey20").addEventListener('mouseover', () => {
            document.getElementById("SiCKey20").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey20").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey20").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey20").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey20").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey21").addEventListener('mouseover', () => {
            document.getElementById("SiCKey21").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey21").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey21").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey21").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey21").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey22").addEventListener('mouseover', () => {
            document.getElementById("SiCKey22").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey22").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey22").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey22").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey22").style.boxShadow = "0 0 0";
        });



        document.getElementById("SiCKey23").addEventListener('mouseover', () => {
            document.getElementById("SiCKey23").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey23").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey23").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey23").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey23").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey24").addEventListener('mouseover', () => {
            document.getElementById("SiCKey24").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey24").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey24").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey24").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey24").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey25").addEventListener('mouseover', () => {
            document.getElementById("SiCKey25").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey25").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey25").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey25").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey25").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey26").addEventListener('mouseover', () => {
            document.getElementById("SiCKey26").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey26").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey26").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey26").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey26").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey27").addEventListener('mouseover', () => {
            document.getElementById("SiCKey27").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey27").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey27").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey27").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey27").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey28").addEventListener('mouseover', () => {
            document.getElementById("SiCKey28").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey28").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey28").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey28").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey28").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey29").addEventListener('mouseover', () => {
            document.getElementById("SiCKey29").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey29").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey29").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey29").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey29").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey30").addEventListener('mouseover', () => {
            document.getElementById("SiCKey30").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey30").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey30").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey30").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey30").style.boxShadow = "0 0 0";
        });



        document.getElementById("SiCKey31").addEventListener('mouseover', () => {
            document.getElementById("SiCKey31").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey31").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey31").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey31").style.backgroundColor = "rgb(226, 223, 223)";
            document.getElementById("SiCKey31").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey32").addEventListener('mouseover', () => {
            document.getElementById("SiCKey32").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey32").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey32").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey32").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey32").style.boxShadow = "0 0 0";
        });

        document.getElementById("SiCKey33").addEventListener('mouseover', () => {
            document.getElementById("SiCKey33").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey33").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey33").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey33").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey33").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey34").addEventListener('mouseover', () => {
            document.getElementById("SiCKey34").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
            document.getElementById("SiCKey34").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey34").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey34").style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            document.getElementById("SiCKey34").style.boxShadow = "0 0 0";
        });


        document.getElementById("SiCKey35").addEventListener('mouseover', () => {
            document.getElementById("SiCKey35").style.backgroundColor = "rgb(184, 6, 6)";
            document.getElementById("SiCKey35").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
        });


        document.getElementById("SiCKey35").addEventListener('mouseleave', () => {
            document.getElementById("SiCKey35").style.backgroundColor = "rgba(184, 6, 6, 0.651)";
            document.getElementById("SiCKey35").style.boxShadow = "0 0 0";
        });



        document.getElementById("MDelete").addEventListener('click', () => {
            previousMinusDisplay = "";
            document.getElementById("MCSiC").style.opacity = "0.3";
            MCSiCActive = 0;
            document.getElementById("MRSiC").style.opacity = "0.3";
            MRSiCActive = 0;
        });


        document.getElementById("HistoryReplaceImgSiC").addEventListener('click', () => {
            document.getElementById("MContainer").style.display = "none";
            document.getElementById("HistoryReplaceImgSiC").style.display = "none";
            document.getElementById("HistoryImgSiC").style.display = "block";

        });


        document.getElementById("HistoryImgSiC").addEventListener('click', () => {
            if (document.getElementById("HContainer").style.display != "block") {
                document.getElementById("HContainer").style.display = "block";
            }
            else
                if (document.getElementById("HContainer").style.display = "block") {
                    document.getElementById("HContainer").style.display = "none";
                }
        });

        document.getElementById("MSiC").addEventListener('click', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                if (document.getElementById("MContainer").style.display != "block") {
                    document.getElementById("MContainer").style.display = "block";
                    document.getElementById("HistoryReplaceImgSiC").style.display = "block";
                    document.getElementById("HistoryImgSiC").style.display = "none";
                }
                // else
                //     if (document.getElementById("MContainer").style.display = "block") {
                //         document.getElementById("MContainer").style.display = "none";
                //     }
            }
        });



        document.getElementById("MCSiC").addEventListener('click', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                if (MCSiCActive == 1) {
                    if (document.getElementById("MemoryCont")) {
                        var Timer = setInterval(() => {
                            document.getElementById("MContainer").removeChild(document.getElementById("MemoryCont"));
                            if (!document.getElementById("MemoryCont")) {
                                previousMinusDisplay = "";
                                document.getElementById("MCSiC").style.opacity = "0.3";
                                MCSiCActive = 0;
                                document.getElementById("MRSiC").style.opacity = "0.3";
                                MRSiCActive = 0;
                                document.getElementById("MDelete").style.display = "none";
                                document.getElementById("MInfo").style.display = "block";
                                clearInterval(Timer);
                            }
                        }, 1);
                    }
                }
            }
        });


        document.getElementById("MRSiC").addEventListener('click', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                document.getElementById("SiCDisplay").innerHTML = document.getElementById("MemoryDisplay").innerHTML;
            }
        });


        document.getElementById("MSiCplus").addEventListener('click', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                if (!document.getElementById("MemoryCont")) {
                    document.getElementById("MCSiC").style.opacity = "1";
                    MCSiCActive = 1;
                    document.getElementById("MRSiC").style.opacity = "1";
                    MRSiCActive = 1;
                    const Container = document.getElementById("MContainer");
                    const MContent = document.createElement("div");
                    const MD = document.createElement("p");
                    MD.id = "MemoryDisplay";
                    MContent.id = "MemoryCont";
                    document.getElementById("MInfo").style.display = "none";
                    document.getElementById("MDelete").style.display = "block";
                    Container.appendChild(MContent);
                    MD.innerHTML += document.getElementById("SiCDisplay").innerHTML;
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


        document.getElementById("MSiCminus").addEventListener('click', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                if (!document.getElementById("MemoryCont")) {
                    document.getElementById("MCSiC").style.opacity = "1";
                    MCSiCActive = 1;
                    document.getElementById("MRSiC").style.opacity = "1";
                    MRSiCActive = 1;
                    const Container = document.getElementById("MContainer");
                    const MContent = document.createElement("div");
                    const MD = document.createElement("p");
                    MD.id = "MemoryDisplay";
                    MContent.id = "MemoryCont";
                    document.getElementById("MInfo").style.display = "none";
                    document.getElementById("MDelete").style.display = "block";
                    Container.appendChild(MContent);
                    MD.innerHTML = document.getElementById("SiCDisplay").innerHTML;
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

        document.getElementById("MSSiC").addEventListener('click', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                document.getElementById("MCSiC").style.opacity = "1";
                MCSiCActive = 1;
                document.getElementById("MRSiC").style.opacity = "1";
                MRSiCActive = 1;
                const Container = document.getElementById("MContainer");
                const MContent = document.createElement("div");
                const MD = document.createElement("p");
                MD.id = "MemoryDisplay";
                MContent.id = "MemoryCont";
                document.getElementById("MInfo").style.display = "none";
                document.getElementById("MDelete").style.display = "block";
                Container.appendChild(MContent);
                MD.innerHTML = document.getElementById("SiCDisplay").innerHTML;
                MContent.appendChild(MD);
            }
        });






        document.getElementById("MCSiC").addEventListener('mouseover', () => {
            if (MCSiCActive == 1) {
                document.getElementById("MCSiC").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("MCSiC").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("MCSiC").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("MCSiC").addEventListener('mouseleave', () => {
            document.getElementById("MCSiC").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("MCSiC").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("MCSiC").style.boxShadow = "0 0 0";
        });



        document.getElementById("MRSiC").addEventListener('mouseover', () => {
            if (MRSiCActive == 1) {
                document.getElementById("MRSiC").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("MRSiC").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("MRSiC").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("MRSiC").addEventListener('mouseleave', () => {
            document.getElementById("MRSiC").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("MRSiC").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("MRSiC").style.boxShadow = "0 0 0";
        });


        document.getElementById("MSiCplus").addEventListener('mouseover', () => {
            if (MSiCplusActive == 1) {
                document.getElementById("MSiCplus").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("MSiCplus").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("MSiCplus").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("MSiCplus").addEventListener('mouseleave', () => {
            document.getElementById("MSiCplus").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("MSiCplus").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("MSiCplus").style.boxShadow = "0 0 0";
        });


        document.getElementById("MSiCminus").addEventListener('mouseover', () => {
            if (MSiCminusActive == 1) {
                document.getElementById("MSiCminus").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                document.getElementById("MSiCminus").style.border = "1px solid rgb(102, 101, 101)";
                document.getElementById("MSiCminus").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
            }
        });


        document.getElementById("MSiCminus").addEventListener('mouseleave', () => {
            document.getElementById("MSiCminus").style.backgroundColor = "rgb(199, 196, 194)";
            document.getElementById("MSiCminus").style.border = "1px solid rgb(226, 223, 223)";
            document.getElementById("MSiCminus").style.boxShadow = "0 0 0";
        });

        document.getElementById("MSSiC").addEventListener('mouseover', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                if (MSSiCActive == 1) {
                    document.getElementById("MSSiC").style.backgroundColor = "rgba(190, 187, 187, 0.925)";
                    document.getElementById("MSSiC").style.border = "1px solid rgb(102, 101, 101)";
                    document.getElementById("MSSiC").style.boxShadow = "0 0 5px rgb(190, 187, 187)";
                }
            }
        });


        document.getElementById("MSSiC").addEventListener('mouseleave', () => {
            if (document.getElementById("SiCContainer").style.display != "none" && document.getElementById("SCContainer").style.display != "block") {
                document.getElementById("MSSiC").style.backgroundColor = "rgb(199, 196, 194)";
                document.getElementById("MSSiC").style.border = "1px solid rgb(226, 223, 223)";
                document.getElementById("MSSiC").style.boxShadow = "0 0 0";
            }
        });


    }, 100);

    const SINE = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "sin" + "₀" + "(" + currentDisplayValue + ")";
        answer = Math.sin(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const SINE2 = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "sin⁻¹" + "₀" + "(" + currentDisplayValue + ")";
        answer = Math.asin(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const SINE3 = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "sinh" + "(" + currentDisplayValue + ")";
        answer = Math.sinh(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const COSINE = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "cos" + "₀" + "(" + currentDisplayValue + ")";
        answer = Math.cos(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const COSINE2 = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "cos⁻¹" + "₀" + "(" + currentDisplayValue + ")";
        answer = Math.acos(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const COSINE3 = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "cosh" + "(" + currentDisplayValue + ")";
        answer = Math.cosh(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const TAN = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "tan" + "₀" + "(" + currentDisplayValue + ")";
        answer = Math.tan(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const TAN2 = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "tan⁻¹" + "₀" + "(" + currentDisplayValue + ")";
        answer = Math.atan(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }


    const TAN3 = () => {
        document.getElementById("SiCKey16").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey16").style.boxShadow = "0 0 0";
        document.getElementById("SiCKey10").style.backgroundColor = "rgb(226, 223, 223)";
        document.getElementById("SiCKey10").style.boxShadow = "0 0 0";
        LNActive = 0;
        FactActive = 0;
        TrigActive = 1;
        logActive = 0;
        TenPowerActive = 0;
        Mod = 0;
        Power = 0;
        OneDivisor = 0;
        SquareActive = 0;
        RootActive = 0;
        expression = "tanh" + "(" + currentDisplayValue + ")";
        answer = Math.tanh(eval(document.getElementById("SiCDisplay").innerHTML));
        document.getElementById("SiCDisplay").innerHTML = answer;
    }

    return (
        <>
            <div id="SiCContainer">
                <div id="SiCDisplay">0</div>
                <div id="SiCUpperKeyCon">
                    <button id="MCSiC">MC</button>
                    <button id="MRSiC">MR</button>
                    <button id="MSiCplus">M+</button>
                    <button id="MSiCminus">M-</button>
                    <button id="MSSiC">MS</button>
                    <button id="MSiC">M<b>&#8744;</b></button>
                </div>
                <div id="SiCMiddleKeyCon">
                    <button id="Sin1" onClick={SINE}>sin</button>
                    <button id="Sin2" onClick={SINE2}>sin⁻¹</button>
                    <button id="Sin3" onClick={SINE3}>sinh</button>
                    <button id="Cos1" onClick={COSINE}>cos</button>
                    <button id="Cos2" onClick={COSINE2}>cos⁻¹</button>
                    <button id="Cos3" onClick={COSINE3}>cosh</button>
                    <button id="Tan1" onClick={TAN}>tan</button>
                    <button id="Tan2" onClick={TAN2}>tan⁻¹</button>
                    <button id="Tan3" onClick={TAN3}>tanh</button>
                </div>
                <div id="SiCKeysCon">
                    <div id="SiCKey">2nd(In Progress)</div>
                    <div id="SiCKey2">π</div>
                    <div id="SiCKey3">e</div>
                    <div id="SiCKey4">CE</div>
                    <div id="SiCKey5">⌫</div>
                    <div id="SiCKey6">x²</div>
                    <div id="SiCKey7">1/x</div>
                    <div id="SiCKey8">|x|</div>
                    <div id="SiCKey9">exp</div>
                    <div id="SiCKey10">mod</div>
                    <div id="SiCKey11">&#8730;</div>
                    <div id="SiCKey12">(</div>
                    <div id="SiCKey13">)</div>
                    <div id="SiCKey14">n!</div>
                    <div id="SiCKey15">&#247;</div>
                    <div id="SiCKey16">x^</div>
                    <div id="SiCKey17">7</div>
                    <div id="SiCKey18">8</div>
                    <div id="SiCKey19">9</div>
                    <div id="SiCKey20">&#215;</div>
                    <div id="SiCKey21">10^</div>
                    <div id="SiCKey22">4</div>
                    <div id="SiCKey23">5</div>
                    <div id="SiCKey24">6</div>
                    <div id="SiCKey25">-</div>
                    <div id="SiCKey26">log</div>
                    <div id="SiCKey27">1</div>
                    <div id="SiCKey28">2</div>
                    <div id="SiCKey29">3</div>
                    <div id="SiCKey30">+</div>
                    <div id="SiCKey31">In</div>
                    <div id="SiCKey32">&#43;/&#8722;</div>
                    <div id="SiCKey33">0</div>
                    <div id="SiCKey34">.</div>
                    <div id="SiCKey35">=</div>

                </div>
                <img id="HistoryImgSiC" src={History} alt="" />
                <button id="HistoryReplaceImgSiC">M<b>&#8744;</b></button>
            </div>
        </>
    )

}