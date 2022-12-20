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
import miniatureElectrik from '../asset/TypeMiniature/electrik.png';
import iconElectrik from '../asset/TypeIcon/electrik.png';
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

import {useEffect, useReducer, useState} from 'react';
import QuizEndedModal from "./QuizEndedModal";


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
		weakness: ["vol", "psy", "fée"],
		resistance: ["insecte", "roche", "ténèbres"],
		immunity: [],
		strengthTo: ["normal", "glace", "roche", "acier", "ténèbres"],
		weaknessTo: ["poison", "vol", "psy", "fée", "insecte"],
		uselessTo: ["spectre"],
	},
	// Vol
	{
		name: "vol",
		miniature: miniatureVol,
		icon: iconVol,
		weakness: ["electrik", "glace", "roche"],
		resistance: ["combat", "plante", "insecte"],
		immunity: ["sol"],
		strengthTo: ["combat", "plante", "insecte"],
		weaknessTo: ["electrik", "acier", "roche"],
		uselessTo: [],
	},
	// Poison
	{
		name: "poison",
		miniature: miniaturePoison,
		icon: iconPoison,
		weakness: ["sol", "psy"],
		resistance: ["combat", "fée", "insecte", "plante", "poison"],
		immunity: [],
		strengthTo: ["plante", "fée"],
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
		immunity: ["electrik"],
		strengthTo: ["poison", "roche", "acier", "feu", "electrik"],
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
		strengthTo: ["plante", "psy", "ténèbres"],
		weaknessTo: ["acier", "feu", "combat", "fée", "vol", "poison", "spectre"],
		uselessTo: [],
	},
	// Spectre
	{
		name: "spectre",
		miniature: miniatureSpectre,
		icon: iconSpectre,
		weakness: ["spectre", "ténèbres"],
		resistance: ["poison", "insecte"],
		immunity: ["normal", "combat"],
		strengthTo: ["spectre", "psy"],
		weaknessTo: ["ténèbres"],
		uselessTo: ["normal"],
	},
	// Acier
	{
		name: "acier",
		miniature: miniatureAcier,
		icon: iconAcier,
		weakness: ["feu", "combat", "sol"],
		resistance: ["acier", "dragon", "fée", "glace", "insecte", "normal", "plante", "psy", "roche", "vol"],
		immunity: ["poison"],
		strengthTo: ["glace", "roche", "fée"],
		weaknessTo: ["acier", "feu", "eau", "electrik"],
		uselessTo: [],
	},
	// Feu
	{
		name: "feu",
		miniature: miniatureFeu,
		icon: iconFeu,
		weakness: ["eau", "sol", "roche"],
		resistance: ["acier", "feu", "glace", "plante", "insecte", "fée"],
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
		weakness: ["plante", "electrik"],
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
		resistance: ["sol", "eau", "electrik", "plante"],
		immunity: [],
		strengthTo: ["sol", "roche", "eau"],
		weaknessTo: ["acier", "dragon", "feu", "insecte", "plante", "poison", "vol"],
		uselessTo: [],
	},
	// Electrik
	{
		name: "electrik",
		miniature: miniatureElectrik,
		icon: iconElectrik,
		weakness: ["sol"],
		resistance: ["vol", "electrik", "acier"],
		immunity: [],
		strengthTo: ["vol", "eau"],
		weaknessTo: ["electrik", "plante", "dragon"],
		uselessTo: ["sol"],
	},
	// Psy
	{
		name: "psy",
		miniature: miniaturePsy,
		icon: iconPsy,
		weakness: ["spectre", "ténèbres", "insecte"],
		resistance: ["combat", "psy"],
		immunity: [],
		strengthTo: ["combat", "poison"],
		weaknessTo: ["psy", "acier"],
		uselessTo: ["ténèbres"],
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
		weakness: ["dragon", "glace", "fée"],
		resistance: ["feu", "eau", "electrik", "plante"],
		immunity: [],
		strengthTo: ["dragon"],
		weaknessTo: ["acier"],
		uselessTo: ["fée"],
	},
	// Ténèbres
	{
		name: "ténèbres",
		miniature: miniatureTenebres,
		icon: iconTenebres,
		weakness: ["combat", "fée", "insecte"],
		resistance: ["spectre", "ténèbres"],
		immunity: ["psy"],
		strengthTo: ["spectre", "psy"],
		weaknessTo: ["combat", "fée", "ténèbres"],
		uselessTo: [],
	},
	// Fee
	{
		name: "fée",
		miniature: miniatureFee,
		icon: iconFee,
		weakness: ["poison", "acier"],
		resistance: ["combat", "insecte", "ténèbres"],
		immunity: ["dragon"],
		strengthTo: ["combat", "dragon", "ténèbres"],
		weaknessTo: ["feu", "poison", "acier"],
		uselessTo: [],
	}
];

const questions = [
	{
		questionPartGlobal: "Parmi ces propostions ",
		questionPart1: [
			{
				questionType: "weakness",
				questionText1: "à quel type le type ",
				questionText2: " est-il PEU-RÉSISTANT",
			},
			{
				questionType: "resistance",
				questionText1: "à quel type le type ",
				questionText2: " est-il RÉSISTANT",
			},
			{
				questionType: "immunity",
				questionText1: "contre quel type le type ",
				questionText2: " est-il IMMUNISÉ",
			},
			{
				questionType: "strengthTo",
				questionText1: "sur quel type, le type ",
				questionText2: " est-il SUPER-EFFICACE",
			},
			{
				questionType: "weaknessTo",
				questionText1: "sur quel type, le type ",
				questionText2: " est-il PEU-EFFICACE",
			},
			{
				questionType: "uselessTo",
				questionText1: "sur quel type, le type ",
				questionText2: " est-il INEFFICACE",
			},
		],
		questionPart2: " ?",
	}
]

