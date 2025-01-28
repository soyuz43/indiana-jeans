import { OwnsJeansChoices } from "./OwnsJeans.js";
import { LocationTypeChoices } from "./UrbanDweller.js";

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnsJeansChoices();
    const locationsHTML = await LocationTypeChoices();
    container.innerHTML = `${jeanOwnershipHTML} ${locationsHTML}`
}

render()