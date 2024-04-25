ServerEvents.tags('block', event => {
  event.add('irons_spellbooks:spectral_hammer_mineable', ['twigs:rhyolite', 'twigs:schist']);
});

ServerEvents.tags('entity_type', event => {
  // Make all entities unlaunchable -- this is a workaround because the ability to yeet mobs in the air is more annoying than helpful...
  event.add(
    'aether:unlaunchable',
    Utils.getRegistryIds(new ResourceLocation('minecraft', 'entity_type')).map(x => `${x.getNamespace()}:${x.getPath()}`)
  );
});

ServerEvents.tags('block', event => {
  event.add(
    'aether:gravitite_ability_blacklist',
    Utils.getRegistryIds(new ResourceLocation('minecraft', 'block')).map(x => `${x.getNamespace()}:${x.getPath()}`)
  );
});