const posts=[
    {title: 'postOne', body: 'This is postone'},
    {title: 'postTwo', body: 'This is posttwo'}
]; //creating an array of objects

function getPosts(){ //creating a function to get post
    setTimeout(() => { //takes a call back function setTimeout as arrow function
        let output='';
        posts.forEach((post, index) => { //iterating through posts//can be done with for loop also
            output += `<li>${post.title}</li>`; //creating a list 

        });
document.body.innerHTML=output; //adding that list to HTML
    }, 1000);
}


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        },2000);
    });
    
}
createPost({title: 'postthree', body: 'This is postThree'}).then(getPosts);
.catch((err) => {
    console.log(err);
});