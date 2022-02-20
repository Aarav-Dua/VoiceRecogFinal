function ohmaheardedearwadupbear(){

navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nT1IC8GRX/model.json", modelLoaded);

}

function modelLoaded(){
classifier.classify(gotResults);

}

function gotResults(){
    if (error){
        console.error(error);
            }
            else{
                console.log(results);
                document.getElementById("ResKaUlt").innerHTML = "I can Hear..." + results[0].label;
                document.getElementById("ResultKaAccuracy").innerHTML = "Accuracy " + (results[0].confidence*100).toFixed(2) + '%';
                RkaEkaD = Math.floor(Math.random()*255) + 1;
                GkaRkaEkaEkaN = Math.floor(Math.random()*255) + 1;
                BkaLkaUkaE = Math.floor(Math.random()*255) + 1;
        
                document.getElementById("ResKaUlt").style.color = "rgb("+RkaEkaD+", "+GkaRkaEkaEkaN+", "+BkaLkaUkaE+")";
                document.getElementById("ResultKaAccuracy").style.color = "rgb("+RkaEkaD+", "+GkaRkaEkaEkaN+", "+BkaLkaUkaE+")";
        
        
                img1 = document.getElementById("iCow");
                img2 = document.getElementById("iCat");
                img3 = document.getElementById("iDog");
                img4 = document.getElementById("iLion");
        
                if (results[0].label=="MOO"){
                    img1.src = "iCow";
            
                }
                else if (results[0].label=="MEOW"){
                    img2.src = "iCat";
             
                }
                else if (results[0].label=="BHAOW"){
                    img4.src = "iDog";
                       }
                       else if (results[0].label=="RoaWEEER"){ 
                        img4.src = "iLion";
                       
                           }
                           
            
        
            }
        
        }
        
        



