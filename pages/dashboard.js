import React, { useState } from "react";
import AsideLeft from "@/component/AsideLeftComponent";
import AsideRight from "@/component/AsideRightComponent";
import DiagnosticList from "@/component/DiagnosticListComponent";
import DiagnosticCard from "@/component/DiagnosticCardComponent";
import Navbar from "@/component/Navbar";

export default function Home({ patients }) {
	// JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
	const [selectedPatient, setSelectedPatient] = useState(patients[3] || null);
	const handleClick = (patient) => {
		setSelectedPatient(patient);
	};

	return (
		<>
			<div className="container-fluid body">
				<Navbar />
				{/* AsideRight */}
				<div className="container-fluid">
					<div className="row mt-3">
						<div className="col-12 col-md-3 mb-3 asideRight scrollBar">
							<AsideLeft
								patients={patients}
								selectedPatient={selectedPatient}
								handleClick={handleClick}
							/>
						</div>
						<div className="col-12 col-md-6 mb-3">
							<div className="card border-0  shadow">
								<div className="card-body">
									<h5>Diagnosis History</h5>

									<DiagnosticCard selectedPatient={selectedPatient} />
									<DiagnosticList selectedPatient={selectedPatient} />
								</div>
							</div>

							<div className="card border-0 mt-3 card shadow">
								<div className="card-body">
									<h5>Diagnostic List</h5>
									{selectedPatient.diagnostic_list &&
									selectedPatient.diagnostic_list.length > 0 ? (
										<div className="table-responsive tableHeight scrollBar">
											<table className="table">
												<thead className="table-secondary">
													<tr>
														<th>#</th>
														<th>Name</th>
														<th>Description</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													{selectedPatient.diagnostic_list.map(
														(diagnostic, index) => (
															<tr key={index}>
																<td>{index + 1}</td>
																<td>{diagnostic.name}</td>
																<td>{diagnostic.description}</td>
																<td>{diagnostic.status}</td>
															</tr>
														)
													)}
												</tbody>
											</table>
										</div>
									) : (
										<p>No diagnostics available</p>
									)}
								</div>
							</div>
						</div>
						<div className="col-12 col-md-3 mb-3">
							<AsideRight selectedPatient={selectedPatient} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const api = process.env.API_URL;
	const username = process.env.API_USERNAME;
	const password = process.env.API_PASSWORD;

	const auth = btoa(`${username}:${password}`);

	const response = await fetch(api, {
		headers: {
			Authorization: `Basic ${auth}`,
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();
	// console.log(data.diagnostic_list);
	// console.log(data);
	return {
		props: {
			patients: data,
		},
	};
}
