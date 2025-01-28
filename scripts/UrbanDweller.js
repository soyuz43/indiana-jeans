import { setSocioLocation } from "./TrainsentState.js"

const handleLocationChange = (changeEvent) => {
  if (changeEvent.target.name === "location") {
    const chosenLocation = parseInt(changeEvent.target.value)
    setSocioLocation(chosenLocation)
    console.log("Transient state updated:", transientState)
  }
}

export const LocationTypeChoices = async () => {
  const response = await fetch("http://localhost:8088/socioLocations")
  const locations = await response.json()

  let choiceHTML = "<h2>Where do you live?</h2>"
  for (const location of locations) {
    choiceHTML += `<input type='radio' name='location' value='${location.id}' onchange='handleLocationChange(event)' /> ${location.label}`
  }

  return choiceHTML
}