import {Fragment} from "react";
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {CheckIcon} from '@heroicons/react/24/solid'
import {type} from "../asset/Type";

// Lors de la fermerture de la modal, on redirige l'utilisateur vers la page d'accueil


export default function QuizEndedModal(props) {
	function closeModal(path) {
		window.location.href = path;
		props.toggleEndedModal();
		return null;
	}
	
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	function getGoodAnswer(questionType, pokemonType) {
		let result = "";
		const pokemonTypeNumber = type.findIndex((type) => type.name === pokemonType);
		const pokemonTypeProposition = type[pokemonTypeNumber][questionType];
		
		if (pokemonTypeProposition.length === 0) {
			switch (questionType) {
				case 'weakness':
					result = 'Ce type de n\'a aucune faiblesse';
					break;
				case 'resistance':
					result = 'Ce type de n\'a aucune résistance';
					break;
				case 'immunity':
					result = 'Ce type de n\'a aucune immunité';
					break;
				case 'strengthTo':
					result = 'Aucune attaque de ce type n\'est super efficace contre un autre type';
					break;
				case 'weaknessTo':
					result = 'Aucune attaque de ce type n\'est peu efficace contre un autre type';
					break;
				case 'uselessTo':
					result = 'Aucune attaque de ce type n\'est inutile contre un autre type';
					break;
				default:
					result = 'error'
			}
			console.log(pokemonTypeProposition)
		} else if (pokemonTypeProposition.length === 1) {
			result = 'La bonne réponse est ' + pokemonTypeProposition[0];
		} else {
			// Si plusieurs bonnes réponses, on les sépare par des virgules
			let goodAnswerString = '';
			for (let i = 0; i < pokemonTypeProposition.length; i++) {
				if (i === pokemonTypeProposition.length - 1) {
					goodAnswerString += ' et ' + capitalizeFirstLetter(pokemonTypeProposition[i]);
				} else {
					if (i !== pokemonTypeProposition.length - 2) {
						goodAnswerString += capitalizeFirstLetter(pokemonTypeProposition[i]) + ', ';
					} else {
						goodAnswerString += capitalizeFirstLetter(pokemonTypeProposition[i]);
					}
				}
			}
			result = 'Les bonnes réponses sont ' + goodAnswerString;
		}
		return result;
	}
	
	return (
		<div className="static">
			<Transition.Root show={props.modalEndedOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={() => closeModal("/")}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity"/>
					</Transition.Child>
					
					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel
									className="h-128 relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:w-3/4 sm:p-6">
									<div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
										{/* Modal Header */}
										<button
											type="button"
											className="rounded-md bg-white text-gray-400 hover:text-gray-500 hover:outline-none focus:outline-none"
											onClick={() => closeModal("/")}
										>
											<span className="sr-only">Close</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true"/>
										</button>
									</div>
									<div className="w-full sm:flex sm:items-start">
										<div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<Dialog.Title as="h3"
											              className="text-center font-bold text-xl font-medium leading-6 text-gray-900">
												{props.title}
											</Dialog.Title>
											<div className="mt-2 text-center">
												{/* Modal Body */}
												<p className="m-4">Votre score est de {props.score} / {props.totalQuestions}</p>
												<p
													className="mb-4">{props.score >= props.totalQuestions / 2 ? "Bien joué !" : "N'hésitez pas à réessayer !"}</p>
											</div>
										</div>
									</div>
									<div className="mt-2 sm:mt-2 sm:flex sm:flex justify-center">
										<div className="flex flex-col justify-center">
											<div className="flex justify-center">
												<button
													type="button"
													className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none"
													onClick={() => closeModal("/game")}
												>
													Recommencer
												</button>
											</div>
											<h1 className="mt-4 mb-2">Détail des réponses :</h1>
											<div className="overflow-auto h-52 border border-gray-400 px-2">
												{props.history.map((question, index) => (
													<div key={index} className="border-b border-gray-400 mt-1 pb-1">
														<h1 className="mx-4">{index + 1}. {question.question}</h1>
														<p
															className="flex ml-10 m-1"
														>
															Votre réponse : {capitalizeFirstLetter(question.answer)}{" "}
															{question.result ? (
																<CheckIcon
																	className="h-6 w-6 text-green-500"
																	aria-hidden="true"
																/>
															) : (
																<XMarkIcon
																	className="h-6 w-6 text-red-500"
																	aria-hidden="true"
																/>
															)}
														</p>
														<p className="ml-10">
															{!question.result && (
																getGoodAnswer(question.questionType, question.pokemonType))
															}
														</p>
													</div>
												))}
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}