import axios from "axios";

export const loadUnitsApi = async () =>
await axios.get("http://localhost:3000/units");

/* export const filterByAgeApi = async (value) =>
await axios.get(`http://localhost:3000/units?age=${value}`);  */ 

