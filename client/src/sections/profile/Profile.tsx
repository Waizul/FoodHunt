import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";

import { ColorButton } from "@/styles";
import useAuth from "@/hooks/useAuth";

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

type Props = {};

const Profile = (props: Props) => {
  //@ts-ignore
  const { user } = useAuth();

  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const res = await axios.put(
      "https://foodhunt-s0ym.onrender.com/api/users/" + user._id,
      inputValue
    );
  };

  return (
    <ItemContainer className="item">
      <h1>Update Product:</h1>
      <form action="">
        <div className="input_div">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user?.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input_div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user?.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input_div">
          <label htmlFor="photoURL">Image</label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder={user.photoURL}
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

export default Profile;
