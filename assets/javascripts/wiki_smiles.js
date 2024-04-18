emoticons = [];

// Smiles generator
jsToolBar.prototype.smilesMenu = function(fn) {
  var menu = $('<table class="smiles-generator"></table>');
  var cols = 5;

  for (var r = 0; r < Math.round(emoticons.length / cols); r++) {
    var row = $('<tr></tr>').appendTo(menu);
    for (var c = 0; c < cols; c++) {
      var emoticon = emoticons[cols * r + c];
      var col = $('<td></td>').appendTo(row);
      if (emoticon) {
        $('<img>').data('emoticon', emoticon[0]).attr('title', emoticon[1]).attr('src', emoticon[2]).mousedown(function() {
          fn($(this).data('emoticon'));
        }).appendTo(col);
      }
    }
  }

  menu.position({
    my: 'left top',
    at: 'left bottom',
    of: this.toolNodes['smiles']
  });
  $('body').append(menu);
  $(document).on('mousedown', function() {
    menu.remove();
  });
  return false;
};

// Smiles
jsToolBar.prototype.elements.smiles = {
  type: 'button',
  title: 'Smiles',
  fn: {
    wiki: function() {
      var that = this;
      this.smilesMenu(function(emoticon){
        that.encloseSelection(emoticon);
      });
    }
  }
};
