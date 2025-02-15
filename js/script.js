// File JS

// Muatan awal untuk menampung jumlah input
var calc_display = "";

function buttonclick(e) {
  // Kondisi ketika "AC" ditekan
  if (e == "AC") {
    calc_display = "";
  } else {
    // Jika tombol nomor ditekan (selain operator aritmatika), maka nomor2 tersebut akan digabung menjadi 1 string
    calc_display += e;
    console.log(calc_display);
  }

  document.getElementById("display").value = calc_display;
}
