let bn3 = document.getElementById("b3");
let contime=document.querySelector(".contime");
let cq = document.querySelector(".cq")
let select=document.getElementById("select");
let sr = document.getElementById("sr");
b3.onclick=()=>{contime.style.display="none";cq.style.display="block"; document.body.style.overflowX="auto";}

let api = "https://api.alquran.cloud/v1/quran/ar.asad";
async function getquran()
{
    let res=await fetch(api)
    let dq=await res.json();
    let surahs=dq.data.surahs
   selectall(surahs)
   console.log(dq)
    console.log(surahs);
}
function selectall(name)
{
    select.innerHTML = 
    `
    <select onchange="getinfo(this.value)">
<option>
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
</option>
${name.map((name) => `<option>${`${name.number}⟨${name.name}`}`).join('')}</optoin>
    </select>
    `;
}
async function getinfo(info)
{
      let api = `https://api.alquran.cloud/v1/surah/${info}/ar.asad`;
      let res=await fetch(api);
      let data=await res.json();
      let ayahs=data.data.ayahs;
      let mapAyah=ayahs.map(ayah=>ayah.text);
      let ayahsMap = mapAyah.map((ayah, i) => `${ayah} ⟨${i + 1}⟩`).join("");
      
  sr.innerHTML =
   `
  <p class="ayaha">${ayahsMap}</p>`;

}




getquran()




