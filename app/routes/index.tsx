import type { Route } from './+types';

export function meta({ error }: Route.MetaArgs) {
	return [
		{ title: error ? 'Error' : 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router!' },
	];
}

export default function Home() {
	return (
		<div className="min-h-screen grid place-items-center">
			<h1 className="text-xl">Working</h1>
		</div>
	);
}
