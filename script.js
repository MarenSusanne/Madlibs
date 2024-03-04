let told = '___' //verb
let world = '___' //substantiv
let sharpest = '___' //adjektiv
let shed = '___' //substantiv
let dumb = '___' //adjektiv
let thumb = '___' //substantiv
let shape = '___' //substantiv
let years = '___' //substantiv
let coming1 = '___' //verb
let coming2 = '___' //verb
let fed = '___' //verb
let live = '___' //verb
let brain = '___' //substantiv
let numb = '___' //adjektiv
let wrong = '___' //adjektiv
let streets = '___' //substantiv
let know = '___' //verb
let go = '___' //verb
let shine = '___' //verb
let glow = '___' //verb
//  9 verb, 7 substantiv, 4 adjektiv
let list
let clicked
let i = true

updateView()
function updateView(){

    document.getElementById("app").innerHTML = /*html*/`
            <div id="rules">
                1. Pick the word from the lists you want to use </br>
                2. Choose a blank space to fill in </br>
                <button id="hintButton" onclick="giveHint()">Hint</button>
            </div>
            <div id="text">
            Somebody once <span class="fillSpace" onclick="choose(this)">${told}</span> me the <span class="fillSpace" onclick="choose(this)">${world}</span> is gonna roll me, I ain't the <span class="fillSpace" onclick="choose(this)">${sharpest}</span> tool in the <span class="fillSpace" onclick="choose(this)">${shed}</span>. </br>
            She was looking kind of <span class="fillSpace" onclick="choose(this)">${dumb}</span> with her finger and her <span class="fillSpace" onclick="choose(this)">${thumb}</span> in the <span class="fillSpace" onclick="choose(this)">${shape}</span> of an "L" on her forehead. </br>
            Well, the <span class="fillSpace" onclick="choose(this)">${years}</span> start <span class="fillSpace" onclick="choose(this)">${coming1}</span>ing and they don't stop <span class="fillSpace" onclick="choose(this)">${coming2}</span>ing. </br>
            <span class="fillSpace" onclick="choose(this)" style="text-transform:capitalize">${fed}</span> to the rules and I hit the ground running. </br>
            Didn't make sense not to <span class="fillSpace" onclick="choose(this)">${live}</span> for fun. </br>
            Your <span class="fillSpace" onclick="choose(this)">${brain}</span> gets smart but your head gets <span class="fillSpace" onclick="choose(this)">${numb}</span>. </br>
            So much to do, so much to see, so what's <span class="fillSpace" onclick="choose(this)">${wrong}</span> with taking the back <span class="fillSpace" onclick="choose(this)">${streets}</span>? </br>
            You'll never <span class="fillSpace" onclick="choose(this)">${know}</span> if you don't <span class="fillSpace" onclick="choose(this)">${go}</span>. </br>
            You'll never <span class="fillSpace" onclick="choose(this)">${shine}</span> if you don't <span class="fillSpace" onclick="choose(this)">${glow}</span>. </br>
            </div>
            <div id="choices">
                <div id="verbs" class="buttons">
                <h2>Verbs</h2>
                <button onclick="chooseSpot(this)" draggable="true">study</button>
                <button onclick="chooseSpot(this)">hop</button>
                <button onclick="chooseSpot(this)">yodel</button>
                <button onclick="chooseSpot(this)">sow</button>
                <button onclick="chooseSpot(this)">clean</button>
                <button onclick="chooseSpot(this)">code</button>
                <button onclick="chooseSpot(this)">gather</button>
                <button onclick="chooseSpot(this)">pray</button>
                <button onclick="chooseSpot(this)">color</button>
                <button onclick="chooseSpot(this)">cry</button>
                </div>
                <div id="nouns" class="buttons">
                <h2>Nouns</h2>
                <button onclick="chooseSpot(this)">cat</button>
                <button onclick="chooseSpot(this)">trampoline</button>
                <button onclick="chooseSpot(this)">monster</button>
                <button onclick="chooseSpot(this)">princess</button>
                <button onclick="chooseSpot(this)">boat</button>
                <button onclick="chooseSpot(this)">santa</button>
                <button onclick="chooseSpot(this)">sock</button>
                <button onclick="chooseSpot(this)">sprinkle</button>
                <button onclick="chooseSpot(this)">bone</button>
                <button onclick="chooseSpot(this)">wand</button>
                </div>
                <div id="adjectives" class="buttons">
                <h2>Adjectives</h2>
                <button onclick="chooseSpot(this)">fluffy</button>
                <button onclick="chooseSpot(this)">excited</button>
                <button onclick="chooseSpot(this)">humble</button>
                <button onclick="chooseSpot(this)">jealous</button>
                <button onclick="chooseSpot(this)">silly</button>
                <button onclick="chooseSpot(this)">tired</button>
                <button onclick="chooseSpot(this)">strong</button>
                <button onclick="chooseSpot(this)">short</button>
                <button onclick="chooseSpot(this)">filthy</button>
                <button onclick="chooseSpot(this)">quirky</button>
                </div>
            </div>
    `
}
function chooseSpot(innerWord){
 clicked = innerWord.innerHTML
}
function choose(changeWord){
    changeWord.innerHTML = clicked
    
}
function giveHint(){
    if(i == true){
        told = 'verb';
        world = 'noun';
        sharpest = 'adjective';
        shed = 'noun';
        dumb = 'adjective';
        thumb = 'noun';
        shape = 'noun';
        years = 'noun';
        coming1 = 'verb';
        coming2 = 'verb';
        fed = 'verb';
        live = 'verb';
        brain = 'noun';
        numb = 'adjective';
        wrong = 'adjective';
        streets = 'noun';
        know = 'verb';
        go = 'verb';
        shine = 'verb';
        glow = 'verb';
        i = false
    }
    else if(i == false){
        told = '___';
        world = '___';
        sharpest = '___';
        shed = '___';
        dumb = '___';
        thumb = '___';
        shape = '___';
        years = '___';
        coming1 = '___';
        coming2 = '___';
        fed = '___';
        live = '___';
        brain = '___';
        numb = '___';
        wrong = '___';
        streets = '___';
        know = '___';
        go = '___';
        shine = '___';
        glow = '___';
        i = true
    }
    updateView()
}
