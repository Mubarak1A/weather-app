import fetchDataAndEditDom from "./modules/data_fetch_to_DOM";

const searchLocation = () => {
    const search = document.getElementById('search');
    const searchInput = document.getElementById('search-input');

    search.addEventListener("click", () => {
        let locationName = searchInput.value

        fetchDataAndEditDom(locationName);

        searchInput.value =""
    });

    searchInput.addEventListener("keypress", (e) => {
        if (e.keyCode === 13){
            let locationName = searchInput.value

            fetchDataAndEditDom(locationName);
        
            searchInput.value =""
        }
    });
}

export default searchLocation;