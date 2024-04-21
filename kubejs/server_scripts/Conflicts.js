ServerEvents.recipes(event => {
  /* Sheets */
  [
    'black',
    'blue',
    'brown',
    'cyan',
    'gray',
    'green',
    'light_blue',
    'light_gray',
    'lime',
    'magenta',
    'orange',
    'pink',
    'purple',
    'red',
    'white',
    'yellow'
  ].forEach(color => {
    event.remove(`handcrafted:${color}_sheet`);
    event.shaped(Item.of(`handcrafted:${color}_sheet`, 3), ['CCC'], { C: `minecraft:${color}_carpet` });
  });

  /* Plaques */
  event.remove({ output: 'suppsquared:copper_plaque' });
  event.shapeless(Item.of('suppsquared:copper_plaque', 1), ['#forge:plates/copper']);
  event.remove({ output: 'suppsquared:gold_plaque' });
  event.shapeless(Item.of('suppsquared:gold_plaque', 1), ['#forge:plates/gold']);
  event.remove({ output: 'suppsquared:iron_plaque' });
  event.shapeless(Item.of('suppsquared:iron_plaque', 1), ['#forge:plates/iron']);

  /* Misc */
  event.remove('architects_palette:basalt_tiles');
  event.remove('architects_palette:calcite_bricks');
  event.remove('architects_palette:dripstone_bricks');
  event.remove('architects_palette:hadaline_bricks');
  event.remove('architects_palette:hadaline_tiles');
  event.remove('architects_palette:tuff_bricks');
  event.remove('enderio:stick');
  event.remove('quark:building/crafting/cobblestone_bricks');
  event.remove('quark:building/crafting/mossy_cobblestone_bricks');
  event.remove('quark:building/crafting/stairs/calcite_stairs');
  event.remove('quark:building/crafting/stairs/tuff_stairs');
  event.remove('quark:building/crafting/stonevariants/vanilla/polished_calcite');
  event.remove('quark:building/crafting/stonevariants/vanilla/polished_dripstone');
  event.remove('quark:building/crafting/stonevariants/vanilla/polished_tuff');
  event.remove('quark:building/crafting/walls/calcite_wall');
  event.remove('quark:building/crafting/walls/tuff_wall');
  event.remove('regions_unexplored:blackstone_cluster');
  event.remove('techreborn:crafting_table/machine/iron_furnace');
  event.remove('twigs:calcite_stairs');
  event.remove('twigs:calcite_wall');
  event.remove('twigs:cobblestone_bricks');
  event.remove('twigs:mossy_cobblestone_bricks_cobblestone');
  event.remove('twigs:polished_basalt_bricks');
  event.remove('twigs:tuff_stairs');
  event.remove('twigs:tuff_wall');
  event.remove({ output: 'enderio:wood_gear' });

  event.remove('supplementaries:timber_frame');
  event.shaped(Item.of('supplementaries:timber_frame', 3), ['SSS', 'S S', 'SSS'], { S: 'minecraft:stick' });

  event.remove('ecologics:pot');
  event.shapeless('handcrafted:terracotta_thick_pot', ['ecologics:pot']);
  event.shapeless('ecologics:pot', ['handcrafted:terracotta_thick_pot']);

  /* Laboratory Blocks have weird recipes... */
  event.remove({ output: 'laboratoryblocks:starch' });
  event.remove({ output: 'laboratoryblocks:compressed_starch' });
  event.remove({ output: 'laboratoryblocks:pla_sheets' });
  event.replaceInput({}, 'laboratoryblocks:pla_sheets', '#forge:plastic');

  event.replaceInput({}, 'laboratoryblocks:glowstone_particles', '#forge:small_dusts/glowstone');
  event.replaceInput({}, 'laboratoryblocks:redstone_particles', '#forge:small_dusts/redstone');

  /* For some reason this recipe sometimes decides not to exist. Fix that I guess? */
  event.remove({ output: 'minecraft:glass', type: 'minecraft:smelting' });
  event.smelting('minecraft:glass', '#minecraft:sand');
  event.blasting('minecraft:glass', '#minecraft:sand');
});