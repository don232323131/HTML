/* eslint-disable no-console */
import fs from 'fs';
// FIXME: Incase you have the npm package
import HTMLtoDOCX from 'html-to-docx';
//import HTMLtoDOCX from '../dist/html-to-docx.esm';

const filePath = './example.docx';

const htmlString = properties.html;

(async () => {
  const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
})();
