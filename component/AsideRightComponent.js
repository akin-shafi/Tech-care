// AsideLeft.js
import React from "react";
import Image from "next/image";
const AsideLeft = ({ selectedPatient }) => {
	return (
		<>
			<div className="card shadow border-0">
				<div className="card-body">
					{selectedPatient ? (
						<>
							<div className="d-flex justify-content-center">
								<a
									href="#"
									className="avatar avatar-xl rounded-circle">
									<Image
										width={150}
										height={150}
										alt={selectedPatient.name}
										src={selectedPatient.profile_picture}
									/>
								</a>
							</div>
							<div className="text-center my-6">
								<div className="h5 my-3">{selectedPatient.name}</div>
							</div>
							<div className="row">
								<div className="profile-card px-1 mb-2">
									<div className="profile-avatar border me-2">
										<Image
											width={26}
											height={26}
											src={"/images/icons/BirthIcon.svg"}
											alt="BirthIcon"
										/>
									</div>
									<div>
										<div className="profile-header">Date of Birth</div>
										<div className="profile-body">
											{selectedPatient.date_of_birth}
										</div>
									</div>
								</div>
							</div>

							{/* Gender */}
							<div className="row">
								<div className="profile-card px-1 mb-2">
									<div className="profile-avatar border me-2">
										<Image
											width={26}
											height={26}
											src={"/images/icons/FemaleIcon.svg"}
											alt="FemaleIcon"
										/>
									</div>
									<div>
										<div className="profile-header">Gender</div>
										<div className="profile-body">{selectedPatient.gender}</div>
									</div>
								</div>
							</div>

							{/* Contact 1 */}
							<div className="row">
								<div className="profile-card px-1 mb-2">
									<div className="profile-avatar border me-2">
										<Image
											width={26}
											height={26}
											src={"/images/icons/PhoneIcon.svg"}
											alt="PhoneIcon"
										/>
									</div>
									<div>
										<div className="profile-header">Contact Info</div>
										<div className="profile-body">
											{selectedPatient.phone_number}
										</div>
									</div>
								</div>
							</div>
							{/* contact 2 */}
							<div className="row">
								<div className="profile-card px-1 mb-2">
									<div className="profile-avatar border me-2">
										<Image
											width={26}
											height={26}
											src={"/images/icons/PhoneIcon.svg"}
											alt="PhoneIcon"
										/>
									</div>
									<div>
										<div className="profile-header">Emergency Contact</div>
										<div className="profile-body">
											{selectedPatient.emergency_contact}
										</div>
									</div>
								</div>
							</div>
							{/* {selectedPatient} */}
							{/* Insurance */}
							<div className="row">
								<div className="profile-card px-1 mb-2">
									<div className="profile-avatar border me-2">
										<Image
											width={26}
											height={26}
											src={"/images/icons/InsuranceIcon.svg"}
											alt="InsuranceIcon"
										/>
									</div>
									<div>
										<div className="profile-header">Insurance Provider</div>
										<div className="profile-body">
											{selectedPatient.insurance_type}
										</div>
									</div>
								</div>

								<div className="d-flex justify-content-center">
									<button className="btn btn-brand w-75">Show All</button>
								</div>
							</div>
						</>
					) : (
						<p>Select a patient to see the details</p>
					)}
				</div>
			</div>

			<div className="card shadow mt-2 border-0">
				<div className="card-body ">
					<ul className="list-group"></ul>

					<h5>Lab Results</h5>
					{selectedPatient.lab_results &&
					selectedPatient.lab_results.length > 0 ? (
						<div className="">
							<ul className="list-group listHeight scrollBar">
								{selectedPatient.lab_results.map((result, index) => (
									<li
										key={index}
										className="list-group-item d-flex justify-content-between align-items-center">
										{result}
										<Image
											width={18}
											height={18}
											src="/images/icons/download.svg"
											alt="download"
										/>
									</li>
								))}
							</ul>
						</div>
					) : (
						<p>No diagnostics available</p>
					)}
				</div>
			</div>
		</>
	);
};

export default AsideLeft;
