import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Menu = styled("div")(({ theme }) => ({}));
const Item = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "20px",
  span: {
    display: theme.breakpoints.up("tablet") ? "inline" : "none",
    fontSize: "12px",
    fontWeight: 200,
    color: theme.palette.grey[500],
    textTransform: "uppercase",
  },
}));
const Linked = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  padding: "10px",
  borderRadius: "5px",
  span: {
    display: theme.breakpoints.up("tablet") ? "inline" : "none",
  },
  "&.hover": {
    backgroundColor: theme.palette.grey[500],
  },
}));

type Props = {
  menu: MenusType[];
};

const Sidebar = ({ menu }: Props) => {
  console.log(menu);
  return (
    <Menu>
      {menu.map((menu) => (
        <Item key={menu.id}>
          <span>{menu.title}</span>
          {menu.listItems.map((listItem) => (
            <Linked to={listItem.url} key={listItem.id}>
              <div>
                <img
                  src={listItem.icon}
                  alt={listItem.title}
                  width={20}
                  height={20}
                />
              </div>
              <span>{listItem.title}</span>
            </Linked>
          ))}
        </Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
