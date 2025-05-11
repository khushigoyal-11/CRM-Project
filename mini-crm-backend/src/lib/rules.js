// Translate rule JSON to MongoDB filter
function buildFilter(rules) {
  const filter = {};
  rules.forEach(({ field, operator, value }) => {
    if (operator === '>=') filter[field] = { $gte: value };
    if (operator === '>')  filter[field] = { $gt: value };
  });
  return filter;
}

module.exports.evaluateRules = async (rules) => {
  const Customer = require('../models/Customer.model');
  return Customer.countDocuments(buildFilter(rules));
};