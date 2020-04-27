import React,{useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data:{confirmed,recovered, deaths}, country }) => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    }
    fetchData();
  },[]);
  
  const lineChart = (

    dailyData[0] && <Line
      data={{
        labels:dailyData.map(({reportDate}) => reportDate),
        datasets:[{
          data: dailyData.map(({ confirmed }) => confirmed.total),
          label:'Infected',
          borderColor: '#3333ff',
          fill:true
        },{
          data: dailyData.map(({ deaths }) => deaths.total),
          label:'Deaths',
          borderColor: 'red',
          backgroundColor:'red',
          fill:true
        }]
      }}
     />
  )
  const barChart = (
    dailyData[0] && <Bar
      data={{
        labels:['Infected','Recovered','Deaths'],
        datasets: [{
          label: "People",
          backgroundColor: [
            'blue','green','red'
          ],
          data:[confirmed.value, recovered.value, deaths.value]

        }]
      }}
      options={{
        legend: { display: false},
        title:  { display: true, text: `Current state in ${country}`}
      }}
    >

    </Bar>
  )

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart
