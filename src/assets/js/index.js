if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('https://theopierne.fr/sw.js', {
		scope: './'
	});
}

(function () {
	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		smoothMobile: true,
		getSpeed: true,
		getDirection: true,
		direction: 'vertical',
		reloadOnContextChange: true,
		scrollFromAnywhere: true
	});
})();

console.log("%c  Dev by Théo Pierné — https://theopierne.fr  ", "background-color: #7a7a7a; color: #ededed; font-size:10px; padding:8px 10px 6px; border-radius:4px;");

const isEn = location.pathname.includes('en');

twemoji.parse(document.body);

const accordions = bulmaCollapsible.attach();

const PDFViewerOptions = {
	fallbackLink: `<p><a class="button is-dark" href='[url]' target='_blank'><span>${isEn ? 'PDF access' : 'Accès PDF'}</span><span class="icon is-small"><i class="fas fa-external-link-alt"></i></span></a></p>`
};

PDFObject.embed("/assets/doc/loritz_plaquette_snir.pdf", "#PDFViewerBTS", PDFViewerOptions);
PDFObject.embed("/assets/doc/loritz_plaquette_sin.pdf", "#PDFViewerBAC", PDFViewerOptions);

const $categorySelector = document.getElementById('categorySelector');
const $projectSelector = document.querySelectorAll('.panel-block:not(#hiddenOption):not(label)');

const $hiddenProject = document.querySelectorAll('.hidden-project');
const $showHiddenProjects = document.getElementById('showHiddenProjects');
const $hiddenOption = document.getElementById('hiddenOption');

const $projectCardContent = document.getElementById('projectCardContent');

const $buttonDrowDown = document.querySelectorAll('.open-dropdown');

let isHiddenOptionShow = false;

HTMLCollection.prototype.forEach = Array.prototype.forEach;

$categorySelector.children.forEach(e => {
	e.onclick = () => {
		const $activeCategorySelector = document.querySelector('.is-active.category');
		
		if (!e.isEqualNode($activeCategorySelector)) {
			e.classList.add('is-active', 'category');
			$activeCategorySelector.classList.remove('is-active', 'category');

			if (e.dataset.type === 'all') {
				$projectSelector.forEach(i => {
					if ((i.id !== 'hiddenOption' && !i.classList.contains('hidden-project') && i.dataset.category !== 'search') || $showHiddenProjects.checked) {
						i.classList.remove('is-hidden');
					}
				});
			} else if(e.dataset.type === 'public') {
				$projectSelector.forEach(i => {
					if ((i.id !== 'hiddenOption' && !i.classList.contains('hidden-project') && i.dataset.category !== 'search') || $showHiddenProjects.checked) { 
						if(i.dataset.category !== 'public'){
							i.classList.add('is-hidden');
						}else{
							i.classList.remove('is-hidden');
						}
					}
				});
			} else if(e.dataset.type === 'private') {
				$projectSelector.forEach(i => {
					if ((i.id !== 'hiddenOption' && !i.classList.contains('hidden-project') && i.dataset.category !== 'search') || $showHiddenProjects.checked) {
						if (i.dataset.category !== 'private') {
							i.classList.add('is-hidden');
						} else {
							i.classList.remove('is-hidden');
						}
					}
				});
			}
		}
	}
});

$projectSelector.forEach(e => {
	e.onclick = () => {
		const $activeProjectSelector = document.querySelector('.panel-block.is-active');
		if (!e.isEqualNode($activeProjectSelector) && e.dataset.category !== 'search') {
			e.classList.add('is-active');
			$activeProjectSelector.classList.remove('is-active');
			const data = projectsData[e.dataset.target];

			if (Object.keys(data.logo).length == 0) {
				$projectCardContent.querySelector('.media-left').classList.add('is-hidden');
			} else {
				$projectCardContent.querySelector('.media-left').classList.remove('is-hidden');
				$projectCardContent.querySelector('img').src = data.logo.url;
				$projectCardContent.querySelector('img').alt = data.logo.alt;
			}

			if (data.githubLink != null) {
				$projectCardContent.querySelector('.github-link').classList.remove('is-hidden');
				$projectCardContent.querySelector('.github-link').nextElementSibling.classList.remove('is-hidden');
				$projectCardContent.querySelector('.github-link').href = data.githubLink;
			} else {
				$projectCardContent.querySelector('.github-link').classList.add('is-hidden');
				$projectCardContent.querySelector('.github-link').nextElementSibling.classList.add('is-hidden');
			}

			$projectCardContent.querySelector('p.title').innerText = data.title;
			$projectCardContent.querySelector('p.subtitle').innerHTML = data.subtitle;
			$projectCardContent.querySelector('.content').querySelector('p').innerHTML = data.description;
			$projectCardContent.querySelector('.message-body-content').innerHTML = data.tools;
			$projectCardContent.querySelector('time.first').dateTime = data.date.start;
			$projectCardContent.querySelector('time.first').innerText = getDate(data.date.start);
			$projectCardContent.querySelector('time.second').dateTime = (data.date.end === 'now') ? new Date().toISOString().split('T')[0] : getDate(data.date.end);
			$projectCardContent.querySelector('time.second').innerText = (data.date.end === 'now') ? (isEn ? 'Now' : 'Maintenant') : getDate(data.date.end);
		}
	};
});

$showHiddenProjects.onchange = () => {
	if ($showHiddenProjects.checked) {
		$hiddenProject.forEach(e => {
			e.classList.remove('is-hidden');
		});
	} else {
		$hiddenProject.forEach(e => {
			e.classList.add('is-hidden');
		});
	}
};

$buttonDrowDown.forEach(e => {
	e.onclick = () => {
		e.children[0].children[0].classList.toggle('open');
		if (e.dataset.target === 'BTS') {			
			document.getElementById('PDFBTS').classList.toggle('is-sr-only');
		} else if(e.dataset.target === 'BAC') {
			document.getElementById('PDFBAC').classList.toggle('is-sr-only');
		}
	}
});

document.onkeydown = e => {
	if(e.altKey){
		e.preventDefault();
		if (!isHiddenOptionShow) {
			isHiddenOptionShow = true;
			$hiddenOption.classList.remove('is-hidden');
		} else {
			isHiddenOptionShow = false;
			$hiddenOption.classList.add('is-hidden');
		}
	}
}

function getDate(str) {
	return new Date(str).toLocaleDateString(0, {year: 'numeric', month: '2-digit', day: '2-digit'});
}
