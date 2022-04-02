import axios from "axios";

export const get = async (url, params) => {
	const response = await axios.get(url, { params });
	return response.data;
};
