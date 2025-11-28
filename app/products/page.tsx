'use client'

import React, { useEffect, useState } from 'react'

const PAGE_SIZE = 10;

const Products = () => {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchProducts = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=154');
        const json = await data.json();
        setProducts(json.products);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const handlePageChange = (n: number) => {
        setCurrentPage(n);
    }


  return (
    <>
        <h1 className='text-2xl text-center pt-5'>All Products</h1>

        <div className='products-container'>
            {products.slice(start, end).map((products:any)=>(
                <div key={products.id} className='product-card'>
                    <h2>{products.title}</h2>
                    <img src={products.thumbnail} alt={products.title} width={200} height={200} />
                    {/* <p>{products.description}</p> */}
                    <p className='font-semibold'>Price: ${products.price}</p> 
                    

                </div>
                
            ))}
        </div>
        <div className='pagination'>
            {[...Array(totalPages).keys()].map((n) => (
                <span
                key={n}
                onClick={() => handlePageChange(n)}
                className={`page-number ${n === currentPage ? 'active-page' : ''}`}
                >
                {n + 1}
                </span>
            ))}
        </div>

    </>

  )
}

export default Products;