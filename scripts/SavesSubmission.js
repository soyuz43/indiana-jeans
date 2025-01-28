import { saveSubmissionToAPI } from "./TrainsentState.js";

const handleSurveySubmissionClick = async (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        try {
            await saveSubmissionToAPI();
            alert("Survey submission saved!"); // Notify user
            document.dispatchEvent(new CustomEvent("stateChanged")); // Trigger re-render
        } catch (error) {
            console.error("Error saving submission:", error);
        }
    }
};

export const SaveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick);

    return `<button id='saveSubmission'>Save Submission</button>`;
};
