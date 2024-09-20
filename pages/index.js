import React, { useState } from "react";
import Logo from "@/component/Logo";
import { useRouter } from "next/router";

export default function Login() {
	const [email, setEmail] = useState("admin@email.com");
	const [password, setPassword] = useState("Test@123");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "admin@email.com" && password === "Test@123") {
			// alert("Login successful!");
			router.push("/dashboard"); // Redirect to dashboard
		} else {
			setError("Invalid email or password");
		}
	};

	return (
		<>
			<div className="container">
				<div className="wrapper d-flex align-items-center justify-content-center h-100">
					<div className="card login-form mt-5 pt-5">
						<div className="card-body">
							<div className="text-center mb-4">
								<Logo />
							</div>
							<h5 className="card-title text-center">Login Form</h5>
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label
										htmlFor="exampleInputEmail1"
										className="form-label">
										Email
									</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="exampleInputPassword1"
										className="form-label">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								{error && <div className="alert alert-danger">{error}</div>}
								<button
									type="submit"
									className="btn btn-brand w-100">
									Submit
								</button>
								{/* <div className="sign-up mt-4">
                                    Don't have an account? <a href="#">Create One</a>
                                </div> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
