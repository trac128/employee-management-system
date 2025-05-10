function Login({ setRole }) {
  return (
    <div className="container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>Employee Management System</h1>
        <p>Please select your role to continue:</p>
        <button onClick={() => setRole('admin')}>Login as Admin</button>
        <button onClick={() => setRole('employee')}>Login as Employee</button>
      </div>
    </div>
  );
}
export default Login;
