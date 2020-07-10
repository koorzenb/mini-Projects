function wait(ms = 0){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}

async function go(){
    console.log('starting');
    await wait(2000);
    console.log('Done');
}

go();