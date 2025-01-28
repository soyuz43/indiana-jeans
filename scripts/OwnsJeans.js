import { setOwnsBlueJeans } from "./TrainsentState.js"

const HandleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans"){
        const convertedToBool = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBool)
    }
}

export const OwnsJeansChoices = () => {
    let surveyHTML = "<h3>Do you own some Jeans? </h3>"
    
    surveyHTML += "<input type='radio' name='ownsJeans' value='true'/> Yes"
    surveyHTML += "<input type='radio' name='ownsJeans' value='false'/> No"
    return surveyHTML
}