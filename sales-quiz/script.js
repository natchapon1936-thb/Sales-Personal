const questions = [
{
q: "ลูกค้าลังเล คุณจะทำยังไง?",
a: [
["เร่งปิดดีล","hunter"],
["ถามเพิ่ม","consultant"],
["สร้างความสัมพันธ์","relationship"],
["ให้ข้อมูลเพิ่ม","educator"]
]
},
{
q: "ลูกค้าต่อราคาแรง",
a: [
["ต่อรอง","negotiator"],
["อธิบาย value","educator"],
["สนิทก่อน","relationship"],
["พูดตรง","challenger"]
]
},
{
q: "ลูกค้าไม่มั่นใจ",
a: [
["demo","educator"],
["เล่าเคส","relationship"],
["ดูแลใกล้ชิด","supporter"],
["ชี้ความเสี่ยง","challenger"]
]
}
];

let current = 0;

let scores = {
hunter:0, consultant:0, relationship:0, educator:0,
negotiator:0, challenger:0, supporter:0, strategist:0
};

function showQuestion() {
let q = questions[current];
let html = `<h3>${q.q}</h3>`;

q.a.forEach(ans=>{
html += `<div class="btn" onclick="answer('${ans[1]}')">${ans[0]}</div>`;
});

document.getElementById("quiz").innerHTML = html;

let percent = ((current)/questions.length)*100;
document.getElementById("bar").style.width = percent+"%";
}

function answer(type){
scores[type]++;
current++;

if(current < questions.length){
showQuestion();
}else{
showResult();
}
}

function showResult(){
let max = Object.keys(scores).reduce((a,b)=>scores[a]>scores[b]?a:b);

let desc = {
hunter: "สายลุย ปิดการขายเร็ว เหมาะกับลูกค้าที่ตัดสินใจไว",
consultant: "สายให้คำปรึกษา เหมาะกับลูกค้าที่ยังไม่ชัดเจน",
relationship: "สายสร้างความสัมพันธ์ เหมาะกับลูกค้าระยะยาว",
educator: "สายข้อมูล เหมาะกับลูกค้าที่ต้องการความมั่นใจ",
negotiator: "สายเจรจา เหมาะกับลูกค้าที่ต่อราคา",
challenger: "สายท้าทาย เปลี่ยน mindset ลูกค้า",
supporter: "สายบริการ สร้าง trust",
strategist: "สายวางแผน เหมาะกับดีลใหญ่"
};

document.getElementById("quiz").innerHTML = `
<h2>คุณคือ ${max}</h2>
<p>${desc[max]}</p>
<button onclick="location.reload()">เล่นอีกครั้ง</button>
`;
}

showQuestion();

{
q: "ลูกค้าบอก ขอคิดก่อน",
a: [
["ปิดเลย","hunter"],
["ถามเหตุผล","consultant"],
["follow up","supporter"],
["วางแผนระยะยาว","strategist"]
]
},