const buttonSection = document.getElementById('listSection');
const button = Array.from(buttonSection.children);

const [carousel] = bulmaCarousel.attach('#carousel-demo', {
	navigation: false,
	slidesToScroll: 1,
	slidesToShow: 1,
	pagination: false,
	effect: 'fade',
	onReady: car => {
		buttonSection.childNodes.forEach(e => {
			e.onclick = () => {
				const index = button.indexOf(e);
				car.show(index);
			}
		});
	}
});

carousel.on('before:show', e => {
	button[e.next].classList.add('is-active');
	button[e.index].classList.remove('is-active');
});