//array of images
let watchOut = [
    "https://imgs.search.brave.com/c_HrWSQUeeFONBDUZCV-PCwgHey5v-XlptgxDQ4rNTo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZW1l/c2ZlZWwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAz/L2ltLWluLXlvdXIt/d2FsbHM3LnBuZw",
    "https://imgs.search.brave.com/rgRotUPUj1yIpKzP5OTsdlbv9PK7-ohPYjgCwdP-zAI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZW1l/c2ZlZWwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAz/L2ltLWluLXlvdXIt/d2FsbHM1LnBuZw",
    "https://imgs.search.brave.com/PObuW9L3RkxcG4DQcMYskzoOvAL3lsCI7PZdrLSey08/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL3Bo/b3Rvcy9pbWFnZXMv/bmV3c2ZlZWQvMDAy/LzIxNy80MTcvMGZh/LmpwZw",
    "https://imgs.search.brave.com/TQ0ku5v8eug2xj_6x0sFf3VhSC5n8QNXNgZqjvdqbq4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTM0NjU1MjgtNWEy/MTNjY2MwYzdiP2l4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGMy/Tm9hWHB2Y0doeVpX/NXBZWHhsYm53d2ZI/d3dmSHg4TUE9PSZ3/PTEwMDAmcT04MA",
    "https://www.shutterstock.com/image-illustration/painting-illustration-surreal-abstract-portrait-fool-680059072",
    "https://www.shutterstock.com/image-photo/dark-portrait-terrible-witch-black-suit-1899973879",
    "https://thoughtcatalog.com/wp-content/uploads/2013/07/32872400993_2b78cfdcec_o.jpg?resize=1920,1280"
];

let conversation = [
    "psst",
    "psssssssssssssst...",
    "i have a secret",
    "only you can hear me",
    "we can be friends",
    "i am in your walls",
    "behind you...",
    "i know what you're thinking",
    "only you can see me",
    "i can see you",
    "im lurking in the shadows",
    "im on the edge of your vision"
]

// as we generate many conversations we can
// call this function to give us a random number
function generateRandomConversation() {
    const randomLine = Math.floor(Math.random() * conversation.length);
    return randomLine;
}

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * watchOut.length)
    imgs[i].src = watchOut[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = conversation[generateRandomConversation()];
}

const heads = document.querySelectorAll('h1');
const divs = document.querySelectorAll("div");
heads.forEach(h1 => {
    h1.style.backgroundColor = 'red';
});
divs.forEach(div => {
    div.style.backgroundColor = 'red';
});

//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = conversation[generateRandomConversation()];
}

const span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
    span[i].innerText = conversation[generateRandomConversation()];
}

// replace all links with a link to a creepy youtube video
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].href = "https://youtu.be/Ieq5Rp8zjy0?si=Jylc6xWrhGHjrPpT";
}