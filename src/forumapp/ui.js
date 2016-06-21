let ui = {
    renderPosts(posts){
        console.log(posts);
        let postElements = posts.map((post) => {
            let {title, lastReply} = post;
            return articleTemplate(title, lastReply);
        });

        let target = document.querySelector(".container");
        target.innerHTML = postElements.join("");
    }
};

function articleTemplate(title, lastReply) {
    let template = `
        <article class="post">
            <h2 class="post-title">
                ${title}
            </h2>
        <p class="post-meta">
            ${lastReply}
        </p>
        </article>
    `;
    return template;
}

export default ui;

