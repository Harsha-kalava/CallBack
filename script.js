const posts = [
	{
		title: "Post one",
		body: "This is Post One",
		createdAt: new Date().getTime(),
	},
	{
		title: "Post two",
		body: "This is Post two",
		createdAt: new Date().getTime(),
	}
];

function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post) => {
			output += `<li>${post.title}, -last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`});
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
		posts.push({...post, createdAt:new Date().getTime()});
		createPost();
	}, 2000);
}

creatpost({ title: "Post Three", body: "This post is three" }, getPosts);
create4thPost(
	{ title: "Post Four", body: "This post is Four" },getPosts);

// 	var count = 0;

// var id = setInterval(() => {
//   if (count === 4)
//     clearInterval(id)
//   console.log('text')
//   count++;
// }, 1000)