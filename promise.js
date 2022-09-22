let posts = [
	{
		title: "Post One",
		body: "This is Post one",
		createdAt: new Date().getTime(),
	},
	{
		title: "Post Two",
		body: "This is Post Two",
		createdAt: new Date().getTime(),
	},
];

function getPosts() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let output = "";
			posts.forEach((post) => {
				output += `<li>${post.title} -last updated ${
					(new Date().getTime() - post.createdAt) / 1000
				} seconds ago</li>`;
			});
			resolve(posts);
			document.body.innerHTML = output;
		}, 1000);
	});
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push({ ...post, createdAt: new Date().getTime() });
			const error = false;
			if (!error) {
				resolve(post);
			} else {
				reject("Error:Something went wrong");
			}
		}, 1000);
	});
}

function deletePost() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (posts.length > 0) {
				const deletedItem = posts.pop();
				resolve(deletedItem);
			} else {
				reject("No item present in the array");
			}
		}, 1000);
	});
}

createPost({
	title: "Post Three",
	body: "This is Post Three",
}).then(getPosts);
// .then(() => {
// 	getPosts();
// 	deletePost().then(() => {
// 		getPosts();
// 		deletePost().then(() => {
// 			getPosts();
// 			deletePost().then(() => {
// 				getPosts();
// 				deletePost()
// 					.then(() => {})
// 					.catch((err) => {
// 						console.log(err);
// 					});
// 			});
// 		});
// 	});
// });

// Promise.all

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 100;
// const promise3 = new Promise((resolve, reject) =>
// 	setTimeout(resolve, 2000, "Goodbye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
// 	(res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
// 	console.log(values)
// );

function updateLastUserActivityTime() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().getTime());
		}, 1000);
	});
}

function updateList() {
	Promise.all([
		createPost({ title: "Post Four", body: "ento emo" }),
		updateLastUserActivityTime(),
	]).then(([cpResolve, updateResolve]) => {
		console.log(cpResolve, updateResolve);
	});
}

function deleteList() {
	setTimeout(() => {
		Promise.all([deletePost(), getPosts()]).then((getPosts) => {
			console.log(getPosts);
		});
	}, 2000);
}

updateList();
deleteList();
