function GasDataCard(props) {
	console.log('card create');
	const data = props.data;
	const priceDiff = data.tomorrow - data.today;
	let priceDiffLabel = '';
	if (priceDiff !== 0) {
		priceDiffLabel = `(${String(priceDiff)}) `;
	}
	let nameColor = 'bg-white';
	if (Number(data.today) > Number(data.tomorrow)) {
		nameColor = 'bg-green-300';
	} else if (Number(data.today) < Number(data.tomorrow)) {
		nameColor = 'bg-red-300';
	} else {
		nameColor = 'bg-teal-100';
	}
	return (
		<div
			className='gasDataCard p-3 rounded-md min-w max-w-xs bg-slate-300 m-2 shadow-lg'
			key={data.name}
			hidden={!data.show}
		>
			<div className='flex'>
				<h3 className='dataName bg-green-100 p-2 rounded-md font-bold flex-grow shadow-md'>
					{data.name}
				</h3>
				<a
					className='bg-gray-500 text-white p-2 rounded-lg'
					href={`https://www.google.com/search?q=${data.name}+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81`}
					target='_blank'
				>
					?
				</a>
			</div>
			<div className=' text-gray-400 text-sm p-2'>{data.dataDate}</div>
			<div className='flex p-2'>
				<div className=' bg-slate-100 rounded-md px-2 mr-2'>Today</div>
				<div className=' mr-0 flex-grow text-right rounded-md bg-teal-100 pr-2'>
					{data.today}
				</div>
			</div>
			<div className='flex p-2'>
				<div className=' bg-slate-100 rounded-md px-2 mr-2'>Tomorrow</div>
				<div
					className={nameColor + ' mr-0 flex-grow text-right rounded-md pr-2'}
				>
					{priceDiffLabel}
					{data.tomorrow}
				</div>
			</div>
			<p className='p-2 text-gray-500 text-sm text-right'>
				Source: {data.source}
			</p>
		</div>
	);
}

export default GasDataCard;
