import { useState } from 'react';
import MainMenu from './components/global/MainMenu';
import Footer from './components/global/Footer';
import DataDisplay from './components/dataDisplay/DataDisplay';
import './BaseCss.css';

function App() {
	const [currentProduct, changeProduct] = useState('none');
	function handleChangeProduct(product) {
		changeProduct(product);
		// console.log(`APP ${currentProduct}`);
	}
	console.log(`APP ${currentProduct}`);
	return (
		<div className='main w-screen h-screen'>
			<MainMenu setProduct={handleChangeProduct} />
			<div id='content' className=' max-w-full border-2 p-5 rounded-xl mx-3'>
				<DataDisplay product={currentProduct} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
