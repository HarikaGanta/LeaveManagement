import './Login.css'

function Login() {

    
    return <>
        <div className="login-container">
            <p className='login-header'>Login</p>
            <form action="">
                <div className='login-form'>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter email' required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter password' required/>
                    </div>
                    <select name="roles" id="roles">
                        <option value="select" disabled selected>Select</option>
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                        <option value="hr">Hr</option>
                    </select>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </>


}
export default Login;