export async function GET(){
    const products = [
        {id:'1', name: 'Nvidia GPU', price: 1299, category: 'Electronics', stock: 3},
        {id:'2', name: 'ASUS Monitor', price: 120, category: 'Electronics', stock: 10},
        {id:'3', name: 'TV Stand', price: 179.99, category: 'Furniture', stock: 14},
        {id:'4', name: 'Nonstick Frying Pan', price: 16.99, category: 'Home', stock: 8},
        {id:'5', name: '6-Pack Paper Towels', price: 18.99, category:'Home', stock: 20},
        {id:'6', name: 'LED Lamp', price: 20.00, category: 'Home', stock: 9},
        {id:'7', name: 'Office Chair', price: 129.99, category: 'Furniture', stock: 10},
        {id:'8', name: 'L-Shaped Wooden Desk', price: 199.99, category: 'Furniture', stock: 5},
        {id:'9', name: 'Terracotta Planter', price: 12.99, category: 'outdoors', stock: 7},
        {id:'10', name: 'Bonzai Tree', price: 16.99, category: 'outdoors', stock: 6}
    ];
    return Response.json(products);
}