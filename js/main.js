const fila = document.querySelector('.contenedor-carousel')
const peliculas = document.querySelectorAll('.pelicula')

const flechaizq = document.getElementById('flecha-izq')
const flechader = document.getElementById('flecha-der')

flechader.addEventListener('click', ()=>{
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

flechaizq.addEventListener('click', ()=>{
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

const numPag = Math.ceil(peliculas.length /5);
 /* obtener num de paginas */
 for (let i =0; i < numPag; i++){
     const indicador = document.createElement('button');
     if (i === 0){
         indicador.classList.add('activo')
     };

     document.querySelector('.indicadores').appendChild(indicador);
     indicador.addEventListener('click', (e)=>{
         fila.scrollLeft =  i * fila.offsetWidth;

         document.querySelector('.indicadores .activo').classList.remove('activo');
         e.target.classList.add('activo');
     })
 };

 peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});