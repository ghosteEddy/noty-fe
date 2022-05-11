function MainMenu(props) {
	function handleClickedMenu(target) {
		props.setProduct(target);
	}
	function MainMenuBtn(productGroup, label, enabled = true) {
		let classes = '';
		if (enabled) {
			classes = 'menuItem ';
		} else {
			classes = 'menuItem ';
		}
		return (
			<button
				className={
					classes +
					' bg-slate-700 text-white font-medium px-4 h-10 rounded-md border-2 hover:bg-white hover:text-black shadow-lg'
				}
				id={productGroup}
				onClick={() => handleClickedMenu(productGroup)}
			>
				{label}
			</button>
		);
	}

	return (
		<div className='relatives'>
			<div className='flex space-x-4 text-xl max-w-full w-max mx-auto px-4 py-3 sm:px-6 items-center'>
				{MainMenuBtn('gas', 'Gas Price')}
				{MainMenuBtn('dev', 'Gold Price', false)}
				{MainMenuBtn('dev', 'Food Price', false)}
			</div>
		</div>
	);
}

export default MainMenu;
