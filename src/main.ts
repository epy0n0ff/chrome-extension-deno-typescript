import {browser} from '../deps.ts';

document.addEventListener("click", (e) => {
    const detail = {domain: "httpbin.org"};
    let cook = browser.cookies.getAll(detail);
    cook.then(c => {
        c.forEach((c, _a, _b) => {
            alert("name:" + c.name + ", value:" + c.value);
        });
    });
});
