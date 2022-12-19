import {Link} from "react-router-dom";

export default function NewGame() {
	return (
		<div className="flex h-full justify-center items-center bg-gray-200 m-12">
			<Link to="/game"
			      type="button"
			      className="h-12 inline-flex items-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none"
			>
				Nouveau quiz
			</Link>
		</div>
	)
}