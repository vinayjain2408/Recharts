import React ,{ PureComponent } from "react"
import { ComposedChart,LineChart , Line, ResponsiveContainer ,XAxis,YAxis,CartesianGrid, Legend, Tooltip, PieChart, Pie, Area,Bar,Scatter , RadialBarChart ,RadialBar} from "recharts"
import './App.css';

const pdata = [
  {
    name: 'Page A',
    maths: 400,
    Science: 260,
    amt: 240,
  },
  {
    name: 'Page B',
    maths: 300,
    Science: 239,
    amt: 221,
  },
  {
    name: 'Page C',
    maths: 100,
    Science: 380,
    amt: 229,
  },
  {
    name: 'Page D',
    maths: 478,
    Science: 190,
    amt: 200,
  },
  {
    name: 'Page E',
    maths: 289,
    Science: 480,
    amt: 218,
  },
  {
    name: 'Page F',
    maths: 189,
    Science: 380,
    amt: 250,
  },
  {
    name: 'Page G',
    maths: 349,
    Science: 430,
    amt: 210,
  },
];



const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];



const data03 = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];




const data04 = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];


const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


function App() {
  return (
    <div className="App">
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={pdata} width={500} height={300} margin={{top:10,right:80,left:30, bottom:20}}>
          <CartesianGrid strokeDasharray="3 ,3"/>
          <XAxis dataKey ="name" interval={"preserveStartEnd"}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Legend />
          <Line type="monotone" dataKey='maths'stroke="red" activeDot ={{r:10}}/>
          <Line type="monotone" dataKey='Science' stroke="blue" activeDot ={{r:10}}/>
        </LineChart>
      </ResponsiveContainer>



      
      <h1 className="chart-heading">Pie Chart</h1>
       <ResponsiveContainer width="100%" height={400} >
        <PieChart width={1000} height={600}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    


      <h1 className="chart-heading">Composed Chart</h1>
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={400}
          data={data03}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>



      <h1 className="chart-heading">RadialBar Chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data04}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    
    </div>
  );
}

export default App;