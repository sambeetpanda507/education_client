import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart(props) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    props.collegeData.map((value) => {
      return setStates((currentState) => [...currentState, value.state]);
    });
  }, [props.collegeData]);

  function sortedStates() {
    const sorted = states.sort();
    let newArr = [];
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== sorted[i + 1]) {
        newArr.push(sorted[i]);
      }
    }
    return newArr;
  }

  function numberOfColleges() {
    const sorted = states.sort();
    let newArr = [],
      prev;
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== prev) {
        newArr.push(1);
      } else {
        newArr[newArr.length - 1]++;
      }
      prev = sorted[i];
    }
    return newArr;
  }

  function uniqueColor() {
    const colleges = numberOfColleges();
    const colors = [];
    for (let i = 0; i < colleges.length; i++) {
      colors.push(randomColor());
    }
    return colors;
  }

  const data = {
    labels: sortedStates(),
    datasets: [
      {
        data: numberOfColleges(),
        backgroundColor: uniqueColor(),
      },
    ],
  };
  return (
    <div>
      <Doughnut
        height={400}
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default DoughnutChart;
