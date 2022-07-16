const versionInput = document.getElementById("version");

function Version() {
  let x = versionInput.value;

  if (x.length != 0) {
    if (!x.match(/^[0-9.]+$/g)) {
      alert("The string contains letter(s) or characters.");
      location.reload();
    } else {
      let numberOfDots = 0;
      for (let i = 0; i <= x.length; i++) {
        if (x[i] === ".") {
          numberOfDots += 1;
        }
      }

      if (numberOfDots == 2) {
        splitArray(x);
      } else {
        alert("The version does not contain 2 points as it should.");
      }
    }
  } else {
    alert("You are not introducing any version");
  }
}

function splitArray(x) {
  const myArray = x.split(".", 3);
  let wordl = [];
  myArray.forEach(function (str) {
    wordl.push(str.length);
  });

  if (wordl[0] > 1) alert("Major number cannot be larger than 1");
  else if (wordl[1] > 1) alert("Minor number cannot be larger than 1 ");
  else if (wordl[2] > 3) alert("BugFix Number is larger than 3");
  else {
    let newdiv = document.getElementById("version");
    newdiv.innerHTML =
      "Major number: " +
      myArray[0] +
      "<br/> Minor number:" +
      myArray[1] +
      "<br> BugFix number:" +
      myArray[2];
    document.body.appendChild(newdiv);
  }
}
