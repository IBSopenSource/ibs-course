const arr = [1, 2, 3, 4]

const posts = [
    { head: "first post", body: "first body" },
    { head: "second post", body: "second body" },
    { head: "third post", body: "third body" },
    { head: "forth post", body: "forth body" },
];

// const arr2 = []

// for (let i = 0; i < arr.length; i++) {

//     arr2.push(arr[i] * 2)

// }

const arr2 = arr.map((x) => x * 2)

// console.log(arr2);

// const newPosts = posts.map((post)=>post.tail="tail")

const newTail = "new tail"

const newPosts = posts.map((post) => {
    return {
        head: post.head,
        body: post.body,
        tail: newTail
    }
})

console.log(newPosts);
