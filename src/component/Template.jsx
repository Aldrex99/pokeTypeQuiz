export default function Template(props) {
	return (
		<div className="max-h-screen h-screen bg-gray-200">
			<header className="py-4 sticky top-0 w-screen bg-gray-800 text-white">
				<div className="flex flex-col items-center justify-center h-full">
					<h1 className="lg:text-4xl text-2xl font-bold text-center">Quiz sur les types Pokémon</h1>
				</div>
			</header>
			<div>
				{props.children}
			</div>
		</div>
	);
}