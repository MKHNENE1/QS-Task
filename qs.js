let questionsNumber = document.getElementById("qsn");
let create = document.getElementById("qsn-btn");
let qscont = document.getElementById("qanda");
let pqn = document.querySelector("p.qsnumber");

create.onclick = (e) => {
  e.preventDefault();
  if (parseInt(questionsNumber.value) > 0) {
    pqn.textContent =
      parseInt(questionsNumber.value) + parseInt(pqn.textContent);
    for (let i = 0; i < parseInt(questionsNumber.value); i++) {
      let qs = document.createElement("div");
      qs.id = "qs";
      for (let x = 0; x <= 5; x++) {
        let inp = document.createElement("input");
        inp.setAttribute("type", "text");
        if (x == 0) {
          inp.placeholder = "Question " + (i + 1);
          qs.append(inp);
        } else if (x == 1) {
          inp.placeholder = "correct answer";
          inp.id = "ans";
          qs.append(inp);
        } else if (x == 5) {
          let btn = document.createElement("button");
          btn.id = "ans";
          btn.textContent = "delete";
          btn.setAttribute("onclick", "del(this)");
          qs.append(btn);
        } else {
          inp.placeholder = "wrong answer";
          inp.id = "ans";
          qs.append(inp);
        }
        qscont.append(qs);
      }
    }
    questionsNumber.value = "";
    // if (qscont.childElementCount != parseInt(questionsNumber.value)) {
    // } else {
    //   alert("You Entered The Same Questions Number That Created Before");
    // }
  } else {
    alert("The Number Must Be Greater Than Zero");
  }
};

function del(loc) {
  loc.parentElement.remove();
  pqn.textContent = parseInt(pqn.textContent) - 1;
}
