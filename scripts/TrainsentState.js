const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
  }
  
  export const setOwnsBlueJeans = (chosenOwnership) => {
    if (typeof chosenOwnership !== 'boolean') {
      throw new Error('Invalid ownership value')
    }
    transientState.ownsBlueJeans = chosenOwnership
  }
  
  export const setSocioLocation = (chosenLocation) => {
    if (typeof chosenLocation !== 'number' || isNaN(chosenLocation)) {
      throw new Error('Invalid location value')
    }
    transientState.socioLocationId = chosenLocation
  }
  
  export const getTransientState = () => {
    return { ...transientState }
  }
  