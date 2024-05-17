import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

const EditProductPage = () => {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const productId = router.query.editProduct;

  useEffect(() => {
    if (!productId) return;
    axios.get("/api/products?id=" + productId).then((response) => {
      setProductInfo(response.data);
      console.log(response.data);
    });
  }, [productId]);

  return (
    <Layout>
      <h1>Edit Product</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
};

export default EditProductPage;
