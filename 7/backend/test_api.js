const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';
let token = '';

async function testCRUD() {
    console.log('--- Starting API Tests ---');

    try {
        // 1. Register
        console.log('1. Registering user...');
        await axios.post(`${BASE_URL}/users/register`, {
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123',
            age: 25
        });
        console.log('✅ User registered');
    } catch (e) {
        console.log('ℹ️ User might already exist, skipping registration');
    }

    try {
        // 2. Login
        console.log('2. Logging in...');
        const loginRes = await axios.post(`${BASE_URL}/users/login`, {
            email: 'test@example.com',
            password: 'password123'
        });
        token = loginRes.data.token;
        console.log('✅ Logged in, token received');

        const headers = { Authorization: `Bearer ${token}` };

        // 3. Create Assignment
        console.log('3. Creating Assignment...');
        const createRes = await axios.post(`${BASE_URL}/assignments`, {
            title: 'Test Assignment',
            description: 'This is a test assignment',
            dueDate: '2026-12-31'
        }, { headers });
        const assignmentId = createRes.data._id;
        console.log('✅ Assignment created:', assignmentId);

        // 4. Read Assignments
        console.log('4. Reading Assignments...');
        const listRes = await axios.get(`${BASE_URL}/assignments`, { headers });
        console.log('✅ Assignments found:', listRes.data.length);

        // 5. Update Assignment
        console.log('5. Updating Assignment...');
        await axios.put(`${BASE_URL}/assignments/${assignmentId}`, {
            status: 'Completed'
        }, { headers });
        console.log('✅ Assignment updated');

        // 6. Delete Assignment
        console.log('6. Deleting Assignment...');
        await axios.delete(`${BASE_URL}/assignments/${assignmentId}`, { headers });
        console.log('✅ Assignment deleted');

        console.log('--- All Tests Passed! ---');

    } catch (error) {
        console.error('❌ Test failed:', error.response ? error.response.data : error.message);
    }
}

// Note: Ensure server is running before running this test
// testCRUD();

console.log('Test script created. To run: npm install axios && node test_api.js');
