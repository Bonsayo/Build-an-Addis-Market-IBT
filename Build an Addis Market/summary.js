import { withVat, format } from './pricing.js'; // Corrected 'format' name [2]

const orders = [
  { id: 1, items: [{ price: 200, qty: 2 }, { price: 50, qty: 1 }] }, 
  { id: 2, items: [{ price: 250, qty: 3 }] }, 
  { id: 3, items: [{ price: 160, qty: 2 }] } 
];

const processedOrders = orders.map(order => {
  const total = order.items.reduce((sum, { price, qty }) => sum + price * qty, 0);
  return { ...order, total };
}); 

const expensiveOrders = processedOrders.filter(o => o.total > 500);

processedOrders.forEach(o => console.log(`Order ${o.id}: ${format(o.total)}`));

console.log("\nOrders over 500 ETB:");
expensiveOrders.forEach(o => console.log(`Order ${o.id}: ${format(o.total)}`));

const grandTotal = processedOrders.reduce((sum, o) => sum + o.total, 0);
console.log(`Grand Total: ${format(grandTotal)}`);
