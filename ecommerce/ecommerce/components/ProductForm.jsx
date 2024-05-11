import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ProductForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) => {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  //   console.log({ _id });

  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    if (_id) {
      //*update product data
      await axios.put("/api/products", { ...data, _id });
    } else {
      //*create new product

      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form action="" onSubmit={saveProduct}>
      <label htmlFor="">Product Name</label>
      <input
        type="text"
        placeholder="Product Name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label htmlFor="">Description</label>
      <textarea
        name=""
        id=""
        placeholder="Description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      ></textarea>
      <label htmlFor="">Price (in USD)</label>
      <input
        type="text "
        placeholder="Price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save Product
      </button>
    </form>
  );
};

export default ProductForm;
