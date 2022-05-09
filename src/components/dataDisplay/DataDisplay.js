import UnderConstruction from '../global/UnderConstruction';
import GasData from './GasData';
import CustomHeader from '../global/CustomHeader';

function DataDisplay(props) {
	switch (props.product) {
		case 'dev': {
			return <UnderConstruction />;
		}
		case 'none': {
			return <p>Please Choose Product</p>;
		}
		case 'gas': {
			return (
				<div>
					<CustomHeader text='Gas Price' />
					<GasData />
				</div>
			);
		}
		default: {
			return <p>Please Choose Product</p>;
		}
	}
}

export default DataDisplay;
