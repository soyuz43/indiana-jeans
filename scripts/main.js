import { OwnsJeansChoices } from "./OwnsJeans.js";
import { LocationTypeChoices } from "./UrbanDweller.js";
import { SaveSubmission } from "./SavesSubmission.js";
import { SubmissionList } from "./Submissions.js";

const container = document.querySelector("#container");

const render = async () => {
    const jeanOwnershipHTML = OwnsJeansChoices();
    const locationsHTML = await LocationTypeChoices();
    const saveButtonHTML = SaveSubmission();
    const submissionsHTML = await SubmissionList();

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${saveButtonHTML}
        ${submissionsHTML}
    `;
};

// Initial render
render();

// Re-render when submission is saved
document.addEventListener("stateChanged", () => render());
