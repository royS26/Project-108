function response() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3TMGANzV3/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log('got results');
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    }

    else {

        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
        document.getElementById("result_accuracy").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";

        img1 = document.getElementById('dog');
        img2 = document.getElementById('cat');
        img3 = document.getElementById('lion');
        img4 = document.getElementById('cow');

        if(results[0].label == "Dog") {
            img1.src = 'dog.gif';
            img2.src = 'cat.png';
            img3.src = 'lion.png';
            img4.src = 'cow.png';
        }

        else if(results[0].label == "Cat") {
            img1.src = 'dog.png';
            img2.src = 'cat.gif';
            img3.src = 'lion.png';
            img4.src = 'cow.png';
        }

        else if(results[0].label == "Lion") {
            img1.src = 'dog.png';
            img2.src = 'cat.png';
            img3.src = 'lion.gif';
            img4.src = 'cow.png';
        }

        else{
            img1.src = 'dog.png';
            img2.src = 'cat.png';
            img3.src = 'lion.png';
            img4.src = 'cow.gif';
        }

    }
}

