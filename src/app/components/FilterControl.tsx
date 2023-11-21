export class FilterControl {
    constructor(
      controlDiv: HTMLDivElement,
      map: google.maps.Map,
      setRadius: (radius: number) => void,
      postsInKm: number
    ) {
        const controlUI = document.createElement("div");
        controlUI.style.backgroundColor = "#fff";
        controlUI.style.border = "1px solid #ccc";
        controlUI.style.borderRadius = "3px";
        controlUI.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
        controlUI.style.cursor = "pointer";
        controlUI.style.textAlign = "center";
        controlUI.style.margin = "10px";
        controlUI.style.marginTop = "20px";
        controlUI.style.width = "100px"; // adjust as needed
        controlUI.style.height = "40px"; // adjust as needed
        controlUI.title = "Click to set the circle radius";
        controlDiv.appendChild(controlUI);
        
        const controlSelect = document.createElement("select");
        controlSelect.style.width = "100%";
        controlSelect.style.height = "100%";
        controlSelect.style.fontSize = "12px"; // adjust as needed
        controlSelect.style.border = "none";
        
        ["1", "2", "5", "10"].forEach((radius) => {
          const option = document.createElement("option");
          option.value = radius;
          option.text = radius + " km";
          controlSelect.appendChild(option);
        });
        controlUI.appendChild(controlSelect);

        controlSelect.value = postsInKm.toString();
      controlSelect.addEventListener("change", () => {
        setRadius(Number(controlSelect.value));
      });
    }
  }