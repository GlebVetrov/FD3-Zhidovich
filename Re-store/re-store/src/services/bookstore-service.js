import isoFetch from 'isomorphic-fetch';
import data from './books.json';

export default class BookstoreService {

    

    getBooks () {
        let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', 'GLEB_ITEM_INFO');

return fetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
        method: 'post',
        body: sp
    })
    .then( response => { // response - HTTP-ответ
        if (!response.ok)
            throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
        else
            return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
    })
    .then( data => {
        return JSON.parse(data.result); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
    })
    .catch( error => {
        return error.message;
    });        

    }
    
}