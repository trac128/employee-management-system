import Profile from './Profile';
import Feedback from './Feedback';

function EmployeeDashboard({ setRole }) {
  return (
    <div className="container">
      <div className="card">
        <h1>Employee Dashboard</h1>
        <button onClick={() => setRole(null)}>Logout</button>
      </div>

      <Profile role="employee" />

      <div className="card">
        <h2>Payslip</h2>
        <p><strong>Month:</strong> April 2025</p>
        <p><strong>Basic Salary:</strong> $3000</p>
        <p><strong>Deductions:</strong> $200</p>
        <p><strong>Net Pay:</strong> $2800</p>
        <button>Download Payslip</button>
      </div>

      <div className="card">
        <h2>Attendance</h2>
        <p><strong>Days Present:</strong> 20</p>
        <p><strong>Days Absent:</strong> 2</p>
        <p><strong>Leave Balance:</strong> 5</p>
      </div>

      <div className="card">
        <h2>Submit Feedback</h2>
        <Feedback />
      </div>
    </div>
  );
}
export default EmployeeDashboard;
