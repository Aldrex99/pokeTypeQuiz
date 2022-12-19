import {Fragment} from "react";
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'

// Lors de la fermerture de la modal, on redirige l'utilisateur vers la page d'accueil


export default function QuizEndedModal(props) {
	function closeModal(path) {
		window.location.href = path;
		props.toggleEndedModal();
		return null;
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
									className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:w-3/4 sm:p-6">
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
												<p className="m-6">Votre score est de {props.score} / {props.totalQuestions}</p>
												<p className="mb-6">{props.score >= props.totalQuestions / 2 ? "Bravo !" : "Dommage !"}</p>
											</div>
										</div>
									</div>
									<div className="mt-5 sm:mt-4 sm:flex sm:flex justify-center">
										<div className="flex justify-center">
											<div>
												<button
													type="button"
													className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
													onClick={() => closeModal("/game")}
												>
													Recommencer
												</button>
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