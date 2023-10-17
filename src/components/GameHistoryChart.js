import React from "react";
import { Chart } from "react-google-charts";
import GameHistoryManager from "../managers/GameHistoryManager";

const GameHistoryChart = () => {
    function getChartData(){
        let history = GameHistoryManager.getGamesHistory();
        let data = Object.entries(history);
        return data;
    }

    return (
      <Chart chartType="BarChart" data={[['',''],...getChartData()]} options={{legend: 'none', title:'Guess distribution'}}  width="100%" height="400px"/>
    );
  }
  export default GameHistoryChart;