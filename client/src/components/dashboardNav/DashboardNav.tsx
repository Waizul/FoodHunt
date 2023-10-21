import useAuth from "@/hooks/useAuth";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Nav = styled("div")(() => ({
  width: "100%",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "2px solid #384256"
}));
const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  gap: "10px",
  p: {
    margin: "0px",
    padding: "4px",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.grey[500]}`,
    color: theme.palette.primary[500],
  },
}));
const Icons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  img: {
    width: "26px",
    height: "26px",
    cursor: "pointer",
  },
}));
const Notifications = styled("div")(() => ({
  position: "relative",
  span: {
    backgroundColor: "red",
    color: "white",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    position: "absolute",
    top: "-10px",
    right: "-10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },
}));
const User = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  img: {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

const DashboardNav = () => {
  //@ts-ignore
  const { user} = useAuth();

  return (
    <Nav>
      <Link to="/">
        <Logo>
          {/* <img src="" alt="logo" /> */}
          <p>FH</p>
          <span>FoodHunt</span>
        </Logo>
      </Link>
      <Icons>
        <img src="/icons/search.svg" alt="search" />
        <Notifications>
          <img src="/icons/notifications.svg" alt="" />
          <span>1</span>
        </Notifications>
        <User>
          <img
            src={user.photoURL || "/icons/noavatar.svg"}
            alt="user's avatar"
          />
          <span>{(user.username)?.slice(0, 20)}</span>
        </User>
        <img src="/icons/settings.svg" alt="" />
      </Icons>
    </Nav>
  );
};

export default DashboardNav;
