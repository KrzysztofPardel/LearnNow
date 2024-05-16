'use client';
import React, { useCallback, useState } from 'react';
import { redirect } from 'next/navigation';
import { Formik, Field, Form } from 'formik';

interface SignInValues {
	username: string;
	password: string;
}

const SignIn = (SignIn: SignInValues) => {
	const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

	const handleSignIn = useCallback(async () => {
		const fetchData = await fetch('');
		setIsSignedIn(true);
		redirect('/home');
	}, []);

	return (
		<section>
			<h1 className="">Sign In</h1>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<label htmlFor="username">Username</label>
					<Field id="username" name="username" placeholder="Jane" />

					<label htmlFor="password">Password</label>
					<Field id="password" name="password" placeholder="HereToG@in24" type="password" />

					<button onClick={handleSignIn} type="submit">
						Submit
					</button>
				</Form>
			</Formik>
		</section>
	);
};

export default SignIn;
