import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Score de Ponce',
    }
  },
  scales: {
    y: {
        min: 0,
        max: 400
      }
   }
};

const PonceGraph = () => {
    const number = 24
    const pts_per_place = [15, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const [objective, setObjective] = useState(280)
    const [bestScore] = useState(303)
    const [current, setCurent] = useState([])
    const [bestPossible, setBestPossible] = useState(Array(number).fill(15 * number))
    const labels = Array(number).fill(0).map((value, index) => `Course ${index + 1}`)
    const [data, setData] = useState({
        labels,
        datasets: [
          {
            label: 'Best Score',
            data: Array(number).fill(bestScore),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Best Possible',
            data: Array(number).fill(15 * number),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Objective',
            data: Array(number).fill(objective),
            borderColor: 'rgb(50, 230, 30)',
            backgroundColor: 'rgba(50, 230, 30, 0.5)',
          },
          {
            label: 'Current Score',
            data: current,
            borderColor: 'rgb(255, 127, 0)',
            backgroundColor: 'rgba(255, 127, 0, 0.5)',
          }
        ],
    })

    const addScore = (score) => {
        let current_score = current
        let new_score = 0
        if(current_score.length == 0){
            new_score = score
        } else {
            new_score = current_score.at(-1) + score
        }
        current_score.push(new_score)
        setCurent([...current_score])
        setBestPossible(new_score + (((number) - (current_score.length) ) * 15))
    }

    const reset = () => {
        setCurent([])
        setBestPossible(Array(number).fill(15 * number))
    }

    const refreshGraph = () => {
        console.log('refresh')
        let refresh_data = {
            labels,
            datasets: [
              {
                label: 'Best Score',
                data: Array(number).fill(bestScore),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'Best Possible',
                data: Array(number).fill(bestPossible),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
              {
                label: 'Objective',
                data: Array(number).fill(objective),
                borderColor: 'rgb(50, 230, 30)',
                backgroundColor: 'rgba(50, 230, 30, 0.5)',
              },
              {
                label: 'Current Score',
                data: current,
                borderColor: 'rgb(255, 127, 0)',
                backgroundColor: 'rgba(255, 127, 0, 0.5)',
              }
            ],
          };
        setData(refresh_data)
    }

    useEffect(() => {
        refreshGraph()
     }, [objective, current, bestPossible]);
    
     useEffect(() => {
        refreshGraph()
     }, [current]);

    return (
        <div>
            <div>
                <span>Objective:</span>
                <br/>
                <input type="number" value={objective} onChange={val => {setObjective(val.target.value); refreshGraph()}}/>
            </div>
            
            <span>Score:</span>
            <br/>
            <button onClick={() => reset()}>Reset</button>
            {
                pts_per_place.map((pts, index) => {
                    return <button key={index} onClick={() => addScore(pts)}> {index+1} </button> 
                })
            }         
            <div className='graph'>
                <Line options={options} data={data}/>
            </div>
        </div>
    )
};

export default PonceGraph