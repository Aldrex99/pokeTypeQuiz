import miniatureNormal from '../asset/TypeMiniature/normal.png';
import iconNormal from '../asset/TypeIcon/normal.png';
import miniatureCombat from '../asset/TypeMiniature/combat.png';
import iconCombat from '../asset/TypeIcon/combat.png';
import miniatureVol from '../asset/TypeMiniature/vol.png';
import iconVol from '../asset/TypeIcon/vol.png';
import miniaturePoison from '../asset/TypeMiniature/poison.png';
import iconPoison from '../asset/TypeIcon/poison.png';
import miniatureSol from '../asset/TypeMiniature/sol.png';
import iconSol from '../asset/TypeIcon/sol.png';
import miniatureRoche from '../asset/TypeMiniature/roche.png';
import iconRoche from '../asset/TypeIcon/roche.png';
import miniatureInsecte from '../asset/TypeMiniature/insecte.png';
import iconInsecte from '../asset/TypeIcon/insecte.png';
import miniatureSpectre from '../asset/TypeMiniature/spectre.png';
import iconSpectre from '../asset/TypeIcon/spectre.png';
import miniatureAcier from '../asset/TypeMiniature/acier.png';
import iconAcier from '../asset/TypeIcon/acier.png';
import miniatureFeu from '../asset/TypeMiniature/feu.png';
import iconFeu from '../asset/TypeIcon/feu.png';
import miniatureEau from '../asset/TypeMiniature/eau.png';
import iconEau from '../asset/TypeIcon/eau.png';
import miniaturePlante from '../asset/TypeMiniature/plante.png';
import iconPlante from '../asset/TypeIcon/plante.png';
import miniatureElectrique from '../asset/TypeMiniature/electrique.png';
import iconElectrique from '../asset/TypeIcon/electrique.png';
import miniaturePsy from '../asset/TypeMiniature/psy.png';
import iconPsy from '../asset/TypeIcon/psy.png';
import miniatureGlace from '../asset/TypeMiniature/glace.png';
import iconGlace from '../asset/TypeIcon/glace.png';
import miniatureDragon from '../asset/TypeMiniature/dragon.png';
import iconDragon from '../asset/TypeIcon/dragon.png';
import miniatureTenebres from '../asset/TypeMiniature/tenebres.png';
import iconTenebres from '../asset/TypeIcon/tenebres.png';
import miniatureFee from '../asset/TypeMiniature/fee.png';
import iconFee from '../asset/TypeIcon/fee.png';

import {useEffect, useState} from 'react';


const type = [
	/*default :
	{
		Name: "",
		miniature: "",
		icon: "",
		weakness: [],
		resistance: [],
		immunity: [],
		strengthTo: [],
		weaknessTo: [],
		uselessTo: [],
	},*/
	// Normal
	{
		name: "normal",
		miniature: miniatureNormal,
		icon: iconNormal,
		weakness: ["combat"],
		resistance: [],
		immunity: ["spectre"],
		strengthTo: ["acier", "roche"],
		weaknessTo: [],
		uselessTo: ["spectre"],
	},
	// Combat
	{
		name: "combat",
		miniature: miniatureCombat,
		icon: iconCombat,
		weakness: ["vol", "psy", "fee"],
		resistance: ["insecte", "roche", "tenebres"],
		immunity: [],
		strengthTo: ["normal", "glace", "roche", "acier", "tenebres"],
		weaknessTo: ["poison", "vol", "psy", "fee", "insecte"],
		uselessTo: ["spectre"],
	},
	// Vol
	{
		name: "vol",
		miniature: miniatureVol,
		icon: iconVol,
		weakness: ["electrique", "glace", "roche"],
		resistance: ["combat", "plante", "insecte"],
		immunity: ["sol"],
		strengthTo: ["combat", "plante", "insecte"],
		weaknessTo: ["electrique", "acier", "roche"],
		uselessTo: [],
	},
	// Poison
	{
		name: "poison",
		miniature: miniaturePoison,
		icon: iconPoison,
		weakness: ["sol", "psy"],
		resistance: ["combat", "fee", "insecte", "plante", "poison"],
		immunity: [],
		strengthTo: ["plante", "fee"],
		weaknessTo: ["poison", "sol", "roche", "spectre"],
		uselessTo: ["acier"],
	},
	// Sol
	{
		name: "sol",
		miniature: miniatureSol,
		icon: iconSol,
		weakness: ["eau", "plante", "glace"],
		resistance: ["poison", "roche"],
		immunity: ["electrique"],
		strengthTo: ["poison", "roche", "acier", "feu", "electrique"],
		weaknessTo: ["plante", "insecte"],
		uselessTo: ["vol"],
	},
	// Roche
	{
		name: "roche",
		miniature: miniatureRoche,
		icon: iconRoche,
		weakness: ["combat", "sol", "acier", "eau", "plante"],
		resistance: ["normal", "feu", "poison", "vol"],
		immunity: [],
		strengthTo: ["glace", "feu", "insecte", "vol"],
		weaknessTo: ["combat", "sol", "acier"],
		uselessTo: [],
	},
	// Insecte
	{
		name: "insecte",
		miniature: miniatureInsecte,
		icon: iconInsecte,
		weakness: ["feu", "vol", "roche"],
		resistance: ["combat", "plante", "sol"],
		immunity: [],
		strengthTo: ["plante", "psy", "tenebres"],
		weaknessTo: ["acier", "feu", "combat", "fee", "vol", "poison", "spectre"],
		uselessTo: [],
	},
	// Spectre
	{
		name: "spectre",
		miniature: miniatureSpectre,
		icon: iconSpectre,
		weakness: ["spectre", "tenebres"],
		resistance: ["poison", "insecte"],
		immunity: ["normal", "combat"],
		strengthTo: ["spectre", "psy"],
		weaknessTo: ["tenebres"],
		uselessTo: ["normal"],
	},
	// Acier
	{
		name: "acier",
		miniature: miniatureAcier,
		icon: iconAcier,
		weakness: ["feu", "combat", "sol"],
		resistance: ["acier", "dragon", "fee", "glace", "insecte", "normal", "plante", "psy", "roche", "vol"],
		immunity: ["poison"],
		strengthTo: ["glace", "roche", "fee"],
		weaknessTo: ["acier", "feu", "eau", "electrique"],
	},
	// Feu
	{
		name: "feu",
		miniature: miniatureFeu,
		icon: iconFeu,
		weakness: ["eau", "sol", "roche"],
		resistance: ["acier", "feu", "glace", "plante", "insecte", "fee"],
		immunity: [],
		strengthTo: ["plante", "glace", "insecte", "acier"],
		weaknessTo: ["eau", "feu", "roche", "dragon"],
		uselessTo: [],
	},
	// Eau
	{
		name: "eau",
		miniature: miniatureEau,
		icon: iconEau,
		weakness: ["plante", "electrique"],
		resistance: ["acier", "feu", "glace", "eau"],
		immunity: [],
		strengthTo: ["sol", "roche", "feu"],
		weaknessTo: ["eau", "plante", "dragon"],
		uselessTo: [],
	},
	// Plante
	{
		name: "plante",
		miniature: miniaturePlante,
		icon: iconPlante,
		weakness: ["feu", "glace", "insecte", "vol", "poison"],
		resistance: ["sol", "eau", "electrique", "plante"],
		immunity: [],
		strengthTo: ["sol", "roche", "eau"],
		weaknessTo: ["acier", "dragon", "feu", "insecte", "plante", "poison", "vol"],
		uselessTo: [],
	},
	// Electrique
	{
		name: "electrique",
		miniature: miniatureElectrique,
		icon: iconElectrique,
		weakness: ["sol"],
		resistance: ["vol", "electrique", "acier"],
		immunity: [],
		strengthTo: ["vol", "eau"],
		weaknessTo: ["electrique", "plante", "dragon"],
		uselessTo: ["sol"],
	},
	// Psy
	{
		name: "psy",
		miniature: miniaturePsy,
		icon: iconPsy,
		weakness: ["spectre", "tenebres", "insecte"],
		resistance: ["combat", "psy"],
		immunity: [],
		strengthTo: ["combat", "poison"],
		weaknessTo: ["psy", "acier"],
		uselessTo: ["tenebres"],
	},
	// Glace
	{
		name: "glace",
		miniature: miniatureGlace,
		icon: iconGlace,
		weakness: ["feu", "combat", "roche", "acier"],
		resistance: ["glace"],
		immunity: [],
		strengthTo: ["sol", "vol", "plante", "dragon"],
		weaknessTo: ["acier", "feu", "eau", "glace"],
		uselessTo: [],
	},
	// Dragon
	{
		name: "dragon",
		miniature: miniatureDragon,
		icon: iconDragon,
		weakness: ["dragon", "glace", "fee"],
		resistance: ["feu", "eau", "electrique", "plante"],
		immunity: [],
		strengthTo: ["dragon"],
		weaknessTo: ["acier"],
		uselessTo: ["fee"],
	},
	// Ténèbres
	{
		name: "tenebres",
		miniature: miniatureTenebres,
		icon: iconTenebres,
		weakness: ["combat", "fee", "insecte"],
		resistance: ["spectre", "tenebres"],
		immunity: ["psy"],
		strengthTo: ["spectre", "psy"],
		weaknessTo: ["combat", "fee", "tenebres"],
		uselessTo: [],
	},
	// Fee
	{
		name: "fee",
		miniature: miniatureFee,
		icon: iconFee,
		weakness: ["poison", "acier"],
		resistance: ["combat", "insecte", "tenebres"],
		immunity: ["dragon"],
		strengthTo: ["combat", "dragon", "tenebres"],
		weaknessTo: ["feu", "poison", "acier"],
		uselessTo: [],
	}
];

