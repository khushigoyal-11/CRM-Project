import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
  withCredentials: true,
});

/** Auth */
export function loginWithGoogle(token) {
  return api.post('/auth/google', { token }).then(r => r.data.user);
}

/** Customers & Orders */
export function createCustomer(c) { return api.post('/customers', c).then(r => r.data); }
export function createOrder(o)    { return api.post('/orders', o).then(r => r.data); }

/** Segments */
export function previewSegment(rules) {
  return api.post('/segments/preview', { rules }).then(r => r.data.count);
}
export function createSegment(name, rules) {
  return api.post('/segments', { name, rules }).then(r => r.data);
}
export function fetchSegments() {
  return api.get('/segments').then(r => r.data);
}

/** Campaigns */
export function fetchCampaigns() {
  return api.get('/campaigns').then(r => r.data);
}
export function createCampaign(payload) {
  return api.post('/campaigns', payload).then(r => r.data);
}
export function fetchCampaignById(id) {
  return api.get(`/campaigns/${id}`).then(r => r.data);
}

/** Delivery Logs */
export function fetchDeliveryLogs(campaignId) {
  return api.get(`/campaigns/${campaignId}/logs`).then(r => r.data);
}

export default api;
