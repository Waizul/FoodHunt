import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";

import { useGetItemByIDQuery } from "@/store/slices/apiSlice";
import { ColorButton } from "@/styles";

const ItemContainer = styled("div")(() => ({
  ".item": {},
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  ".input_div": {
    display: "flex",
    flexDirection: "column",
  },
  label: {},
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.5rem",
  },
}));

const StyledButton = styled(ColorButton)(() => ({
  backgroundColor: "rgb(10,190,50)",
  ":hover": {
    color: "rgb(10,190,50)",
    backgroundColor: "white",
  },
}));

const Product = () => {
  const { id } = useParams();

  const { isLoading, data: item = {} } = useGetItemByIDQuery(id);
  const initialValue = {
    title: item.title,
    desc: item.desc,
    imgUrl: item.imgUrl,
    price: item.price,
    type: item.type,
  };
  const [inputValue, setInputValue] = useState({});
  useEffect(() => {
    setInputValue(initialValue);
  }, [isLoading]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(id);
    const res = await axios.put(
      "http://localhost:5000/api/items/" + id,
      inputValue
    );
    console.log(res);
  };

  return (
    <ItemContainer className="item">
      <h1>Update Product:</h1>
      <form action="">
        <div className="input_div">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={item.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="input_div">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder={item.desc}
            rows={5}
            onChange={handleInputChange}
          />
        </div>
        <div className="input_div">
          <label htmlFor="imgUrl">Image</label>
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            placeholder={item.imgUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="input_div">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder={item.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="input_div">
          <label htmlFor="type">Category</label>
          <input
            type="text"
            name="type"
            id="type"
            placeholder={item.type}
            onChange={handleInputChange}
          />
        </div>
        <StyledButton type="submit" onClick={handleUpdate}>
          Update
        </StyledButton>
      </form>
    </ItemContainer>
  );
};

export default Product;
