function wifeBringingTicktes(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },1000)
});
}

function getPopcorn(){
    console.log('Wife: I have the tickets');
    console.log('Husband: We should go in');
    console.log('Wife: No, I am hungry');
    return new Promise((resolve,reject)=>{
        resolve('popcorn')
    });
    }

  function getButter(){
        console.log('Wife: I need butter in my popcorn');
        return new Promise((resolve,reject)=>{
            resolve('butter')
        });
        }

        function coolDrinks(){
            console.log('Wife: I need cool drinks');
            return new Promise((resolve,reject)=>{
                resolve('cooldrinks')
            });
            }
        

            async function fun1(){
                const tickets = await wifeBringingTicktes();
                console.log(tickets);
                const popcorn = await getPopcorn();
                console.log(popcorn);
                const butter = await getButter();
                console.log(butter);
                const drinks = await coolDrinks();
                console.log(drinks);
            }
            fun1();