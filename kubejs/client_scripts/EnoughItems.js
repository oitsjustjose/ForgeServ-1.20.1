REIEvents.hide('item', event => {
  const toRemove = JsonIO.read('kubejs/globals/nuked.json').items;
  toRemove.forEach(x => event.hide(x));
});