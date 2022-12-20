import {useEffect, useReducer, useState} from 'react';
import QuizEndedModal from "./QuizEndedModal";
import {type} from "../asset/Type";
import {questions} from "../asset/Questions";

export default function Question() {
	const [generatedQuestion, setGeneratedQuestion] = useState([]);
	const [generatedAnswer, setGeneratedAnswer] = useState([]);
	const [goodAnswer, setGoodAnswer] = useState("");
	const [noProposition, setNoProposition] = useState(false);
	const [score, setScore] = useState(0);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [totalQuestions, setTotalQuestions] = useState(20);
	const [resultMessage, setResultMessage] = useState("");
	const [quizEnded, setQuizEnded] = useState(false);
	const [modalEndedOpen, toggleEndedModal] = useReducer((open) => !open, false);
	const [history, setHistory] = useState([]);
	
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
			setGoodAnswer(proposition1);
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
			setNoProposition(propositions[1]);
			setQuestionNumber(questionNumber + 1);
		} else {
			setQuizEnded(true);
		}
	}
	
	// Vérification de la réponse
	function checkAnswer(answer, questionType, pokemonType) {
		let result;
		const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
		const pokemonTypeProposition = type[pokemonTypeNumber][questionType];
		if (pokemonTypeProposition.includes(answer) || (pokemonTypeProposition.length === 0 && answer === "aucun")) {
			setScore(score + 1);
			setResultMessage("Bonne réponse !");
			result = true;
		} else {
			setResultMessage("Mauvaise réponse !");
			result = false;
		}
		addToHistory(generatedQuestion[0], questionType, pokemonType, noProposition, goodAnswer, answer, result);
	}
	
	// Ajout de la question, des propositions, de la réponse et du résultat à l'historique
	function addToHistory(
		question,
		questionType,
		pokemonType,
		noProposition,
		goodAnswer,
		answer,
		result,
	) {
		const historyItem = {
			question: question,
			questionType: questionType,
			pokemonType: pokemonType,
			noProposition: noProposition, // Si vrai, aucune proposition n'est correcte
			goodAnswer: goodAnswer,
			answer: answer,
			result: result,
		}
		setHistory([...history, historyItem]);
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
					history={history}
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