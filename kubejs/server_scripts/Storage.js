ServerEvents.recipes(event => {
  /* Expanded Storage */
  event.replaceInput({}, 'minecraft:chest', 'expandedstorage:wood_chest');
  event.replaceOutput({}, 'minecraft:chest', 'expandedstorage:wood_chest');

  event.shapeless('minecraft:chest', ['expandedstorage:wood_chest']);
  event.shapeless('expandedstorage:wood_chest', ['minecraft:chest']);

  event.remove({ output: 'expandedstorage:old_wood_chest' });
  event.shapeless('expandedstorage:old_wood_chest', ['expandedstorage:wood_chest', '#minecraft:planks']);
  event.remove('expandedstorage:wood_chest');

  /* Dim Storage */
  event.shaped('dimstorage:dimensional_chest', ['SSS', 'DED', 'SSS'], {
    S: '#forge:ingots/steel',
    E: 'minecraft:ender_chest',
    D: 'supplementaries:crystal_display'
  });

  event.shaped('dimstorage:dimensional_tank', ['SDS', 'STS', 'SDS'], {
    S: '#forge:ingots/steel',
    T: 'mekanism:basic_fluid_tank',
    D: 'supplementaries:crystal_display'
  });

  event.shaped('dimstorage:dimensional_tablet', ['SSS', 'LDL', 'SSS'], {
    S: '#forge:ingots/steel',
    D: 'supplementaries:crystal_display',
    L: 'minecraft:leather'
  });

  /* Framed Storage Drawers */
  event.remove('framedcompactdrawers:framed_compact_drawer');
  event.remove('framedcompactdrawers:framed_drawer_controller');
  event.remove('framedcompactdrawers:framed_full_four');
  event.remove('framedcompactdrawers:framed_full_one');
  event.remove('framedcompactdrawers:framed_full_two');
  event.remove('framedcompactdrawers:framed_half_four');
  event.remove('framedcompactdrawers:framed_half_one');
  event.remove('framedcompactdrawers:framed_half_two');
  event.remove('framedcompactdrawers:framed_slave');
  event.remove('framedcompactdrawers:framed_trim');

  event.shaped('framedcompactdrawers:framed_full_one', ['FFF', ' C ', 'FFF'], {
    F: 'framedblocks:framed_cube',
    C: '#forge:chests/wooden',
  });

  event.shaped(Item.of('framedcompactdrawers:framed_full_two', 2), ['FFF', 'CFC', 'FFF'], {
    F: 'framedblocks:framed_cube',
    C: '#forge:chests/wooden',
  });

  event.shaped(Item.of('framedcompactdrawers:framed_full_four', 4), ['CFC', 'FFF', 'CFC'], {
    F: 'framedblocks:framed_cube',
    C: '#forge:chests/wooden',
  });

  event.shaped('framedcompactdrawers:framed_half_one', ['FFF', ' C ', 'FFF'], {
    F: 'framedblocks:framed_slab',
    C: '#forge:chests/wooden',
  });

  event.shaped(Item.of('framedcompactdrawers:framed_half_two', 2), ['FFF', 'CFC', 'FFF'], {
    F: 'framedblocks:framed_slab',
    C: '#forge:chests/wooden',
  });

  event.shaped(Item.of('framedcompactdrawers:framed_half_four', 4), ['CFC', 'FFF', 'CFC'], {
    F: 'framedblocks:framed_slab',
    C: '#forge:chests/wooden',
  });

  event.shaped('framedcompactdrawers:framed_trim', ['FSF', 'SFS', 'FSF'], {
    S: 'minecraft:stick',
    F: 'framedblocks:framed_cube',
  });

  event.shaped('framedcompactdrawers:framed_slave', ['FFF', 'CDC', 'FGF'], {
    F: 'framedblocks:framed_cube',
    D: '#storagedrawers:drawers',
    C: 'minecraft:comparator',
    G: '#forge:ingots/gold',
  });

  event.shaped('framedcompactdrawers:framed_drawer_controller', ['FFF', 'CDC', 'FGF'], {
    F: 'framedblocks:framed_cube',
    D: '#storagedrawers:drawers',
    C: 'minecraft:comparator',
    G: 'minecraft:diamond',
  });

  event.shaped('framedcompactdrawers:framed_compact_drawer', ['FFF', 'PDP', 'FGF'], {
    F: 'framedblocks:framed_cube',
    D: '#storagedrawers:drawers',
    P: 'minecraft:piston',
    G: '#forge:ingots/iron',
  });
});