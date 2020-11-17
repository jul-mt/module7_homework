const test1 = {
    a: "aaa",
    b: "be-be",
    f: 4
    }
    
    function selfProp (obj) {
        for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key+" - "+obj[key]); 
        }   
        }
    }
    
    selfProp (test1);