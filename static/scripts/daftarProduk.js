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
  "Rp. 22.000",
  "Facial Wash",
  "Acnes Natural Care Oil Control Face Wash",
  "/static/images/product/acnes/1b2.png"
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
const produk7 = new ProdukItem(
  7,
  "Rp. 35.000",
  "Facial Wash",
  "Kahf Skin Energizing & Brightening Face Wash",
  "/static/images/product/Khaf/26c.png"
);

const produk8 = new ProdukItem(
  8,
  "Rp. 75.000",
  "Gel",
  "KLEVERU Sea Buckthorn Cleansing Gel",
  "/static/images/product/Kleveru/27a.png"
);
const produk9 = new ProdukItem(
  9,
  "Rp. 104.500",
  "Serum",
  "L'oreal Glycolic-Bright Glycolic Acid Serum",
  "/static/images/product/Loreal/28a.png"
);

const produk10 = new ProdukItem(
  10,
  "Rp. 54.000",
  "Whip",
  "L'Oreal Paris Aura Perfect Whip",
  "/static/images/product/Loreal/28b.png"
);

const produk11 = new ProdukItem(
  11,
  "Rp. 89.280",
  "Sheet Mask",
  "Loreal Revitalift Crystal Crystal Micro Essence Mask",
  "/static/images/product/Loreal/28c.png"
);

const produk12 = new ProdukItem(
  12,
  "Rp. 115.600",
  "Essence",
  "Loreal Revitalift Crystal Crystal Micro Essence",
  "/static/images/product/Loreal/28d.png"
);

const produk13 = new ProdukItem(
  13,
  "Rp. 89.280",
  "Sheet Mask",
  "Loreal Revitalift Hyaluronic Acid Plumping Fresh Mix Serum Mask",
  "/static/images/product/Loreal/28e.png"
);
const produk14 = new ProdukItem(
  14,
  "Rp. 75.000",
  "Day Cream",
  "MS Glow Whitening Day Cream",
  "/static/images/product/MsGlow/29i.png"
);

const produk15 = new ProdukItem(
  15,
  "Rp. 75.000",
  "Night Cream",
  "MS Glow Acne Night Cream",
  "/static/images/product/MsGlow/29j.png"
);

const produk16 = new ProdukItem(
  16,
  "Rp. 64.000",
  "Serum",
  "Ponds Age Miracle",
  "/static/images/product/Ponds/34e.png"
);

const produk17 = new ProdukItem(
  17,
  "Rp. 125.000",
  "Clay Mask",
  "Ms glow Green Tea Pore Clay Mask",
  "/static/images/product/MsGlow/29c.png"
);

const produk18 = new ProdukItem(
  18,
  "Rp. 102.500",
  "Moisturizer",
  "Safi Hydra Glow Hydrating Water Drop Moisturizer",
  "/static/images/product/Safi/36e.png"
);

const produk19 = new ProdukItem(
  19,
  "Rp. 60.000",
  "Facial Wash",
  "Ms Glow Facial Wash",
  "/static/images/product/MsGlow/29e.png"
);

const produk20 = new ProdukItem(
  20,
  "Rp. 150.000",
  "Serum",
  "MsGlow Acne Serum",
  "/static/images/product/MsGlow/29f.png"
);
const produk21 = new ProdukItem(
  21,
  "Rp. 92.000",
  "Sunscreen Spray",
  "MsGlow Ms Glow Men Sunscreen Spray",
  "/static/images/product/MsGlow/29h.png"
);

const produk22 = new ProdukItem(
  22,
  "Rp. 100.000",
  "Acne Spot Treatment",
  "MS Glow Acne Spot Treatment",
  "/static/images/product/MsGlow/29a.png"
);

