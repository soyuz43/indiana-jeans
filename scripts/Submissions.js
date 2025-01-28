export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions");
    const submissions = await response.json();

    let submissionHTML = "<h2>Previous Submissions</h2>";

    if (submissions.length === 0) {
        submissionHTML += "<p>No submissions yet.</p>";
    } else {
        for (const submission of submissions) {
            submissionHTML += `
                <section class="submission">
                    <p><strong>Owns Blue Jeans:</strong> ${submission.ownsBlueJeans ? "Yes" : "No"}</p>
                    <p><strong>Location ID:</strong> ${submission.socioLocationId}</p>
                </section>
            `;
        }
    }

    return submissionHTML;
};
