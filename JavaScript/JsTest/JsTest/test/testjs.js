//练习题：http://docs.huihoo.com/jquery/jquery-fundamentals/zh-cn/ch05s07.html

$(document).ready(function () {
    var $search = $('#search');
    var $input = $search.find('input.input_text');
    var hint = $search.find('label').remove().text();
    $input.val(hint)
          .addClass('hint')
          .live('focus', function () {
              $input.val('').removeClass('hint');
          })
    .live('blur', function () {
        if (!$.trim(input.val())) {
            $input.val(hint).addClass('hint');
        }
    })
});
