const left_btn = document.getElementById("left_btn");
const right_btn = document.getElementById("right_btn");
const ele = document.getElementById("ele").firstElementChild;

left_btn.onclick = function () {
  let ele_width = ele.getBoundingClientRect().width;
  document.getElementById("ele").scrollLeft -= ele_width + 30;
};

right_btn.onclick = function () {
  let ele_width = ele.getBoundingClientRect().width;
  document.getElementById("ele").scrollLeft += ele_width + 30;
};
