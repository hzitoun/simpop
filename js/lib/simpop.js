if ('undefined' == typeof window.jQuery) {
  throw new Error('jQuery is required!');
} else if ('undefined' == typeof window.jQuery.ui) {
  throw new Error('jQuery ui is required!');
}
$('simpop').each(function () {
  var attributes = $(this).context.attributes;
  $(this).html(attributes.text ? attributes.text.value : '');
  var confirmbtn = attributes.confirmbtn ? attributes.confirmbtn.value : 'Yes';
  var cancelbtn = attributes.cancelbtn ? attributes.cancelbtn.value : 'No';
  var height = attributes.height ? attributes.height.value : 120;
  var width = attributes.width ? attributes.width.value : 400;
  var popupClass =  attributes.class ? attributes.class.value : '';
  var resizable = attributes.resizable ? attributes.resizable.value === 'true' : true
  $(this).dialog({
    dialogClass: popupClass,
    height: height,
    width: width,
    autoOpen: false,
    resizable: resizable,
    buttons: [
      {
        text: confirmbtn,
        click: function () {
          if (attributes.onconfirm) {
            (Function(attributes.onconfirm.value)) ()
          }
          $(this).dialog('close');
        }
      },
      {
        text: cancelbtn,
        click: function () {
          if (attributes.oncancel) {
            (Function(attributes.oncancel.value)) ()
          }
          $(this).dialog('close');
        }
      }
    ]
  });
eval(attributes.id.value).open = function(){
 	$(this).dialog('open');
 } 
});