const questions = [
	{
		questionPartGlobal: "Parmi ces propostions ",
		questionPart1: [
			{questionType: "weakness", questionText: "quelle est la / les faiblesse(s) des pokémons de type "},
			{questionType: "resistance", questionText: "quelle est la / les résistance(s) des pokémons de type "},
			{questionType: "immunity", questionText: "quelle est l'immunité des pokémons de type "},
			{questionType: "strengthTo", questionText: "quel type reçoit des dégats doublés des attaque de type "},
			{questionType: "weaknessTo", questionText: "quel type reçoit des dégats divisé par 2 des attaque de type "},
			{questionType: "uselessTo", questionText: "quel type n'est pas affecté par les attaques de type "},
		],
		questionPart2: " ?",
	}
]

export default function Question() {
	const [generatedQuestion, setGeneratedQuestion] = useState([]);
	const [generatedAnswer, setGeneratedAnswer] = useState([]);
	
	
	// Fonction Random
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	
	// Génération de la question
	function generateQuestion() {
		// Génération du type de pokemon
		const pokemonTypeNumber = getRandomInt(type.length);
		const pokemonType = (type[pokemonTypeNumber].name);
		// Génération de la question
		const question = questions[0];
		const questionPart1 = question.questionPart1[getRandomInt(question.questionPart1.length)];
		const questionType = questionPart1.questionType;
		// Resultat
		const questionCompleted = question.questionPartGlobal + questionPart1.questionText + pokemonType + question.questionPart2;
		
		return [questionCompleted, questionType, pokemonType];
	}
	
	// Génération des 4 porpositions de réponse
	function generatePropositions(questionType, pokemonType) {
		let propositions = [];
		let noProposition = false;
		// Génération de la propostion de réponse à partir du type de pokemon
		const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
		const pokemonTypeProposition = type[pokemonTypeNumber][questionType];
		if (pokemonTypeProposition.length === 0) {
			let proposition1 = type[getRandomInt(type.length)].name
			propositions.push(proposition1);
			noProposition = true;
		} else {
			let proposition1 = pokemonTypeProposition[getRandomInt(pokemonTypeProposition.length)];
			propositions.push(proposition1);
		}
		// Génération des 3 autres propositions
		for (let i = 0; i < 3; i++) {
			let proposition = type[getRandomInt(type.length)].name;
			while (propositions.includes(proposition) || pokemonTypeProposition.includes(proposition)) {
				proposition = type[getRandomInt(type.length)].name;
			}
			propositions.push(proposition);
		}
		// Mélange des propositions
		for (let i = propositions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[propositions[i], propositions[j]] = [propositions[j], propositions[i]];
		}
		return [propositions, noProposition];
	}
	
	// Génération de la question et des propositions
	function generate() {
		const question = generateQuestion();
		const propositions = generatePropositions(question[1], question[2]);
		setGeneratedQuestion(question);
		setGeneratedAnswer(propositions[0]);
	}
	
	// Vérification de la réponse
	function checkAnswer(answer, questionType, pokemonType) {
		const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
		console.log(pokemonTypeNumber)
		const pokemonTypeProposition = type[pokemonTypeNumber][questionType];
		console.log(pokemonTypeProposition)
		if (pokemonTypeProposition.includes(answer) || pokemonTypeProposition.length === 0) {
			
			console.log("Bonne réponse");
		} else {
			console.log("Mauvaise réponse");
		}
	}
	
	// Récupération de l'icone du type de pokemon
	function getIcon(pokemonType) {
		if (pokemonType !== undefined) {
			const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
			return type[pokemonTypeNumber].icon;
		}
	}
	
	
	// Génération de la question et des propositions au chargement de la page
	useEffect(() => {
		generate();
	}, []);
	
	function handleClick(e, questionType, pokemonType) {
		checkAnswer(e.target.value, questionType, pokemonType);
		generate();
	}
	
	return (
		<div className="flex flex-col h-full justify-center items-center bg-gray-200">
			<div className="flex flex-col justify-center items-center">
				<p>{generatedQuestion[0]}</p>
				<div className="flex flex-row justify-center items-center">
					{generatedAnswer.map((answer, index) => {
							if (index !== null) {
								return (
									<button
										key={index}
										value={answer}
										onClick={(e) => handleClick(e, generatedQuestion[1], generatedQuestion[2])}
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
									>
										<img src={getIcon(answer)} alt={answer} className="w-8 h-8"/>
										{answer}
									</button>
								)
							}
						}
					)}
					
					
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
						value="autre"
						onClick={(e) => handleClick(e, generatedQuestion[1], generatedQuestion[2])}
					>Aucune de ces réponses
					</button>
				</div>
			</div>
		</div>
	)
}