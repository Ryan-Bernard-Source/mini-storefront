'use client';
export default function PriceFilter({value,onChange}) {
    return(
        <div>
            <label>Max Price:
                <input type="number" value={props.value} onChange={function (e) {
                props.onChange(e.target.value);}}
        />
      </label>
    </div>
);
}