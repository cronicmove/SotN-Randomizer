// This is a generated file. Do not edit it directly.
// Make your changes to presets/speedrun.json then rebuild
// this file with `npm run build-presets -- speedrun`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"speedrun","name":"Speedrun","description":"Requires knowledge of movement mechanics used in glitchless speedruns.","author":"3snow_p7im","weight":-300},"thrustSwordAbility":true,"blockItems":[{"zone":"*","item":"*","replacement":["Estoc","Claymore","Flamberge","Zwei hander","Obsidian sword"]}],"blockDrops":[{"enemy":"*","items":["Estoc","Claymore","Flamberge","Zwei hander","Obsidian sword"]}],"lockLocation":[{"location":"Soul of Bat","comment":"Requires Mist","locks":["Form of Mist"]},{"location":"Fire of Bat","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword","Form of Mist + Power of Mist"]},{"location":"Echo of Bat","comment":"Requires flight + a transformation","locks":["Soul of Bat","Gravity Boots + Form of Mist","Gravity Boots + Soul of Wolf","Form of Mist + Power of Mist"]},{"location":"Force of Echo","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Power of Wolf","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword","Form of Mist + Power of Mist"]},{"location":"Skill of Wolf","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Form of Mist","comment":"Requires at least Leap Stone or a transformation","locks":["Leap Stone","Gravity Boots","Soul of Bat","Soul of Wolf","Form of Mist","Thrust sword"]},{"location":"Power of Mist","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword","Form of Mist + Power of Mist"]},{"location":"Gas Cloud","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Gravity Boots","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword","Form of Mist + Power of Mist"]},{"location":"Holy Symbol","comment":"Requires Jewel of Open and Merman Statue","locks":["Jewel of Open + Merman Statue"]},{"location":"Merman Statue","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Bat Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Ghost Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword","Form of Mist + Power of Mist"]},{"location":"Faerie Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Soul of Wolf","Form of Mist","Leap Stone","Thrust sword"]},{"location":"Demon Card","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Form of Mist","Leap Stone","Gravity Boots"]},{"location":"Sword Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword","Form of Mist + Power of Mist"]},{"location":"Heart of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Tooth of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Rib of Vlad","comment":"In second castle + transformation","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Eye of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Spike Breaker","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone + Spike Breaker","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Gravity Boots + Form of Mist + Spike Breaker","Jewel of Open + Gravity Boots + Soul of Wolf + Spike Breaker","Jewel of Open + Gravity Boots + Thrust sword + Spike Breaker"],"escapeRequires":["Soul of Bat","Form of Mist + Power of Mist","Leap Stone","Gravity Boots"]},{"location":"Gold ring","comment":"Requires Jewel of Open + flight, Jewel of Open + Soul of Wolf + Skill of Wolf, or Jewel of Open + Soul of Wolf + Leap Stone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Skill of Wolf","Jewel of Open + Soul of Wolf + Leap Stone"]},{"location":"Silver ring","comment":"Requires Jewel of Open + Form of Mist + Soul of Bat","locks":["Jewel of Open + Form of Mist + Soul of Bat","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Holy glasses","comment":"Access to Holy glasses must also give flight","locks":["Silver ring + Gold ring"],"escapeRequires":["Soul of Bat","Gravity Boots + Leap Stone","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword","Form of Mist + Power of Mist"]},{"location":"Crystal cloak","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Mormegil","comment":"Access to Mormegil must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Soul of Wolf","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Form of Mist","Leap Stone","Gravity Boots"]},{"location":"Dark Blade","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Arcana","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Trio","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Walk armor","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Soul of Wolf","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Icebrand","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Soul of Wolf","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bloodstone","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Soul of Wolf","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Combat knife","comment":"Requires Jewel of Open + at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Soul of Wolf","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist"],"comments":"Access must also give at least Leap Stone","escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Ring of Ares","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Demon Card + Leap Stone","Jewel of Open + Demon Card + Soul of Bat","Jewel of Open + Demon Card + Soul of Wolf","Jewel of Open + Demon Card + Gravity Boots + Soul of Wolf","Jewel of Open + Demon Card + Gravity Boots + Form of Mist","Jewel of Open + Demon Card + Gravity Boots + Thrust sword","Jewel of Open + Demon Card + Form of Mist + Power of Mist","Jewel of Open + Nosedevil Card + Leap Stone","Jewel of Open + Nosedevil Card + Soul of Bat","Jewel of Open + Nosedevil Card + Soul of Wolf","Jewel of Open + Nosedevil Card + Gravity Boots + Soul of Wolf","Jewel of Open + Nosedevil Card + Gravity Boots + Form of Mist","Jewel of Open + Nosedevil Card + Gravity Boots + Thrust sword","Jewel of Open + Nosedevil Card + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Caverns Onyx","comment":"Requires Jewel of Open + at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Soul of Wolf","Jewel of Open + Merman Statue","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Knuckle duster","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Bandanna","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Nunchaku","comment":"Requires Jewel of Open + Holy Symbol","locks":["Jewel of Open"]},{"location":"Secret boots","comment":"Requires Jewel of Open + flight","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword"]},{"location":"Holy mail","comment":"Requires flight","locks":["Leap Stone","Soul of Bat","Form of Mist + Power of Mist","Jewel of Open + Gravity Boots + Soul of Wolf","Jewel of Open + Gravity Boots + Form of Mist","Jewel of Open + Gravity Boots + Thrust sword"]},{"location":"Jewel sword","comment":"Requires Wolf + Bat","locks":["Soul of Wolf + Soul of Bat"]},{"location":"Mystic pendant","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Ankh of Life","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Morningstar","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Goggles","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Silver plate","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Cutlass","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Platinum mail","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Falchion","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist"]},{"location":"Gold plate","comment":"Requires at least Leap Stone","locks":[]},{"location":"Bekatowa","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Holy rod","comment":"Requires at least Gravity Boots","locks":["Leap Stone","Soul of Bat","Gravity Boots","Form of Mist + Thrust sword"]},{"location":"Library Onyx","comment":"Requires at least Soul of Wolf","locks":["Soul of Bat","Soul of Wolf","Form of Mist","Leap Stone","Thrust sword","Gravity Boots"]},{"location":"Alucart sword","comment":"Requires at least Cube of Zoe + at least Leap Stone","locks":["Cube of Zoe + Soul of Bat","Cube of Zoe + Soul of Wolf","Cube of Zoe + Thrust sword","Cube of Zoe + Leap Stone","Cube of Zoe + Gravity Boots","Cube of Zoe + Form of Mist"]},{"location":"Broadsword","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Soul of Wolf","Form of Mist","Leap Stone","Thrust sword","Gravity Boots"]},{"location":"Estoc","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword"]},{"location":"Olrox Garnet","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist","Gravity Boots + Soul of Wolf","Gravity Boots + Form of Mist","Gravity Boots + Thrust sword"]},{"location":"Blood cloak","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Soul of Wolf","Form of Mist","Leap Stone","Thrust sword","Gravity Boots"]},{"location":"Shield rod","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Soul of Wolf","Form of Mist","Leap Stone","Thrust sword","Gravity Boots"]},{"location":"Knight shield","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Soul of Wolf","Form of Mist","Leap Stone","Thrust sword","Gravity Boots"]},{"location":"Holy sword","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bastard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Royal cloak","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Lightning mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Sword of Dawn","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Moon rod","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Sunstone","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Luminus","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Dragon helm","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Shotel","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Form of Mist + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Form of Mist + Gravity Boots + Thrust sword"]},{"location":"Staurolite","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Form of Mist + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Form of Mist + Gravity Boots + Thrust sword"]},{"location":"Badelaire","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Forbidden Library Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Reverse Caverns Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Reverse Caverns Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Reverse Caverns Garnet","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Osafune katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Alucard shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Alucard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Necklace of J","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Floating Catacombs Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Sword of Hador","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Alucard mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Gram","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Fury plate","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Talwar","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Twilight cloak","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Form of Mist + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Form of Mist + Gravity Boots + Thrust sword"]},{"location":"Goddess shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Beryl circlet","comment":"Requires Holy glasses + Bat + Wolf","locks":["Holy glasses + Soul of Bat + Soul of Wolf"]},{"location":"Talisman","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]},{"location":"Katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist","Holy glasses + Gravity Boots + Soul of Wolf","Holy glasses + Gravity Boots + Form of Mist","Holy glasses + Gravity Boots + Thrust sword"]}],"complexityGoal":{"min":8,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]}})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
