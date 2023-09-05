import React ,{ PureComponent } from "react"
import {LineChart , Line, ResponsiveContainer ,XAxis,YAxis,CartesianGrid, Legend, Tooltip, PieChart, Pie, Sector, Cell} from "recharts"
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


      {/* <h1 className="chart-heading">Bar Chart</h1>
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
      </ResponsiveContainer> */}




      <h1 className="chart-heading">Pie Chart</h1>
      {/* <ResponsiveContainer width="100%" aspect={4}>
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
      </ResponsiveContainer> */}
       <ResponsiveContainer width="100%" >
        {/* <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart> */}
        <PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
      </ResponsiveContainer>
    


      {/* <h1 className="chart-heading">Area Chart</h1>
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
      </ResponsiveContainer> */}
    
    </div>
  );
}

export default App;
