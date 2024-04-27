ServerEvents.recipes(event => {
  event.replaceOutput({ id: 'techreborn:crafting_table/manual' }, 'techreborn:manual', Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tr_guide"}'));
  event.shapeless('ae2:cable_anchor', ['ae2:facade']);

  event.custom({
    type: "thermal:press",
    ingredients: [{ item: "minecraft:dried_kelp_block" }],
    result: [{ item: "sushigocrafting:nori_sheets", count: 4 }],
    energy: 800
  });
});
