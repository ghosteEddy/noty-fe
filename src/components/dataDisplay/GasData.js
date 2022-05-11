import { useState, useEffect, useContext } from 'react';
import PriceApi from '../../apis/priceApi';
import SearchForm from './SearchForm';
import GasDataList from './GasDataList';

function GasData(props) {
	const [loadingStatus, setLoading] = useState('none');
	const [data, setData] = useState(null);
	const [searchText, searchStatus] = useState(false);
	const [searchReady, setSearchReady] = useState(true);

	function handleSearch(text = '') {
		setSearchReady(false);
		console.log(text);
		if (true) {
			for (let index = 0; index < data.length; index++) {
				const ele = data[index];
				console.log(ele.name);
				if (ele.name.includes(text)) {
					ele.show = true;
				} else {
					ele.show = false;
				}
				console.log(ele.show);
			}
		}
		setData(data);
		searchStatus(text);
		setSearchReady(true);
	}

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
				// non api related
				show: true,
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
				<SearchForm handleSearchText={handleSearch} ready={searchReady} />
				<div className='flex flex-wrap w-full p-2'>
					<GasDataList data={data} update={searchText} />
				</div>
			</>
		);
	}
}

export default GasData;
