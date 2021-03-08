const bg = document.querySelector(`.bg`)
const progress = document.querySelector(`.progress`)

var load =0;

let int = setInterval(loading,30);

function loading(){
  load++
  if(load>99){
    clearInterval(int);
  }

  progress.innerHTML = load +"%"
  progress.style.opacity = scale(load,0,100,1,0)
  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
  console.log(load);
}


// this function help to map a range of number to another range of number

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
