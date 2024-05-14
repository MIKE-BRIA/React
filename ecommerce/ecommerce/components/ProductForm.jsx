import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactSortable } from "react-sortablejs";
import Spinner from "./spinner";

const ProductForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: existingCategory,
}) => {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(existingCategory || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const [images, setImages] = useState(existingImages || []);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);

  const router = useRouter();

  useEffect(() => {
    axios.get("/api/category").then((result) => {
      setCategories(result.data);
    });
  }, []);

  //   console.log({ _id });
  //*adding data to the database
  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, description, price, images, category };
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

  //*uploading images
  async function uploadImages(e) {
    // console.log(e);
    const files = e.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }
      //sending image data to the server
      const res = await axios.post("/api/upload", data);

      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  //*function for sorting images
  function updateImagesOrder(images) {
    setImages(images);
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
      <label htmlFor="">Category</label>
      <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
        <option value="">Uncategorized</option>
        {categories.length > 0 &&
          categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
      </select>
      <label htmlFor="">Photos</label>
      <div className="mb-2  flex flex-wrap gap-1">
        <ReactSortable
          list={images}
          setList={updateImagesOrder}
          className="flex flex-wrap gap-1"
        >
          {images &&
            images.map((link) => (
              <div className="h-24" key={link}>
                <img src={link} alt="" className="rounded-lg " />
              </div>
            ))}
        </ReactSortable>
        {isUploading && (
          <div className="h-24 p-1 bg-gray-200 flex items-center">
            <Spinner />
          </div>
        )}
        <label className="w-32 h-32 cursor-pointer border flex flex-col items-center rounded-lg bg-gray-200 justify-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Upload</div>
          <input
            type="file"
            onChange={uploadImages}
            multiple
            className="hidden"
          />
        </label>
      </div>
      <div></div>
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
