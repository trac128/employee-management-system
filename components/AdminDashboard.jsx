import Profile from './Profile';
import Feedback from './Feedback';

function AdminDashboard({ setRole }) {
  return (
    <div className="container">
      <div className="card">
        <h1>Admin Dashboard</h1>
        <button onClick={() => setRole(null)}>Logout</button>
      </div>
      <Profile role="admin" />
      <div className="card">
        <h2>Employee Feedback</h2>
        <Feedback viewOnly />
      </div>
    </div>
  );
}
export default AdminDashboard;
