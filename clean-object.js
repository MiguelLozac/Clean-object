const data = {
    a: 'foo',
    b: 'bar',
    c: null,
    d: undefined,
    e: 0,
    f: {
        a: 'fuz',
        b: null,
        c: {
            a: 'biz',
            b: 'buz',
            c: '123',
            d: [
                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0,
                    f: false,
                    g: 12,
                    h: '13',
                    i: {},
                    j: [],
                    k: [[]]
                },
                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0
                },

                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0,
                    f: '-7',
                    g: '3.14159265358979323'
                }
            ]
        }
    },
    g: 123,
    h: '456',
    i: false,
    j: {},
    k: [],
    l: [[]],
    m: '3.14159265358979323'
};



const cleanse = o => {
    // Solution Here
  
         const newObj = {};
         Object.entries(o).forEach(([k, v]) => {
           if (v === Object(v)) {
             newObj[k] = cleanse(v);
           }  else if (v != null) {
             newObj[k] = o[k];
             if (typeof (parseInt(v)) === 'number' && typeof v !== 'boolean') {
                 if (!isNaN(v)) {
                 newObj[k] = +v
                 }
             }
           }
         });
         Object.freeze(newObj);
         return newObj;
}


console.log(cleanse(data));


