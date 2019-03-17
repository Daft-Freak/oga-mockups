// mock data for homepage
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify({
		"popularThisWeek": [
			{
				"name": "GUI",
				"alias": "gui-2",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/example_29.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/example_29.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/example_29.png"
				},
				"audio": null,
				"author": {
					"name": "JanaChumi",
					"username": "janachumi"
				}
			},
			{
				"name": "Meadow - 16x16 Tileset",
				"alias": "meadow-16x16-tileset",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/thumbnail_3.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/thumbnail_3.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/thumbnail_3.png"
				},
				"audio": null,
				"author": {
					"name": "RedVoxel",
					"username": "redvoxel"
				}
			},
			{
				"name": "Swords - Set 1",
				"alias": "swords-set-1-0",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Preview_262.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Preview_262.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Preview_262.png"
				},
				"audio": null,
				"author": {
					"name": "Cethiel",
					"username": "cethiel"
				}
			},
			{
				"name": "Cartoon Forest 2D Backgrounds",
				"alias": "cartoon-forest-2d-backgrounds",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Free-Cartoon-Forest-Game-Backgrounds.jpg",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Free-Cartoon-Forest-Game-Backgrounds.jpg",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Free-Cartoon-Forest-Game-Backgrounds.jpg"
				},
				"audio": null,
				"author": {
					"name": "CraftPix.net 2D Game Assets",
					"username": "craftpixnet-2d-game-assets"
				}
			},
			{
				"name": "Pure Projectile - Magic Effect",
				"alias": "pure-projectile-magic-effect",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Pure.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Pure.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Pure.png"
				},
				"audio": null,
				"author": {
					"name": "Cethiel",
					"username": "cethiel"
				}
			},
			{
				"name": "200+ CC0 Spaceship Sprites",
				"alias": "200-cc0-spaceship-sprites",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/200Assets.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/200Assets.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/200Assets.png"
				},
				"audio": null,
				"author": {
					"name": "Wisedawn",
					"username": "wisedawn"
				}
			},
			{
				"name": "Pixel-Art Backgrounds",
				"alias": "pixel-art-backgrounds-0",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Cover_15.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Cover_15.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Cover_15.png"
				},
				"audio": null,
				"author": {
					"name": "stealthix",
					"username": "stealthix"
				}
			},
			{
				"name": "64x64 Pixel Art: Grotesque Surreal Creature 7 ",
				"alias": "64x64-pixel-art-grotesque-surreal-creature-7",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Pixel_Creature2_png.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Pixel_Creature2_png.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Pixel_Creature2_png.png"
				},
				"audio": null,
				"author": {
					"name": "DiCocco",
					"username": "dicocco"
				}
			}
		],
		"popularThisMonth": [
			{
				"name": "2D Explosion Animations #3 | Frame by frame",
				"alias": "2d-explosion-animations-3-frame-by-frame",
				"author": {
					"name": "Sinestesia",
					"username": "sinestesia"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/ICON%20done.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/ICON%20done.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/ICON%20done.png"
				}
			},
			{
				"name": "Overworld Objects",
				"alias": "overworld-objects",
				"author": {
					"name": "Kelvin Shadewing",
					"username": "kelvin-shadewing"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/statics_1.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/statics_1.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/statics_1.png"
				}
			},
			{
				"name": "RPG Title Screen Music Pack",
				"alias": "rpg-title-screen-music-pack",
				"author": {
					"name": "The Muwee Collective",
					"username": "the-muwee-collective"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/audio_preview/Irrational%20Machines%20-%20RPG%20Title%20Screen%20Music%20Pack%20-%2001%20Title%20Screen.wav.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/audio_preview/Irrational%20Machines%20-%20RPG%20Title%20Screen%20Music%20Pack%20-%2001%20Title%20Screen.wav.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/audio_preview/Irrational%20Machines%20-%20RPG%20Title%20Screen%20Music%20Pack%20-%2001%20Title%20Screen.wav.png"
				}
			},
			{
				"name": "Classic RPG Tileset",
				"alias": "classic-rpg-tileset",
				"author": {
					"name": "jestan",
					"username": "jestan"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Tileset_ClassicRPGProjectprevitch.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Tileset_ClassicRPGProjectprevitch.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Tileset_ClassicRPGProjectprevitch.png"
				}
			},
			{
				"name": "[LPC] Backpacks",
				"alias": "lpc-backpacks",
				"author": {
					"name": "BenCreating",
					"username": "bencreating"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Preview_Backpack_Main.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Preview_Backpack_Main.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Preview_Backpack_Main.png"
				}
			},
			{
				"name": "Fallen Angel Chibi Sprites",
				"alias": "fallen-angel-chibi-sprites",
				"author": {
					"name": "CraftPix.net 2D Game Assets",
					"username": "craftpixnet-2d-game-assets"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Free-Fallen-Angel-Chibi-2D-Game-Sprites.jpg",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Free-Fallen-Angel-Chibi-2D-Game-Sprites.jpg",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Free-Fallen-Angel-Chibi-2D-Game-Sprites.jpg"
				}
			},
			{
				"name": "[LPC] Wooden Furniture",
				"alias": "lpc-wooden-furniture",
				"author": {
					"name": "bluecarrot16",
					"username": "bluecarrot16"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/dark-wood_1.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/dark-wood_1.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/dark-wood_1.png"
				}
			},
			{
				"name": "Fantasy Icon Pack by Ravenmore",
				"alias": "fantasy-icon-pack-by-ravenmore-0",
				"author": {
					"name": "Ravenmore",
					"username": "ravenmore"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/preview2_13.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/preview2_13.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/preview2_13.png"
				}
			},
			{
				"name": "4 Colour Overworld Tileset",
				"alias": "4-colour-overworld-tileset",
				"author": {
					"name": "stealthix",
					"username": "stealthix"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Cover_14.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Cover_14.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Cover_14.png"
				}
			},
			{
				"name": "Zelda-like tilesets and sprites",
				"alias": "zelda-like-tilesets-and-sprites",
				"author": {
					"name": "ArMM1998",
					"username": "armm1998"
				},
				"images": {
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/951a7f47f87b1dbe262b27fba196f3bf.png",
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/951a7f47f87b1dbe262b27fba196f3bf.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/951a7f47f87b1dbe262b27fba196f3bf.png"
				}
			}
		],
		"latest": [
			{
				"name": "Mini-roguelike Pixel Monsters, Icons, Dungeon stuff",
				"alias": "mini-roguelike-pixel-monsters-icons-dungeon-stuff",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/newset_1.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/newset_1.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/newset_1.png"
				},
				"audio": null,
				"author": {
					"name": "DistractedMOSFET",
					"username": "distractedmosfet"
				}
			},
			{
				"name": "Live Mixing Compilation",
				"alias": "live-mixing-compilation",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/audio_preview/GBL%20Medley.mp3.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/audio_preview/GBL%20Medley.mp3.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/audio_preview/GBL%20Medley.mp3.png"
				},
				"audio": {
					"ogg": "https://opengameart.org/sites/default/files/audio_preview/GBL%20Medley.mp3.ogg",
					"mp3": "https://opengameart.org/sites/default/files/GBL%20Medley.mp3"
				},
				"author": {
					"name": "TAD",
					"username": "tad"
				}
			},
			{
				"name": "Swords - Set 1",
				"alias": "swords-set-1-0",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/Preview_262.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/Preview_262.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/Preview_262.png"
				},
				"audio": null,
				"author": {
					"name": "Cethiel",
					"username": "cethiel"
				}
			},
			{
				"name": "Orchestral Music Pack 1",
				"alias": "orchestral-music-pack-1",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/audio_preview/0_preview.ogg.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/audio_preview/0_preview.ogg.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/audio_preview/0_preview.ogg.png"
				},
				"audio": {
					"ogg": "https://opengameart.org/sites/default/files/0_preview.ogg",
					"mp3": "https://opengameart.org/sites/default/files/audio_preview/0_preview.ogg.mp3"
				},
				"author": {
					"name": "MrJoshuaMcLean",
					"username": "mrjoshuamclean"
				}
			},
			{
				"name": "Electronic Music Pack 1",
				"alias": "electronic-music-pack-1",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/audio_preview/preview_19.ogg.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/audio_preview/preview_19.ogg.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/audio_preview/preview_19.ogg.png"
				},
				"audio": {
					"ogg": "https://opengameart.org/sites/default/files/preview_19.ogg",
					"mp3": "https://opengameart.org/sites/default/files/audio_preview/preview_19.ogg.mp3"
				},
				"author": {
					"name": "MrJoshuaMcLean",
					"username": "mrjoshuamclean"
				}
			},
			{
				"name": "Helix",
				"alias": "helix",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/audio_preview/Helix%20-%20Stefan%20Grossmann.mp3.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/audio_preview/Helix%20-%20Stefan%20Grossmann.mp3.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/audio_preview/Helix%20-%20Stefan%20Grossmann.mp3.png"
				},
				"audio": {
					"ogg": "https://opengameart.org/sites/default/files/audio_preview/Helix%20-%20Stefan%20Grossmann.mp3.ogg",
					"mp3": "https://opengameart.org/sites/default/files/Helix%20-%20Stefan%20Grossmann.mp3"
				},
				"author": {
					"name": "Stefan_Composer",
					"username": "stefancomposer"
				}
			},
			{
				"name": "Acoustic Music Pack 1",
				"alias": "acoustic-music-pack-1",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/audio_preview/preview_17.ogg.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/audio_preview/preview_17.ogg.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/audio_preview/preview_17.ogg.png"
				},
				"audio": {
					"ogg": "https://opengameart.org/sites/default/files/preview_17.ogg",
					"mp3": "https://opengameart.org/sites/default/files/audio_preview/preview_17.ogg.mp3"
				},
				"author": {
					"name": "MrJoshuaMcLean",
					"username": "mrjoshuamclean"
				}
			},
			{
				"name": "Guacato",
				"alias": "guacato",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/057.jpg",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/057.jpg",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/057.jpg"
				},
				"audio": null,
				"author": {
					"name": "megupets",
					"username": "megupets"
				}
			}
		],
		"featured": [
			{
				"name": "Overworld RPG tileset",
				"alias": "overworld-rpg-tileset",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/overland_preview.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/overland_preview.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/overland_preview.png"
				},
				"audio": null,
				"author": {
					"name": "Tayoko",
					"username": "tayokoart.com"
				}
			},
			{
				"name": "Grotto Escape II - Environment",
				"alias": "grotto-escape-ii-environment",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/PREVIEW_1.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/PREVIEW_1.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/PREVIEW_1.png"
				},
				"audio": null,
				"author": {
					"name": "ansimuz",
					"username": "ansimuz"
				}
			},
			{
				"name": "Dark Fantasy item sprites",
				"alias": "dark-fantasy-item-sprites",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/00_items.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/00_items.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/00_items.png"
				},
				"audio": null,
				"author": {
					"name": "ETTiNGRiNDER",
					"username": "ettingrinder"
				}
			},
			{
				"name": "Bone Planet",
				"alias": "bone-planet",
				"images": {
					"thumbnail": "https://opengameart.org/sites/default/files/styles/thumbnail/public/sample4_0.png",
					"medium": "https://opengameart.org/sites/default/files/styles/medium/public/sample4_0.png",
					"large": "https://opengameart.org/sites/default/files/styles/large/public/sample4_0.png"
				},
				"audio": null,
				"author": {
					"name": "Hyptosis",
					"username": "hyptosis"
				}
			}
		]
	}));
}