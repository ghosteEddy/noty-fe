function DataTable(props) {
	const data = props.data;
	const tableDetail = data.map((item) => {
		return (
			<tr key={item.name}>
				<td className='product'>{item.name}</td>
				<td className='price'>{item.price}</td>
			</tr>
		);
	});

	return (
		<table className='dataTable'>
			<tbody>
				<tr>
					<th></th>
					<th>Price</th>
				</tr>
				<tableDetail />
			</tbody>
		</table>
	);
}

export default DataTable;
