import { useState, useEffect } from 'react';
import PriceApi from '../../apis/priceApi';

function GasDataCard(props) {
	const data = props.data;
	let nameColor = 'bg-white';
	if (Number(data.today) < Number(data.tomorrow)) {
		nameColor = 'bg-green-200';
	} else if (Number(data.today) > Number(data.tomorrow)) {
		nameColor = 'bg-red-200';
	} else {
		nameColor = 'bg-teal-100';
	}
	return (
		<div className='gasDataCard p-3 rounded-md min-w max-w-xs bg-slate-300 m-2 shadow-lg'>
			<div className='flex'>
				<h3 className='dataName bg-green-100 p-2 rounded-md font-bold flex-grow shadow-md'>
					{data.name}
				</h3>
				<a
					className='bg-gray-500 text-white p-2 rounded-lg'
					href={`https://www.google.com/search?q=${data.name}+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81`}
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
					{data.tomorrow}
				</div>
			</div>
			<p className='p-2 text-gray-500 text-sm text-right'>
				Source: {data.source}
			</p>
		</div>
	);
}

function GasData(props) {
	const [loadingStatus, setLoading] = useState('none');
	const [data, setData] = useState(null);
	function loadingHandler(status) {
		setLoading(status);
	}
	function prepareData(resData) {
		const temp = [];
		for (let index = 0; index < resData.length; index++) {
			const ele = resData[index];
			const buffer = {
				name: ele.display_name,
				today: ele.today_price,
				tomorrow: ele.tomorrow_price,
				effectiveDate: new Date(ele.source_update).toString(),
				dataDate: new Date(ele.updated).toString(),
				source: ele.source,
			};
			temp.push(buffer);
		}
		return temp;
	}
	useEffect(() => {
		setLoading('loading');
		const res = PriceApi.getLatestGasPrice().then((data) =>
			setData(prepareData(data))
		);
		setLoading('done');
	}, []);

	function getGasDataList(dataList) {
		return dataList.map((d) => {
			return <GasDataCard data={d} />;
		});
	}

	if (data === null) {
		return <p>No Gas data</p>;
	} else if (loadingStatus === 'loading') {
		return <p>Loading</p>;
	} else if (loadingStatus === 'done') {
		return (
			<>
				<div className=' mx-auto text-center text-lg	'>Currency: THB</div>
				<div className=' mx-auto text-center text-gray-400 italic'>
					Latest Price Change: {data[0].effectiveDate}
				</div>
				<div className='flex flex-wrap w-full p-2'>{getGasDataList(data)}</div>
			</>
		);
	}
}

export default GasData;
