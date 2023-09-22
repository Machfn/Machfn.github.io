let colors = ["242526", '6320EE', '8075FF', 'F8F0FB', 'CAD5CA'];
let paths = ["./Snap.png", "./Snap2.png"];

let images = [];

for (i=0;i<paths.length;i++) {
  let th = document.createElement('img');

  th.src = paths[i];
  images.push(th);
}

let j = 1;
setInterval(() => {
  let ele = document.getElementById("example");
  if (j === 0) {
    ele.innerHTML = '';
    ele.appendChild(images[j]);
    j++;
  } else if (j === 1) {
    ele.innerHTML = '';
    ele.appendChild(images[j]);
    j = 0;
  }
}, 3600);

window.onload = () => {
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    console.log("On firefox");
    document.getElementById('text').style = "";
    document.getElementById('example').style = "";
  }
}