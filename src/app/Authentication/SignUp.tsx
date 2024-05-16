'use client';
import React, { useCallback, useState } from 'react';
import { redirect } from 'next/navigation';
import { Formik, Field, Form } from 'formik';

interface SignUpValues {
	username: string;
	password: string;
}

const SignUp = (SignUp: SignUpValues) => {
	const [isSignedUp, setIsSignedUp] = useState<boolean>(false);

	const handleSignUp = useCallback(async () => {
		const fetchData = await fetch('');
		setIsSignedUp(true);
		redirect('/home');
	}, []);

	return (
		<section>
			<h1 className="">Sign Up</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: '',
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<label htmlFor="firstName">First Name</label>
					<Field id="firstName" name="firstName" placeholder="Jane" />

					<label htmlFor="lastName">Last Name</label>
					<Field id="lastName" name="lastName" placeholder="Doe" />

					<label htmlFor="email">Email</label>
					<Field id="email" name="email" placeholder="jane@acme.com" type="email" />

					<label htmlFor="password">Password</label>
					<Field id="password" name="password" placeholder="HereToG@in24" type="password" />

					<button onClick={handleSignUp} type="submit">
						Submit
					</button>
				</Form>
			</Formik>
		</section>
	);
};

export default SignUp;
