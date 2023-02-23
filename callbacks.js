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



//function createPost(post){ //function to create a new post
//    setTimeout(() => { 
//posts.push(post);
   // },2000);
//}
//getPosts();
//createPost({title: 'postThree', body: 'This is postthree'});

//in the above createPost code, it is taking more time than getPost function hence it doesn't print 'postThree'. To fix this callbacks are used.
//let us make comment them and write a function with callback.

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback(); //this callback function is called right after the post is pushed to posts.
    },2000);
}
//Now we are making getPost() as the createPost callback function.

createPost({title: 'postthree', body: 'This is postThree'},getPosts);