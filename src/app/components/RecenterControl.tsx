export class RecenterControl {
  constructor(
    controlDiv: HTMLDivElement,
    map: google.maps.Map,
    userLocation: google.maps.LatLngLiteral
  ) {
    // Create the control button
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "#fff";
    controlUI.style.marginRight = "0px";
    controlUI.style.margin = "10px";
    controlUI.style.marginTop = "20px";
    controlUI.style.border = "1px solid #ccc";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.textAlign = "center";
    controlUI.title = "Click to recenter the map";
    controlDiv.appendChild(controlUI);

    // Set the button's text and click event
    const controlText = document.createElement("div");
    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
    controlText.style.fontSize = "12px";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = "Recenter";
    controlUI.appendChild(controlText);

    // Add a click event to recenter the map on the user's location
    controlUI.addEventListener("click", () => {
      map.setCenter(userLocation);
    });
  }
}
