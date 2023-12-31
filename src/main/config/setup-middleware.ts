import { Express } from 'express';
import { bodyParser, cors, contentType } from '@/main/middleware';

export function setupMiddleware(app: Express): void {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
}
