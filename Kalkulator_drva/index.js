function BukvaKora() {
  var precnik = document.getElementById('BukvaPrecnik').value;
  var h = document.getElementById('BukvaVisina').value;
  var r = precnik / 200;
  var res = Math.pow(r, 2) * Math.PI * h;
  var result = res.toFixed(2);
  var post = (res * 7) / 100;
  var korisno = res - post;
  var kor = korisno.toFixed(2);
  document.getElementById('BukvaKoraRezultat').value = result;
  document.getElementById('BukvaKorisno').value = kor;
  document.getElementById('zbir-svih').value += result + '\n';
}

function Saberi() {
  var zbirno = 0;
  var tekst = document.getElementById('zbir-svih').value;

  var linije = tekst.split('\n');

  for (var i in linije) {
    zbirno += linije[i]++;

    var zb = parseFloat(zbirno);
    var rnd = zb.toFixed(2);
  }

  document.getElementById('ukupno-kubika').value = rnd;
}

function Cijena() {
  var UkupKubika = document.getElementById('ukupno-kubika').value;
  var BukCijena = document.getElementById('BukvaCijena').value;

  var res = UkupKubika * BukCijena;
  var CijenaBukve = res.toFixed(2);
  document.getElementById('BukvaVrijednost').value = CijenaBukve;
}

//Hrast izračun
function HrastKora() {
  var Hprecnik = document.getElementById('HrastPrecnik').value;
  var Hh = document.getElementById('HrastVisina').value;
  var Hr = Hprecnik / 200;
  var Hres = Math.pow(Hr, 2) * Math.PI * Hh;
  var Hresult = Hres.toFixed(2);
  var Hpost = (Hres * 14) / 100;
  var Hkorisno = Hres - Hpost;
  var Hkor = Hkorisno.toFixed(2);
  document.getElementById('HrastKoraRezultat').value = Hresult;
  document.getElementById('HrastKorisno').value = Hkor;
  document.getElementById('Hrast-zbir-svih').value += Hresult + '\n';
}
function HrastSaberi() {
  var Hzbirno = 0;
  var Htekst = document.getElementById('Hrast-zbir-svih').value;

  var Hlinije = Htekst.split('\n');

  for (var j in Hlinije) {
    Hzbirno += Hlinije[j]++;

    var Hzb = parseFloat(Hzbirno);
    var Hrnd = Hzb.toFixed(2);
  }

  document.getElementById('Hrast-ukupno-kubika').value = Hrnd;
}

function HCijena() {
  var HUkupKubika = document.getElementById('Hrast-ukupno-kubika').value;
  var HraCijena = document.getElementById('HrastCijena').value;

  var Hres = HUkupKubika * HraCijena;
  var CijenaHrasta = Hres.toFixed(2);
  document.getElementById('HrastVrijednost').value = CijenaHrasta;
}
