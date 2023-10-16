import { styled } from "@mui/material/styles";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Container = styled("div")(() => ({
  "&.single": {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  ".view": {
    flex: 1,
  },

  ".topInfo": {
    display: "flex",
    alignItems: "center",
    gap: "20px",

    img: {
      width: "100px",
      height: "100px",
      borderRadius: "20px",
      objectFit: "cover",
    },

    h1: {
      fontWeight: 500,
    },
  },
  ".details": {
    fontSize: "18px",
  },
  ".item": {
    margin: "30px 0px",
  },
  ".itemTitle": {
    fontWeight: 600,
    marginRight: "10px",
    textTransform: "capitalize",
  },

  hr: {
    width: "90%",
    height: 0,
    border: "0.5px solid gray",
    margin: "20px 0px",
  },
  ".chart": {
    marginTop: "50px",
    width: "80%",
    height: "400px",
  },

  ".activities": {
    flex: 1,

    h2: {
      marginBottom: "20px",
    },

    ul: {
      li: {
        listStyleType: "none",
        position: "relative",
        width: "1px",
        paddingTop: "50px",
        backgroundColor: "#f45b69",

        '&::after': {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#f45b69",
          transform: "translateX(-50%)",
        },
        div: {
          minWidth: "480px",
          padding: "15px",
          backgroundColor: "#f45b6810",

          p: {
            marginBottom: "5px",
          },

          time: {
            fontSize: "12px",
          },
        },
      },
    },
  },
}));

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <Container className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default Single;
