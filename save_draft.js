(function ($) {

/**
 * Remove publication status from the "Content promotion options" vertical tab.
 */
Drupal.behaviors.saveDraftFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.node-promotion-options', context).drupalSetSummary(function (context) {
      var vals = [];

      $('input:checked', context).parent().each(function () {
        vals.push(Drupal.checkPlain($.trim($(this).text())));
      });
      if (vals.length) {
        return vals.join(', ');
      }
      else {
        return Drupal.t('Not promoted');
      }
    });
  }
};

Drupal.behaviors.moreSaveDraftFieldsetSummaries = {
  attach: function (context) {
    $('fieldset#edit-save-draft', context).drupalSetSummary(function (context) {

      // Retrieve the value of the selected radio button
      var save_draft = $("input[@name=#edit-savedraft]:checked").val();

      if (save_draft==0) {
        return Drupal.t('Disabled')
      }
      else if (save_draft==1) {
        return Drupal.t('Enabled')
      }
      
    });
  }
};

})(jQuery);
