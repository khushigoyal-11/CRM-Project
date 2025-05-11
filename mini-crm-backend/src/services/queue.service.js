// Simple in-memory queue (replace with Redis/Kafka in prod)
const queue = [];
module.exports.enqueue = async (campaignId) => { queue.push(campaignId); };
module.exports.dequeue = async () => queue.shift();