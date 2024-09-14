import { Injectable } from '@nestjs/common';
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
    getPreviewHtml(mockdata: any){

        const templatePath = path.resolve(process.cwd(), 'template', 'index.ejs');

        if(!fs.existsSync(templatePath)) {
            throw new Error(`Template file '${templatePath}' not found`);
        }
        const template = fs.readFileSync(templatePath, 'utf-8');

        const htmlContent = ejs.render(template, {data: mockdata});
        return htmlContent;
    }
}
