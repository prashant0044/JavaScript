// make sure that all content is loaded
document.addEventListener('DOMContentLoaded',()=>{
    // get api
    const postcontainer=document.querySelector('.post-container');

    const api="https://jsonplaceholder.typicode.com/posts";
    async function fetchapi(){
        try{
            const response=await fetch(api);
            const posts=await response.json();
            // console.log(posts);
            postcontainer.innerHTML="";
            posts.forEach((post)=>{
                const postelement=createpostelement(post);
                postcontainer.appendChild(postelement);
                 
            })

        }

        catch(error){
            postcontainer.innerHTML='<p>Error Loading post please try again..</p>'
        }
    }

    function createpostelement(post){
        const article=document.createElement('article');
        article.className='post-card';
        const title=document.createElement('h2');
        title.className='post-title';
        title.textContent=post.title;

        const body=document.createElement('p');
        body.className='post-body';
        body.textContent=post.body;
        
        article.appendChild(title);
        article.appendChild(body);
        return article;

    }
    fetchapi();
})
