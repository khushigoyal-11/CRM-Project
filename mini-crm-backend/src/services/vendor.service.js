// Simulate external vendor API
module.exports.sendMessage = async ({ campaignId, customer }) => {
  const success = Math.random() < 0.9;
  return { status: success? 'success':'failed', customerId: customer._id, campaignId };
};