import type { SVGProps } from 'react';
import { cn } from '~/utils/misc';
import spriteHref from './icons/icon.svg';
import type { IconName } from './icons/types';

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName;
	className?: string;
}

/**
 * Icon component wrapper for SVG icons.
 * @returns SVG icon as a react component
 */
export const Icon = ({ name, className, ...props }: IconProps) => {
	const iconClasses = cn('inline-block flex-shrink-0', className);
	return (
		<svg
			className={iconClasses}
			fill="currentColor"
			stroke="currentColor"
			data-name={name}
			{...props}
		>
			<title>{name}</title>
			<use href={`${spriteHref}#${name}`} />
		</svg>
	);
};
export type { IconName };
