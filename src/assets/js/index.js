if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(location.href + 'sw.js', {
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

console.log('isEn', isEn);

fetch(`assets/translation/${isEn ? 'en.json' : 'fr.json'}`)
.then(res => res.json())
.then(data => {
	i18n.translator.add(data);
});

document.querySelector('.panel-heading').innerText = i18n('project', { year: new Date().getFullYear() });

const projectsData = {
	"spot.js": {
		logo: {},
		title: "Spot SDK Node.js",
		subtitle: "Librairie non officielle Node.js permettant de contrôler le robot <a class=\"is-underlined\" target=\"_blank\" href=\"https://www.bostondynamics.com/spot\">Spot de Boston Dynamics</a>",
		description: "Librairie non officielle Node.js permettant de contrôler le robot Spot de Boston Dynamics, cette librairie est encore un travail en cours de développement !",
		tools: "<p><strong>IDE:</strong> Sublime Text 3</p><p><strong>Langage:</strong> JavaScript</p><p><strong>Frameworks:</strong> gRPC</p><p><strong>Librairies:</strong> Google-Protobuf, gRPC-js, OpenCV4Nodejs, Tesseract.js, Lodash, Winston</p>",
		date: {
			start: '2021-02-05',
			end: 'now'
		},
		githubLink: 'https://github.com/TheoPierne/spot-sdk-js/'
	},
	"spot-server.js": {
		logo: {},
		title: "Spot Server Node.js",
		subtitle: "Un simple serveur pour simuler un robot Spot à des fins de tests.",
		description: "Pour faciliter le développement du SDK du robot Spot en JavaScript, j'ai créé ce serveur qui simule les réponses aux requêtes du SDK que pourrait renvoyer le robot Spot !",
		tools: "<p><strong>IDE:</strong> Sublime Text 3</p><p><strong>Langage:</strong> JavaScript</p><p><strong>Frameworks:</strong> gRPC</p><p><strong>Librairies:</strong> Google-Protobuf, gRPC-js OpenCV4Nodejs, Lodash, Winston</p>",
		date: {
			start: '2021-02-05',
			end: 'now'
		},
		githubLink: 'https://github.com/TheoPierne/spot-server-js/'
	},
	'mythical-launcher': {
		logo: {},
		title: "Mythical Launcher",
		subtitle: "Launcher customisé pour le jeu vidéo Minecraft.",
		description: "Ce launcher à été crée pour le serveur Mythical, pour permettre aux joueurs de rejoindre le serveur avec les bon mods ainsi que la bonne verion de Minecraft.",
		tools: "<p><strong>IDE:</strong> Sublime Text 3</p><p><strong>Langages:</strong> HTML5, CSS3, JavaScript, EJS</p><p><strong>Librairies/API:</strong> Electron, EJS, Got, Semver, UUID, Eslint, Minecraft Protocol</p>",
		date: {
			start: '2022-04-10',
			end: 'now'
		},
		githubLink: 'https://github.com/TheoPierne/MythicalLauncher/'
	},
	"ddd-irr": {
		logo: {
			url: '/assets/img/logoMano.png', 
			alt: 'logo projet dissociateur de doigts'
		},
		title: "Dissociateur de doigts",
		subtitle: "En collaboration avec l'IRR de Lay-Saint-Christophe",
		description: "Dans le cadre du projet de deuxièmes années de BTS SNIR, en collaboration avec l'Institut Régional de Réadaptation de Lay-Saint-Christophe, j'ai dû en tant que chef de projet gérer une équipe de 2 personnes, Nicolas Motel développeur de l'interface de l'application web et Louis Thirion développeur/concepteur du prototype de gants connectés. Nous avons dû travailler à la réalisation d'une application web et d'un prototype permettant le suivi de l'évolution de la rééducation des doigts des patients de l'IRR, grâce aux différents exercices créés par les médecins dans l'application. En tant que développeur j'ai développé l'interface graphique des paramètres de l'application, ainsi que la partie backend de l'application web.",
		tools: "<p><strong>IDE:</strong> Sublime Text 3, Arduino IDE</p><p><strong>Gestion de projet:</strong> Git, GitHub, Google Drive, Trello, Discord</p><p><strong>Langages:</strong> JavaScript, HTML5, CSS3, EJS, C/C++</p><p><strong>Frameworks:</strong> Electron.js</p><p><strong>Librairies:</strong> Express.js, Bulma.io, Socket.io, Moment.js, HighCharts, SerialPort</p><p><strong>Suite Office:</strong> Word, PowerPoint, Excel</p>",
		date: {
			start: '2020-12-18',
			end: '2021-06-16'
		},
		githubLink: null
	},
	flower: {
		logo: {
			url: '/assets/img/flower.png', 
			alt: 'logo flower-bot'
		},
		title: "Flower-Bot",
		subtitle: "Bot Discord multifonctions développé depuis plusieurs années",
		description: "Flower-Bot représente mon tout premier projet de développement ! Ce bot Discord intègre un système d'xp que l'on gagne par minute que l'on soit dans un salon vocal ou en train d'écrire dans un salon textuel. Des rôles peuvent ensuite être attribués automatiquement après chaque gain de niveau. Flower-Bot possède aussi d'autres fonctionnalitées très intéressantes que je te laisse découvrir en ajoutant le bot à ton serveur Discord avec <a class=\"tag is-ligth\" target=\"_blank\" href=\"https://discord.com/oauth2/authorize?client_id=476671594962354177&permissions=8&scope=applications.commands%20bot\">ce lien</a>.",
		tools: "<p><strong>IDE:</strong> Sublime Text 3</p><p><strong>Gestion de projet:</strong> Google Drive, Discord</p><p><strong>Langages:</strong> JavaScript</p><p><strong>Librairies:</strong> Discord.js, Moment.js, Canvas.js, YouTube API, Spotify API, Ytdl-Core</p>",
		date: {
			start: '2017-11-20',
			end: 'now'
		},
		githubLink: null
	},
	acnhMsgBox: {
		logo: {},
		title: "Animal Crossing: New Horizons Message Box",
		subtitle: "Librairie permettant de créer une message box ressemblant à celle dans le jeux Animal Crossing: New Horizons.",
		description: "Cette librairie permet de créer une message box comme dans le jeux Animal Crossing: New Horizons ! <br><img src=\"https://i.imgur.com/m67XYDX.png\" alt=\"exemple librairie acnhMsgBox\">",
		tools: "<p><strong>IDE:</strong> Sublime Text 3</p><p><strong>Langages:</strong> JavaScript</p><p><strong>Librairies/API:</strong> SVG</p>",
		date: {
			start: '2019-04-24',
			end: '2019-04-26'
		},
		githubLink: 'https://github.com/TheoPierne/acnhMsgBox/'
	},
	portfolio: {
		logo: {
			url: '/assets/img/bitmoji_2.png',
			alt: 'Bitmoji Théo Pierné'
		},
		title: "Portfolio de Théo Pierné",
		subtitle: "<p class=\"heart-container\">Développé avec <i class=\"heart\"></i></p>",
		description: "",
		tools: "<p><strong>IDE:</strong> Sublime Text 3</p><p><strong>Langages:</strong> HTML5, CSS3, JavaScript</p><p><strong>Librairies/API:</strong> Bulma.io, FontAwesome, Bulma-Collapsible, PDFObject, Twemoji</p>",
		date: {
			start: '2021-10-02',
			end: 'now'
		},
		githubLink: 'https://github.com/TheoPierne/portfolio/'
	}
}

twemoji.parse(document.body);

const accordions = bulmaCollapsible.attach();

const PDFViewerOptions = {
	fallbackLink: `<p><a class="button is-dark" href='[url]' target='_blank'><span>${i18n('pdf')}</span><span class="icon is-small"><i class="fas fa-external-link-alt"></i></span></a></p>`
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
			$projectCardContent.querySelector('time.second').innerText = (data.date.end === 'now') ? i18n('now') : getDate(data.date.end);
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
