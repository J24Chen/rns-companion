
import type { GameClass, Item } from './types';
const cacheBust = `?t=${new Date().getTime()}`;

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
      "name": "Abyss Artifact",
      "description": "blank",
      "imageUrl": `/items/abyss_artifact.png${cacheBust}`,
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
      "name": "Altair Dagger",
      "description": "blank",
      "imageUrl": `/items/altair_dagger.png${cacheBust}`,
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
      "name": "Amethyst Bracelet",
      "description": "blank",
      "imageUrl": `/items/amethyst_bracelet.png${cacheBust}`,
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
      "name": "Aquamarine Bracelet",
      "description": "blank",
      "imageUrl": `/items/aquamarine_bracelet.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/assassins_knife.png${cacheBust}`,
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
      "name": "Ballroom Gown",
      "description": "blank",
      "imageUrl": `/items/ballroom_gown.png${cacheBust}`,
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
      "name": "Battery Shield",
      "description": "blank",
      "imageUrl": `/items/battery_shield.png${cacheBust}`,
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
      "name": "Battlemaiden Armor",
      "description": "blank",
      "imageUrl": `/items/battlemaiden_armor.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/black_wakizashi.png${cacheBust}`,
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
      "name": "Blackbolt Ribbon",
      "description": "blank",
      "imageUrl": `/items/blackbolt_ribbon.png${cacheBust}`,
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
      "name": "Blackhole Charm",
      "description": "blank",
      "imageUrl": `/items/blackhole_charm.png${cacheBust}`,
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
      "name": "Blacksteel Buckler",
      "description": "blank",
      "imageUrl": `/items/blacksteel_buckler.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/blackwing_staff.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/bloodflower_brooch.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/bloodhound_greatsword.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/blood_vial.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/bloody_bandage.png${cacheBust}`,
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
      "name": "Blue Rose",
      "description": "blank",
      "imageUrl": `/items/blue_rose.png${cacheBust}`,
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
      "name": "Bluebolt Staff",
      "description": "blank",
      "imageUrl": `/items/bluebolt_staff.png${cacheBust}`,
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
      "name": "Bolt Staff",
      "description": "blank",
      "imageUrl": `/items/bolt_staff.png${cacheBust}`,
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
      "name": "Book Of Cheats",
      "description": "blank",
      "imageUrl": `/items/book_of_cheats.png${cacheBust}`,
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
      "name": "Boulder Shield",
      "description": "blank",
      "imageUrl": `/items/boulder_shield.png${cacheBust}`,
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
      "name": "Brightstorm Spear",
      "description": "blank",
      "imageUrl": `/items/brightstorm_spear.png${cacheBust}`,
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
      "name": "Butterfly Hairpin",
      "description": "blank",
      "imageUrl": `/items/butterfly_hairpin.png${cacheBust}`,
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
      "name": "Butterfly Ocarina",
      "description": "blank",
      "imageUrl": `/items/butterfly_ocarina.png${cacheBust}`,
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
      "name": "Calling Bell",
      "description": "blank",
      "imageUrl": `/items/calling_bell.png${cacheBust}`,
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
      "name": "Chemist's Coat",
      "description": "blank",
      "imageUrl": `/items/chemists_coat.png${cacheBust}`,
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
      "name": "Clay Rabbit",
      "description": "blank",
      "imageUrl": `/items/clay_rabbit.png${cacheBust}`,
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
      "name": "Cloud Guard",
      "description": "blank",
      "imageUrl": `/items/cloud_guard.png${cacheBust}`,
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
      "name": "Compound Gloves",
      "description": "blank",
      "imageUrl": `/items/compound_gloves.png${cacheBust}`,
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
      "name": "Crane Katana",
      "description": "blank",
      "imageUrl": `/items/crane_katana.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/crescentmoon_dagger.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/crowfeather_hairpin.png${cacheBust}`,
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
      "name": "Crown Of Storms",
      "description": "blank",
      "imageUrl": `/items/crown_of_storms.png${cacheBust}`,
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
      "name": "Cursed Candlestaff",
      "description": "blank",
      "imageUrl": `/items/cursed_candlestaff.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/curse_talon.png${cacheBust}`,
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
      "name": "Darkcloud Necklace",
      "description": "blank",
      "imageUrl": `/items/darkcloud_necklace.png${cacheBust}`,
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
      "name": "Darkglass Spear",
      "description": "blank",
      "imageUrl": `/items/darkglass_spear.png${cacheBust}`,
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
      "name": "Darkmage Charm",
      "description": "blank",
      "imageUrl": `/items/darkmage_charm.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/darkmagic_blade.png${cacheBust}`,
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
      "name": "Darkstorm Knife",
      "description": "blank",
      "imageUrl": `/items/darkstorm_knife.png${cacheBust}`,
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
      "name": "Deathcap Tome",
      "description": "blank",
      "imageUrl": `/items/deathcap_tome.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/demon_horns.png${cacheBust}`,
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
      "name": "Desert Earrings",
      "description": "blank",
      "imageUrl": `/items/desert_earrings.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/diamond_shield.png${cacheBust}`,
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
      "name": "Divine Mirror",
      "description": "blank",
      "imageUrl": `/items/divine_mirror.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/dragonhead_spear.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/eaglewing_charm.png${cacheBust}`,
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
      "name": "Emerald Chestplate",
      "description": "blank",
      "imageUrl": `/items/emerald_chestplate.png${cacheBust}`,
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
      "name": "Fairy Spear",
      "description": "blank",
      "imageUrl": `/items/fairy_spear.png${cacheBust}`,
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
      "name": "Falconfeather Dagger",
      "description": "blank",
      "imageUrl": `/items/falconfeather_dagger.png${cacheBust}`,
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
      "name": "Feathered Overcoat",
      "description": "blank",
      "imageUrl": `/items/feathered_overcoat.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/firescale_corset.png${cacheBust}`,
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
      "name": "Firststrike Bracelet",
      "description": "blank",
      "imageUrl": `/items/firststrike_bracelet.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/flame_bow.png${cacheBust}`,
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
      "name": "Flamedancer Dagger",
      "description": "blank",
      "imageUrl": `/items/flamedancer_dagger.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/flamewalker_boots.png${cacheBust}`,
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
      "name": "Floral Bow",
      "description": "blank",
      "imageUrl": `/items/floral_bow.png${cacheBust}`,
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
      "name": "Garnet Staff",
      "description": "blank",
      "imageUrl": `/items/garnet_staff.png${cacheBust}`,
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
      "name": "Ghost Spear",
      "description": "blank",
      "imageUrl": `/items/ghost_spear.png${cacheBust}`,
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
      "name": "Giant Stone Club",
      "description": "blank",
      "imageUrl": `/items/giant_stone_club.png${cacheBust}`,
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
      "name": "Gladiator Helmet",
      "description": "blank",
      "imageUrl": `/items/gladiator_helmet.png${cacheBust}`,
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
      "name": "Glittering Trumpet",
      "description": "blank",
      "imageUrl": `/items/glittering_trumpet.png${cacheBust}`,
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
      "name": "Golden Chime",
      "description": "blank",
      "imageUrl": `/items/golden_chime.png${cacheBust}`,
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
      "name": "Golden Katana",
      "description": "blank",
      "imageUrl": `/items/golden_katana.png${cacheBust}`,
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
      "name": "Golem's Claymore",
      "description": "blank",
      "imageUrl": `/items/golems_claymore.png${cacheBust}`,
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
      "name": "Grandmaster Spear",
      "description": "blank",
      "imageUrl": `/items/grandmaster_spear.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/granite_greatsword.png${cacheBust}`,
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
      "name": "Grasswoven Bracelet",
      "description": "blank",
      "imageUrl": `/items/grasswoven_bracelet.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/greysteel_shield.png${cacheBust}`,
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
      "name": "Haunted Gloves",
      "description": "blank",
      "imageUrl": `/items/haunted_gloves.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/hawkfeather_fan.png${cacheBust}`,
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
      "name": "Hermes Bow",
      "description": "blank",
      "imageUrl": `/items/hermes_bow.png${cacheBust}`,
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
      "name": "Holy Greatsword",
      "description": "blank",
      "imageUrl": `/items/holy_greatsword.png${cacheBust}`,
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
      "name": "Hydrous Blob",
      "description": "blank",
      "imageUrl": `/items/hydrous_blob.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/iron_greaves.png${cacheBust}`,
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
      "name": "Ivy Staff",
      "description": "blank",
      "imageUrl": `/items/ivy_staff.png${cacheBust}`,
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
      "name": "Jade Staff",
      "description": "blank",
      "imageUrl": `/items/jade_staff.png${cacheBust}`,
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
      "name": "Kappa Shield",
      "description": "blank",
      "imageUrl": `/items/kappa_shield.png${cacheBust}`,
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
      "name": "Killing Note",
      "description": "blank",
      "imageUrl": `/items/killing_note.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/kunoichi_hood.png${cacheBust}`,
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
      "name": "Kyou No Omikuji",
      "description": "blank",
      "imageUrl": `/items/kyou_no_omikuji.png${cacheBust}`,
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
      "name": "Lancer Gauntlets",
      "description": "blank",
      "imageUrl": `/items/lancer_gauntlets.png${cacheBust}`,
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
      "name": "Lapis Sword",
      "description": "blank",
      "imageUrl": `/items/lapis_sword.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/leech_staff.png${cacheBust}`,
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
      "name": "Lightning Bow",
      "description": "blank",
      "imageUrl": `/items/lightning_bow.png${cacheBust}`,
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
      "name": "Lion Charm",
      "description": "blank",
      "imageUrl": `/items/lion_charm.png${cacheBust}`,
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
      "name": "Lost Pendant",
      "description": "blank",
      "imageUrl": `/items/lost_pendant.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/lullaby_harp.png${cacheBust}`,
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
      "name": "Maid Outfit",
      "description": "blank",
      "imageUrl": `/items/maid_outfit.png${cacheBust}`,
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
      "name": "Marble Clasp",
      "description": "blank",
      "imageUrl": `/items/marble_clasp.png${cacheBust}`,
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
      "name": "Mermaid Scalemail",
      "description": "blank",
      "imageUrl": `/items/mermaid_scalemail.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/meteor_staff.png${cacheBust}`,
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
      "name": "Midsummer Dress",
      "description": "blank",
      "imageUrl": `/items/midsummer_dress.png${cacheBust}`,
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
      "name": "Mimick Rabbitfoot",
      "description": "blank",
      "imageUrl": `/items/mimick_rabbitfoot.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/moon_pendant.png${cacheBust}`,
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
      "name": "Moss Shield",
      "description": "blank",
      "imageUrl": `/items/moss_shield.png${cacheBust}`,
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
      "name": "Mountain Staff",
      "description": "blank",
      "imageUrl": `/items/mountain_staff.png${cacheBust}`,
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
      "name": "Necronomicon",
      "description": "blank",
      "imageUrl": `/items/necronomicon.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/nightingale_gown.png${cacheBust}`,
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
      "name": "Nightguard Gloves",
      "description": "blank",
      "imageUrl": `/items/nightguard_gloves.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/nightstar_grimoire.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/ninja_robe.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/ninjutsu_scroll.png${cacheBust}`,
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
      "name": "Nova Crown",
      "description": "blank",
      "imageUrl": `/items/nova_crown.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/obsidian_hairpin.png${cacheBust}`,
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
      "name": "Obsidian Rod",
      "description": "blank",
      "imageUrl": `/items/obsidian_rod.png${cacheBust}`,
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
      "name": "Occult Dagger",
      "description": "blank",
      "imageUrl": `/items/occult_dagger.png${cacheBust}`,
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
      "name": "Old Bonnet",
      "description": "blank",
      "imageUrl": `/items/old_bonnet.png${cacheBust}`,
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
      "name": "Oni Staff",
      "description": "blank",
      "imageUrl": `/items/oni_staff.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/opal_necklace.png${cacheBust}`,
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
      "name": "Ornamental Bell",
      "description": "blank",
      "imageUrl": `/items/ornamental_bell.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/pajama_hat.png${cacheBust}`,
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
      "name": "Peridot Rapier",
      "description": "blank",
      "imageUrl": `/items/peridot_rapier.png${cacheBust}`,
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
      "name": "Phantom Dagger",
      "description": "blank",
      "imageUrl": `/items/phantom_dagger.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/phoenix_charm.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/pidgeon_bow.png${cacheBust}`,
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
      "name": "Pocketwatch",
      "description": "blank",
      "imageUrl": `/items/pocketwatch.png${cacheBust}`,
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
      "name": "Poisonfrog Charm",
      "description": "blank",
      "imageUrl": `/items/poisonfrog_charm.png${cacheBust}`,
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
      "name": "Purification Rod",
      "description": "blank",
      "imageUrl": `/items/purification_rod.png${cacheBust}`,
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
      "name": "Quartz Shield",
      "description": "blank",
      "imageUrl": `/items/quartz_shield.png${cacheBust}`,
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
      "name": "Queen's Crown",
      "description": "blank",
      "imageUrl": `/items/queens_crown.png${cacheBust}`,
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
      "name": "Raiju Crown",
      "description": "blank",
      "imageUrl": `/items/raiju_crown.png${cacheBust}`,
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
      "name": "Raindrop Earrings",
      "description": "blank",
      "imageUrl": `/items/raindrop_earrings.png${cacheBust}`,
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
      "name": "Raven Grimoire",
      "description": "blank",
      "imageUrl": "https://static.wikitide.net/rnswiki/6/6f/Spr_item_arcane_0.png",
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
      "name": "Raven's Dagger",
      "description": "blank",
      "imageUrl": `/items/ravens_dagger.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/reaper_cloak.png${cacheBust}`,
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
      "name": "Red Tanzaku",
      "description": "blank",
      "imageUrl": `/items/red_tanzaku.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/redblack_ribbon.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/reddragon_blade.png${cacheBust}`,
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
      "name": "Redwhite Ribbon",
      "description": "blank",
      "imageUrl": `/items/redwhite_ribbon.png${cacheBust}`,
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
      "name": "Reflection Shield",
      "description": "blank",
      "imageUrl": `/items/reflection_shield.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/rockdragon_mail.png${cacheBust}`,
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
      "name": "Royal Staff",
      "description": "blank",
      "imageUrl": `/items/royal_staff.png${cacheBust}`,
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
      "name": "Ruby Circlet",
      "description": "blank",
      "imageUrl": `/items/ruby_circlet.png${cacheBust}`,
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
      "name": "Ruins Sword",
      "description": "blank",
      "imageUrl": `/items/ruins_sword.png${cacheBust}`,
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
      "name": "Sacred Bow",
      "description": "blank",
      "imageUrl": `/items/sacred_bow.png${cacheBust}`,
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
      "name": "Sacred Shield",
      "description": "blank",
      "imageUrl": `/items/sacred_shield.png${cacheBust}`,
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
      "name": "Sacredstone Charm",
      "description": "blank",
      "imageUrl": `/items/sacredstone_charm.png${cacheBust}`,
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
      "name": "Sandpriestess Spear",
      "description": "blank",
      "imageUrl": `/items/sandpriestess_spear.png${cacheBust}`,
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
      "name": "Sapphire Violin",
      "description": "blank",
      "imageUrl": `/items/sapphire_violin.png${cacheBust}`,
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
      "name": "Sawtooth Cleaver",
      "description": "blank",
      "imageUrl": `/items/sawtooth_cleaver.png${cacheBust}`,
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
      "name": "Seashell Shield",
      "description": "blank",
      "imageUrl": `/items/seashell_shield.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/shadow_bracelet.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/shinobi_tabi.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/shinsoku_katana.png${cacheBust}`,
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
      "name": "Shockwave Tome",
      "description": "blank",
      "imageUrl": `/items/shockwave_tome.png${cacheBust}`,
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
      "name": "Shrinemaiden's Kosode",
      "description": "blank",
      "imageUrl": `/items/shrinemaidens_kosode.png${cacheBust}`,
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
      "name": "Silver Coin",
      "description": "blank",
      "imageUrl": `/items/silver_coin.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/sleeping_greatbow.png${cacheBust}`,
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
      "name": "Smoke Shield",
      "description": "blank",
      "imageUrl": `/items/smoke_shield.png${cacheBust}`,
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
      "name": "Snakefang Dagger",
      "description": "blank",
      "imageUrl": `/items/snakefang_dagger.png${cacheBust}`,
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
      "name": "Sniper's Eyeglasses",
      "description": "blank",
      "imageUrl": `/items/snipers_eyeglasses.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/sparrow_feather.png${cacheBust}`,
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
      "name": "Spiderbite Bow",
      "description": "blank",
      "imageUrl": `/items/spiderbite_bow.png${cacheBust}`,
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
      "name": "Spiked Shield",
      "description": "blank",
      "imageUrl": `/items/spiked_shield.png${cacheBust}`,
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
      "name": "Staticshock Earrings",
      "description": "blank",
      "imageUrl": `/items/staticshock_earrings.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/stonebreaker_staff.png${cacheBust}`,
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
      "name": "Stoneplate Armor",
      "description": "blank",
      "imageUrl": `/items/stoneplate_armor.png${cacheBust}`,
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
      "name": "Storm Petticoat",
      "description": "blank",
      "imageUrl": `/items/storm_petticoat.png${cacheBust}`,
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
      "name": "Stormdance Gown",
      "description": "blank",
      "imageUrl": `/items/stormdance_gown.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/stuffed_rabbit.png${cacheBust}`,
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
      "name": "Sun Pendant",
      "description": "blank",
      "imageUrl": `/items/sun_pendant.png${cacheBust}`,
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
      "name": "Sunflower Crown",
      "description": "blank",
      "imageUrl": `/items/sunflower_crown.png${cacheBust}`,
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
      "name": "Tactician Rod",
      "description": "blank",
      "imageUrl": `/items/tactician_rod.png${cacheBust}`,
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
      "name": "Talon Charm",
      "description": "blank",
      "imageUrl": `/items/talon_charm.png${cacheBust}`,
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
      "name": "Teacher Knife",
      "description": "blank",
      "imageUrl": `/items/teacher_knife.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/thiefs_coat.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/throwing_dagger.png${cacheBust}`,
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
      "name": "Thunderclap Gloves",
      "description": "blank",
      "imageUrl": `/items/thunderclap_gloves.png${cacheBust}`,
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
      "name": "Tidal Greatsword",
      "description": "blank",
      "imageUrl": `/items/tidal_greatsword.png${cacheBust}`,
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
      "name": "Timespace Dagger",
      "description": "blank",
      "imageUrl": `/items/timespace_dagger.png${cacheBust}`,
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
      "name": "Tiny Hourglass",
      "description": "blank",
      "imageUrl": `/items/tiny_hourglass.png${cacheBust}`,
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
      "name": "Tiny Wings",
      "description": "blank",
      "imageUrl": `/items/tiny_wings.png${cacheBust}`,
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
      "name": "Topaz Charm",
      "description": "blank",
      "imageUrl": `/items/topaz_charm.png${cacheBust}`,
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
      "name": "Tornado Staff",
      "description": "blank",
      "imageUrl": `/items/tornado_staff.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/tough_gauntlet.png${cacheBust}`,
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
      "name": "Twinstar Earrings",
      "description": "blank",
      "imageUrl": `/items/twinstar_earrings.png${cacheBust}`,
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
      "name": "Usagi Kamen",
      "description": "blank",
      "imageUrl": `/items/usagi_kamen.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/vampiric_dagger.png${cacheBust}`,
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
      "name": "Vega Spear",
      "description": "blank",
      "imageUrl": `/items/vega_spear.png${cacheBust}`,
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
      "name": "Venom Hood",
      "description": "blank",
      "imageUrl": `/items/venom_hood.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/volcano_spear.png${cacheBust}`,
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
      "name": "Vorpal Dao",
      "description": "blank",
      "imageUrl": `/items/vorpal_dao.png${cacheBust}`,
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
      "name": "Waterfall Polearm",
      "description": "blank",
      "imageUrl": `/items/waterfall_polearm.png${cacheBust}`,
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
      "name": "Watermage Pendant",
      "description": "blank",
      "imageUrl": `/items/watermage_pendant.png${cacheBust}`,
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
      "name": "Whiteflame Staff",
      "description": "blank",
      "imageUrl": `/items/whiteflame_staff.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/windbite_dagger.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/winged_cap.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/witchs_cloak.png${cacheBust}`,
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
      "description": "blank",
      "imageUrl": `/items/wolf_hood.png${cacheBust}`,
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
      "name": "Youkai Bracelet",
      "description": "blank",
      "imageUrl": `/items/youkai_bracelet.png${cacheBust}`,
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
    }
  ].sort((a, b) => a.name.localeCompare(b.name));