const produk23 = new ProdukItem(
  23,
  "Rp. 26.200",
  "Face Wash",
  "Mustika Ratu Face Wash Anti Pollution Bamboo Charcoal",
  "/static/images/product/Mustika Ratu/30a.png"
);
const produk24 = new ProdukItem(
  24,
  "Rp. 100.000",
  "Creamy Light Moisturizer",
  "NPURE NPURE LICORICE CREAMY LIGHT MOISTURIZER",
  "/static/images/product/NPURE/33c.png"
);

const produk25 = new ProdukItem(
  25,
  "Rp. 62.000",
  "Acne Spot Treatment",
  "NPURE Ance Spot Treatment",
  "/static/images/product/NPURE/32a.png"
);

const produk26 = new ProdukItem(
  26,
  "Rp. 71.000",
  "Dark Spot Treatment",
  "NPURE Dark Spot Treatment",
  "/static/images/product/NPURE/32b.png"
);

const produk27 = new ProdukItem(
  27,
  "Rp. 33.700",
  "Facial Foam",
  "Nivea Sparkling Bright Facial Foam",
  "/static/images/product/Nivea/33c.png"
);

const produk28 = new ProdukItem(
  28,
  "Rp. 33.700",
  "Whip Facial Foam",
  "Nivea Hokkaido Rose Whip Facial Foam",
  "/static/images/product/Nivea/31b.png"
);

const produk29 = new ProdukItem(
  29,
  "Rp. 41.000",
  "Sun Lotion",
  "Nivea Daily Protection Sun Lotion",
  "/static/images/product/Nivea/31a.png"
);

const produk30 = new ProdukItem(
  30,
  "Rp. 16.000",
  "Teens Moisturizer",
  "PIGEON Teens Moisturizer",
  "/static/images/product/Pigeon/33a.png"
);
// Append produk HTML to the container
document.getElementById("daftarProdukContainer").innerHTML = `
      ${produk1.generateHtml()}
      ${produk2.generateHtml()}
      ${produk3.generateHtml()}
      ${produk4.generateHtml()}
      ${produk5.generateHtml()}
      ${produk6.generateHtml()}
      ${produk7.generateHtml()}
      ${produk8.generateHtml()}
      ${produk9.generateHtml()}
      ${produk10.generateHtml()}
      ${produk11.generateHtml()}
      ${produk12.generateHtml()}
      ${produk13.generateHtml()}
      ${produk14.generateHtml()}
      ${produk15.generateHtml()}
      ${produk16.generateHtml()}
      ${produk17.generateHtml()}
      ${produk18.generateHtml()}
      ${produk19.generateHtml()}
      ${produk20.generateHtml()}
      ${produk21.generateHtml()}
      ${produk22.generateHtml()}
      ${produk23.generateHtml()}
      ${produk24.generateHtml()}
      ${produk25.generateHtml()}
      ${produk26.generateHtml()}
      ${produk27.generateHtml()}
      ${produk28.generateHtml()}
      ${produk29.generateHtml()}
      ${produk30.generateHtml()}
    `;

// Produk detail
class ProductModal {
  constructor(id, merk, nama, deskripsi, imageUrl, harga, kategori) {
    this.id = id;
    this.merk = merk;
    this.nama = nama;
    this.deskripsi = deskripsi;
    this.imageUrl = imageUrl;
    this.harga = harga;
    this.kategori = kategori;
    this.modalId = `produkModal${id}`;
    this.modalElement = null;
  }

  generateModalHtml() {
    return `
            <div class="produk-modal modal fade" id="${this.modalId}" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="close-modal" data-bs-dismiss="modal">
                    <img src="/static/images/close-icon.svg" alt="Close modal" />
                  </div>
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <div class="modal-body">
                          <h2 class="text-uppercase">${this.merk}</h2>
                          <p class="item-intro text-muted">${this.nama}</p>
                          <img class="img-fluid d-block mx-auto" src="${this.imageUrl}" alt="...">
                          <p>${this.deskripsi}</p>
                          <ul class="list-inline">
                            <li><strong>Harga :</strong> Rp. ${this.harga}</li>
                            <li><strong>Kategori:</strong> ${this.kategori}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  }

  tampilkanModal() {
    $(`#${this.modalId}`).modal("show");
  }
}

