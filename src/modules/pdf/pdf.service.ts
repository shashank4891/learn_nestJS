import { Injectable } from '@nestjs/common';
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';
import * as puppeteer from 'puppeteer';

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

    async htmlToPdf(data: any): Promise<string> {
        const htmlContent = this.getPreviewHtml(data)
        const browser = await puppeteer.launch(
            {
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--font-render-hinting=none'
                ]
            }
        );
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0'});

        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
        });
        await browser.close();
        const pdfFileName = `report-${Date.now()}.pdf`;
        const pdfFilePath = path.resolve(process.cwd(), 'pdfs', pdfFileName);
        fs.writeFileSync(pdfFilePath, pdfBuffer);
        return `http://localhost:3000/api/v1/pdfs/${pdfFileName}`;
    }
}
