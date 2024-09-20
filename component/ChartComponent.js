import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";

// Import the Line component dynamically and disable server-side rendering for it
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
	ssr: false,
});

const Chart = ({ data }) => {
	return (
		<div>
			{/* Use the dynamically imported Line component, passing the received data */}
			<Line
				data={data}
				options={{
					responsive: true,
					scales: {
						y: {
							beginAtZero: true,
						},
					},
					plugins: {
						legend: {
							position: "top",
						},
					},
				}}
			/>
		</div>
	);
};

export default Chart;
