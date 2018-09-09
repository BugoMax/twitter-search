
import Promise from 'promise-polyfill';

const searchTweets = (value) => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        const sendData = {
            searchTwitsPrams: {
                value
            }
        };

        xhr.open('POST', 'http://localhost:8088/searchTweets', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {

            if (xhr.status === 200) {

                const data = JSON.parse(xhr.responseText);

                log.warn('data', data);

                resolve(data);

            } else {

                console.error('Error in request. Status: ' + xhr.status);
                console.error('Response text: ' + xhr.responseText);

                reject(new Error());
            }
        };
        xhr.send(JSON.stringify(sendData));
    });
};

export default searchTweets;
