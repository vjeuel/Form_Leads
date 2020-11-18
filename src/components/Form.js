import React from 'react';
import './form.css';

function Form() {
	return (
		<div className='formBox'>
			<form>
				<input type='text' name='firstName' placeholder='First Name' required />
				<input type='text' name='lastName' placeholder='Last Name' required />
				<input
					type='tel'
					name='phone'
					placeholder='Phone Number'
					/* pattern='[0-9]{3}[0-9]{3}[0-9]{4}'*/ required
				/>
				<input type='text' name='address' placeholder='Address' />
				<input className='button' type='submit' value='SUBMIT' />
			</form>
		</div>
	);
}

export default Form;
