window.onload = function(){
  setTimeout(() => {
      $('#Loader').fadeOut();
      $('body').removeClass('hidden')
  }, 1000);
}



let downloadTime = () => {
  let valorSeleccionado = document.getElementById('values')
  showData.innerHTML = ''
  let plan = valorSeleccionado.options[valorSeleccionado.selectedIndex].value;
  let velocidad;
  entrada = document.querySelector('input').value
  if(entrada == ''){
    console.log('Escriba el tamaño de su archivo')
  }
  else {
    switch(true) {
      case plan === 'Gratis':
        velocidad = 2
        break;
      case plan === 'Proº':
        velocidad = 10
        break;
        case plan === 'Empresarial':
      velocidad = 100
      break;
    }
    calculate(velocidad,plan)
  }
}

const calculate = (velocidad,plan) => {
  velocidad = velocidad * 0.125
  let time = (entrada / velocidad)/60
  showData.innerHTML += `${time.toFixed(1)} minutos, usando el plan ${plan}`
}

const reset = () => {
  document.querySelector('input').value = 0;
}

let showData = document.querySelector('#time')
let entrada;
const resetBtn = document.getElementById('reset').onclick = reset
const boton = document.getElementById('boton').onclick = downloadTime