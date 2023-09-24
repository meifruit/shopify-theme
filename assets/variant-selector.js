// This script will update the metafield data displayed on the product page depending on the size selected.

const sizeDetailElement = document.getElementById("size-detail");

const sizeRadioButtons = document.querySelectorAll('input[name="サイズ"]');

sizeRadioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    const selectedSize = document.querySelector(
      'input[name="サイズ"]:checked'
    ).value;

    const selectedVariants = productData.variants.filter(
      (variant) => variant.サイズ === selectedSize
    );
    const compositionDetails = selectedVariants
      .map((variant) => variant.size_detail)
      .join(", ");
    sizeDetailElement.textContent = `Size detail: ${compositionDetails}`;
  });
});

// サイズ;
