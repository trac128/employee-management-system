// src/components/Leave.jsx
function Leave() {
  const [leaveReason, setLeaveReason] = React.useState('');
  const [appliedLeaves, setAppliedLeaves] = React.useState([]);

  const handleApply = () => {
    if (leaveReason.trim() === '') return;
    setAppliedLeaves([...appliedLeaves, leaveReason]);
    setLeaveReason('');
  };

  return (
    <div className="card">
      <h2>Apply for Leave</h2>
      <textarea
        rows="3"
        value={leaveReason}
        onChange={(e) => setLeaveReason(e.target.value)}
        placeholder="Reason for leave"
      ></textarea>
      <button onClick={handleApply}>Submit Leave Request</button>

      <h3>Applied Leaves:</h3>
      <ul>
        {appliedLeaves.length > 0 ? appliedLeaves.map((l, i) => <li key={i}>{l}</li>) : <li>No leaves applied</li>}
      </ul>
    </div>
  );
}

export default Leave;
