(() => {
    const img = document.createElement('img');
    img.src = './test.png';

    const worker = new Tesseract.TesseractWorker();
    worker
    .recognize(img)
    .then(function(result){
        console.log(result.text);
  });
})()