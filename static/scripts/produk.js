class ProdukItem {
  constructor(id, price, name, category, imagePath) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.category = category;
    this.imagePath = imagePath;
  }

  generateHtml() {
    return `
        <div class="col-lg-4 col-sm-6 mb-4">
          <div class="produk-item">
            <a class="produk-link" data-bs-toggle="modal" href="#produkModal${this.id}">
              <div class="produk-hover">
                <div class="produk-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="${this.imagePath}" alt="...">
            </a>
            <div class="produk-caption">
            <div class="produk-caption-heading">${this.price}</div>
              <div class="produk-caption-subheading">${this.name}</div>
              <div class="produk-caption-subheading text-muted">${this.category}</div>
              
            </div>
          </div>
        </div>`;
  }
}

// ProdukItem instances
const produk1 = new ProdukItem(
  1,
  "Rp. 60.000",
  "Facial Wash",
  "Ms Glow For MEN ENERGIZER Facial Wash",
  "/static/images/product/MsGlow/29d.png"
);
const produk2 = new ProdukItem(
  2,
  "Rp. 100.000",
  "Light Cream",
  "NPURE NPURE LICORICE CREAMY LIGHT MOISTURIZER",
  "/static/images/product/Nivea/33c.png"
);
const produk3 = new ProdukItem(
  3,
  "Rp. 75.000",
  "Night Cream",
  "MS Glow Acne Night Cream",
  "/static/images/product/MsGlow/29j.png"
);
const produk4 = new ProdukItem(
  4,
  "Rp. 35.000",
  "Facial Wash",
  "Kahf Oil and Acne Care Face Wash",
  "/static/images/product/Khaf/26a.png"
);
const produk5 = new ProdukItem(
  5,
  "Rp. 125.000",
  "mask",
  "Ms glow Charcoal clay mask",
  "/static/images/product/MsGlow/29b.png"
);
const produk6 = new ProdukItem(
  6,
  "Rp. 65.000",
  "Gel",
  "Safi Dermasafe Mild & Gentle Gel Cleanser",
  "/static/images/product/Safi/36c.png"
);
// Append produk HTML to the container
document.getElementById("produkContainer").innerHTML = `
    ${produk1.generateHtml()}
    ${produk2.generateHtml()}
    ${produk3.generateHtml()}
    ${produk4.generateHtml()}
    ${produk5.generateHtml()}
    ${produk6.generateHtml()}
  `;