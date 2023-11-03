import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import OAuth from '../components/OAuth';

const Signup = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.sucess === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
      
    }
    
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange} />
        <button  disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >{loading ? "loading.." : "Sign up"}</button>
        <OAuth></OAuth> 
      </form>
      <div className='flex gap-2 mt-5'>
        <p>
          Already have an account? 
        </p>
        <Link to={"/sign-in"}><span className='text-blue-600'>Sign in</span></Link>
      </div>
      {error && <p className='text-red-500 text-center mt-5'>{error}</p>}
    </div>
  )
}

export default Signup
