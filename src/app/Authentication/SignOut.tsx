'use client';
import React, { useCallback, useState } from 'react';

const SignOut = () => {
	const [isSignedOut, setIsSignedOut] = useState<boolean>(false);

	const handleSignOut = useCallback(() => {
		setIsSignedOut(true);
	}, []);

	return (
		<section>
			{isSignedOut === false ? (
				<div className="">
					<h1 className="">Are you sure you want to leave us?</h1>
					<button onClick={handleSignOut} className="">
						Yes
					</button>
					<button className="">No</button>
				</div>
			) : (
				<div className="">
					<h1 className="">Until the next one!</h1>
				</div>
			)}
		</section>
	);
};

export default SignOut;
