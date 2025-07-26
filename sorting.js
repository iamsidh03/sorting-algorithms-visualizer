"use strict";

const barsEl = document.getElementById("bars");
const sizeSlider = document.getElementById("size");
const btnRandomArray = document.getElementById("random-array");
const btnReversedArray = document.getElementById("reversed-array");
const btnSortedArray = document.getElementById("sorted-array");
const btnReload = document.getElementById("reload");
const barsWidth = barsEl.offsetWidth;
const barsHeight = barsEl.offsetHeight;

barsEl.innerHTML = "";
let bars = [];

const sortedArray = function () {
	bars = [];
	for (let i = 1; i <= sizeSlider.value; ++i) {
		bars.push(i);
	}
	plantArray()
}

const reversedArray = function () {
	bars = [];
	for (let i = sizeSlider.value; i > 0; --i) {
		bars.push(i);
	}
	plantArray()
}

const randomArray = function () {
	bars = [];
	for (let i = 0; i < Number(sizeSlider.value); ++i) {
		bars.push(Math.floor(Math.random() * 99) + 1);
	}
	plantArray()
}

const plantArray = function () {
	tempEnable();
	barsEl.innerHTML = "";

	for (let i = 0; i < Number(sizeSlider.value); ++i) {
		const divEl = document.createElement("div");
		// Let CSS handle all styling except the height
		divEl.classList.add("bar-prop");
		divEl.style.height = `${bars[i]}%`; // Height is based on the array value
		divEl.setAttribute("id", `bar-${i}`);

		const textEl = document.createElement("div");
		textEl.classList.add("bottom");
		textEl.innerText = bars[i];

		divEl.appendChild(textEl);
		barsEl.appendChild(divEl);
	}
};

function waitforme(millisec) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("");
		}, Number(410 - millisec));
	});
}

const swap = function (bar1, bar2) {
	const bar1Height = Number(bar1.style.height.slice(0, -1));
	const bar2Height = Number(bar2.style.height.slice(0, -1));
	const temp = bar1Height;
	const t2 = bar1.children[0].innerText;
	bar1.style.height = `${bar2Height}%`;
	bar1.children[0].innerText = bar2.children[0].innerText;
	bar2.style.height = `${temp}%`;
	bar2.children[0].innerText = t2;
};

const tempDisable = function () {
	document.getElementById("random-array").classList.add("disabled");
	document.getElementById("reversed-array").classList.add("disabled");
	document.getElementById("sorted-array").classList.add("disabled");
	document.getElementById("size").classList.add("disabled");
	document.getElementById("bubble").classList.add("disabled");
	document.getElementById("merge").classList.add("disabled");
	document.getElementById("quick").classList.add("disabled");
	document.getElementById("insertion").classList.add("disabled");
	document.getElementById("selection").classList.add("disabled");
};

const tempEnable = function () {
	document.getElementById("random-array").classList.remove("disabled");
	document.getElementById("reversed-array").classList.remove("disabled");
	document.getElementById("sorted-array").classList.remove("disabled");
	document.getElementById("size").classList.remove("disabled");
	document.getElementById("bubble").classList.remove("disabled");
	document.getElementById("merge").classList.remove("disabled");
	document.getElementById("quick").classList.remove("disabled");
	document.getElementById("insertion").classList.remove("disabled");
	document.getElementById("selection").classList.remove("disabled");
};

btnRandomArray.addEventListener("click", randomArray);
btnReversedArray.addEventListener("click", reversedArray);
btnSortedArray.addEventListener("click", sortedArray);
btnReload.addEventListener("click", () => location.reload());

// Generate a default array when the page loads
randomArray();