import React from 'react';
import {
	AdjustmentsIcon,
	GlobeAltIcon,
	TrashIcon
} from '@heroicons/react/outline';
import NextLink from '../../nextComponents/NextLink';

function CardSite({
	favicon = undefined,
	site = 'defaultname.com',
	visits = 0,
	clicks = 0,
	id = 0,
	settings = false
}) {
	return (
		<div className="flex rounded-md bg-white col-span-1 p-4 flex-col items-start justify-start border border-mGrayBorder transform scale-100 shadow-none transition-all duration-100 ease-in-out hover:scale-105 hover:border-main hover:shadow-regular">
			<NextLink href={`/admin/site/${id}`}>
				<a>
					<div className="w-full flex items-center justify-start text-mBlack">
						{favicon !== undefined ? (
							<img
								src={favicon}
								alt={site}
								className="w-6 h-6 object-contain mr-3"
							/>
						) : (
							<GlobeAltIcon className="w-6 h-6 stroke-current mr-3" />
						)}
						<p className="m-0 font-bold text-md">{site}</p>
					</div>
					<div className="w-full flex items-center justify-between text-mBlack mt-2">
						<p className="m-0 text-sm">
							hoy <strong>{visits}</strong> visitas y{' '}
							<strong>{clicks}</strong> clicks
						</p>
						{settings && (
							<div className="buttons flex items-center justify-between ml-2">
								<button type="button">
									<AdjustmentsIcon className="w-7 h-7 stroke-current text-gray-300" />
								</button>
								<button type="button">
									<TrashIcon className="w-7 h-7 stroke-current text-gray-300" />
								</button>
							</div>
						)}
					</div>
				</a>
			</NextLink>
		</div>
	);
}

export default CardSite;
