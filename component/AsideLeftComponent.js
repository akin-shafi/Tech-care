// AsideRight.js
import React from "react";
import Image from "next/image";

const AsideRight = ({ patients, selectedPatient, handleClick }) => {
	return (
		<div className="card border-0 shadow ">
			<div className="p-2 d-flex justify-content-between align-items-center">
				<h4>Patient</h4>
				<div>
					<Image
						src="/images/icons/search.svg"
						width={18}
						height={18}
						alt="search"
					/>
				</div>
			</div>
			<div className="border-bottom">
				{patients.map((patient, index) => (
					<div
						className={`profile-card d-flex justify-content-between patientList px-2 mb-2 ${
							selectedPatient && selectedPatient.name === patient.name
								? "selected"
								: ""
						}`}
						key={index + 1}
						onClick={() => handleClick(patient)}>
						<div className="d-flex justify-content-between">
							<div className="profile-avatar border me-2">
								<Image
									src={patient.profile_picture}
									alt="avatar"
									width={48}
									height={48}
								/>
							</div>
							<div>
								<div className="profile-body">{patient.name}</div>
								<div className="profile-header">
									{patient.gender} {patient.age}
								</div>
							</div>
						</div>
						<div>
							<Image
								src="/images/icons/more_horizontal.svg"
								alt="more_horizontal"
								width={18}
								height={18}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AsideRight;
