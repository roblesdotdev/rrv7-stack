import { Icon } from '~/components/icon/Icon';
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
			<div className="flex flex-col gap-4 items-center">
				<h1 className="text-xl">Working</h1>
				<a
					href="https://github.com/roblesdotdev"
					target="_blank"
					rel="noreferrer"
					className="text-neutral-300"
				>
					Github <Icon name="GithubLogo" className="size-4" />
				</a>
			</div>
		</div>
	);
}
