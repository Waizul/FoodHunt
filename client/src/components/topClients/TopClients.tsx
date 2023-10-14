import { topDealUsers } from "@/dashboardData";
import { styled } from "@mui/material/styles";

const TopBox = styled("div")(({ theme }) => ({
  h1: {
    marginBottom: "20px",
  },
  ".listItem": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  ".user": {
    display: "flex",
    gap: "20px",

    img: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",

      // @include xxl{
      //   display: none;
      // }
      // @include lg{
      //   display: block;
      // }
    },
  },
  ".userTexts": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  ".username": {
    fontSize: "14px",
    fontWeight: 500,
  },
  ".email": {
    fontSize: "12px",

    // @include xxl{
    //   display: none;
    // }
    // @include lg{
    //   display: block;
    // }
  },

  ".amount": {
    fontWeight: 500,
  },
}));
const TopClients = () => {
  return (
    <TopBox className="topBox">
      <h1>Top Clients</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </TopBox>
  );
};

export default TopClients;
