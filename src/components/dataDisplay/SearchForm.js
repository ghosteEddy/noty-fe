import { useState } from 'react';

function SearchForm(params) {
	const [searchValue, setSearchValue] = useState('');
	const [ready, setReady] = useState(true);
	function changeSearchText(value) {
		setReady(false);
		setSearchValue(value);
		params.handleSearchText(value);
		setReady(true);
	}
	return (
		<form className='mx-auto py-1 max-w-full w-max'>
			<input
				type='text'
				name='search'
				autoComplete='false'
				className=' bg-amber-50 border-2 rounded-md w-96 p-2 max-w-full'
				placeholder='Search Here ...'
				value={searchValue}
				onInput={(e) => changeSearchText(e.target.value)}
			></input>
		</form>
	);
}

export default SearchForm;
