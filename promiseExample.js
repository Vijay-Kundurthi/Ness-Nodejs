function myFunc(p1, p2) {
    const promise = new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const result = p1%p2;
            if (result === 0) {
                resolve(`${p1} is divisable with ${p2}`);
            } else {
                reject(`${p1} is not divisable with ${p2}`);
            }
        }, 2000);
    });
    return promise;
}

const promiseRes = myFunc(20, 10);

promiseRes.then((data)=> {console.log(data)}).catch((err)=> {console.log(err)});