// const inputbox = document.querySelector('#input-box');
const searchbtn = document.querySelector('button');
var gold = document.querySelector('#gold-detail');
var silver = document.querySelector('#silver-detail');
const front = document.querySelector('#wellcome');

const apikey  = '9d14059befmsh2fa9fa8a1304ae0p1f4c9fjsn7e2abf7cde6a';
const apihost  = 'live-indian-gold-silver-price.p.rapidapi.com';
async function fetchPrice(metal,city) {
  const url = `https://live-indian-gold-silver-price.p.rapidapi.com/api/v1/finance/gold-silver-price-by-city/${metal}/${city}`;
  const options ={
    mathod: 'GET',
    headers: {
      'x-rapidapi-key':apikey,
      'x-rapidapi-host':apihost
    }
  };
  try {
    const response = await fetch(url,options);
    const result = await response.json();
    console.log(result);
    return result;
  }
  catch (error){
    console.error("error fetch data",error);
    return null;
  }
  }
  searchbtn.addEventListener('click',async function(){
    var selectvalue = document.getElementById('option').value;
    var city = document.querySelector('.input-box').value;

    if(!city){
      alert('please enter a city');
      return;
    }
    if (selectvalue === 'gold'){
      const data = await fetchPrice('gold',city);
      if(data){
        document.querySelector('.gold-22').textContent = `₹ ${data['data']['22 Carat / gm']}/gram`;
        document.querySelector('.gold-24').textContent = `₹ ${data['data']['24 Carat / gm']}/gram`;
        document.querySelector('.message').textContent = `${data.message}`;

        gold.style.display = 'flex';
        silver.style.display = 'none';
        front.style.display = 'none';
      }
      }else if (selectvalue === 'silver'){
        const data = await fetchPrice('silver',city);
        if (data){
        document.querySelector('.silver').textContent = `₹ ${data['data']['10 gram']}/10.gram`; 
        document.querySelector('.messages').textContent = `${data.message}`;

          silver.style.display = 'flex';
          gold.style.display = 'none';
          front.style.display = 'none';
        }
      }
      else {
        silver.style.display = 'none';
        front.style.display = 'block';
        gold.style.display = 'none';
      }
    });
  


//  searchbtn.addEventListener('click',function(){
// var selectvalue = document.getElementById('option').value;

//   if(selectvalue === "gold"){
//     gold.style.display = 'flex';
//     front.style.display = 'none';
//   }
//   else if(selectvalue === "silver") 
//     {
//     silver.style.display = 'flex';
//     front.style.display = 'none';
//     gold.style.display = 'none';
//   } 
//   else{
//     front.style.display = 'block';
//     silver.style.display = 'none';
//     gold.style.display = 'none';
//   }
//  });
  