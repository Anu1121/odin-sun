import axios from 'axios';

const BASE_URL = 'http://localhost';

export const getData = async () => {
	const b = await axios.get(`${BASE_URL}/api/data`);
	console.log('b>>>', b);
}

