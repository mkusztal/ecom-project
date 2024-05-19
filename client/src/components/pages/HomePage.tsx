import React, { useEffect } from "react";
import { IClothes } from "../../interfaces/IClothes";
import { useDispatch, useSelector } from "react-redux";
import { fetchClothes, getClothes } from "../../redux/clothesReducer";

export const HomePage: React.FC = () => {
  const clothesData: IClothes[] = useSelector(getClothes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  console.log("Clothes: ", clothesData);

  return <div>HomePage</div>;
};
