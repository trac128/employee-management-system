import { useState } from 'react';

function EmployeeManager() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' }
  ]);

  const [form, setForm] = useState({ id: null, name: '', role: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newEmployee = { ...form, id: Date.now() };
    setEmployees([...employees, newEmployee]);
    setForm({ id: null, name: '', role: '' });
  };

  const handleEdit = (employee) => {
    setForm(employee);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updated = employees.map(emp => (emp.id === form.id ? form : emp));
    setEmployees(updated);
    setForm({ id: null, name: '', role: '' });
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    const filtered = employees.filter(emp => emp.id !== id);
    setEmployees(filtered);
  };

  return (
    <div className="card">
      <h2>Manage Employees</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />

      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.role}
            <button onClick={() => handleEdit(emp)}>Edit</button>
            <button onClick={() => handleDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeManager;