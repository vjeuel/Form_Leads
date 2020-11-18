import React from 'react';
import './form.css';

function Form() {
	return (
		<div className='formBox'>
			<form>
				<label>
					First Name:
					<input type='text' name='firstName' required />
				</label>
				<label>
					Last Name:
					<input type='text' name='lastName' required />
				</label>
				<label>
					Phone Number:
					<input type='tel' name='phone' /* pattern='[0-9]{3}[0-9]{3}[0-9]{4}'*/ required />
				</label>
				<label>
					Address:
					<input type='text' name='address' />
				</label>
				<input className='button' type='submit' value='SUBMIT' />
			</form>
		</div>
	);
}

export default Form;
