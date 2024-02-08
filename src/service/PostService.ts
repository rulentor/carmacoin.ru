export default class PostService {
    getPosts() {
        return fetch('/data/posts.json')
            .then((res) => res.json())
            .then((d) => d.data)
    }
}
