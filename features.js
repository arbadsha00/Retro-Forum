const loadPosts = async (search = "") => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`
  );
  const data = await response.json();
  displayPosts(data.posts);
};
const displayPosts = (posts) => {
  console.log(posts);
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="flex gap-5 bg-gray1 rounded-xl p-6">
            <div class="flex">
              <div class="w-16 h-16">
                <img
                  src=${post.image}
                  alt=""
                  class="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div class="badge border-none badge-primary badge-sm ${post.isActive==true?"bg-green-500":"bg-red-500"}"></div>
            </div>
            <div class="space-y-1 w-full">
              <div class="flex gap-6 text-gray-600">
                <span>#${post.category}</span>
                <h1>Author : <span>${post.author.name}t</span></h1>
              </div>
              <h1 class="font-semibold text-2xl">${post.title}</h1>
              <p class="text-gray-500">${post.description}</p>
              <div class="divider"></div>
              <div class="flex justify-between items-center">
                <div class="flex text-gray-500 gap-5">
                  <div><i class="fa-regular fa-message"></i> ${post.comment_count}</div>
                  <div><i class="fa-regular fa-eye"></i> ${post.view_count}</div>
                  <div><i class="fa-regular fa-clock"></i> ${post.posted_time} min</div>
                </div>
                <div>
                  <button onclick="counter('${post.title}','${post.view_count}')" class="btn btn-circle btn-sm bg-green-500 text-white">
                    <i class="fa-regular fa-envelope-open"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>`;
      
      postContainer.appendChild(div);
      
  });
};
const counter = (title, view_count) => {
    console.log(title);
    const postCounter = document.getElementById("post-counter");
    const div = document.createElement("div");
    div.innerHTML = `<div
              class="bg-white rounded-full flex gap-6 p-3 items-center justify-between"
            >
              <h1 class="font-semibold text-xl">${title}</h1>
              <span class="text-gray-500"
                ><i class="fa-regular fa-eye"></i> ${view_count}</span
              >
            </div>`;
    
    postCounter.appendChild(div);
    counterHandler();
}

const counterHandler = () => {
    let totalView = parseInt(document.getElementById("total-view").innerText);
    totalView++;
    document.getElementById("total-view").innerText = totalView;
}
loadPosts();
