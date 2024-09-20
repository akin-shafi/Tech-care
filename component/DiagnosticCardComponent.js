// AsideLeft.js
import React from "react";
import Chart from "@/component/ChartComponent";

const DiagnosticCard = ({ selectedPatient }) => {
	function abbreviateMonth(fullMonthName) {
		const months = {
			January: "Jan",
			February: "Feb",
			March: "Mar",
			April: "Apr",
			May: "May",
			June: "Jun",
			July: "Jul",
			August: "Aug",
			September: "Sep",
			October: "Oct",
			November: "Nov",
			December: "Dec",
		};
		return months[fullMonthName] || fullMonthName;
	}

	const chartData = {
		labels: selectedPatient?.diagnosis_history
			.slice(0, 6)
			.map((item) => `${abbreviateMonth(item.month)},${item.year}`),
		datasets: [
			{
				label: "Systolic",
				data: selectedPatient?.diagnosis_history
					.slice(0, 6)
					.map((item) => item.blood_pressure.systolic.value),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Diastolic",
				data: selectedPatient?.diagnosis_history
					.slice(0, 6)
					.map((item) => item.blood_pressure.diastolic.value),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return (
		<>
			<div className="mb-4 border bg-purple p-2">
				<div className="row">
					<div className="col-9">
						<div className="d-flex justify-content-between">
							<h6>Blood Pressure</h6>
							<div>Last 6 month</div>
						</div>
						<Chart data={chartData} />
					</div>
					<div className="col-3">
						{selectedPatient.diagnosis_history ? (
							<div>
								<div className="border-bottom">
									<h5>Systolic</h5>
									<div className="h3">
										{
											selectedPatient.diagnosis_history[0].blood_pressure
												.systolic.value
										}
									</div>
									<small>
										{
											selectedPatient.diagnosis_history[0].blood_pressure
												.systolic.levels
										}
									</small>
								</div>
								<div>
									<h5>Diastolic</h5>
									<div className="h3">
										{
											selectedPatient.diagnosis_history[0].blood_pressure
												.diastolic.value
										}
									</div>
									<small>
										{
											selectedPatient.diagnosis_history[0].blood_pressure
												.diastolic.levels
										}
									</small>
								</div>
							</div>
						) : (
							<p>Diagnosis history not available for the third entry.</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default DiagnosticCard;
