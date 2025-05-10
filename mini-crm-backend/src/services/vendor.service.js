export default {
    send: async (customer, campaignName) => {
      // simulate 90% success
      const success = Math.random() < 0.9;
      return { success, timestamp: new Date(), message: `Hi ${customer.name}, check out ${campaignName}!` };
    }
  };
