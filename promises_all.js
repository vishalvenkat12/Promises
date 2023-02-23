function createaPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
           newPost='This is a new post';
            resolve(newPost)
        }, 1000)
    });
}
    
    
    function updateLastUserActivityTime() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                lastActivityTime=new Date().getTime();
                resolve(lastActivityTime);
            }, 1000)
        });
    }


        createaPost().then((newPost)=>{
            console.log(newPost);
            updateLastUserActivityTime().then((lastActivityTime)=>{
                console.log(lastActivityTime);
            });
        });