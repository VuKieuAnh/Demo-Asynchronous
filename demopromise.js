let onCrushBirthDay = (suckhoeCuaManh)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(suckhoeCuaManh){
                resolve(2);
            }    
            else{
                reject(new Error("Anh om roi"));
            }
        })
    })
}

// onCrushBirthDay(true)
// .then((result)=>{
//     console.log(`Crush co ${result} cai banh`);
// })
// .catch((er)=>{
//     console.log(er);
// })
// .finally(()=>{
//     console.log("Party");
// })


async function onCrushBirthDayAsync(suckhoeCuaManh){
    if(suckhoeCuaManh) return 2;
    throw new Error("Anh om roi");
}

async function doSt(){
    try{
    let result = await onCrushBirthDayAsync(true);
    console.log(`Crush co ${result} cai banh `);
}
catch(err){
    console.log(err);
}
finally{
    console.log("Party");
}
}
doSt();



