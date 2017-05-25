$(document).ready(function(){
  $('#btn1').on('click', function () {
    if ($('#block3').hasClass('block3_opened')) {
      triggerBlock3()
      setTimeout(function() {
        triggerBlock2()
      }, 100);
    } else {
      triggerBlock2()
    }
  });
  $('#btn2').on('click', function () { 
    if ($('#block2').hasClass('block2_opened')) {
      triggerBlock2()
      setTimeout(function() {
        triggerBlock3()
      }, 100);
    } else {
      triggerBlock3()
    }
  });
  function triggerBlock2() {
    if ($('#block2').hasClass('block2_opened')) {
      $(':first-child', $('#block2')).removeClass('znach-table_show')
      $('#btn1').removeClass('block1_opened')
      $('#btn1 .content__arrow').removeClass('content__arrow_rotate')
      setTimeout(function () {
          $('#block2').removeClass('block2_opened');
      }, 100)
    } else {
      $('#block2').addClass('block2_opened');
      $('#btn1').addClass('block1_opened')
      $('#btn1 .content__arrow').addClass('content__arrow_rotate')
      setTimeout(function () {
          $(':first-child', $('#block2')).addClass('znach-table_show')
      }, 200)
    }
  }
  function triggerBlock3() {
    if ($('#block3').hasClass('block3_opened')) {
      $(':first-child', $('#block3')).removeClass('vicheti-table_show')
      $('#btn2').removeClass('block1_opened')
      $('#btn2 .content__arrow').removeClass('content__arrow_rotate')
      setTimeout(function () {
          $('#block3').removeClass('block3_opened');
      }, 100)
    } else {
      $('#block3').addClass('block3_opened');
      $('#btn2').addClass('block1_opened')
      $('#btn2 .content__arrow').addClass('content__arrow_rotate')
      setTimeout(function () {
          $(':first-child', $('#block3')).addClass('vicheti-table_show')
      }, 200)
    }
  }

  $('.block2 .znach-table .body-row__cell').hover(function () {
    var index = $(this).index()
    var parentChildren = $(this).parent().children()
    var parentParentChildren = $(this).parent().parent().children()
    var parentIndex = $(this).parent().index()
    var hasContent = $($(this).children()[0]).text() != ''
    if (parentParentChildren && hasContent) {
      $(this).addClass('body-row__cell_active')
      $($('.block2 .znach-table .head-row').children()[$(this).index()]).find('.head-row__text').addClass('head-row__text_highlight')
      for (i = 0; i < parentParentChildren.length; i++) {
        if (i < parentIndex && i != 0) {
          $($(parentParentChildren[i]).children()[index]).addClass('body-row__cell_grey')
        }
      }
    }
    if (parentChildren && hasContent) {
      for (i = 0; i < parentChildren.length; i++) {
        if (i < index) {
          $(parentChildren[i]).addClass('body-row__cell_grey')
        }
      }
    }
  }, function () {
    var index = $(this).index()
    var parentChildren = $(this).parent().children()
    var parentParentChildren = $(this).parent().parent().children()
    var parentIndex = $(this).parent().index()
    var hasContent = $($(this).children()[0]).text() != ''
    if (parentParentChildren && hasContent) {
      $(this).removeClass('body-row__cell_active')
      $($('.block2 .znach-table .head-row').children()[$(this).index()]).find('.head-row__text').removeClass('head-row__text_highlight')
      for (i = 0; i < parentParentChildren.length; i++) {
        if (i < parentIndex && i != 0) {
          $($(parentParentChildren[i]).children()[index]).removeClass('body-row__cell_grey')
        }
      }
    }
    if (parentChildren && hasContent) {
      for (i = 0; i < parentChildren.length; i++) {
        if (i < index) {
          $(parentChildren[i]).removeClass('body-row__cell_grey')
        }
      }
    }
  });
  $('.block3 .vicheti-table .body-row__cell').hover(function () {
    var index = $(this).index()
    var index = $(this).index()
    var parentChildren = $(this).parent().children()
    var parentParentChildren = $(this).parent().parent().children()
    var parentIndex = $(this).parent().index()
    if (parentParentChildren && parentChildren.length > 1) {
      $(this).addClass('body-row__cell_active')
      $($('.block3 .vicheti-table .head-row').children()[$(this).index()]).find('.head-row__text').addClass('head-row__text_highlight')
      for (i = 0; i < parentParentChildren.length; i++) {
        if (i < parentIndex && i != 0) {
          $($(parentParentChildren[i]).children()[index]).addClass('body-row__cell_grey')
        }
      }
    }
    if (parentChildren && parentChildren.length > 1) {
      for (i = 0; i < parentChildren.length; i++) {
        if (i < index) {
          $(parentChildren[i]).addClass('body-row__cell_grey')
        }
      }
    }
  }, function () {
    var index = $(this).index()
    var parentChildren = $(this).parent().children()
    var parentParentChildren = $(this).parent().parent().children()
    var parentIndex = $(this).parent().index()
    if (parentParentChildren && parentChildren.length > 1) {
      $(this).removeClass('body-row__cell_active')
      $($('.block3 .vicheti-table .head-row').children()[$(this).index()]).find('.head-row__text').removeClass('head-row__text_highlight')
      for (i = 0; i < parentParentChildren.length; i++) {
        if (i < parentIndex && i != 0) {
          $($(parentParentChildren[i]).children()[index]).removeClass('body-row__cell_grey')
        }
      }
    }
    if (parentChildren && parentChildren.length > 1) {
      for (i = 0; i < parentChildren.length; i++) {
        if (i < index) {
          $(parentChildren[i]).removeClass('body-row__cell_grey')
        }
      }
    }
  });
});