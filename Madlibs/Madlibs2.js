  
function madLib() {

//get the inputs by id
    const nounInputOne = document.getElementById('noun-1');
    const pluralNounInputOne = document.getElementById('plural-noun-1');
    const properNounInputOne = document.getElementById('proper-noun-1');
    const adjectiveInputOne = document.getElementById('adjective-1');
    const pluralNounInputTwo = document.getElementById('plural-noun-2');
    const nounInputTwo = document.getElementById('noun-2');
    const nounInputThree = document.getElementById('noun-3');

//get values of inputs
    const nounOne = nounInputOne.value;
    const pluralNounOne = pluralNounInputOne.value;
    const properNounOne = properNounInputOne.value;
    const adjectiveOne = adjectiveInputOne.value;
    const pluralNounTwo = pluralNounInputTwo.value;
    const nounTwo = nounInputTwo.value;
    const nounThree = nounInputThree.value;
    
    //make the madlib
    var makeMadlib = Yesterday my son and I went to the ' + nounOne + ' because we needed ' + pluralNounOne + '. When we lived in California one of my favorite activites was to walk on ' + properNounOne beach and picked up some really pretty + sea sea shells. The fishing bait store was out of ' pluralNounTwo + ', soe we bought ' + nount as a replacement. It's almost springtime so lets go ' + nounThree + '!'; 
    
    //display madlib
    var displayMadLib = document.getElementById('displayMadLib'); displayMadLib.textContent = makeMadlib;