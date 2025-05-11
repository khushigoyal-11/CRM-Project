// src/services/queue.service.js

const QueueService = {
    enqueue: async (type, data) => {
      // Simple in-memory queue + background save simulation
      setTimeout(async () => {
        // Turn “orders” → “Order” (singular, capitalized)
        const modelName = type.charAt(0).toUpperCase()
                        + type.slice(1).replace(/s$/, '');
        // i.e. import '../models/Order.js'
        const { default: Model } = await import(
          `../models/${modelName}.js`
        );
        // use create shortcut
        await Model.create(data);
      }, 500);
    },
  };
  
  export default QueueService;
  