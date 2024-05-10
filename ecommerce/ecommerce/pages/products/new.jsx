import Layout from "@/components/Layout";
import React, { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct(e) {
    e.preventDefault();
    const data = { title: title, description: description, price: price };
    await axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form action="" onSubmit={createProduct}>
        <h1>Add New Product</h1>
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
    </Layout>
  );
};

export default NewProduct;
