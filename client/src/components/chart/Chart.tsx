import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = styled('div')(()=>({
  '&.chartBox ':{
    display: 'flex',
    height: '100%',
  
    // @include sm{
    //   flex-direction: 'column',
    // }
  },
    '.boxInfo ':{
      flex: 3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
  
      // @include sm{
      //   gap: 20px;
      // }
    },
      '.title ':{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
  
        // @include xxl{
        //   font-size: 14px;
        // }
  
      // h1{
      //   @include xxl{
      //     font-size: 20px;
      //   }
    },
  
    '.chartInfo ':{
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
      '.chart ':{
        width: '100%',
        height: '100%',
      },
  
      '.texts ':{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
      },
  
        '.percentage ':{
          fontWeight: 'bold',
          fontSize: '20px'
  
          // @include xxl{
          //   font-size: 16px;
          // }
        },
  
        '.duration':{
          fontSize: '14px'
        }
}))

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const Chart = (props: Props) => {
  return (
    <ChartBox className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </ChartBox>
  );
};

export default Chart;
