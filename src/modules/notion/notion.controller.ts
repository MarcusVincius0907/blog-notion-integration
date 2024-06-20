import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotionService } from './notion.service';

@Controller('notion')
export class NotionController {
  constructor(private service: NotionService) {}

  @Get('posts')
  async getAllPosts() {
    try {
      const resp = await this.service.getAllPosts();
      return { status: 'success', data: resp };
    } catch (err) {
      return { status: 'error', data: err };
    }
  }
}
