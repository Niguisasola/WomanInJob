class FavoriteJobs{
    saveIntoDB(shops) {
        const shops = this.getFromDB();
    }
    
    //traer en local storage
    getFavoriteJobList() {
        savedList = localStorage.getItem('shops');
        if (savedList == null) {
            shops = [];// si está vacía no "pinta" nada
        } else {
            shops = JSON.parse(savedList);//si tiene datos me los traiga y los "pinte"
        }
        return shops
    }
    }