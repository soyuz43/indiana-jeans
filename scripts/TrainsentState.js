const transientState = {
  "ownsBlueJeans": false,
  "socioLocationId": 0
};

export const setOwnsBlueJeans = (chosenOwnership) => {
  if (typeof chosenOwnership !== 'boolean') {
      throw new Error('Invalid ownership value');
  }
  transientState.ownsBlueJeans = chosenOwnership;
};

export const setSocioLocationId = (chosenLocation) => {
  if (typeof chosenLocation !== 'number' || isNaN(chosenLocation)) {
      throw new Error('Invalid location value');
  }
  transientState.socioLocationId = chosenLocation;
};

export const getTransientState = () => {
  return { ...transientState };
};

// New function: Save the transient state to the API
export const saveSubmissionToAPI = async () => {
  const response = await fetch("http://localhost:8088/submissions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(getTransientState()) // Send current transient state
  });

  if (!response.ok) {
      throw new Error("Failed to save submission");
  }

  return response.json();
};
