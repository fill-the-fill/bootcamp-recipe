
const source = $(`#recipe-template`).html()
const template = Handlebars.compile(source)
const renderer = function () {
    const newHTML = template({  })
    $(`.food`).empty().append(newHTML)
}

const find = function () {
    const input = $(`#input`).val().toLowerCase()
    $.get(`/recipes/${input}`, function (recipe) {
        console.log(recipe)
        something.renderer(recipe)
    })  
}

