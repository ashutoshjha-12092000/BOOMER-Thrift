// Demo JS: populates product cards and hooks small UI actions
const SAMPLE = [
  {id:1, brand:'BOOMER', style:'SN-002', title:'Canvas Slipper', cond:'Good', price:80, img:''},
  {id:2, brand:'LEVIS (used)', style:'SN-045', title:'Denim Pants', cond:'Very Good', price:150, img:''},
  {id:3, brand:'BOOMER Vintage', style:'SN-101', title:'Graphic Tee', cond:'Like New', price:220, img:''},
  {id:4, brand:'Mixed', style:'SN-080', title:'Canvas Tote', cond:'Very Good', price:120, img:''},
];

function el(q){return document.querySelector(q)}
function createCard(p){
  const d=document.createElement('div'); d.className='card';
  const img=document.createElement('div'); img.style.height='160px'; img.style.borderRadius='8px'; img.style.background='linear-gradient(90deg, rgba(255,255,255,0.02), rgba(0,0,0,0.2))'; img.style.display='flex'; img.style.alignItems='center'; img.style.justifyContent='center'; img.innerText='Image';
  d.appendChild(img);
  const title=document.createElement('h4'); title.innerText=p.title; title.style.margin='10px 0 4px';
  d.appendChild(title);
  const meta=document.createElement('div'); meta.className='small'; meta.innerHTML='<span class="badge">'+p.brand+'</span><span class="badge">'+p.style+'</span>';
  d.appendChild(meta);
  const cond=document.createElement('div'); cond.className='small'; cond.innerText='Condition: '+p.cond;
  d.appendChild(cond);
  const price=document.createElement('div'); price.className='price'; price.innerText='₹'+p.price;
  d.appendChild(price);
  const btn=document.createElement('a'); btn.className='btn'; btn.href='#'; btn.innerText='Buy / Order';
  btn.onclick=(e)=>{e.preventDefault(); alert('Demo: Order placed for '+p.title+' (₹'+p.price+') — local delivery charges apply.');}
  d.appendChild(btn);
  return d;
}

document.addEventListener('DOMContentLoaded',()=>{
  const products = el('.products');
  SAMPLE.forEach(p=>products.appendChild(createCard(p)));
  el('#sellerSignup').addEventListener('click',()=>{
    const name = el('#sellerName').value || 'Anonymous';
    const phone = el('#sellerPhone').value || 'Not provided';
    alert('Demo seller signup received: '+name+' — '+phone+'\nWe will contact for onboarding (demo).');
  });
  el('#contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks! Message received (demo).');
  });
});
