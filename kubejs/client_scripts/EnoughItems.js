JEIEvents.addItems(event => {
  event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tr_guide"}'));

  const candidates = [];
  Ingredient.all.getStacks().forEach(x => {
    if (x.getMod() !== 'architects_palette') return;
    candidates.push(x);
  });

  candidates.sort((a, b) => a.getDisplayName() > b.getDisplayName()).forEach(x => event.add(x));
});

JEIEvents.hide('item', event => {
  const toRemove = JsonIO.read('kubejs/globals/nuked.json').items;
  toRemove.forEach(x => event.hide(x));
  event.hide('techreborn:manual');
});