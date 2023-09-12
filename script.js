function toggleFriendStatus(istatusElement, nameElement, addFriendElement) {
    let flag = 0;
    
    addFriendElement.addEventListener("click", function () {
        if (flag === 0) {
            istatusElement.innerHTML = "Friends";
            istatusElement.style.color = "green";
            addFriendElement.innerHTML = `Remove ${nameElement.innerHTML}`;
            flag = 1;
        } else {
            istatusElement.innerHTML = "Stranger";
            addFriendElement.innerHTML = "Add Friend";
            istatusElement.style.color = "red";
            flag = 0;
        }
    });
}

// Usage example 1:
var istatusPhehla = document.querySelector("#pehle");
let name1 = document.querySelector("#first");
var addFriend1 = document.querySelector("#add1");
toggleFriendStatus(istatusPhehla, name1, addFriend1);

// Usage example 2:
var istatusdusra = document.querySelector("#dusra");
let name2 = document.querySelector("#sec");
var addFriend2 = document.querySelector("#add2");
toggleFriendStatus(istatusdusra, name2, addFriend2);


// Usage example 3:
var istatusteen = document.querySelector("#teen");
let name3 = document.querySelector("#third");
var addFriend3 = document.querySelector("#add3");
toggleFriendStatus(istatusteen, name3, addFriend3);

// Usage example 4:
var istatuschar = document.querySelector("#char")
let name4 = document.querySelector("#four")
var addFriend4 = document.querySelector("#add4")
var flag = 0
addFriend4.addEventListener("click",function(){
    if(flag == 0){
        istatuschar.innerHTML = "Friends"
        istatuschar.style.color = "green"
        addFriend4.innerHTML = `Remove ${name4.innerHTML}`;
        flag = 1
        
    }
    else{
        alert("Nhi ab ye Remove nhi ho skta ")
        // istatuschar.innerHTML = "Stranger";
        // addFriend4.innerHTML ="Add Friend"
        // istatuschar.style.color = "red";
        flag = 0;
 }
})


// Usage example 5:
var istatuspach = document.querySelector("#pach");
let name5 = document.querySelector("#five");
var addFriend5 = document.querySelector("#add5");
toggleFriendStatus(istatuspach, name5, addFriend5);

// Usage example 6:
var istatuschey = document.querySelector("#chey");
let name6 = document.querySelector("#six");
var addFriend6 = document.querySelector("#add6");
toggleFriendStatus(istatuschey, name6, addFriend6);

// Usage example 7:
var istatussaat = document.querySelector("#saat");
let name7 = document.querySelector("#seven");
var addFriend7 = document.querySelector("#add7");
toggleFriendStatus(istatussaat, name7, addFriend7);

// Usage example 8:
var istatusaath = document.querySelector("#aath");
let name8 = document.querySelector("#eight");
var addFriend8 = document.querySelector("#add8");
toggleFriendStatus(istatusaath, name8, addFriend8);

// Usage example 9:
var istatusnow = document.querySelector("#now");
let name9 = document.querySelector("#nine");
var addFriend9 = document.querySelector("#add9");
toggleFriendStatus(istatusnow, name9, addFriend9);


//Scroll Up Logic
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the image element in the footer
    var footerImg = document.getElementById("icon");

    // Add a click event listener to the image
    footerImg.addEventListener("click", function () {
        // Scroll to the first div when the image is clicked
        var firstDiv = document.getElementById("blank");
        firstDiv.scrollIntoView({ behavior: "smooth" });
    });
});

//Like Logic
var con = document.querySelector("#card")
var love = document.querySelector("i")

con.addEventListener("click",function(){
    love.style.transform = 'scale(1)'
    love.style.opacity = 0.8
    setTimeout(function(){
        love.style.opacity = 0
    },2000);
    setTimeout(function(){
        love.style.transform = 'scale(0)'
    },1000);
});
// ______________________________________________________________
                            // STORIES 
// ______________________________________________________________

var arr = [
    {dp:"laddu.png",story:"https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/273273189_1155576781846035_1941061545009932324_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1ItbLLXb-rUAX8_DqxJ&_nc_ht=scontent.fccu7-1.fna&oh=00_AfBrskJqksdiHEd8waPtnpFo7zShzdXYpz_9viTe0uKZFg&oe=6506053A"},
    {dp:"https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/328672617_1411769576259430_8161582548584843306_n.jpg?stp=c0.53.206.206a_cp6_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=KeU00rBACGsAX8uaoGF&_nc_ht=scontent.fccu7-1.fna&oh=00_AfBviN6zHFikdpE5G1MMKbnluvBFsdMiAKYplsAl4cTZFA&oe=65041550",story:"https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/373308524_2174416599423425_490196659319182854_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=nim6EZc9m5UAX_UXDus&_nc_ht=scontent.fccu7-1.fna&oh=00_AfDxq7-01eJUVXHnoR3mHmbBvp9N2AS7FaOpfNTlP5_joQ&oe=65053EEF"},
    {dp:"https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/277807364_1352020095311554_318622318320375549_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=Le2IGVQAzTUAX-Y5RHV&_nc_ht=scontent.fccu7-1.fna&oh=00_AfAd8oP95NhSNcGmT2VSun7yHSSmlK9ROZIZTFHxayEj6w&oe=6504A0C0",story:"https://scontent.fccu7-1.fna.fbcdn.net/v/t1.6435-9/38793880_446378595875713_6491530037802565632_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RKm3iWV1Aa4AX8Dkd-B&_nc_ht=scontent.fccu7-1.fna&oh=00_AfAqa1UltqNRjwYrXncy9OFPJze6hbE_KkgEjw-hP7VEFA&oe=65281E12"},
    {dp:"https://avatars.githubusercontent.com/u/121447201?v=4",story:"https://scontent.fccu7-1.fna.fbcdn.net/v/t1.6435-9/89498836_2701086940128134_1454045166422720512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_ohc=IrhoM6PgMiQAX-Xxey8&_nc_ht=scontent.fccu7-1.fna&oh=00_AfB7IFUEDr8E2F4pYmna9MF_hYfVsH6BoJPhchjQEOfRew&oe=65281E78"},
    {dp:"https://scontent.fccu7-1.fna.fbcdn.net/v/t1.6435-9/45434308_732769833763503_3313350020828233728_n.jpg?stp=c51.0.206.206a_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=__5hvB83sNkAX-4-BiA&_nc_ht=scontent.fccu7-1.fna&oh=00_AfD_2Yb7X4zXWRzViYvCZezlV3e40z5kqWRlUMpPXzktIA&oe=652657AE",story:"https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/273273189_1155576781846035_1941061545009932324_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1ItbLLXb-rUAX8_DqxJ&_nc_ht=scontent.fccu7-1.fna&oh=00_AfBrskJqksdiHEd8waPtnpFo7zShzdXYpz_9viTe0uKZFg&oe=6506053A"},

]
var storiyan = document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
    <img id= "${idx}" src="${elem.dp}" alt="">
   </div>`;
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
    document.querySelector("#fullScreen").style.display = "block"
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#fullScreen").style.display = "none"
    },1500)
});