//练习题：http://docs.huihoo.com/jquery/jquery-fundamentals/zh-cn/ch03s08.html

//---------Selecting-----------
//Select all of the div elements that have a class of "module".
$("div.module")

//Come up with three selectors that you could use to get the third item in the #myList unordered list.
//Which is the best to use? Why?
$("#myListItem")

//Select the label for the search input using an attribute selector.
$("lable[for='p']")

//Figure out how many elements on the page are hidden (hint: .length).
$(":hidden").length

//Figure out how many image elements on the page have an alt attribute.
$('img[alt]').length

//Select all of the odd table rows in the table body.
$('#fruits tbody tr:odd')

//----------Traversing----------------
//Select all of the image elements on the page; log each image's alt attribute.
$('img').each(function (index) {
    var _this = $(this);
    console.log(_this.attr('alt'));
});

//Select the search input text box, then traverse up to the form and add a class to the form.
$('input[type="text"]').closest('.form').addClass('aad');


//Select the list item inside #myList that has a class of "current" and remove that class from it;
//add a class of "current" to the next list item.
$('#myList li.current').removeClass('current').next().addClass('current')

//Select the select element inside #specials; traverse your way to the submit button.
$('#specials select').parent().next().find('input[type="submit"]');

//Select the first list item in the #slideshow element;
//add the class "current" to it, and then add a class of "disabled" to its sibling elements.
$('#slideshow li:first').addClass('current').sibling().addClass('disabled')

//-----------Manipulating---------------
//Add five new list items to the end of the unordered list #myList. Hint:

for (var i = 0; i < 5; i++) {
    $('#myList').append('<li>List item ' + (i + 8) + '</li>');
}

//Remove the odd list items
$('li:odd').remove();

//Add another h2 and another paragraph to the last div.module
$('div.module:last').append('<h2>ssss</h2>').append('<p>padfajfa</p>');

//Add another option to the select element; give the option the value "Wednesday"
$('div.specials select').append('<option value="Wednesday">Wednesday</option>')

//Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
$('div.module:last').after('<div class="module"><div>').append($('img:first').clone());