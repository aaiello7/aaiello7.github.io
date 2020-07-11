//Load image to fit input-square//
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      var img = document.querySelector('#inImg'); // Sets image
      img.src = URL.createObjectURL(this.files[0]); //Adds url to image
      console.log(img.src);
      img.onload = imageIsLoaded;
    }
  })
})

function imageIsLoaded() {

  document.querySelector('#pixelButton').addEventListener('click', function createPixels() {
    console.log("We'll create a pixel array")
    // Create canvas from input image //
    var canvas = document.getElementById('outputImg');
    var ctx = canvas.getContext('2d');
    var img = document.getElementById('inImg');
    canvas.width = canvas.height = img.width;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    console.log(img.width + ' ' + img.height);
    var pixelArray = [];
    var pixelDensity = [17, 17]; //Array dimensions X by Y
    var pixelWidth = img.width / pixelDensity[0];
    var pixelHeight = img.height / pixelDensity[1];

    for (x = 0; x < pixelDensity[0]; x++) {
      for (y = 0; y < pixelDensity[1]; y++) {
        var imgData = ctx.getImageData(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
        red = imgData.data[0];
        green = imgData.data[1];
        blue = imgData.data[2];
        alpha = imgData.data[3];
        var pixelColor = ("rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")");
        ctx.fillStyle = pixelColor;
        ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
        // var newPixel = [pixelColor, pixelCoordinates];
        // Create pixel array with
        // pixelArray.push(newPixel);
      };
    };
  })
}
