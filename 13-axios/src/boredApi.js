import axios from "axios";

const BASE = "https://bored-api.appbrewery.com";

export async function getRandomActivity() {
  const res = await axios.get(`${BASE}/random`);
  return res.data;
}

export async function filterActivity(type, participants) {
  const params = new URLSearchParams();
  if (type) params.append("type", type);
  if (participants) params.append("participants", participants);

  const url = `${BASE}/filter?${params.toString()}`;
  const res = await axios.get(url);
  return res.data;
}

export default { getRandomActivity, filterActivity };
