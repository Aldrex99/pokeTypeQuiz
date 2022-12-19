import {Link} from "react-router-dom";

export default function NewGame() {
	return (
		<div className="flex flex-col h-full justify-center items-center bg-gray-200 m-12">
			<Link to="/game"
			      type="button"
			      className="mt-24 h-12 inline-flex items-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
			>
				Nouveau quiz
			</Link>
			<h2 className="fixed bottom-2 text-2xl font-bold text-gray-800">Quiz créé par Aldrex_ca !!!</h2>
		</div>
	)
}