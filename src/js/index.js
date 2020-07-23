import "./import/modules";

const sandwichToggle = function () {
    let sandwichElement = document.querySelector('.sandwich');

    sandwichElement.addEventListener('click', showSandwichTarget);

    function showSandwichTarget() {
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('is-active');
        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
    }
};
sandwichToggle();

let timelineCircleItems = document.querySelectorAll(".timeline-circle__item");
let timelineCircleItemActive = document.querySelector(".timeline-circle__item.active");
let timelineCircleItemActiveCount = timelineCircleItemActive.getAttribute('data-item');
let timelineCircle = document.querySelector(".timeline-circle");

timelineCircleItems.forEach(function(item) {
	item.addEventListener('click',function() {
		let rotationDegree = timelineCircle.style.transform.slice(7,-4)
		let itemNumber = this.getAttribute('data-item')
		let activeItem = document.querySelector(".timeline-circle__item.active");
		let activeItemNumber = activeItem.getAttribute('data-item')
		let degreesRotate = (activeItemNumber - itemNumber)*9
		console.log(degreesRotate)
		timelineCircle.style.transform =  "rotate(" + degreesRotate + "deg)"
	})
})