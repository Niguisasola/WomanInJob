if(e.target.classList.contains('favorite-btn')){
    if(e.target.classList.contains('is-favorite')) {
        //eliminar la class
        e.target.classList.remove('is-favorite');
        e.target.textContent ="♡";
    } else {
        //agregar la clase
        e.target.classList.add('is-favorite');
        e.target.textContent ="♡";

        //obtener info
        const cardBody = e.target.parentElement;
        const shopInfo = {
            id: e.target.dataset.id,
            name: cardBody.querySelector('.card-title').textContent,
            image: cardBody.quertSelector('.card-img-top').src   
        }

        //Agregar al Storage
        shopDB.saveIntoDB(shopInfo)
    }

}

