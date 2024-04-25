ServerEvents.recipes(event => {
  event.replaceOutput({ id: 'techreborn:crafting_table/manual' }, 'techreborn:manual', Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tr_guide"}'));
});

PlayerEvents.loggedIn(event => {
  if (event.hasGameStage('charmed')) return;

  event.addGameStage('charmed');
  event.getServer().runCommand(`curios add charm ${event.player.username} 1`);
  event.getServer().runCommand(`msg ${event.player.username} A new charm has appeared in your Curios slots...`);
});