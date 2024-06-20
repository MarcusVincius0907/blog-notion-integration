import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { customDataFromNotionObject } from 'src/utils/utils';

@Injectable()
export class NotionService {
  private notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
  }

  async getAllPosts() {
    try {
      const block = await this.getAllPostsData();
      return block;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  private async getAllPostsData() {
    const result = [];
    const block = await this.getChildrenBlocks(process.env.BLOG_PAGE_ID);
    for (let parent of block?.results || []) {
      const child = await this.getChildrenBlocks(parent.id);
      result.push(customDataFromNotionObject(parent, child.results));
    }

    return result;
  }

  private async getChildrenBlocks(blockId: string) {
    return await this.notion.blocks.children.list({
      block_id: blockId,
    });
  }
}
