
class Renderer {
    constructor() {}
    renderer(data) {
      const source = $("#recipe-template").html();
      const template = Handlebars.compile(source);
      const newHTML = template({ data });
      $("#displayFood").empty().append(newHTML);
    }
  }

const something = new Renderer