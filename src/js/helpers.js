import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} seconds`));
        }, s * 1000);
    });
};

export const getJSON = async function(url){
    try{
        const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        const data = await response.json();

        if (data.hasOwnProperty("error")) {
            throw new Error(`Something went wrong! ${data.error.message} (${data.error.code})`);
        };

        return data;
    } catch(err){
        throw err;
    }
};