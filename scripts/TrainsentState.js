// Define the transient state as a Map
const transientState = new Map([
  ["ownsBlueJeans", false],
  ["socioLocationId", 0]
]);

// Update the setOwnsBlueJeans function to use the Map
export const setOwnsBlueJeans = (chosenOwnership) => {
  if (typeof chosenOwnership !== 'boolean') {
      throw new Error('Invalid ownership value');
  }
  transientState.set("ownsBlueJeans", chosenOwnership);
};

// Update the setSocioLocationId function to use the Map
export const setSocioLocationId = (chosenLocation) => {
  if (typeof chosenLocation !== 'number' || isNaN(chosenLocation)) {
      throw new Error('Invalid location value');
  }
  transientState.set("socioLocationId", chosenLocation);
};

// Update the getTransientState function to return an object representation of the Map
export const getTransientState = () => {
  const state = {};
  for (const [key, value] of transientState) {
    state[key] = value;
  }
  return state;
};

// The saveSubmissionToAPI function remains the same
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