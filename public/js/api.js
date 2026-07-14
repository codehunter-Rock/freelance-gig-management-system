const BASE_URL = "http://localhost:5000/api";

export const API = {

    // ==========================
    // Register User
    // ==========================
    register: async (userData) => {

        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        return await response.json();
    },

    // ==========================
    // Login User
    // ==========================
    login: async (userData) => {

        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        return await response.json();
    },

    // ==========================
    // Get All Gigs
    // ==========================
    getAllGigs: async () => {

        const response = await fetch(`${BASE_URL}/gigs`);

        return await response.json();
    },

    // ==========================
    // Get Single Gig
    // ==========================
    getGigById: async (id) => {

        const response = await fetch(`${BASE_URL}/gigs/${id}`);

        return await response.json();
    },

    // ==========================
    // Create Gig
    // ==========================
    createGig: async (gigData) => {

        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/gigs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(gigData)
        });

        return await response.json();
    },

    // ==========================
    // Update Gig
    // ==========================
    updateGig: async (id, gigData) => {

        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/gigs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(gigData)
        });

        return await response.json();
    },

    // ==========================
    // Delete Gig
    // ==========================
    deleteGig: async (id) => {

        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/gigs/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return await response.json();
    }

};