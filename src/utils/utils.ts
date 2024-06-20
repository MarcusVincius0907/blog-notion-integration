import { PostModel } from 'src/models/post.model';

export function customDataFromNotionObject(
  parent: any,
  children: any,
): PostModel {
  return {
    id: parent?.id,
    title: parent?.child_page?.title,
    postBlocks: children.map((child) => ({
      id: child.id,
      image: child?.image?.file?.url,
      text: child?.paragraph?.rich_text,
    })),
  };
}
