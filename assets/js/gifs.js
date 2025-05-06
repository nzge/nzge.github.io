// gifs
document.addEventListener('DOMContentLoaded', () => {

  const gifFolder = "/assets/media/!misc/gifs/";
  const gifFiles = [
    "bigbangblastermaster.gif",
    "burningredblackbeamshot.gif",
    "burningunicorn.gif",
    "godbuster.gif",
    "gundammasterflame.gif",
    "gundammaxtermegablasterblue.gif",
    "masterflammablewing.gif",
    "roseflamerulesaber.gif",
    "roseflamesabermode.gif",
    "shiningbluelightwaves.gif",
    "shiningtwilight.gif",
    "zetagundamforwardwalk.gif"
  ];

  const randomGif = gifFiles[Math.floor(Math.random() * gifFiles.length)];
  const gifPath = gifFolder + randomGif;

  document.getElementById("gif-left").src = gifPath;
  document.getElementById("gif-right").src = gifPath;
});