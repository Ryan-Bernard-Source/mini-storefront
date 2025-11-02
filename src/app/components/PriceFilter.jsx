'use client';

export default function PriceFilter({value,onChange}) {
    return(
        <div>
            <p>Max Price: </p>
            <input type="number" value={value} onChange={(e) => onChange(e.target.value)}>
            </input>
        </div>
    );
}