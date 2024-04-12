const captureButton =  document.getElementById('captureScreen');

function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  }

  
function CanvasEdit(imageURL){
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.setAttribute('id', 'canvasImage');

    
    const imageObject  = new Image();
    imageObject.src = imageURL;

    let width =0;
    let height =0;



    imageObject.onload = ()=>{
        width = imageObject.width*0.8;
        height = imageObject.height*0.8;

        canvas.width = width;
        canvas.height= height;
        
        ctx.drawImage(imageObject, 0, 0, width, height);
    }

    let win = window.open();
    win.document.body.appendChild(canvas);
    
}

async function onCapture(imageURL){
    console.log(await imageURL);
}

function onError(err){
    console.log(err);
}

function currentTabScreenShot(){
    try{
        // let captureImg = 
        chrome.tabs.captureVisibleTab(null, {}, (image)=>{
            // download(image, 'anything');
            CanvasEdit(image);
        });

        // captureImg.then(onCapture, onError);


    }
    catch(err){
        console.log(err);
    }
}


captureButton.addEventListener("click", currentTabScreenShot() );



