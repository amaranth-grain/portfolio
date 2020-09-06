import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { avgGradesOptions, busaOptions, commOptions, 
	essentialsOptions, mathOptions, javaOptions, webOptions } from "../data/charts";

class Coop extends Component {
	render() {
		return (
			<div>
        <HighchartsReact highcharts={Highcharts} options={avgGradesOptions} />
        <HighchartsReact highcharts={Highcharts} options={commOptions} />
        <HighchartsReact highcharts={Highcharts} options={essentialsOptions} />
        <HighchartsReact highcharts={Highcharts} options={javaOptions} />
        <HighchartsReact highcharts={Highcharts} options={mathOptions} />
        <HighchartsReact highcharts={Highcharts} options={busaOptions} />
        <HighchartsReact highcharts={Highcharts} options={webOptions} />
      </div>
		);
	}
}

export default Coop;

