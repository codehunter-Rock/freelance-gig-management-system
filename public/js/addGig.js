import { API } from "./api.js";

const form = document.getElementById("gigForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const gig = {

        title: document.getElementById("title").value,

        description: document.getElementById("description").value,

        budget: Number(document.getElementById("budget").value),

        deadline: document.getElementById("deadline").value,

        skills: document
            .getElementById("skills")
            .value
            .split(",")
            .map(skill => skill.trim()),

        duration: document.getElementById("duration").value,

        status: document.getElementById("status").value,

        createdBy: document.getElementById("createdBy").value

    };

    const result = await API.createGig(gig);

    if(result.success){

        alert("Gig Created Successfully");

        window.location.href="index.html";

    }else{

        alert(result.message);

    }

});import { API } from "./api.js";

const form = document.getElementById("gigForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const gig = {

        title: document.getElementById("title").value,

        description: document.getElementById("description").value,

        budget: Number(document.getElementById("budget").value),

        deadline: document.getElementById("deadline").value,

        skills: document
            .getElementById("skills")
            .value
            .split(",")
            .map(skill => skill.trim()),

        duration: document.getElementById("duration").value,

        status: document.getElementById("status").value,

        createdBy: document.getElementById("createdBy").value

    };

    const result = await API.createGig(gig);

    if(result.success){

        alert("Gig Created Successfully");

        window.location.href="index.html";

    }else{

        alert(result.message);

    }

});