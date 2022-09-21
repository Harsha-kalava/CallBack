const posts = [
	{ title: "Post one", body: "This is Post One" },
	{ title: "Post two", body: "This is Post two" },
];

function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post, index) => {
			output += `<li>${post.title},${post.createdAt}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function creatpost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

function create4thPost(post, createPost, createdAt) {
	setTimeout(() => {
		posts.push(post);
		createPost();
	}, 2000);
}

creatpost({ title: "Post Three", body: "This post is three" }, getPosts);
create4thPost(
	{ title: "Post Four", body: "This post is Four", createdAt: `${Date.now()}` },
	getPosts
);
