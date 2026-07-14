import { API } from "./api.js";

const form = document.getElementById("editGigForm");

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const loadGig = async () => {

    const result = await API.getGigById(id);

    const gig = result.data;

    document.getElementById("title").value = gig.title;
    document.getElementById("description").value = gig.description;
    document.getElementById("budget").value = gig.budget;
    document.getElementById("deadline").value = gig.deadline.substring(0,10);
    document.getElementById("skills").value = gig.skills.join(",");
    document.getElementById("duration").value = gig.duration;
    document.getElementById("status").value = gig.status;
    document.getElementById("createdBy").value = gig.createdBy;

};

loadGig();

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

    const result = await API.updateGig(id, gig);

    if(result.success){

        alert("Gig Updated Successfully");

        window.location.href = "index.html";

    }else{

        alert(result.message);

    }

});