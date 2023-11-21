export class PriceControl {
    constructor(
        controlDiv: HTMLDivElement,
        setPriceRange: (minPrice: number, maxPrice: number) => void,
        initialMinPrice: number,
        initialMaxPrice: number
    ) {
        const controlUI = document.createElement("div");
        controlUI.style.backgroundColor = "#f8f8f8";
        controlUI.style.border = "1px solid #ddd";
        controlUI.style.borderRadius = "5px";
        controlUI.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
        controlUI.style.padding = "10px";
        controlUI.style.display = "flex";
        controlUI.style.flexDirection = "column";
        controlUI.innerHTML = "Enter the price range";
        controlUI.style.marginTop = "60px";
        controlDiv.appendChild(controlUI);

        const inputContainer = document.createElement("div");
        inputContainer.style.display = "flex";
        inputContainer.style.marginBottom = "10px";
        controlUI.appendChild(inputContainer);

        const minInput = this.createInput("Min Price", initialMinPrice);
        const maxInput = this.createInput("Max Price", initialMaxPrice);

        inputContainer.appendChild(minInput);
        inputContainer.appendChild(maxInput);

        const applyButton = document.createElement("button");
        applyButton.innerText = "Apply";
        applyButton.style.width = "105px";
        applyButton.style.fontSize = "12px";
        applyButton.style.border = "none";
        applyButton.style.cursor = "pointer";
        applyButton.style.backgroundColor = "#007bff"; // Blue color, you can change it
        applyButton.style.color = "#fff";
        applyButton.style.padding = "8px";
        applyButton.style.borderRadius = "3px";

        controlUI.appendChild(applyButton);

        applyButton.addEventListener("click", () => {
            const minPrice = Number(minInput.value);
            const maxPrice = Number(maxInput.value);
            setPriceRange(minPrice, maxPrice);
        });
    }

    private createInput(placeholder: string, initialValue: number): HTMLInputElement {
        const inputElement = document.createElement("input");
        inputElement.type = "number";
        inputElement.placeholder = placeholder;
        inputElement.style.width = "50px";
        inputElement.style.height = "30px";
        inputElement.style.fontSize = "12px";
        inputElement.style.border = "1px solid #ddd";
        inputElement.style.borderRadius = "3px";
        inputElement.style.padding = "5px";
        inputElement.style.marginRight = "5px";
        inputElement.style.marginTop = "5px";
        inputElement.style.appearance = "none"; // Add this line
        inputElement.value = initialValue.toString();
    
        // Add these lines to remove the inner spin button in Webkit browsers
        const innerSpinButton = document.createElement("style");
        innerSpinButton.innerHTML = `
        input[type="number"]::-webkit-inner-spin-button { 
            display: none;
        }`;
        document.head.appendChild(innerSpinButton);
    
        return inputElement;
    }
}
