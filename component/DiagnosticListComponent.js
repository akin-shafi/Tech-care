// AsideLeft.js
import React from "react";
import Image from "next/image";
const DiagnosticList = ({ selectedPatient }) => {
	return (
		<>
			<div className="row">
				<div className="col-lg-4">
					<div className="card p-2 cardBackground-1">
						<div>
							<Image
								width={80}
								height={80}
								alt="respiratory_rate"
								src="/images/respiratory_rate.svg"
							/>
						</div>
						{selectedPatient &&
						selectedPatient.diagnosis_history &&
						selectedPatient.diagnosis_history.length > 0 &&
						selectedPatient.diagnosis_history[0].respiratory_rate ? (
							<>
								<div>Respiratory Rate</div>
								<h4>
									{selectedPatient.diagnosis_history[0].respiratory_rate.value}{" "}
									bpm
								</h4>
								<small>
									{selectedPatient.diagnosis_history[0].respiratory_rate.levels}
								</small>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className="col-lg-4">
					<div className="card p-2 cardBackground-2">
						<div>
							<Image
								width={80}
								height={80}
								alt="temperature"
								src="/images/temperature.svg"
							/>
						</div>
						{/* <div>Temperature</div>
												<h4>98.6°F</h4>
												<small>Normal</small> */}
						{selectedPatient &&
						selectedPatient.diagnosis_history &&
						selectedPatient.diagnosis_history.length > 0 &&
						selectedPatient.diagnosis_history[0].temperature ? (
							<>
								<div>Temperature</div>
								<h4>
									{selectedPatient.diagnosis_history[0].temperature.value} °F
								</h4>
								<small>
									{selectedPatient.diagnosis_history[0].temperature.levels}
								</small>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className="col-lg-4">
					<div className="card p-2 cardBackground-3">
						<div>
							<Image
								width={80}
								height={80}
								alt="HeartBPM"
								src="/images/HeartBPM.svg"
							/>
						</div>
						{/* <div>Heart Rate</div>
												<h4>78 bpm</h4>
												<small>Lower than average</small> */}
						{selectedPatient &&
						selectedPatient.diagnosis_history &&
						selectedPatient.diagnosis_history.length > 0 &&
						selectedPatient.diagnosis_history[0].heart_rate ? (
							<>
								<div>Heart Rate</div>
								<h4>
									{selectedPatient.diagnosis_history[0].heart_rate.value} bpm
								</h4>
								<small>
									{selectedPatient.diagnosis_history[0].heart_rate.levels}
								</small>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default DiagnosticList;
