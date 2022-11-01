class Post {
  constructor(comments) {
    this.comments = new Comment();
  }

  addComment([comments]) {
    this.comments += comments;
  }
}
