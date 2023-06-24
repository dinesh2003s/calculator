
let display1El = document.querySelector(".display1");
let display2El = document.querySelector(".display2");
let tempResultEl = document.querySelector(".temp-result");
let numberEl = document.querySelectorAll(".number");
let operationEL = document.querySelectorAll(".operation");
let equalEl = document.querySelector(".equal");
let clearAllEl = document.querySelector(".all-clear");
let clearLastEl = document.querySelector(".last-entity-clear");

let dis1num = "";
let dis2num = "";
let result = null;
let lastoperation = "";
let havedot = false;


// numberEl.addEventListener("click", (e) => {
//         if (e.target.innerText === "." && !havedot) {
//             havedot = true
//         }
//         else if (e.target.innerText === "." && havedot) {
//             return;
//         }
//         dis2num += e.target.innerText;
//         display2El.innerText = dis2num;
//     })


numberEl.forEach(number => {
    number.addEventListener("click", () => {
        if (number.innerText === "." && !havedot) {
            havedot = true;
        }
        else if (number.innerText === "." && havedot) {
            return;
        }
        dis2num += number.innerText;
        display2El.innerText = dis2num;
    })
})

operationEL.forEach(operation => {
    operation.addEventListener("click", () => {
        if (!dis2num) return;

        let operationname = operation.innerText;
        // console.log(operationname);
        havedot = false;
        // console.log(typeof dis1num);
        if (dis1num && dis2num && lastoperation) {
            mathoperation();
        }
        else {
            result = parseFloat(dis2num);
            // console.log(result);
        }
        clearvar(operationname);
        lastoperation = operationname;
        // console.log(result);
    })
})

function clearvar(name = "") {
    dis1num += dis2num + " " + name + " ";
    display1El.innerText = dis1num;
    display2El.innerText = "";
    dis2num = "";
    tempResultEl.innerText = result;
    // console.log(result);
}

function mathoperation() {
    if (lastoperation === "+") {
        result = parseFloat(result) + parseFloat(dis2num);
    } else if (lastoperation === "-") {
        result = parseFloat(result) - parseFloat(dis2num);
    } else if (lastoperation === "x") {
        result = parseFloat(result) * parseFloat(dis2num);
    } else if (lastoperation === "/") {
        result = parseFloat(result) / parseFloat(dis2num);
    } else if (lastoperation === "%") {
        result = parseFloat(result) % parseFloat(dis2num);
    }

}

equalEl.addEventListener("click", () => {
    if (!dis2num || !dis1num) return;
    havedot = false;
    mathoperation();
    clearvar();
    display2El.innerText = result;
    tempResultEl.innerText = "";
    dis2num = "";
    dis1num = "";
})

clearAllEl.addEventListener("click", () => {
    display1El.innerText = " ";
    display2El.innerText = " ";
    tempResultEl.innerText = " ";
    dis1num = "";
    dis2num = "";
    result = "";
    havedot = false;
})

clearLastEl.addEventListener("click", () => {
    // console.log(typeof dis2num);
    let a = dis2num.slice(0, -1);
    dis2num = a;
    display2El.innerText = dis2num;
})

