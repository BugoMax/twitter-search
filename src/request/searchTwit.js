
import Promise from 'promise-polyfill';

const searchTwit = (link, params) => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('POST', link, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {

            if (xhr.status === 200) {

                const data = JSON.parse(xhr.responseText);

                resolve(data);

            } else {

                console.error('Error in request. Status: ' + xhr.status);
                console.error('Response text: ' + xhr.responseText);

                reject(new Error());
            }
        };
        xhr.send(JSON.stringify(params));
    });
};

export default searchTwit;
