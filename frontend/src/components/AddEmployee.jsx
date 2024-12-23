import { useState } from 'react';
import API from '../services/api';

export default function AddEmployee() {
  const [form, setForm] = useState({ firstname: '', lastname: '',email:'',password:'',birthday:'',gender:'',conact:'',nid:'',address:'', department: '',degree:'',salary:'' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/employees', form);
    alert('Employee Added');
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input name="name" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
    //   <input name="role" placeholder="Role" onChange={(e) => setForm({ ...form, role: e.target.value })} />
    //   <button type="submit">Add Employee</button>
    // </form>
    <main class="flex-1 p-6">
    <div class="bg-white shadow-lg rounded-lg p-8">
        
        <h2 class="text-2xl font-semibold mb-6 text-black">Registration Info</h2>
        <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input class="input-field" type="text" placeholder="First Name" name="firstName" onChange={(e) => setForm({ ...form, firstname: e.target.value })} required/>
                <input class="input-field" type="text" placeholder="Last Name" name="lastName" onChange={(e) => setForm({ ...form, lastname: e.target.value })} required/>
            </div>

            <input class="input-field" type="email" placeholder="Email" name="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required/>

            <p class="mt-4">Birthday</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input class="input-field" type="date" name="birthday" onChange={(e) => setForm({ ...form, birthday: e.target.value })} required/>
                <select name="gender" class="input-field" onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                    <option disabled selected>GENDER</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <input class="input-field" type="number" placeholder="Contact Number" name="contact" onChange={(e) => setForm({ ...form, conact: e.target.value })} required />
            {/* <input class="input-field" type="number" placeholder="NID" name="nid" onChange={(e) => setForm({ ...form, nid: e.target.value })} required /> */}
            <input class="input-field" type="text" placeholder="Address" name="address" onChange={(e) => setForm({ ...form, address: e.target.value })} required />
            <input class="input-field" type="text" placeholder="Department" name="department" onChange={(e) => setForm({ ...form, department: e.target.value })} required/>
            <input class="input-field" type="text" placeholder="Degree" name="degree" onChange={(e) => setForm({ ...form, degree: e.target.value })} required/>
            <input class="input-field" type="number" placeholder="Salary" name="salary" onChange={(e) => setForm({ ...form, salary: e.target.value })}/>
            {/* <input class="input-field" type="file" name="file"/> */}

            <div class="mt-6">
                <button class="btn-submit" type="submit">Submit</button>
            </div>
        </form>
    </div>
</main>
  );
}
