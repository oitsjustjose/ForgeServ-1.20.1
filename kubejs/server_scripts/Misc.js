ServerEvents.recipes(event => {
  event.replaceOutput({ id: 'techreborn:crafting_table/manual' }, 'techreborn:manual', Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tr_guide"}'));
});