// Buat instance dari ProductModal untuk setiap produk
const daftarproduk1 = new ProductModal(
  1,
  "MS Glow",
  "Ms Glow For MEN ENERGIZER Facial Wash",
  "MS GLOW FOR MEN ENERGIZER FACIAL WASH, pembersih wajah 3in1 yang diperkaya dengan Avena Strigosa Seed Extract, BeadsNiacinamide, dan Clay yang membantu mencerahkan, melembutkan, melembabkan dan membersihkan minyak secara optimal. Cocok digunakan untuk kulit normal atau kulit yang berjerawat dan kusam karena Ms Glow Man Energizer Facial Wash ini mempunyai manfaat sebagai Hydra Boost, Detoxifying dan Brightening serta mempunyai tekstur scrub yang dapat mengangkat sel kulit mati dan efek dingin di muka.",
  "/static/images/product/MsGlow/29d.png",
  "60.000",
  "Facial Wash"
);
const daftarproduk2 = new ProductModal(
  2,
  "NPURE",
  "NPURE LICORICE CREAMY LIGHT MOISTURIZER",
  "NPURE LICORICE CREAMY LIGHT MOISTURIZER merupakan Pelembap bertekstur krim yang lembut, mengandung 5+2 ULTIMATE ACTIVE yang membantu mencerahkan,menghidrasi, dan menjaga kelembapan alami kulit. Kulit akan terasa lebih lembut, halus, dan cerah bersinar.",
  "/static/images/product/Nivea/33c.png",
  "100.000",
  "Moisturizer"
);
const daftarproduk3 = new ProductModal(
  3,
  "MS Glow",
  "MS Glow Acne Night Cream",
  "MS Glow Acne Night Cream, krim malam yang diformulasikan khusus untuk membantu merawat kulit berjerawat, mengurangi peradangan pada jerawat, dan mengontrol minyak berlebih pada kulit wajah. Salah satu kandungan utama yang dapat membantu mengatasai masalah jerawat adalah Niacinamide dan Sulfur yang berfungsi sebagai anti-acne.",
  "/static/images/product/MsGlow/29j.png",
  "75.000",
  "Night Cream"
);
const daftarproduk4 = new ProductModal(
  4,
  "Kahf",
  "Kahf Oil and Acne Care Face Wash",
  "Kahf Triple Action Oil and Comedo Defense Face Wash, Sabun cuci muka khusus pria yang mengandung UltraAbsorb Charcoal dan HydroBalance yang menyerap minyak secara intensif dari kulit tanpa menghilangkan kelembapannya. Diformulasikan dengan AHA-BHA-PHA yang bantu angkat komedo secara efektif. Gunakan juga produk ini sebagai masker dan mild peeling solution untuk hasil yang optimal.",
  "/static/images/product/Khaf/26a.png",
  "35.000",
  "Facial Wash"
);
const daftarproduk5 = new ProductModal(
  5,
  "Ms Glow",
  "Ms glow Charcoal clay mask",
  "Ms glow Charcoal  clay mask, mengatasi masalah Kulit kusam dan pori2 besar, menjadikan kulit wajah lebih kenyal, cerah & terjaga. Charcoal Clay mask ini memliki sifat sebagai drying skin agent. Selain mampu untuk mengangkat kotoran dan debu, charcoal clay mask juga dapat menyerap minyak berlebih pada wajah.",
  "/static/images/product/MsGlow/29b.png",
  "125.000",
  "Mask"
);
const daftarproduk6 = new ProductModal(
  6,
  "Safi",
  "Safi Dermasafe Mild & Gentle Gel Cleanser",
  "Membersihkan kulit dari sebum & kotoran yang berlebihan secara optimal, membantu merawat dan menyejukkan kulit yang kemerahan & iritasi sehingga kulit terasa nyaman, mencerahkan kulit, menjaga keseimbangan kelembaban kulit, sebagai antioxidan yang dapat menangkal efek radikal bebas, membantu meratakan warna kulit, mengatasi masalah jerawat, membuat kulit tampak lebih sehat dan bercahaya.",
  "/static/images/product/Safi/36c.png",
  "65.000",
  "Gel Cleanser"
);
const daftarproduk7 = new ProductModal(
  7,
  "Kahf",
  "Kahf Skin Energizing & Brightening Face Wash",
  "Kahf Skin Energizing & Brightening Face Wash merupakan Sabun cuci muka khusus pria mengandung ekstrak Moroccan Mint dan Mediterranean Grapefruit yang membantu menyegarkan wajah hingga 6 jam dan membuat wajah tampak lebih cerah. Mampu membersihkan kulit hingga ke pori-pori tanpa membuat kulit kehilangan kelembapan alaminya",
  "/static/images/product/Khaf/26c.png",
  "35.000",
  "Facial Wash"
);

