<!--API Integration – Product Listing: 
 
Install Axios (if not already installed) using npm install axios. 
 
Create a component to fetch and display product data. Let’s call it ProductList. 
 
Jsx -->
 
Import React, { useEffect, useState } from ‘react’; 
Import axios from ‘axios’; 
 
Const ProductList = () => { 
  Const [products, setProducts] = useState([]); 
 
  useEffect(() => {     axios.get(‘https://fakestoreapi.com/products’) 
      .then(response => setProducts(response.data)) 
      .catch(error => console.error(error)); 
  }, []); 
 
  Return ( 
    <div> 
      <h2>Product List</h2> 
      <ul> 
        {products.map(product => ( 
          <li key={product.id}>{product.title}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
