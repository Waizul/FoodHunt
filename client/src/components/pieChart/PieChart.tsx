import { styled } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = styled("div")(() => ({
  "&.pieChartBox": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  ".chart": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  ".options": {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    fontSize: "14px",
  },

  ".option": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  ".title": {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  ".dot": {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
}));

const PieChartData = () => {
  return (
    <PieChartBox className="pieChartBox">
      <h1>Lead Products</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </PieChartBox>
  );
};

export default PieChartData;
