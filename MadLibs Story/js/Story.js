console.log("js is on");

function pageWrite() {
    console.log("button clicked");
    // get ansers
    var Character = document.getElementById("Character").value;
    console.log(Character);
    var sound = document.getElementById("sound").value;
    console.log(sound);
    var mom = document.getElementById("mom").value;
    console.log(mom);
    var breakfast = document.getElementById("breakfast").value;
    console.log(breakfast);
    var transportation = document.getElementById("transportation").value;
    console.log(transportation);
    var friend = document.getElementById("friend").value;
    console.log(friend);
    var subject = document.getElementById("subject").value;
    console.log(subject);
    var unfortunate = document.getElementById("unfortunate").value;
    console.log(unfortunate);
    var inconvenience = document.getElementById("inconvenience").value;
    console.log(inconvenience);
    var desert = document.getElementById("desert").value;
    console.log(desert);

    // get radio button
    var gen;
    if (document.querySelector('input[name="gender"]:checked') != null) {
        gen = document.querySelector('input[name="gender"]:checked').value;
    } else {
        //setting the var they
        gen = "they";
    }
    console.log(gen);
    var p1;
    var p2;
    var pic;
    if (gen == "he") {
        p1 = "he";
        p2 = "his";
        pic = "src='images/HeWake.jpg' alt='waking up'"
        console.log(p1 + p2);
    } else if (gen == "she") {
        p1 = "she";
        p2 = "her";
        pic = "src='images/SheWake.jpg' alt='waking up'"
        console.log(p1 + p2);
    } else if (gen == "they") {
        p1 = "they";
        p2 = "their";
        pic = "src='images/TheyWake.jpg' alt='waking up'"
        console.log(p1 + p2);
    }
    // story witght
    document.getElementById("storyOut1").innerHTML = "<p>Once upon a time " + Character + " woke up to the sound of " + sound + " in the morning. Yawned, turned off " + p2 + " alarm and then got out of bed. " + Character + " went downstairs to meet " + p2 + " mother " + mom + ". " + p1 + " says hi and asks what she is making. She is making " + breakfast + " which was " + Character + "'s favorite. As always it was made perfectly. After finishing eating " + p2 + " breakfast " + Character + " leave and takes a " + transportation + " to school. </p >";
    document.getElementById("pic1").innerHTML = "<img "+pic+" class='img-fluid'>"
    document.getElementById("storyOut2").innerHTML = "<p>On the way to class, " + p1 + " meets " + friend + " who reminds them of a big project for " + subject + " that " + p1 + " needs to hand in. Realizing that " + p1 + " would not have time to finished it " + Character + " decide to come up with an excuse to why it was not done. Before the beginning of class, " + Character + " went up to the teacher and said, “I can't hand in my homework because " + unfortunate + ", so I don't have it here.” The teacher is not convinced. “shouldn't you've have seen this coming? This seems like poor planning on your part”. The teacher paused for a moment before continuing. “It would have been probably best if you told me when this happened, for now have it in by tomorrow and your grade should be still fine from the late penalty”. </p>";
    document.getElementById("pic2").innerHTML = ("<img src='images/school.jpg' alt='school' class='img-fluid'>")
    document.getElementById("storyOut3").innerHTML = "<p>" + Character + " when back to "+ p2 +" seat and wonder if leaving out the bit about " + inconvenience + " was why the teacher didn't give way. When lunch came around " + Character + " opens " + p2 + " lunch box to find a little treat of " + desert + " from "+ p2 +" mother. “At least there is someone who understands me” thought " + Character + " as " + p1 + " eat it. </p>";
    document.getElementById("pic3").innerHTML = ("<img src='images/lunch.jpg' alt='lunch' class='img-fluid'>")
}