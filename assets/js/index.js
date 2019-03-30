const threeDots = document.getElementById('three-dots');
const mouseIn = () => {
	let i = 0;
	const loop = () => {
		setTimeout(() => {
			threeDots.children[i].style.fill = '#000';
			i++;
			if (i < threeDots.children.length) {
				loop();
			}
		}, 200)
	}
	loop();
}

const mouseOut = () => {
	for (var i = 0; i < threeDots.children.length; i++) {
		threeDots.children[i].style.fill = "none";
	}
}

threeDots.addEventListener('click', function () {
	$('.0-ul').slideToggle();
});
$('.0-li-0').on('click', function () {
	$('.1-ul-0').slideToggle();
})
$('.0-li-1').on('click', function () {
	$('.1-ul-1').slideToggle();
})
$('.0-li-2').on('click', function () {
	$('.1-ul-2').slideToggle();
})
threeDots.addEventListener('mouseenter', mouseIn);
threeDots.addEventListener('mouseleave', mouseOut);