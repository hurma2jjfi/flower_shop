$(document).ready(function (){
    $('button.submit').on('click', function (){
      var titleValue = $('input.title').val();
      var contentValue = $('textarea.content').val();

      $.ajax({
        url: "some.php",
        method: "POST",
        data: { title: titleValue, content: contentValue }
      });

    $('input.title').val('');
    $('textarea.content').val('');
    });
  });