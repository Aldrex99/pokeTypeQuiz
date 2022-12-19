import {Link} from 'react-router-dom';

function Error404() {
	return (
		<div className="flex items-center max-h-screen p-28 bg-gray-50 text-gray-500">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl">
						<span className="sr-only">Error</span>404
					</h2>
					<p className="text-2xl font-semibold md:text-3xl">Désolé, nous n'avons pas trouvé cette page.</p>
					<p className="mt-4 mb-8">Mais ne vous inquiétez pas, vous pouvez trouver beaucoup d'autres
						choses sur notre
						page d'accueil.</p>
					<Link to="/"
					      className="px-8 py-3 font-semibold rounded text-black bg-gray-300">Retour à la page
						page d'accueil
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Error404;