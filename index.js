document.getElementById("button").addEventListener("click", () => {
  const textInput = document.getElementById("markdownInput").value;

  // convert markdown to html
  const md = window.markdownit();
  const html = md.render(textInput);

  //   then convert html to pdf content
  const pdfContent = htmlToPdfmake(html);
  const pdfDoc = {
    content: pdfContent,
  };

  //   and finally, download the pdf
  pdfMake.createPdf(pdfDoc).open();
});
