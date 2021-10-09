(function () {
	/*const scroll = new LocomotiveScroll({
		el: document,
		smooth: true,
		direction: 'vertical',
		scrollFromAnywhere: true,
		reloadOnContextChange: true
	});
	console.log(scroll)*/
})();

const projectsData = {
	"ddd-irr": {
		logo: './assets/img/logoMano.png',
		title: "Dissociateur de doigts",
		subtitle: "En collaboration avec l'IRR de Lay-Saint-Christophe",
		description: "Dans le cadre du projet de deuxièmes années de BTS SNIR, en collaboration avec l'Institut Régional de Réadaptation de Lay-Saint-Christophe, j'ai dû en tant que chef de projet gérer une équipe de 2 personnes, Nicolas Motel développeur de l'interface de l'application web et Louis Thirion développeur/concepteur du prototype de gants connectés. Nous avons dû travailler à la réalisation d'une application web et d'un prototype permettant le suivi de l'évolution de la rééducation des doigts des patients de l'IRR, grâce aux différents exercices créés par les médecins dans l'application. En tant que développeur j'ai développé l'interface graphique des paramètres de l'application, ainsi que la partie backend de l'application web.",
		tools: "<p><strong>IDE:</strong> Sublime Text 3, Arduino IDE</p><p><strong>Gestion de projet:</strong> Git, GitHub, Google Drive, Trello, Discord</p><p><strong>Langages:</strong> JavaScript, HTML5, CSS3, EJS, C/C++</p><p><strong>Frameworks:</strong> Node.js, Electron.js</p><p><strong>Librairies:</strong> Express.js, Bulma.io, Socket.io, Moment.js, HighCharts, SerialPort</p><p><strong>Suite Office:</strong> Word, PowerPoint, Excel</p>",
		date: {
			start: '2020-12-18',
			end: '2021-06-16'
		}
	},
	flower: {
		title: "Flower-Bot",
		subtitle: "Bot Discord multifonctions développé depuis plusieurs années",
		description: "",
		tools: "<p><strong>IDE:</strong> Sublime Text 3</p><p><strong>Gestion de projet:</strong> Google Drive, Discord</p><p><strong>Langages:</strong> JavaScript</p><p><strong>Frameworks:</strong> Node.js</p><p><strong>Librairies:</strong> Discord.js, Moment.js, Canvas.js</p>",
		date: {
			start: '2017-11-20',
			end: 'now'
		}
	}
}

const accordions = bulmaCollapsible.attach();

document.querySelector('.panel-heading').innerText = `#PROJETS 2017-${new Date().getFullYear()}`;

const PDFViewerOptions = {
	fallbackLink: "<p>Ce navigateur ne supporte pas les lecteurs PDF, vous pouvez télécharger le PDF <a href='[url]'>ici</a></p>"
};

PDFObject.embed("https://www4.ac-nancy-metz.fr/lyc-loritz/telechargements/lycee/formations/bts/plaquettes/loritz_plaquette_snir.pdf", "#PDFViewerBTS", PDFViewerOptions);
PDFObject.embed("https://www4.ac-nancy-metz.fr/lyc-loritz/telechargements/lycee/formations/bac/plaquettes/loritz_plaquette_sin.pdf", "#PDFViewerBAC", PDFViewerOptions);

const $categorySelector = document.getElementById('categorySelector');
const $projectSelector = document.querySelectorAll('.panel-block:not(#hiddenOption):not(label)');

const $hiddenProject = document.querySelectorAll('.hidden-project');
const $showHiddenProjects = document.getElementById('showHiddenProjects');
const $hiddenOption = document.getElementById('hiddenOption');

const $buttonDrowDown = document.querySelectorAll('.open-dropdown');

let isHiddenOptionShow = false;

HTMLCollection.prototype.forEach = Array.prototype.forEach;

$categorySelector.children.forEach(e => {
	e.onclick = () => {
		let $activeCategorySelector = document.querySelector('.is-active.category');
		if(!e.isEqualNode($activeCategorySelector)){
			e.classList.add('is-active', 'category');
			$activeCategorySelector.classList.remove('is-active', 'category');
			if(e.dataset.type === 'all'){
				$projectSelector.forEach(i => {
					if((i.id !== 'hiddenOption' && !i.classList.contains('hidden-project') && i.dataset.category !== 'search') || $showHiddenProjects.checked){
						i.classList.remove('is-hidden');
					}
				});
			}else if(e.dataset.type === 'public'){
				$projectSelector.forEach(i => {
					if((i.id !== 'hiddenOption' && !i.classList.contains('hidden-project') && i.dataset.category !== 'search') || $showHiddenProjects.checked){ 
						if(i.dataset.category !== 'public'){
							i.classList.add('is-hidden');
						}else{
							i.classList.remove('is-hidden');
						}
					}
				});
			}else if(e.dataset.type === 'private'){
				$projectSelector.forEach(i => {
					if((i.id !== 'hiddenOption' && !i.classList.contains('hidden-project') && i.dataset.category !== 'search') || $showHiddenProjects.checked){
						if(i.dataset.category !== 'private'){
							i.classList.add('is-hidden');
						}else{
							i.classList.remove('is-hidden');
						}
					}
				});
			}
		}
	};
});

$projectSelector.forEach(e => {
	e.onclick = () => {
		let $activeProjectSelector = document.querySelector('.panel-block.is-active');
		if(!e.isEqualNode($activeProjectSelector)){
			e.classList.add('is-active');
			$activeProjectSelector.classList.remove('is-active');
			console.log(projectsData[e.dataset.target]);
		}
	};
});

$showHiddenProjects.onchange = () => {
	if($showHiddenProjects.checked){
		$hiddenProject.forEach(e => {
			e.classList.remove('is-hidden');
		});
	}else{
		$hiddenProject.forEach(e => {
			e.classList.add('is-hidden');
		});
	}
};

$buttonDrowDown.forEach(e => {
	e.onclick = () => {
		e.children[0].children[0].classList.toggle('open');
		if(e.dataset.target === 'BTS'){			
			document.getElementById('PDFBTS').classList.toggle('is-hidden');
		}else if(e.dataset.target === 'BAC'){
			document.getElementById('PDFBAC').classList.toggle('is-hidden');
		}
	}
});

document.onkeydown = e => {
	if(e.altKey){
		e.preventDefault();
		if(!isHiddenOptionShow){
			isHiddenOptionShow = true;
			$hiddenOption.classList.remove('is-hidden');
		}else{
			isHiddenOptionShow = false;
			$hiddenOption.classList.add('is-hidden');
		}
	}
}