const daftarproduk8 = new ProductModal(
  8,
  "KLEVERU",
  "KLEVERU Sea Buckthorn Cleansing Gel",
  "Sea Buckthorn Cleansing Gel merupakan pembersih wajah yang bersahabat dengan skin barrier karena diformulasikan dengan pH (5.2-5.5) dengan kandungan superfruit Sea buckthorn yang mengandung Vitamin C alami dan antioksidan tinggi, mampu membersihkan kulit secara sempurna tanpa memberikan efek kering atau tertarik",
  "/static/images/product/Kleveru/27a.png",
  "75.000",
  "Gel Cleanser"
);
const daftarproduk9 = new ProductModal(
  9,
  "L'oreal",
  "L'oreal Glycolic-Bright Glycolic Acid Serum",
  "Glycolic-Bright Glycolic Acid Serum adalah serum wajah dengan kandungan 1% konsentrasi Brightening Glycolic Acid yang dapat membuat wajah terlihat glowing, mencerahkan wajah kusam, dan menyamarkan noda hitam.Formula glycolic acid-nya terbukti secara klinis mencerahkan kulit seketika dan menyamarkan 57% noda hitam.",
  "/static/images/product/Loreal/28a.png",
  "104.500",
  "Serum"
);

const daftarproduk10 = new ProductModal(
  10,
  "L'Oreal",
  "L'Oreal Paris Aura Perfect Whip",
  "L'Oreal Paris Aura Perfect Whip merupakan pembersih wajah untuk menyamarkan bintik hitam dan mencerahkan kulit untuk memberikan kesempurnaan yang kamu inginkan Kulit terhidrasi secara sempurna dan tampak lebih cerah. Secara bertahap, bintik hitam berkurang sehingga tekstur kulit wajah lebih merata. Kulit tampak lebih putih dan bening dengan kemilau sehat. Dengan krim lembut yang ringan, bebas minyak, dan cepat meresap, sehingga kulit terasa lebih halus, nyaman, dan tidak lengket.",
  "/static/images/product/Loreal/28b.png",
  "54.000",
  "Whip"
);

// Tambahkan HTML modal yang dihasilkan ke dalam body dokumen
document.body.innerHTML += daftarproduk1.generateModalHtml();
document.body.innerHTML += daftarproduk2.generateModalHtml();
document.body.innerHTML += daftarproduk3.generateModalHtml();
document.body.innerHTML += daftarproduk4.generateModalHtml();
document.body.innerHTML += daftarproduk5.generateModalHtml();
document.body.innerHTML += daftarproduk6.generateModalHtml();
document.body.innerHTML += daftarproduk7.generateModalHtml();
document.body.innerHTML += daftarproduk8.generateModalHtml();
document.body.innerHTML += daftarproduk9.generateModalHtml();
document.body.innerHTML += daftarproduk10.generateModalHtml();
