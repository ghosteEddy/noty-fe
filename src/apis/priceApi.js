const ENDPOINT = 'http://localhost:8080';
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
