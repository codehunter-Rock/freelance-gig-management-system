import { API } from "./api.js";

const gigContainer = document.getElementById("gigContainer");

const loadGigs = async () => {
    try {
        const result = await API.getAllGigs();

        gigContainer.innerHTML = "";

        if (!result.success || result.data.length === 0) {
            gigContainer.innerHTML = `
                <div class="col-12 text-center">
                    <h4>No Gigs Available</h4>
                </div>
            `;
            return;
        }

        result.data.forEach((gig) => {

            gigContainer.innerHTML += `

            <div class="col-md-4 mb-4">

                <div class="card h-100">

                    <div class="card-body">

                        <h4 class="card-title">${gig.title}</h4>

                        <p>${gig.description}</p>

                        <p><strong>Budget:</strong> ₹${gig.budget}</p>

                        <p><strong>Deadline:</strong> ${new Date(gig.deadline).toLocaleDateString()}</p>

                        <p><strong>Duration:</strong> ${gig.duration}</p>

                        <p><strong>Created By:</strong> ${gig.createdBy}</p>

                        <p>

                            <span class="badge bg-success">

                                ${gig.status}

                            </span>

                        </p>

                        <p>

                            <strong>Skills:</strong><br>

                            ${gig.skills.join(", ")}

                        </p>

                        <div class="d-flex gap-2 mt-3">

                            <a
                                href="editGig.html?id=${gig._id}"
                                class="btn btn-warning w-50"
                            >
                                Edit
                            </a>

                            <button
                                class="btn btn-danger w-50 deleteBtn"
                                data-id="${gig._id}"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            `;
        });

        document.querySelectorAll(".deleteBtn").forEach((button) => {

            button.addEventListener("click", async () => {

                const confirmDelete = confirm("Are you sure you want to delete this Gig?");

                if (!confirmDelete) return;

                const response = await API.deleteGig(button.dataset.id);

                if (response.success) {

                    alert("Gig Deleted Successfully");

                    loadGigs();

                } else {

                    alert(response.message);

                }

            });

        });

    } catch (error) {

        console.error(error);

        gigContainer.innerHTML = `
            <div class="col-12 text-center text-danger">
                <h4>Failed to Load Gigs</h4>
            </div>
        `;
    }
};

loadGigs();