const ENDPOINT = 'http://13.213.40.209:7788';
const OPTIONS = {
	'Access-Control-Request-Headers': '*',
	'Access-Control-Request-Method': '*',
};

async function getLatestGasPrice() {
	const res = await fetch(`${ENDPOINT}/gas/prices`, OPTIONS);
	const data = await res.json();
	return data;
}

export default { getLatestGasPrice };
