
import type { GameClass, Item } from './types';

export const gameClasses: GameClass[] = [
  {
    id: 'wizard',
    name: 'Wizard',
  },
  {
    id: 'assassin',
    name: 'Assassin',
  },
  {
    id: 'heavyblade',
    name: 'Heavyblade',
  },
  {
    id: 'dancer',
    name: 'Dancer',
  },
  {
    id: 'druid',
    name: 'Druid',
  },
  {
    id: 'spellsword',
    name: 'Spellsword',
  },
  {
    id: 'sniper',
    name: 'Sniper',
  },
  {
    id: 'bruiser',
    name: 'Bruiser',
  },
  {
    id: 'defender',
    name: 'Defender',
  },
  {
    id: 'ancient',
    name: 'Ancient',
  },
];

export const items: Item[] = 
  [
    {
      "name": "Raven Grimoire",
      "description": "Your Special applies Curse.",
      "imageUrl": "/items/raven_grimoire.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
    {
      "name": "Blackwing Staff",
      "description": "Your Primary applies Curse.",
      "imageUrl": "/items/blackwing_staff.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
    {
      "name": "Curse Talon",
      "description": "Your Secondary applies Curse.",
      "imageUrl": "/items/curse_talon.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
    {
      "name": "Darkmagic Blade",
      "description": "Every 10s, slices the air around you dealing 300 damage and applying Curse to nearby enemies.",
      "imageUrl": "/items/darkmagic_blade.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
    {
      "name": "Witch's Cloak",
      "description": "Your Secondary deals 10% more damage. Debuffs you place deal 70% more damage. Slightly increases movement speed.",
      "imageUrl": "/items/witchs_cloak.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
    {
      "name": "Crowfeather Hairpin",
      "description": "Increases Special damage by 20%. When you place a debuff on an opponent, your Special has a 50% chance of resetting.",
      "imageUrl": "/items/crowfeather_hairpin.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
    {
      "name": "Redblack Ribbon",
      "description": "You deal 5% more damage. When you place a debuff on an opponent, your Defensive has a 50% chance of resetting.",
      "imageUrl": "/items/redblack_ribbon.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
    {
      "name": "Opal Necklace",
      "description": "When you use your Defensive, apply Curse to all enemies.",
      "imageUrl": "/items/opal_necklace.png",
      "tiers": {
        "wizard": "F",
        "druid": "F",
        "spellsword": "F",
        "assassin": "F",
        "heavyblade": "F",
        "dancer": "F",
        "sniper": "F",
        "bruiser": "F",
        "defender": "F",
        "ancient": "F"
      }
    },
      {
        "name": "Sleeping Greatbow",
        "description": "Every 6s, fires a slow-moving projectile at your targeted enemy that deals 200 damage.",
        "imageUrl": "/items/sleeping_greatbow.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Crescentmoon Dagger",
        "description": "Every 10s, your Secondary will deal an additional 400 damage on hit.",
        "imageUrl": "/items/crescentmoon_dagger.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Lullaby Harp",
        "description": "Every 10s, resets Defensive cooldowns for you and all allies.",
        "imageUrl": "/items/lullaby_harp.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Nightstar Grimoire",
        "description": "Every 25s, deal 900 damage to all enemies.",
        "imageUrl": "/items/nightstar_grimoire.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Moon Pendant",
        "description": "Every 12s, using your Special will deal 400 damage to enemies in a moderate radius around you.",
        "imageUrl": "/items/moon_pendant.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Pajama Hat",
        "description": "Defensive and loot cooldowns are shortened by 2s.",
        "imageUrl": "/items/pajama_hat.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Stuffed Rabbit",
        "description": "Increases Special damage by 20%. Every 12s, using your Special will grant you invulnerability for 3s. Starts battle on cooldown.",
        "imageUrl": "/items/stuffed_rabbit.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Nightingale Gown",
        "description": "Every 15s, Omega Charge attacks deal 3.0x damage when you use your Special.",
        "imageUrl": "/items/nightingale_gown.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Hawkfeather Fan",
        "description": "Reduces your Special's cooldown by 2s.",
        "imageUrl": "/items/hawkfeather_fan.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Windbite Dagger",
        "description": "Your Secondary's GCD becomes 0.5s, but its damage is reduced by 60%.",
        "imageUrl": "/items/windbite_dagger.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Pidgeon Bow",
        "description": "Every 3s, fires a projectile at your targeted enemy that deals 70 damage.",
        "imageUrl": "/items/pidgeon_bow.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Shinsoku Katana",
        "description": "Your Primary's GCD has a 50% chance to be 0.8s instead of its normal amount.",
        "imageUrl": "/items/shinsoku_katana.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Eaglewing Charm",
        "description": "All your abilities deal 20 more damage. Significantly increases movement speed.",
        "imageUrl": "/items/eaglewing_charm.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Sparrow Feather",
        "description": "Deals 50 damage to all enemies when your Primary or Secondary is used.",
        "imageUrl": "/items/sparrow_feather.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Winged Cap",
        "description": "Grants a brief speed boost when your Secondary is used. Moderately increases movement speed.",
        "imageUrl": "/items/winged_cap.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Thief's Coat",
        "description": "Every 10s, gain Vanish and evade attacks until you use an attack. Increases damage dealt by 30% for 3 seconds. Gain a brief speed boost when you use your Special. Moderately increases movement speed.",
        "imageUrl": "/items/thiefs_coat.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Vampiric Dagger",
        "description": "Your Secondary inflicts Bleed. Afflicted enemies take extra damage from your abilities or loot effects. Extra damage is reduced for allies' hits. Strength: 20. Duration: 5 seconds.",
        "imageUrl": "/items/vampiric_dagger.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Bloody Bandage",
        "description": "When you use your Defensive, apply Bleed. Afflicted enemies take extra damage from your abilities or loot effects. Extra damage is reduced for allies' hits. Strength: 20. Duration: 10 seconds to all enemies.",
        "imageUrl": "/items/bloody_bandage.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Leech Staff",
        "description": "Your Primary inflicts Bleed. Afflicted enemies take extra damage from your abilities or loot effects. Extra damage is reduced for allies' hits. Strength: 20. Duration: 5 seconds.",
        "imageUrl": "/items/leech_staff.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Bloodhound Greatsword",
        "description": "Every 12s, slices the air around you dealing 380 damage and applying Bleed. Afflicted enemies take extra damage from your abilities or loot effects. Extra damage is reduced for allies' hits. Strength: 20. Duration: 10 seconds to nearby enemies.",
        "imageUrl": "/items/bloodhound_greatsword.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Reaper Cloak",
        "description": "Your Defensive additionally deals 100 damage 3 times to enemies facing away from you. Slightly increases movement speed.",
        "imageUrl": "/items/reaper_cloak.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Bloodflower Brooch",
        "description": "All abilities deal 40 damage 2 times to enemies facing away from you.",
        "imageUrl": "/items/bloodflower_brooch.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Wolf Hood",
        "description": "Every 6 seconds when you use your Primary, deal 250 damage to enemies facing away from you. Slightly increases movement speed.",
        "imageUrl": "/items/wolf_hood.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Blood Vial",
        "description": "At the start of each fight, inflict all enemies with Sap. Afflicted enemies take extra damage from abilities or loot effects. Strength: 20. Duration: 99 seconds.",
        "imageUrl": "/items/blood_vial.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Black Wakizashi",
        "description": "Your Primary has a 30% chance of dealing an additional 3 blows, dealing 50 damage each, in a radius around your target enemy.",
        "imageUrl": "/items/black_wakizashi.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Throwing Dagger",
        "description": "Every 5s, fires a projectile at your targeted enemy that deals 120 damage. Cooldown resets every time you use your Special.",
        "imageUrl": "/items/throwing_dagger.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Assassin's Knife",
        "description": "Your Secondary has a 30% chance of dealing an additional 2 blows, dealing 50 damage each, in a radius around your target enemy.",
        "imageUrl": "/items/assassins_knife.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Ninjutsu Scroll",
        "description": "Your Special has a 30% chance of dealing an additional 3 blows, dealing 150 damage each, in a radius around your target enemy.",
        "imageUrl": "/items/ninjutsu_scroll.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Shadow Bracelet",
        "description": "Abilities and loot that hit more than once deal 30 more damage.",
        "imageUrl": "/items/shadow_bracelet.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Ninja Robe",
        "description": "When a % chance succeeds, erase projectiles around you and Vanish and evade attacks until you use an attack. Increases damage dealt by 30% for 3 seconds. Slightly increases movement speed.",
        "imageUrl": "/items/ninja_robe.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Kunoichi Hood",
        "description": "Your abilities do 15 more damage. Your loot does 50 more damage. Slightly increases movement speed.",
        "imageUrl": "/items/kunoichi_hood.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Shinobi Tabi",
        "description": "Standing still will cause you to Vanish and evade attacks until you use an attack. Increases damage dealt by 30% for 5 seconds and resets your Special. Available every 8s. Starts battle on cooldown. Slightly increases movement speed.",
        "imageUrl": "/items/shinobi_tabi.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Dragonhead Spear",
        "description": "Your Primary is 40% more powerful, but gains a cooldown of 3s. Also slightly reduces movement speed.",
        "imageUrl": "/items/dragonhead_spear.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Granite Greatsword",
        "description": "Every 16s, slices a large radius around you dealing 700 damage.",
        "imageUrl": "/items/granite_greatsword.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Greysteel Shield",
        "description": "Your Defensive has a 30% larger radius. Invulnerability effects last 1s longer.",
        "imageUrl": "/items/greysteel_shield.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Stonebreaker Staff",
        "description": "Your Special's cooldown is increased by 2s, but deals 40% more damage.",
        "imageUrl": "/items/stonebreaker_staff.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Tough Gauntlet",
        "description": "Your abilities and loot all deal 30% more damage, but all GCDs are 0.2s longer.",
        "imageUrl": "/items/tough_gauntlet.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Rockdragon Mail",
        "description": "Your movement speed is significantly reduced. Will shield you from damage for 2 seconds every 45 seconds. Starts battle on a 5 second cooldown.",
        "imageUrl": "/items/rockdragon_mail.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Obsidian Hairpin",
        "description": "Increases Special damage by 20%. Whenever you gain invulnerability, your Special has a 50% chance of resetting.",
        "imageUrl": "/items/obsidian_hairpin.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Iron Greaves",
        "description": "Every 12s, standing still will grant brief invulnerability and reset your Defensive. Movement speed is slightly reduced. Starts battle on cooldown.",
        "imageUrl": "/items/iron_greaves.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Volcano Spear",
        "description": "Your Primary inflicts Burn. Deals damage upon wearing off, equal to the damage of the hit that applied burn. Duration: 5 seconds.",
        "imageUrl": "/items/volcano_spear.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Reddragon Blade",
        "description": "Your Secondary inflicts Burn. Deals damage upon wearing off, equal to the damage of the hit that applied burn. Duration: 5 seconds.",
        "imageUrl": "/items/reddragon_blade.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Flame Bow",
        "description": "Every 10s, fires a projectile at your targeted enemy that deals 180 damage and applies Burn. Deals damage upon wearing off, equal to the damage of the hit that applied burn. Duration: 5 seconds.",
        "imageUrl": "/items/flame_bow.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Meteor Staff",
        "description": "Your Special inflicts Burn. Deals damage upon wearing off, equal to the damage of the hit that applied burn. Duration: 5 seconds.",
        "imageUrl": "/items/meteor_staff.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Phoenix Charm",
        "description": "If you perish in battle, restore to full HP instead. Only works once.",
        "imageUrl": "/items/phoenix_charm.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Firescale Corset",
        "description": "All of your cooldowns are reduced by 3s. If you use your Defensive, this effect ends until the end of battle.",
        "imageUrl": "/items/firescale_corset.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Demon Horns",
        "description": "All your abilities and loot deal 30% more damage. If you use your Defensive, this effect ends until the end of battle.",
        "imageUrl": "/items/demon_horns.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Flamewalker Boots",
        "description": "All GCDs are shortened by 15% and your movement speed is increased significantly. If you use your Defensive, this effect ends until the end of battle.",
        "imageUrl": "/items/flamewalker_boots.png",
        "tiers": {
          "wizard": "F",
          "druid": "F",
          "spellsword": "F",
          "assassin": "F",
          "heavyblade": "F",
          "dancer": "F",
          "sniper": "F",
          "bruiser": "F",
          "defender": "F",
          "ancient": "F"
        }
      },
      {
        "name": "Diamond Shield",
        "description": "Every 25s, using your Defensive will place down a small field for 3 seconds that erases projectiles. While standing in the field, allies don't take damage. Starts battle on a 5 second cooldown.",
        "imageUrl": "/items/diamond_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Peridot Rapier",
        "description": "Increases Secondary damage by 20%. Every 8s, using your Secondary will grant you brief invulnerability and erase projectiles in a large radius around you.",
        "imageUrl": "/items/peridot_rapier.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Garnet Staff",
        "description": "Increases Special damage by 20%. Your Special will erase projectiles in a radius around you and grant brief invulnerability.",
        "imageUrl": "/items/garnet_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sapphire Violin",
        "description": "Every 18s, grants Elegy. Deal 30% more damage for 8 seconds to all allies. Breaks if you take damage 2 times. Starts battle on cooldown.",
        "imageUrl": "/items/sapphire_violin.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Emerald Chestplate",
        "description": "The counter on this item will decrease instead of you taking damage. The counter starts at 3 on pickup.",
        "imageUrl": "/items/emerald_chestplate.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Amethyst Bracelet",
        "description": "Deal 30% more damage. Breaks if you take damage 3 times.",
        "imageUrl": "/items/amethyst_bracelet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Topaz Charm",
        "description": "Gain 8 extra Gold at the end of each fight. Breaks if you take damage 3 times.",
        "imageUrl": "/items/topaz_charm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Ruby Circlet",
        "description": "Your Special deals 80% more damage. Breaks if you take damage once.",
        "imageUrl": "/items/ruby_circlet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Brightstorm Spear",
        "description": "Has a 30% chance of dealing 100 damage to all enemies when your Primary does damage.",
        "imageUrl": "/items/brightstorm_spear.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Bolt Staff",
        "description": "Deals 150 damage to all enemies when you use your Special.",
        "imageUrl": "/items/bolt_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Lightning Bow",
        "description": "Every 12s, fires a projectile at your targeted enemy that deals 300 damage. Cooldown instantly resets when a % chance succeeds.",
        "imageUrl": "/items/lightning_bow.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Darkstorm Knife",
        "description": "Has a 30% chance of dealing 100 damage to all enemies when your Secondary does damage.",
        "imageUrl": "/items/darkstorm_knife.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Darkcloud Necklace",
        "description": "Damage from loot is increased by 50%.",
        "imageUrl": "/items/darkcloud_necklace.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Crown of Storms",
        "description": "When a % chance succeeds, deal 200 damage to all enemies.",
        "imageUrl": "/items/crown_of_storms.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Thunderclap Gloves",
        "description": "All abilities have a 20% chance of dealing 200 damage to all enemies when used.",
        "imageUrl": "/items/thunderclap_gloves.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Storm Petticoat",
        "description": "Deal 250 damage to all enemies when you gain invulnerability.",
        "imageUrl": "/items/storm_petticoat.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Holy Greatsword",
        "description": "Every 10s, grants you Smite. Deal 10% more damage for 10 seconds and then slice the air around you, dealing 200 damage to nearby enemies.",
        "imageUrl": "/items/holy_greatsword.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sacred Bow",
        "description": "Every 10s, fires a projectile at your targeted enemy that deals 250 damage. Cooldown instantly resets when you gain a buff.",
        "imageUrl": "/items/sacred_bow.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Purification Rod",
        "description": "Every 18s, using your Primary will give you Elegy. Deal 30% more damage for 5 seconds.",
        "imageUrl": "/items/purification_rod.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Ornamental Bell",
        "description": "Every 15s, grants Smite. Deal 10% more damage for 10 seconds to all allies.",
        "imageUrl": "/items/ornamental_bell.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Shrinemaiden's Kosode",
        "description": "When you have a buff, your movement speed increases significantly and you deal 25% more damage.",
        "imageUrl": "/items/shrinemaidens_kosode.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Redwhite Ribbon",
        "description": "You deal 5% more damage. Buffs you place last 50% longer.",
        "imageUrl": "/items/redwhite_ribbon.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Divine Mirror",
        "description": "Every 10 times you use an ability, deal 500 damage to all enemies.",
        "imageUrl": "/items/divine_mirror.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Golden Chime",
        "description": "Every 2 times you use your Defensive, gain Elegy. Deal 30% more damage for 8 seconds.",
        "imageUrl": "/items/golden_chime.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Book of Cheats",
        "description": "Your Special will have random, chaotic effects.",
        "imageUrl": "/items/book_of_cheats.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Golden Katana",
        "description": "Your Primary and Secondary have a 5% chance to deal 100 damage 5 times to a large radius around your targeted enemy when used.",
        "imageUrl": "/items/golden_katana.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Glittering Trumpet",
        "description": "Every 20s, grant Rabbitluck to all allies for 5 seconds. Cooldown cannot be reset by ability or loot effects.",
        "imageUrl": "/items/glittering_trumpet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Royal Staff",
        "description": "Your Special deals extra damage based on how much gold you have (1% for every 1 gold).",
        "imageUrl": "/items/royal_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Ballroom Gown",
        "description": "Makes you slightly luckier and slightly increases your movement speed.",
        "imageUrl": "/items/ballroom_gown.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Silver Coin",
        "description": "On pickup, gain 30 gold.",
        "imageUrl": "/items/silver_coin.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Queen's Crown",
        "description": "Critical hits now deal 175% extra damage, instead of their normal 75% extra damage.",
        "imageUrl": "/items/queens_crown.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Mimick Rabbitfoot",
        "description": "Makes you significantly luckier. Not a real rabbit's foot.",
        "imageUrl": "/items/mimick_rabbitfoot.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Butterfly Ocarina",
        "description": "On pickup, heal all allies for 1. Heals all allies for 1 HP every 2 fights.",
        "imageUrl": "/items/butterfly_ocarina.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Fairy Spear",
        "description": "Your Primary has a 30% larger radius and deals 40% more damage, but stops movement when used.",
        "imageUrl": "/items/fairy_spear.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Moss Shield",
        "description": "Every 12s, using your Defensive will reset its cooldown instantly.",
        "imageUrl": "/items/moss_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Floral Bow",
        "description": "Every 6s, fires a projectile at your targeted enemy that deals 250 damage. Only activates while standing still.",
        "imageUrl": "/items/floral_bow.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Blue Rose",
        "description": "Your max HP is increased by 1. Has a 50% chance of healing you for 1 and granting you 100 XP at the end of each fight.",
        "imageUrl": "/items/blue_rose.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sunflower Crown",
        "description": "Your max HP is increased by 1. You become able to graze slightly into a projectile without taking damage. Slightly increases movement speed.",
        "imageUrl": "/items/sunflower_crown.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Midsummer Dress",
        "description": "Your max HP is increased by 1. Ability or loot effects that temporarily slow your movement no longer affect you. Slightly increases movement speed.",
        "imageUrl": "/items/midsummer_dress.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Grasswoven Bracelet",
        "description": "Your max HP is increased by 1. All abilities and loot hitboxes are 30% larger. Slightly increases movement speed.",
        "imageUrl": "/items/grasswoven_bracelet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Snakefang Dagger",
        "description": "Your Secondary applies Poison, dealing damage once per second. Strength: 30. Duration: 5 seconds.",
        "imageUrl": "/items/snakefang_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Ivy Staff",
        "description": "Your Primary applies Poison, dealing damage once per second. Strength: 30. Duration: 5 seconds.",
        "imageUrl": "/items/ivy_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Deathcap Tome",
        "description": "Your Special applies Poison, dealing damage once per second. Strength: 40. Duration: 5 seconds.",
        "imageUrl": "/items/deathcap_tome.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Spiderbite Bow",
        "description": "Every 10s, fires a projectile at your targeted enemy that deals 50 damage and applies Poison, dealing damage once per second. Strength: 40. Duration: 5 seconds.",
        "imageUrl": "/items/spiderbite_bow.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Compound Gloves",
        "description": "When you deal damage, has a 10% chance to apply Decay, dealing damage once per second. Strength: 30. Duration: 30 seconds.",
        "imageUrl": "/items/compound_gloves.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Poisonfrog Charm",
        "description": "When a % chance succeeds, apply Poison to all enemies, dealing damage once per second. Strength: 50. Duration: 5 seconds.",
        "imageUrl": "/items/poisonfrog_charm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Venom Hood",
        "description": "Your abilities do 15 more damage. Debuffs you place deal 50 more damage.",
        "imageUrl": "/items/venom_hood.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Chemist's Coat",
        "description": "Your Defensive applies Poison to nearby enemies, dealing damage once per second. Strength: 40. Duration: 8 seconds. Slightly increases movement speed.",
        "imageUrl": "/items/chemists_coat.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Seashell Shield",
        "description": "Your Defensive has a random cooldown between 1s and 15s every time you use it.",
        "imageUrl": "/items/seashell_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Necronomicon",
        "description": "Every 8s, using your Special will reset its cooldown instantly and gain Charge. Charged attacks deal 1.5x damage when used.",
        "imageUrl": "/items/necronomicon.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Tidal Greatsword",
        "description": "Every 12s, slices a large radius around you dealing 200 damage. Slowly gets larger and deals more damage as a fight drags on.",
        "imageUrl": "/items/tidal_greatsword.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Occult Dagger",
        "description": "Your Secondary is 80% more powerful, but gains 5s of cooldown.",
        "imageUrl": "/items/occult_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Mermaid Scalemail",
        "description": "All cooldowns are reduced by 2s. All loot and abilities with cooldowns start battles on an 8s cooldown.",
        "imageUrl": "/items/mermaid_scalemail.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Hydrous Blob",
        "description": "Every 8s, using your Secondary fires an eldritch beast at your target dealing 300 damage. Starts battles on cooldown.",
        "imageUrl": "/items/hydrous_blob.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Abyss Artifact",
        "description": "Every 30s, using your Defensive grants Super. Become faster, invincible, more mobile, and deal 30% more damage for 8 seconds. Starts on a 15s cooldown.",
        "imageUrl": "/items/abyss_artifact.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Lost Pendant",
        "description": "At the start of each fight, inflict all enemies with Decay, dealing damage once per second. Strength: 30. Duration: 99 seconds.",
        "imageUrl": "/items/lost_pendant.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sawtooth Cleaver",
        "description": "Increases your Primary's damage by 30%, but decreases its radius by 20%.",
        "imageUrl": "/items/sawtooth_cleaver.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Raven's Dagger",
        "description": "Increases your Secondary's damage by 50%, but decreases its radius by 40%.",
        "imageUrl": "/items/ravens_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Killing Note",
        "description": "Increases your Special's damage by 30%, but decreases its radius by 20%.",
        "imageUrl": "/items/killing_note.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Blacksteel Buckler",
        "description": "Your Defensive's range decreases by 30%, but it has a 2s shorter cooldown and grants Counter. Deal 50% more damage for 3 seconds. Wears off when you use an attack.",
        "imageUrl": "/items/blacksteel_buckler.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Nightguard Gloves",
        "description": "Whichever ability has the highest base damage value deals 20% more damage.",
        "imageUrl": "/items/nightguard_gloves.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sniper's Eyeglasses",
        "description": "You deal 30% more damage when separated from your target by at least 3 rabbitleaps.",
        "imageUrl": "/items/snipers_eyeglasses.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Darkmage Charm",
        "description": "After standing still for 1s, your Special deals 40% more damage.",
        "imageUrl": "/items/darkmage_charm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Firststrike Bracelet",
        "description": "Every 15s, gain Blackstrike. Deal 200% more damage for 3 seconds when you use your Secondary.",
        "imageUrl": "/items/firststrike_bracelet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
    
      {
        "name": "Obsidian Rod",
        "description": "Your Special's strength becomes the total cooldown time of all abilities and loot multiplied by 10, divided by hits (max 1000).",
        "imageUrl": "/items/obsidian_rod.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Darkglass Spear",
        "description": "Your Primary's strength becomes your Special's cooldown multiplied by 30 minus your Secondary's strength, divided by hits (max 500).",
        "imageUrl": "/items/darkglass_spear.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Timespace Dagger",
        "description": "Your Secondary's strength becomes the combined cooldown of Special and Defensive multiplied by 10, divided by hits (max 500).",
        "imageUrl": "/items/timespace_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Quartz Shield",
        "description": "Your Defensive's cooldown becomes 30s. When a loot item activates, reduce the remaining Defensive cooldown by that amount.",
        "imageUrl": "/items/quartz_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Pocketwatch",
        "description": "Abilities with a GCD of 1.1s or less deal 30% more damage.",
        "imageUrl": "/items/pocketwatch.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Nova Crown",
        "description": "Your Special's cooldown becomes 30s. Every 8s, reduce it to 1s and gain Charge. Charged attacks deal 1.5x damage.",
        "imageUrl": "/items/nova_crown.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Blackhole Charm",
        "description": "Deal 200 damage to all enemies when using an ability or loot with a cooldown of 10s or more. Hits extra times for longer cooldowns (max 5).",
        "imageUrl": "/items/blackhole_charm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Twinstar Earrings",
        "description": "Your Primary and Secondary now have a 2s GCD and deal 70% more damage.",
        "imageUrl": "/items/twinstar_earrings.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
    
      {
        "name": "Kyou No Omikuji",
        "description": "All damage you deal increases by 50%. % chance triggers and critical hits no longer occur.",
        "imageUrl": "/items/kyou_no_omikuji.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Youkai Bracelet",
        "description": "All damage you deal increases by 40%. Damage is no longer randomized and cannot crit.",
        "imageUrl": "/items/youkai_bracelet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Oni Staff",
        "description": "Your Special deals 30% more damage. When a % chance succeeds, it goes on an 8s cooldown.",
        "imageUrl": "/items/oni_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Kappa Shield",
        "description": "Your Defensive has a 3s shorter cooldown, but can no longer be reset.",
        "imageUrl": "/items/kappa_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Usagi Kamen",
        "description": "When a % chance succeeds, gain a random buff for 5 seconds.",
        "imageUrl": "/items/usagi_kamen.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Red Tanzaku",
        "description": "Miracles occasionally happen.",
        "imageUrl": "/items/red_tanzaku.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Vega Spear",
        "description": "Your Primary deals 70% more damage but gains a 7s cooldown. When a % chance succeeds, the cooldown resets.",
        "imageUrl": "/items/vega_spear.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Altair Dagger",
        "description": "Your Secondary deals 30% more damage but has a 3s GCD. When used, it has a 90% chance to instead have a 1s GCD.",
        "imageUrl": "/items/altair_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Ghost Spear",
        "description": "Your Primary now only deals 10 damage, and applies Ghostflame, dealing damage when applied and upon wearing off. Strength: 250. Duration: 5 seconds.",
        "imageUrl": "/items/ghost_spear.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Phantom Dagger",
        "description": "Your Secondary now only deals 10 damage, and applies Ghostflame, dealing damage when applied and upon wearing off. Strength: 250. Duration: 5 seconds.",
        "imageUrl": "/items/phantom_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Cursed Candlestaff",
        "description": "Your Special now only deals 10 damage, and applies Ghostflame, dealing damage when applied and upon wearing off. Strength: 350. Duration: 5 seconds.",
        "imageUrl": "/items/cursed_candlestaff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Haunted Gloves",
        "description": "Abilities and loot that hit for 100 damage or less now hit for exactly 100 damage, regardless of other loot effects.",
        "imageUrl": "/items/haunted_gloves.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Old Bonnet",
        "description": "Abilities and loot that hit once now deal 250 damage, regardless of other loot effects or ability effects.",
        "imageUrl": "/items/old_bonnet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Maid Outfit",
        "description": "When you gain invulnerability, afflict surrounding enemies with Ghostflame, dealing damage when applied and upon wearing off for 5 seconds. Slightly increases movement speed.",
        "imageUrl": "/items/maid_outfit.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Calling Bell",
        "description": "Every 12s, afflict surrounding enemies with Ghostflame, dealing damage when applied and upon wearing off for 5 seconds.",
        "imageUrl": "/items/calling_bell.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Smoke Shield",
        "description": "Every 24s, your Defensive grants Ghost, causing you to disappear and evade attacks until you use an attack. Slows movement and increases damage dealt by 60% for 5 seconds. Your Secondary no longer breaks Vanish. Starts battle on a 5 second cooldown.",
        "imageUrl": "/items/smoke_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Grandmaster Spear",
        "description": "Your Primary's damage increases by 40%. Your Special's cooldown increases by 4 seconds.",
        "imageUrl": "/items/grandmaster_spear.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Teacher Knife",
        "description": "Your Secondary's damage increases by 40%. Adds 2 seconds of cooldown to your Primary.",
        "imageUrl": "/items/teacher_knife.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Tactician Rod",
        "description": "Your Special's damage increases by 30%. Adds 2 seconds of cooldown to your Secondary.",
        "imageUrl": "/items/tactician_rod.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Spiked Shield",
        "description": "When an ability or loot effect erases projectiles in a radius around you, deal 300 damage to that radius as well.",
        "imageUrl": "/items/spiked_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Battlemaiden Armor",
        "description": "Using your Defensive will reset loot and ability cooldowns with less than 8 seconds remaining.",
        "imageUrl": "/items/battlemaiden_armor.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Gladiator Helmet",
        "description": "Abilities and loot that have cooldowns deal 20% more damage.",
        "imageUrl": "/items/gladiator_helmet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Lancer Gauntlets",
        "description": "All damage is increased by 30%. Your Primary and Secondary gain cooldowns of 2 seconds.",
        "imageUrl": "/items/lancer_gauntlets.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Lion Charm",
        "description": "Deal 180 damage to nearby enemies when an ability or loot with a cooldown is activated.",
        "imageUrl": "/items/lion_charm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Bluebolt Staff",
        "description": "Your Primary applies Spark, dealing damage to all enemies once per second. Strength: 20. Duration: 5 seconds.",
        "imageUrl": "/items/bluebolt_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Lapis Sword",
        "description": "Your Secondary applies Spark, dealing damage to all enemies once per second. Strength: 20. Duration: 5 seconds.",
        "imageUrl": "/items/lapis_sword.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Shockwave Tome",
        "description": "Your Special applies Spark, dealing damage to all enemies once per second. Strength: 30. Duration: 5 seconds.",
        "imageUrl": "/items/shockwave_tome.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Battery Shield",
        "description": "Every 30 times you or debuffs you apply deal damage to an enemy, your Defensive's cooldown resets.",
        "imageUrl": "/items/battery_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Raiju Crown",
        "description": "Every 20 times you or debuffs you apply deal damage to an enemy, apply Spark to all enemies, dealing damage once per second. Strength: 40. Duration: 5 seconds.",
        "imageUrl": "/items/raiju_crown.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Staticshock Earrings",
        "description": "Every 10 times you or debuffs you apply deal damage to an enemy, deal 150 damage to all enemies.",
        "imageUrl": "/items/staticshock_earrings.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Stormdance Gown",
        "description": "Every 40 times you or debuffs you apply deal damage to an enemy, gain invulnerability for 5 seconds.",
        "imageUrl": "/items/stormdance_gown.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Blackbolt Ribbon",
        "description": "Every 50 times you or debuffs you apply deal damage to an enemy, deal 1200 damage to all enemies.",
        "imageUrl": "/items/blackbolt_ribbon.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Crane Katana",
        "description": "Every time you move 15 rabbitleaps, gain Flow-Str. Your Primary deals 70% more damage for 5 seconds.",
        "imageUrl": "/items/crane_katana.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Falconfeather Dagger",
        "description": "Every time you move 15 rabbitleaps, gain Flow-Dex. Your Secondary deals 70% more damage for 5 seconds.",
        "imageUrl": "/items/falconfeather_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Tornado Staff",
        "description": "Every time you move 15 rabbitleaps, gain Flow-Int. Your Special deals 70% more damage for 5 seconds.",
        "imageUrl": "/items/tornado_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Cloud Guard",
        "description": "Every time you move 25 rabbitleaps, gain invulnerability for 5 seconds.",
        "imageUrl": "/items/cloud_guard.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Hermes Bow",
        "description": "Every 10s, fires a projectile at your targeted enemy that deals 250 damage. Cooldown resets every time you move 10 rabbitleaps.",
        "imageUrl": "/items/hermes_bow.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Talon Charm",
        "description": "Deals 150 damage to all enemies every time you move 5 rabbitleaps.",
        "imageUrl": "/items/talon_charm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Tiny Wings",
        "description": "Dramatically increases movement speed.",
        "imageUrl": "/items/tiny_wings.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Feathered Overcoat",
        "description": "Maxes out your movement speed while you are invulnerable.",
        "imageUrl": "/items/feathered_overcoat.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sandpriestess Spear",
        "description": "Your Primary has a 40% chance to grant Flash-Dex. Your next Secondary deals 150% more damage for 5 seconds. Wears off when you use an attack.",
        "imageUrl": "/items/sandpriestess_spear.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Flamedancer Dagger",
        "description": "Your Secondary has a 40% chance to grant Flash-Str. Your next Primary deals 150% more damage for 5 seconds. Wears off when you use an attack.",
        "imageUrl": "/items/flamedancer_dagger.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Whiteflame Staff",
        "description": "Every 2 times you use your Special, gain Flash-Str. Your next Primary deals 150% more damage for 5 seconds. Wears off when you use an attack.",
        "imageUrl": "/items/whiteflame_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sacred Shield",
        "description": "Every 2 times you use your Defensive, gain Flash-Int. Your next Special deals 150% more damage for 5 seconds. Wears off when you use an attack.",
        "imageUrl": "/items/sacred_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Marble Clasp",
        "description": "Every 5 times you use an ability, gain Flash-Dex. Your next Secondary deals 150% more damage for 5 seconds. Wears off when you use an attack.",
        "imageUrl": "/items/marble_clasp.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sun Pendant",
        "description": "Every 10 times you use an ability, reset your Special's cooldown and gain Flash-Int. Your next Special deals 150% more damage for 5 seconds. Wears off when you use an attack.",
        "imageUrl": "/items/sun_pendant.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Tiny Hourglass",
        "description": "Every 12s, deal 120 damage to all enemies. Damage increases by 120 each time this activates.",
        "imageUrl": "/items/tiny_hourglass.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Desert Earrings",
        "description": "Every time you gain a buff, gain another random buff for 5 seconds.",
        "imageUrl": "/items/desert_earrings.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Giant Stone Club",
        "description": "Your Primary deals 70% more damage. Its GCD is increased by 0.6s. Your movement speed is moderately reduced.",
        "imageUrl": "/items/giant_stone_club.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Ruins Sword",
        "description": "Your Secondary deals 100% more damage. Its GCD is increased by 0.8s. Your movement speed is slightly reduced.",
        "imageUrl": "/items/ruins_sword.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Mountain Staff",
        "description": "Your Special deals 200% more damage. Its GCD is increased by 2.5s. Your movement speed is moderately reduced.",
        "imageUrl": "/items/mountain_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Boulder Shield",
        "description": "Every 30s, using your Defensive grants all allies Stoneskin, shielding them from damage once. Erases bullets in a radius upon wearing off. Duration: 5 seconds. Starts battle off cooldown. Slightly reduces movement speed.",
        "imageUrl": "/items/boulder_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Golem's Claymore",
        "description": "Every 20s, grants Stoneskin, shielding you from damage once. Erases bullets in a radius upon wearing off, then slices the air dealing 500 damage to nearby enemies. Duration: 5 seconds. Slightly reduces movement speed.",
        "imageUrl": "/items/golems_claymore.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Stoneplate Armor",
        "description": "Start each battle with Graniteskin, shielding you from damage once. Slows movement dramatically and increases damage by 20%. Duration lasts until hit.",
        "imageUrl": "/items/stoneplate_armor.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Sacredstone Charm",
        "description": "Abilities with a GCD equal to or higher than 1.5s deal 50% more damage.",
        "imageUrl": "/items/sacredstone_charm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Clay Rabbit",
        "description": "Every 12s, standing still grants Stoneskin, shielding you from damage once. Erases bullets in a radius upon wearing off. Duration: 3 seconds.",
        "imageUrl": "/items/clay_rabbit.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Waterfall Polearm",
        "description": "Every 10s, when you use your Primary, gain Flow-Str. Your Primary deals 70% more damage for 5 seconds.",
        "imageUrl": "/items/waterfall_polearm.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Vorpal Dao",
        "description": "Every 10s, when you use your Secondary, gain Flow-Dex. Your Secondary deals 70% more damage for 5 seconds.",
        "imageUrl": "/items/vorpal_dao.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Jade Staff",
        "description": "Every 2 times you use your Special, gain Tranquility, dealing 30% more damage. Wears off if you move too far. Duration: 10 seconds.",
        "imageUrl": "/items/jade_staff.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Reflection Shield",
        "description": "When you erase projectiles in a radius around you, gain Counter, dealing 50% more damage. Wears off when you use an attack. Duration: 3 seconds.",
        "imageUrl": "/items/reflection_shield.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Butterfly Hairpin",
        "description": "When you gain invincibility, gain a random buff for 5 seconds.",
        "imageUrl": "/items/butterfly_hairpin.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Watermage Pendant",
        "description": "Every 12s, when you stand still, gain Flow-Int. Your Special deals 70% more damage for 5 seconds.",
        "imageUrl": "/items/watermage_pendant.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Raindrop Earrings",
        "description": "Every 18s, when you stand still, gain Repeat. Your Special's cooldown instantly resets upon use for 5 seconds.",
        "imageUrl": "/items/raindrop_earrings.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      },
      {
        "name": "Aquamarine Bracelet",
        "description": "Every 12s, gain a random buff for 10 seconds.",
        "imageUrl": "/items/aquamarine_bracelet.png",
        "tiers": { "wizard":"F","druid":"F","spellsword":"F","assassin":"F","heavyblade":"F","dancer":"F","sniper":"F","bruiser":"F","defender":"F","ancient":"F" }
      }
  ].sort((a, b) => a.name.localeCompare(b.name));
