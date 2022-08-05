import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkwOGFiMGQwODllZTM3YmFmNjE3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTMyNjYzNywiZXhwIjoxNjU5NTg1ODM3fQ.q8HsTmU4asUqqc94at6aMF3kHaM6J7jnpJc3cF2rEOM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
