
(function () {
    let waterDrops = document.getElementsByClassName("info_box_waterdrop");

    for(let i = 0 ; i < waterDrops.length; ++i) {
        let water = waterDrops[i];

        // water.nextSibling is the empty text node located between
        // <div class="info_box_waterdrop"> and
        // <div class="info_box_popup">
        let popUpNode = water.nextSibling.nextSibling;

        water.addEventListener("click", function() {

            // toggle popUpNode display
            if(popUpNode.style.display === "none" || !popUpNode.style.display) {
                popUpNode.style.display = "block";
            } else {
                popUpNode.style.display = "none";
            }
        });
    }
}) ();