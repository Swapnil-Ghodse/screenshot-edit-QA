
const captureButton =  document.getElementById('captureScreen');

function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  }

function currentTabScreenShot(){
    try{
        chrome.tabs.captureVisibleTab(null, {}, (image)=>{
            download(image, 'anything');
        });
    }
    catch(err){
        console.log(err);
    }
}

function CanvasEdit(){
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
}

captureButton.addEventListener("click", currentTabScreenShot );



