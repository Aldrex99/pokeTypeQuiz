export default function Template(props) {
	return (
		<div className="max-h-screen h-screen bg-gray-200">
			<header className="py-4 sticky top-0 w-screen bg-gray-800 text-white">
				<div className="flex flex-col items-center justify-center h-full">
					<h1 className="text-4xl font-bold">Quiz sur les types pokémons</h1>
				</div>
			</header>
			<div>
				{props.children}
			</div>
		</div>
	);
}