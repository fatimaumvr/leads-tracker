const inputel=document.getElementById('inp')
const saveBtn=document.getElementById('save')
const tabBtn=document.getElementById('tab')
const deleteBtn=document.getElementById('delete')
let ull=document.getElementById('ul')
let leads=[]

if (localStorage.getItem('leads')){
    leads=JSON.parse(localStorage.getItem('leads'))
    render()
}

let tab=[{url:'www.ihsan.com'}]

saveBtn.addEventListener('click',function(){
    let inn=inputel.value
    leads.push(inn)
    leads=JSON.stringify(leads)
    localStorage.setItem('leads',leads)
    console.log(localStorage)
    leads=JSON.parse(localStorage.getItem('leads'))
    render()
    inputel.value=''

})

tabBtn.addEventListener('click',function(){
    leads.push(tab[0].url)
    leads=JSON.stringify(leads)
    localStorage.setItem('leads',leads)
    leads=JSON.parse(leads)
    render()
})


deleteBtn.addEventListener('click',function(){
    localStorage.clear()
    leads=[]
    ull.innerHTML=''
})

function render(){
    let list=''
    for (let i=0;i<leads.length;i++){
        list+=`<li>${leads[i]}</li>`
    }
    ull.innerHTML=list
}