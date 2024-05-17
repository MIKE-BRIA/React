import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const deleteProduct = () => {
  const [productInfo, setProductInfo] = useState();
  const router = useRouter();
  const productId = router.query.deleteProduct;
  //   console.log(productId);

  useEffect(() => {
    if (!productId) return;

    axios.get("/api/products?id=" + productId).then((response) => {
      setProductInfo(response.data);
    });
  }, [productId]);

  function goBack() {
    router.push("/products");
  }

  async function deleteProduct() {
    await axios.delete("/api/products?id=" + productId);
    goBack();
  }
  return (
    <Layout>
      <h1 className="font-bold text-center">
        Do you really want to delete "{productInfo?.title}"?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button onClick={goBack} className="btn-default">
          No
        </button>
      </div>
    </Layout>
  );
};

export default deleteProduct;
