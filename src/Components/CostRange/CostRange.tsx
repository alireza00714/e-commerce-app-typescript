import React, { PropsWithChildren, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { IProduct } from "../../types";

interface ICostRange {
  rtl: boolean;
  min: number;
  max: number;
  step: number;
  products: IProduct[];
  setFilteredProducts: Function;
  filteredProducts: IProduct[];
  sortType: string;
  brandsFilter: string[];
  availability: string;
}

const CostRange: React.FC<ICostRange> = ({
  rtl,
  min,
  max,
  step,
  products,
  filteredProducts,
  setFilteredProducts,
  brandsFilter,
  sortType,
  availability,
}) => {
  const [values, setValues] = useState<number[]>([min, max]);

  useEffect(() => {
    setValues([
      Math.min(...products.map((product) => product.price)),
      Math.max(...products.map((product) => product.price)),
    ]);
  }, [products]);

  useEffect(() => {
    setFilteredProducts([
      ...products
        .filter((product) =>
          availability === "available" ? product.quantity > 0 : product
        )
        .filter((product) =>
          brandsFilter.length > 0
            ? brandsFilter.includes(product.brand)
            : product
        )
        .filter(
          (product) => product.price >= values[0] && product.price <= values[1]
        )
        .sort((a, b) => {
          if (sortType === "asc") return a.price - b.price;
          else if (sortType === "desc") return b.price - a.price;
          return 1;
        }),
    ]);
  }, [
    products,
    values,
    brandsFilter,
    sortType,
    availability,
    setFilteredProducts,
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        rtl={rtl}
        onChange={(values: SetStateAction<number[]>) => setValues(values)}
        renderTrack={({ props, children }: PropsWithChildren<any>) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "3px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#9c203f", "#ccc"],
                  min: min,
                  max: max,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props }: PropsWithChildren<any>) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "2rem",
              width: "2rem",
              border: "#9C203F 2px solid",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              outline: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                top: "-35px",
                color: "#fff",
                fontFamily: "Vazir-FD",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#9C203F",
                gap: "0.25rem",
              }}
            >
              <span className="text-xs">تومان</span>
              <div className="text-xs">{values[index]}</div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CostRange;
