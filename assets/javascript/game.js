var defendFlag = 0;
var defendActiveFlag = false;
var characterObject = {
    name: ["Obi", "Luke", "Dsidious", "Dmaul"],
    ap: [Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 20 + 1)],
    cap: [10, 5, 20, 15],
    hp: [120, 100, 150, 140]
};
console.log(characterObject);
$(".btn").on("click", function () {
    // button clicked gets added to your char side 
    var enemyActive = ["obi", "sid", "maul", "luke"];


    if (defendFlag === 0) {
        var charActive = $(this).val();
        $("#" + charActive).appendTo("#selectChar");
        $("#" + charActive).css("background-color", "green");
        for (var i = 0; i < enemyActive.length; i++) {
            if (charActive != enemyActive[i]) {
                $("#" + enemyActive[i]).appendTo("#enemyDiv");
                $("#" + enemyActive[i]).css("background-color", "red");
            }

        }
        defendFlag = 1;
    }
    else {
        var charActive = $(this).val();
        if (defendActiveFlag === false) {
            defendActiveFlag = true;
            $("#" + charActive).appendTo("#defendChar");
        }
    }
});
// when attack button clicks 
$("#attack").on("click", () => {
    //gets selecChar div player's health points
    var hpPlayer = $("#selectChar .btn p:last").html();
    // console.log(hpPlayer);
   
    var dfPlayer = $("#defendChar .btn p:last").html();
    // console.log(dfPlayer);
    // hpPlayer = hpPlayer - 
    var playerName = $("#selectChar .btn p:first").html();
    var defendName = $("#defendChar .btn p:first").html();
    var apPlayer = 0;
    var capDfPlayer = 0;
    var baseApPlayer = 0;
    //if player is this get their ap and cap 
    for (var i = 0; i < characterObject.name.length; i++) {
        if (characterObject.name[i] === playerName) {
            apPlayer = characterObject.ap[i];
        }
        if(characterObject.name[i] === defendName){
            capDfPlayer = characterObject.cap[i];
        }
    }
    console.log(apPlayer,capDfPlayer);
    //player attacks, his health decreases
    hpPlayer = hpPlayer - capDfPlayer;
    //defender health
    dfPlayer = dfPlayer - apPlayer;
    // player ap = ap+
    baseApPlayer =+ apPlayer;
    // defender counter attack
    //player health decreases 
    //defender health decreases
   
   
     

});

    //HP-- defendes hp - player cap 
   
    // player's attack power increase by base attack power 

