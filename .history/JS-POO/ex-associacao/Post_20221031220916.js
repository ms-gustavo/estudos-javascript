class Post {
  constructor(comments) {
    this.comments = [comments];
  }

  addComment([comments]) {
    this.comments += comments;
  }
}
