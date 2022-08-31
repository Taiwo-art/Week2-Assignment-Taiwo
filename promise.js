
        const promise1= fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
                        .then(res=> {
            let result = res.map(post =>`<li>${post.title}</li>`);

        return document.body.innerHTML = result.join('');
        }
        )

