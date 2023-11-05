import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();
  return <div>category page {id}</div>;
};

export default CategoryPage;
