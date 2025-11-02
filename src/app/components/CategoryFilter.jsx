'use client';
import React from 'react';

export default function CategoryFilter(props){
    return(
        <div>
            <h3>Category: </h3>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="all">All</option>
                <option value="Electronics">Electronics</option> 
                <option value="Furniture">Furniture</option>
                <option value="Home">Home</option>   
            </select>
        </div>
    );
}