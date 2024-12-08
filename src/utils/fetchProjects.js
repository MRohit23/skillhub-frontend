// import axios from "axios";

// // Function to fetch projects from the backend API
// const fetchProjects = async () => {
//     try {
//         const response = await axios.get(
//             "http://localhost:8080/project/getAll",
//             { withCredentials: true }
//         );
//         return response.data; // Return the fetched data
//     } catch (error) {
//         console.error("Error fetching projects:", error.message);
//         throw error; // Propagate the error for handling
//     }
// };

// export default fetchProjects;

import axios from "axios";

const BASE_URL = "http://localhost:8080";

// Function to fetch projects from the backend API
const fetchProjects = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/project/getAll`, {
            withCredentials: true,
        });
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching projects:", error.message);
        throw error; // Propagate the error for handling
    }
};

// Function to create a new project by sending data to the backend API
const createProject = async (projectData) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/project`, // Endpoint for creating a project
            projectData,
            { withCredentials: true } // Include credentials (if necessary)
        );
        return response.data; // Return response data or success message
    } catch (error) {
        console.error("Error creating project:", error.message);
        throw error; // Propagate the error for handling
    }
};

const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export { fetchProjects, createProject, fetchUsers };
