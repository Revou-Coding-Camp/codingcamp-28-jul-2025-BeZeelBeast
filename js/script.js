const form = document.getElementById("message");
const outputBox = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  const tanggalLahir = document.getElementById("tanggal").value;

  const gender = form.querySelector('input[type="radio"]:checked');
  
  let jenisKelamin;
  if (gender) {
    jenisKelamin = gender.value;
  } else {
    jenisKelamin = "Tidak dipilih";
  }

  const now = new Date();

  const outputHTML = `
    <p><b>Waktu         :</b> ${now}</p>
    <p><b>Nama          :</b> ${nama}</p>
    <p><b>Tanggal Lahir :</b> ${tanggalLahir}</p>
    <p><b>Jenis Kelamin :</b> ${jenisKelamin}</p>
    <p><b>Pesan         :</b> ${pesan}</p>
  `;

  outputBox.innerHTML = outputHTML;
  greet();
});

function greet(){
    const nama = document.getElementById("nama").value;
    document.getElementById("greeting").textContent = `Hi ${nama}, Welcome to Website`;
}