export default function Question() {
	const [generatedQuestion, setGeneratedQuestion] = useState([]);
	const [generatedAnswer, setGeneratedAnswer] = useState([]);
	const [score, setScore] = useState(0);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [totalQuestions, setTotalQuestions] = useState(20);
	const [resultMessage, setResultMessage] = useState("");
	const [quizEnded, setQuizEnded] = useState(false);
	const [modalEndedOpen, toggleEndedModal] = useReducer((open) => !open, false);
	
	
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
		const questionCompleted = question.questionPartGlobal + questionPart1.questionText1 + capitalizeFirstLetter(pokemonType) + questionPart1.questionText2 + question.questionPart2;
		
		return [questionCompleted, questionType, pokemonType];
	}
	
	// Génération des 4 porpositions de réponse
	function generatePropositions(questionType, pokemonType) {
		let propositions = [];
		let noProposition = false;
		let pokemonTypeProposition = null;
		// Génération de la propostion de réponse à partir du type de pokemon
		while (pokemonTypeProposition === null) {
			const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
			pokemonTypeProposition = type[pokemonTypeNumber][questionType];
		}
		if (pokemonTypeProposition && pokemonTypeProposition.length === 0) {
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
		if (questionNumber < totalQuestions) {
			const question = generateQuestion();
			const propositions = generatePropositions(question[1], question[2]);
			setGeneratedQuestion(question);
			setGeneratedAnswer(propositions[0]);
			setQuestionNumber(questionNumber + 1);
		} else {
			setQuizEnded(true);
		}
	}
	
	// Vérification de la réponse
	function checkAnswer(answer, questionType, pokemonType) {
		const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
		const pokemonTypeProposition = type[pokemonTypeNumber][questionType];
		if (pokemonTypeProposition.includes(answer) || (pokemonTypeProposition.length === 0 && answer === "aucun")) {
			setScore(score + 1);
			setResultMessage("Bonne réponse !");
		} else {
			setResultMessage("Mauvaise réponse !");
		}
	}
	
	// Récupération de l'icone du type de pokemon
	function getIcon(pokemonType) {
		if (pokemonType !== undefined) {
			const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
			return type[pokemonTypeNumber].icon;
		}
	}
	
	// Récupération de la miniature du type de pokemon
	function getMiniature(pokemonType) {
		if (pokemonType !== undefined) {
			const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
			return type[pokemonTypeNumber].miniature;
		}
	}
	
	// Transformer la première lettre en majuscule
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	// Vérification de la réponse au clic sur une proposition + génération de la question et des propositions
	function handleClick(answer, questionType, pokemonType) {
		checkAnswer(answer, questionType, pokemonType);
		generate();
	}
	
	// Génération de la question et des propositions au chargement de la page
	useEffect(() => {
		generate();
	}, []);
	
	// Ouverture du modal
	useEffect(() => {
		if (quizEnded) {
			toggleEndedModal();
		}
	}, [quizEnded]);
	
	return (
		<div className="flex flex-col h-full justify-center items-center bg-gray-200">
			{quizEnded ? (
				<QuizEndedModal
					modalEndedOpen={modalEndedOpen}
					toggleEndedModal={toggleEndedModal}
					title="Quiz terminé !"
					score={score}
					totalQuestions={totalQuestions}
				/>) : null}
			<div className="w-screen px-4 flex flex-col justify-center items-center">
				<div
					className="lg:w-1/2 w-full px-12 h-fit my-4 flex flex-row justify-center items-center bg-white rounded rounded-2xl">
					<p className="w-1/3 text-center">Score : {score}</p>
					<p className="w-1/3 text-center"></p>
					<p className="w-1/3 text-center">Question : {questionNumber} / {totalQuestions}</p>
				</div>
				<div
					className="lg:w-1/2 w-full p-4 h-fit mb-4 flex flex-col justify-center items-center bg-white rounded rounded-2xl">
					<img className="m-4 w-36" src={getMiniature(generatedQuestion[2])} alt="icon"/>
					<p className="m-4 text-center">{generatedQuestion[0]}</p>
				</div>
				<div className="lg:grid lg:grid-cols-4 grid grid-cols-2 gap-3 justify-center items-center">
					{generatedAnswer.map((answer, index) => {
							if (index !== null) {
								return (
									<button
										key={index}
										value={answer}
										onClick={() => handleClick(answer, generatedQuestion[1], generatedQuestion[2])}
										className="lg:w-44 w-32 flex flex-row items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-2xl"
									>
										<img src={getIcon(answer)} alt={answer} className="w-6 h-6"/>
										<span className="m-4">{capitalizeFirstLetter(answer)}</span>
									</button>
								)
							}
						}
					)}
					<button
						className="w-full lg:col-start-1 lg:col-end-5 col-start-1 col-end-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
						value="aucun"
						onClick={() => handleClick("aucun", generatedQuestion[1], generatedQuestion[2])}
					>Aucune de ces réponses
					</button>
				</div>
			</div>
			{resultMessage !== "" ? (
				<div className="w-screen flex flex-col justify-center items-center">
					<div className="w-1/2 p-4 mt-2 flex flex-col justify-center items-center">
						<p className={
							resultMessage === "Bonne réponse !" ?
								"text-center text-green-500 font-bold text-xl" : "text-center text-red-500 font-bold text-xl"
						}>
							{resultMessage}
						</p>
					</div>
				</div>
			) : null}
		</div>
	)
}