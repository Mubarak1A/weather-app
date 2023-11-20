import fetchDataAndEditDom from "./modules/data_fetch_to_DOM";

const pageLoad = () => {
    let locationName = "Nigeria";

    fetchDataAndEditDom(locationName);
}

export default pageLoad;