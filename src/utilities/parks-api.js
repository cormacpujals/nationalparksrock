import sendRequest from "./send-request"
const BASE_URL = '/api/parks';

export async function index() {
  return sendRequest(BASE_URL);
}

export async function toggleAdd(parkId) {
  return sendRequest(BASE_URL, 'POST', {parkId})
}

export async function wishlistIndex() {
  return sendRequest(`${BASE_URL}/wishlist`);
}