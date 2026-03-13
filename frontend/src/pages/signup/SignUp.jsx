import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(inputs);

        await signup(inputs)
        
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blue-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Signup <span className="text-blue-500">ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" className="label p-2">
                        <span className="text-base label-test">Full Name</span>
                    </label>
                    <input type="text" value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})} placeholder='Full Name' className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label htmlFor="" className="label p-2">
                        <span className="text-base label-test">Username</span>
                    </label>
                    <input type="text" value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})} placeholder='Enter username' className="w-full input input-bordered h-10" />
                </div>
                  <div>
                    <label htmlFor="" className="label p-2">
                        <span className="text-base label-test">Password</span>
                    </label>
                    <input type="password" value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})} placeholder='Enter Password' className="w-full input input-bordered h-10" />
                </div>
                  <div>
                    <label htmlFor="" className="label p-2">
                        <span className="text-base label-test">Confirm Password</span>
                    </label>
                    <input type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} placeholder='Confirm Password' className="w-full input input-bordered h-10" />
                </div>
                <GenderCheckbox onCheckboxChange  = {handleCheckboxChange} selectedGender={inputs.gender}/>
                <Link to={'/login'} className="text-sm hover:undeline hover:text-blue-600 mt-2 inline-block">
                    Already have a account?
                </Link>
                <div>
                    <button disabled={loading} className="btn btn-block btn-sm mt-2">
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up" }
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp