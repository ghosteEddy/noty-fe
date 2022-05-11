import GasDataCard from './GasDataCard';

function GasDataList(params) {
	console.log('list create');
	const data = params.data;
	const ListGasDataCard = data.map((item) => <GasDataCard data={item} />);
	return (
		<>
			<div className='flex flex-wrap w-full p-2'>{ListGasDataCard}</div>
		</>
	);
}

export default GasDataList;
