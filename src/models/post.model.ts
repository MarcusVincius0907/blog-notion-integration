export interface PostModel {
  id: string;
  title: string; //child_page.title
  postBlocks: Array<PostBlocks>;
}

export interface PostBlocks {
  id: string;
  image?: any; //image.file.url
  text?: any; //paragraph.rich_text.plain_text
}
