import { Controller, Get } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { mockData } from './mockdata';

@Controller('pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) { }

    @Get('/previewHtml')
    async previewHtml() {
        const htmlString = await this.pdfService.getPreviewHtml(mockData);
        return htmlString
    }

    @Get('/htmlToPDF')
    async exportPDF() {
        const pdfUrl = await this.pdfService.htmlToPdf(mockData);
        return {url: pdfUrl};
    }
}
