import {
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
  REMOVE_ITEM_FROM_CART
} from "./cart.types";
// store data
const initialState = {
  items: [{
      id: 1,
      qty: 1,
      img: "https://gmedia.playstation.com/is/image/SIEPDC/marvels-spiderman-remastered-screenshot-01-disclaimer-en-01oct20?$1600px--t$",
      title: "Spider-Man Remastered",
      desc: "The definitive version of one of the best superhero games ever made.",
      price: 55,
      details: "On Wednesday, Sony announced new details on Marvel’s Spider-Man Remastered, an update of Marvel’s Spider-Man for Sony’s next-generation console, the PlayStation 5. The game will feature a few expected upgrades, like better graphics, a higher frame rate, and a few new Spider-Man suits. It will also feature some unexpected changes ... like a brand-new face for Peter Parker.",
      brand: "playstation",
    },
    {
      id: 2,
      qty: 1,

      img: "https://cdn.akamai.steamstatic.com/steam/apps/1235140/capsule_616x353.jpg?t=1616605666",
      title: "Yakuza: Like a Dragon",
      desc: "a role-playing video game developed and published by Sega.",
      price: 43,
      details: "Yakuza: Like a Dragons Legendary Hero Edition includes ALL of the games DLC. This DLC adds a wide variety of in-game bonus content, including the Job Set, ...",
      brand: "playstation",
    },
    {
      id: 3,
      qty: 1,

      img: "https://i.ytimg.com/vi/TWHKxW0nrEY/maxresdefault.jpg",
      title: "Sackboy: A Big Adventure",
      desc: "A 2020 platform game developed by Sumo Digital.",
      price: 40,
      details: "Sackboy: A Big Adventure is a 2020 platform game developed by Sumo Digital and published by Sony Interactive Entertainment for the PlayStation 4 and the ...",
      brand: "playstation",
    },
    {
      id: 4,
      img: "https://blog.playstation.com/tachyon/2021/10/0a33d5550e07c7f86ecb6501eb8db9b761ac93d6.jpg?resize=1088%2C612&crop_strategy=smart",

      title: "Bugsnax",
      desc: "A beautiful game , Bugsnax takes you on a whimsical adventure to Snaktooth Island.",
      price: 40,
      details: "Bugsnax is an adventure video game developed by independent game studio Young Horses. In the game, players explore a mysterious island and attempt to find and capture the eponymous half-bug-half-snack creatures. The game was unveiled via an announcement trailer shown during Sony's PlayStation 5 live-streamed reveal event on June 11, 2020.",
      brand: "playstation",
    },
    {
      id: 5,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1492680/capsule_616x353.jpg?t=1629750860",

      title: "The Pathless",
      desc: "an independent action-adventure video game developed by Giant Squid",
      price: 45,
      details: "  From the creators of ABZÛ, The Pathless is the mythic adventure of an archer and an eagle in a vast forest. ... Become the Hunter, a master of archery who travels ...",
      brand: "playstation",
    },
    {
      id: 6,
      img: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S1-2560x1440-fe613ea24891cacef30e846e30a00982.jpg?h=270&resize=1&w=480",

      title: "Hitman-3",
      desc: "Seven Deadly Sins takes you deep into the mind of Agent 47 ,take on brand new challenges.",
      price: 55,
      details: "HITMAN 3 is the dramatic conclusion to the World of Assassination trilogy · Get the HITMAN 3 newsletter. · MEDIA.",
      brand: "playstation",
    },
    {
      id: 7,
      img: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/vgd/VGD-Preload-Console-TOUT.jpg",
      title: "Call of Duty: Vanguard",
      desc: "The award-winning Call of Duty®️ series returns with Call of Duty®️: Vanguard,",
      price: 55,
      details: "Call of Duty: Vanguard is a 2021 first-person shooter game developed by Sledgehammer Games and published by Activision. It was released on November 5 for ...",
      brand: "playstation",
    },
    {
      id: 8,
      img: "https://images.pushsquare.com/792aa90c3ae5d/1280x720.jpg",

      title: "Astro's Playroom",
      desc: "Astro and his crew lead you on a magical introduction through PS5 in this fun platformer",
      price: 0,
      details: "Astro's Playroom is a 3D platformer in which the player controls the title character Astro Bot using the DualSense controller. Like the previous game, he is ...",
      brand: "playstation",
    },
    {
      id: 9,
      img: "https://compass-ssl.xbox.com/assets/37/b8/37b8cbaf-b0f9-4089-b264-bfeb857af868.jpg?n=Assassins-Creed-Valhalla_GLP-Page-Hero-1084_NCSA_1920x1080_02.jpg",

      title: "Assassin's Creed Valhalla",
      desc: "The harvest season marks the start of the Oskoreia Festival and Odin's Wild Hunt,",
      price: 55,
      details: "Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla.",
      brand: "playstation",
    },
    {
      id: 10,
      img: "https://www.checkpointvg.com/wp-content/uploads/demons-header.jpg",

      title: "Demon's Souls",
      desc: "Venture to the northern kingdom of Boletaria – beset with unspeakable creatures.",
      price: 50,
      details: "Discover where the journey began - Experience the original brutal challenge, completely remade from the ground up. All presented in stunning visual quality with enhanced performance, this is the world of Boletaria as you have never seen it before.",
      brand: "playstation",
    },
    {
      id: 11,
      img: "https://upload.wikimedia.org/wikipedia/en/6/65/Kena_Bridge_of_Spirits_key_art.jpg",

      title: "Kena: Bridge of Spirits",
      desc: "Kena is a Spirit Guide who helps spirits who are unable to move on to the next life.",
      price: 40,
      details: "Kena, a young Spirit Guide, travels to an abandoned village in search of the sacred mountain shrine. She struggles to uncover the secrets of ...",
      brand: "playstation",
    },
    {
      id: 12,
      img: "https://cdn.mos.cms.futurecdn.net/jKyZh7AmtzFheyg3GWUn3k.jpg",

      title: "Ghost of Tsushima",
      desc: "Become the Ghost. ... The year is 1274. fearsome Mongol Empire invades the island of Tsushima.",
      price: 45,
      details: "Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan. As the ...",
      brand: "playstation",
    },
    {
      id: 13,
      img: "https://heavyarm-asia.com/wp-content/uploads/2021/01/returnal-3.jpg",

      title: "Returnal",
      desc: "A third-person shooter developed by Housemarque and published by Sony Interactive Entertainment..",
      price: 40,
      details: "Metacritic Game Reviews, Returnal for PlayStation 5, Returnal transforms roguelike gameplay into a third-person shooter where players fight ...",
      brand: "playstation",
    },
    {
      id: 14,
      img: "https://www.ultimaficha.com.br/wp-content/uploads/2021/09/Deathloop-Analise-Critica-Review-PT-BR-E-bom-vale-a-pena-780x450.jpg",

      title: "Deathloop",
      desc: "Deathloop is all about what happens when things don't go to plan.",
      price: 40,
      details: "DEATHLOOP transports you to the mysterious island of Blackreef, where an eternal struggle between two extraordinary assassins will determine the island's future ...",
      brand: "playstation",
    },
    {
      id: 15,
      img: "https://i.ytimg.com/vi/zafv1b1qG2Y/maxresdefault.jpg",

      title: "Ratchet and Clank: Rift Apart",
      desc: "Upon release the game received generally favorable reviews.",
      price: 50,
      details: "Ratchet & Clank: Rift Apart is a 2021 third-person shooter platform game developed by Insomniac Games and published by Sony Interactive Entertainment for ...",
      brand: "playstation",
    },
    {
      id: 16,
      img: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",

      title: "Red Dead Redemption 2",
      desc: "Winner of over 175 Game of the Year Awards",
      price: 45,
      details: "Red Dead Online is now available for PlayStation 4, Xbox One, PC and Stadia. Developed by the creators of Grand Theft Auto V and Red Dead Redemption, ...",
      brand: "xbox",
    },
    {
      id: 17,
      img: "https://images.gog-statics.com/60c724a052275a049d857d53957dc38e9347742f52372bb956d992b43efa8fb5_product_card_v2_mobile_slider_639.jpg",

      title: "The Witcher 3: Wild Hunt",
      desc: "open world RPG set in a visually stunning fantasy universe full.",
      price: 45,
      details: "Open World. In the open world of Wild Hunt, you chart your own path to adventure. · Professional Monster Hunter · Story. In a war-torn world, with the Wild Hunt ...",
      brand: "xbox",
    },
    {
      id: 18,
      img: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/7757.jpeg",

      title: "Dishonored 2",
      desc: "Reprise your role as a supernatural assassin",
      price: 40,
      details: "Dishonored 2 is set 15 years after the Lord Regent has been vanquished and the dreaded Rat Plague has passed into history. An otherworldly ...",
      brand: "xbox",
    },
    {
      id: 19,
      img: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/35211521/adac20f344a6a7b3f6d9332c89d516df4453f090.png",

      title: "Doom Eternal",
      desc: "Become the Slayer in an epic single-player campaign",
      price: 40,
      details: "DOOM®️ Eternal, the award-winning game and “one of the best first-person shooters ever” according to GameRevolution, is coming to Nintendo Switch. Developed by ...",
      brand: "xbox",
    },
    {
      id: 20,
      img: "https://store-images.s-microsoft.com/image/apps.65421.65494054591008504.4eae27ba-1cfe-4af2-950a-4af81f8cd22a.fd4fa6b5-431f-47bc-b9c8-3844383dfb20?mode=scale&q=90&h=720&w=1280",

      title: "Gears 5",
      desc: "Gears 5 is a 2019 third-person shooter.",
      price: 40,
      details: "With Xbox Game Pass Ultimate, you get everything in the Gears 5 Game of the Year Edition, plus access to over 100 high-quality console and PC games, and all the ...",
      brand: "xbox",
    },
    {
      id: 21,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1603904569",

      title: "Sekiro: Shadows Die Twice",
      desc: "Carve your own clever path to vengeance.",
      price: 45,
      details: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as ...",
      brand: "xbox",
    },
    {
      id: 22,
      img: "https://sm.ign.com/ign_il/screenshot/default/kvtrt_jbvw.jpg",

      title: "Mortal Kombat 11",
      desc: "Mortal Kombat is back and better than ever.",
      price: 45,
      details: "Upon release, the console versions of Mortal Kombat 11 received generally favorable reviews, which praised the gameplay, story, graphics, and improved netcode, but it received criticism for the presence of microtransactions and over-reliance on grinding. An expansion for the game was released on May 26, 2020,",
      brand: "xbox",
    },
    {
      id: 23,
      img: "https://compass-ssl.xbox.com/assets/6a/31/6a31393d-b0cc-4833-8e82-fd3a2c6b6e19.jpg?n=FH4_GLP-Page-Hero-1084_1920x1080_02.jpg",

      title: "Forza Horizon 4",
      desc: "drive over 450 cars across beautiful Britain.",
      price: 35,
      details: " Live the Horizon Life when you play Forza Horizon 4. Experience a shared world with dynamic seasons. Explore beautiful scenery, collect over 450 cars and become ...",
      brand: "xbox",
    },
    {
      id: 24,
      img: "https://gameranx.com/wp-content/uploads/2019/02/maxresdefault-1-5.jpg",

      title: "Devil May Cry 5",
      desc: "DMC is back and more beautiful than ever.",
      price: 45,
      details: "“If you enjoy third-person brawlers DMC5 is a must, and if you've never tried one before, this is a great place to start. What a treat.” ... “Devil May Cry 5 is a ...",
      brand: "xbox",
    },
    {
      id: 25,
      img: "https://images.daznservices.com/di/library/sporting_news/44/d3/madden-nfl-20-patrick-mahomes_1rtvl1rtb15rv1m0btr8iisu2u.jpg?t=1543365018&quality=100",

      title: "Madden NFL 20",
      desc: "Feel like an NFL Superstar in Madden NFL 20.",
      price: 40,
      details: "Madden NFL 20 is an American football video game based on the National Football League (NFL), developed by EA Tiburon and published by Electronic Arts. The ...",
      brand: "xbox",
    },
    {
      id: 26,
      img: "https://i.ytimg.com/vi/GKXS_YA9s7E/maxresdefault.jpg",

      title: "Overwatch",
      desc: "Extraordinary Heroes. Epic Moments. ",
      price: 35,
      details: "Overwatch is a vibrant team-based shooter set on a near-future earth. Every match is an intense 6v6 battle between a cast of unique heroes, each with their ...",
      brand: "xbox",
    },
    {
      id: 27,
      img: "https://sm.ign.com/ign_il/news/a/assassins-/assassins-creed-odysseys-dlc-announced-assassins-creed-iii-r_tbb6.jpg",

      title: "Assassin's Creed Odyssey",
      desc: "Write your own epic odyssey become a legendary Spartan.",
      price: 40,
      details: "Assassin's Creed Odyssey is an action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. It is the eleventh major installment in the franchise",
      brand: "xbox",
    },
    {
      id: 28,
      img: "https://store-images.s-microsoft.com/image/apps.60377.67926658307646239.e8130cbd-e4b6-4c78-9fe9-424eb8a64ab1.78a5c2e6-56b7-4d89-9637-cb1f1e24a0b7?mode=scale&q=90&h=1080&w=1920",

      title: "Monster Hunter: World",
      desc: "enjoy the ultimate hunting experience.",
      price: 45,
      details: "In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt ...",
      brand: "xbox",
    },
    {
      id: 29,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1622100/capsule_616x353.jpg?t=1632855674",

      title: "Outer Wilds",
      desc: "a mystery - a solar system trapped in an endless time loop.",
      price: 40,
      details: "Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery ...",
      brand: "xbox",
    },
    {
      id: 30,
      img: "https://www.pcgamesn.com/wp-content/uploads/2021/08/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg",

      title: " Hollow Knight",
      desc: "Lots going on in the world of Hollow Knight.",
      price: 35,
      details: "Use Your Skills and Reflexes to Survive. Hollow Knight is a challenging 2D action-adventure. You'll explore twisting caverns, battle tainted creatures and ...",
      brand: "xbox",
    },
    {
      id: 31,
      img: "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/m/metroid-dread-switch/hero?v=2021102901",

      title: "Metroid Dread",
      desc: "control bounty hunter Samus Aran as she explores the planet ZDR. ",
      price: 45,
      details: "Metroid Dread is an action-adventure game in which players control bounty hunter Samus Aran as she explores the planet ZDR. It retains the side-scrolling ...",
      brand: "nintendo",
    },
    {
      id: 32,
      img: "https://coolwallpapers.me/picsup/5595100-super-mario-odyssey-hd-wallpapers.jpg",

      title: "Super Mario Odyssey",
      desc: "The best super mario game ever made.",
      price: 50,
      details: "Player 1 controls Mario while Player 2 controls Cappy. This sandbox-style 3D Mario adventure—the first since 1996's beloved Super Mario 64™️ and 2002's Nintendo ...",
      brand: "nintendo",
    },
    {
      id: 33,
      img: "https://www.nextplayer.it/wp-content/uploads/2021/08/maxresdefault-7.jpg",

      title: "Eastward",
      desc: "Eastward is a beautifully detailed and charming adventure game.",
      price: 40,
      details: "Escape the tyrannical clutches of a subterranean society and join Eastward's unlikely duo on an exciting adventure to the land above!",
      brand: "nintendo",
    },
    {
      id: 34,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/m/mario-kart-8-deluxe-switch/mario-kart-8-deluxe-switch-hero.jpg",

      title: "Mario Kart 8 Deluxe",
      desc: "Hit the road with the definitive version of Mario Kart 8.",
      price: 45,
      details: "Mario Kart 8 Deluxe is a racing game for the Nintendo Switch, and the first Mario game overall for the console. It is a port in the Mario Kart series, ...",
      brand: "nintendo",
    },
    {
      id: 35,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg",

      title: "Breath of the Wild",
      desc: "Step into a world of discovery, exploration and adventure.",
      price: 55,
      details: "Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.",
      brand: "nintendo",
    },
    {
      id: 36,
      img: "http://www.smashbros.com/assets_v2/img/sns/en.png?180309",

      title: "Super Smash Bros. Ultimate",
      desc: "Gaming icons clash in the ultimate brawl.",
      price: 50,
      details: "Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history.",
      brand: "nintendo",
    },
    {
      id: 37,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/h/hades-switch/hades-switch-hero.jpg",

      title: "Hades",
      desc: "Hades is a roguelike action dungeon crawler video game.",
      price: 45,
      details: "Players control Zagreus, the son of Hades, as he attempts to escape from the Underworld to reach Mount Olympus, at times aided by gifts bestowed on him from the other Olympians. Each run challenges the player through a random series of rooms populated with enemies and rewards.",
      brand: "nintendo",
    },
    {
      id: 38,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/l/luigis-mansion-3-switch/luigis-mansion-3-switch-hero.jpg",

      title: "Luigi's Mansion 3",
      desc: "blow away, and vacuum up ghosts with the all-new Poltergust.",
      price: 45,
      details: "Luigi's invited to the towering Last Resort hotel, but when Mario and friends go missing, our green-clad hero will have to conquer his fears to save them. Slam, ...",
      brand: "nintendo",
    },
    {
      id: 39,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-skyward-sword-hd-switch/the-legend-of-zelda-skyward-sword-hd-switch-hero.jpg",

      title: "The Legend of Zelda: Skyward Sword",
      desc: "Descend from the sky.",
      price: 45,
      details: "The Legend of Zelda: Skyward Sword is an action-adventure game in which players take on the role of series protagonist Link through a series of monster- ...",
      brand: "nintendo",
    },
    {
      id: 40,
      img: "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/d/dead-cells-switch/hero?v=2021103008",

      title: "Dead Cells",
      desc: "A roguelike, Castlevania-inspired action-platformer.",
      price: 45,
      details: "Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you’re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.",
      brand: "nintendo",
    },
    {
      id: 41,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/capsule_616x353.jpg?t=1633047889",

      title: "Monster Hunter Rise",
      desc: "Rise to the challenge and join the hunt! ... ",
      price: 45,
      details: " In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.",
      brand: "nintendo",
    },
    {
      id: 42,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/p/paper-mario-the-origami-king-switch/paper-mario-the-origami-king-switch-hero.jpg",

      title: "Paper Mario: The Origami King",
      desc: "Featuring a new ring-based system.",
      price: 40,
      details: "The kingdom has been ravaged by an origami menace! Join Mario and his new partner, Olivia, as they battle evil Folded Soldiers, repair the damaged landscape, and try to free Princess Peach’s castle from the clutches of King Olly in this comedy-filled adventure, only on the Nintendo Switch™️ system.",

      brand: "nintendo",
    },
    {
      id: 43,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/p/pokemon-sword-switch/Switch_Pokemon-SwordShield_1200x675.jpg",

      title: "Pokemon Sword & Shield",
      desc: "Get ready for the next Pokémon adventure ,Get both in a bundle",
      price: 60,
      details: "this time in the new Galar region, which is based on the United Kingdom. The main objective of the games is to dethrone the Pokémon League Champion, Leon, in a tournament that various other Gym Leaders and rivals also take part in, whilst dealing with Team Yell and a nefarious conspiracy within the League.",

      brand: "nintendo",
    },
    {
      id: 44,
      img: "https://www.nintendo.co.il/wp-content/uploads/2021/05/Splatoon2-Switch-Banner-1920x1080-ALL.jpg",

      title: "Splatoon 2",
      desc: "The squid kids called Inklings are back to splat more ink.",
      price: 40,
      details: "Like its predecessor, Splatoon 2 is a third-person shooter in which players control characters, known as Inklings and Octolings, and use colored ink as ammunition. Ink is also used to cover the ground, or any paintable surface, in order to swim or refill their ink tanks.",

      brand: "nintendo",
    },
    {
      id: 45,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/d/dark-souls-remastered-switch/dark-souls-remastered-switch-hero.jpg",

      title: "Dark Souls Remastered",
      desc: "includes the main game plus the Artorias of the Abyss DLC. ",
      price: 35,
      details: "DARK SOULS: REMASTERED includes the main game plus the Artorias of the Abyss DLC. This marks the franchise's debut on a Nintendo platform, and for the first time ever can be played on-the-go with Nintendo Switch. Deep and Dark Universe— Delve into an epic dark fantasy universe stricken by the Curse.",

      brand: "nintendo",
    },
    {
      id: 46,
      img: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg?h=270&resize=1&w=480",

      title: "Assassin's Creed Valhalla",
      desc: "A legendary Viking raider on a quest for glory.",
      price: 35,
      details: "In Assassin's Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of England's Dark Ages. Raid your enemies, grow your settlement and build your political power in the quest to earn a place among the gods in Valhalla.",

      brand: "pc",
    },
    {
      id: 47,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/200260/capsule_616x353.jpg?t=160942683",

      title: "Batman: Arkham City",
      desc: "builds upon the foundation of Batman: Arkham Asylum.",
      price: 20,
      details: "Batman: Arkham City is a 2011 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment. ... In the game's main storyline, Batman is incarcerated in Arkham City, a super-prison enclosing the decaying urban slums of fictional Gotham City.",

      brand: "pc",
    },
    {
      id: 48,
      img: "https://themakoreactor.com/wp-content/uploads/2019/09/daemon-x-machina-featured-image-main.jpg",

      title: "Daemon X Machina",
      desc: "You are an Outer, a new breed of human.",
      price: 50,
      details: "Third-person mech blaster, Daemon X Machina, tells the story of a world recovering from a major catastrophe. The moon has crashed into the planet, and the resulting wreck has been emitting a strange energy that's not only turning all artificial intelligence sentient, but also turning it against the human race.",

      brand: "pc",
    },
    {
      id: 49,
      img: "https://cdn1.epicgames.com/springbok/offer/DS3_Horizontal-2560x1440-417a54a752a7aecb70c340872fc77e74.jpg",

      title: "Darksiders III",
      desc: "Return to an apocalyptic Earth in Darksiders III.",
      price: 45,
      details: "Darksiders III on Steam. Return to an apocalyptic Earth in Darksiders III, a hack-n-slash Action Adventure where players assume the role of FURY in her quest to hunt down and dispose of the Seven Deadly Sins. The most enigmatic of the Four Horsemen, FURY must bring balance to the forces that now ravage Earth.",

      brand: "pc",
    },
    {
      id: 50,
      img: "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg",

      title: "Death Stranding",
      desc: "You must brave a world utterly transformed.",
      price: 50,
      details: "Death Stranding is a 2019 action game developed by Kojima Productions. It is the first game from director Hideo Kojima and Kojima Productions after their split from Konami in 2015. ... The game is set in the United States following a cataclysmic event which caused destructive creatures to begin roaming the Earth.",

      brand: "pc",
    },
    {
      id: 51,
      img: "https://i.ytimg.com/vi/FcITAzKW3fY/maxresdefault.jpg",

      title: "Fall Guys: Ultimate Knockout",
      desc: "a platform battle royale.",
      price: 20,
      details: "Fall Guys: Ultimate Knockout on Steam. Fall Guys is a massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round of escalating chaos until one victor remains!",

      brand: "pc",
    },
    {
      id: 52,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/371660/ss_09519977390070d19cbf66981df5eb4f3a168101.1920x1080.jpg?t=1602603087",

      title: "Far Cry Primal",
      desc: "Award-winning franchise that stormed the tropics.",
      price: 35,
      details: "Far Cry Primal is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. ... It is the first Far Cry game set in pre-modern times. It revolves around the story of Takkar, who starts off as an unarmed hunter and rises to become the leader of a tribe.",

      brand: "pc",
    },
    {
      id: 53,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1139900/capsule_616x353.jpg?t=1635496307",

      title: "Ghostrunner",
      desc: "Ghostrunner is a hardcore FPP slasher.",
      price: 35,
      details: "Ghostrunner is a hardcore FPP slasher packed with lightning-fast action, set in a grim, cyberpunk megastructure. Climb Dharma Tower, humanity's last shelter, after a world-ending cataclysm. Make your way up from the bottom to the top, confront the tyrannical Keymaster, and take your revenge.",

      brand: "pc",
    },
    {
      id: 54,
      img: "https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Landscape_2560x1440_UK-2560x1440-4586f116e7b9be1c051793647b3dea3d.jpg",

      title: "Immortals Fenyx Rising",
      desc: " Play as Fenyx on a quest to save the Greek gods from a curse.",
      price: 40,
      details: "Immortals Fenyx Rising™️ brings grand mythological adventure to life. Play as Fenyx, a new, winged demigod, on a quest to save the Greek gods. - Wield the powers of the gods like Achilles' sword and Daidalos' wings to battle powerful enemies and solve ancient puzzles.",

      brand: "pc",
    },
    {
      id: 55,
      img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/k/katamari-damacy-reroll-switch/katamari-damacy-reroll-switch-hero.jpg",

      title: "Katamari Damacy Reroll",
      desc: "The stop-at-nothing pushing prince is back and ready to reroll!",
      price: 30,
      details: "When the King of All Cosmos accidentally destroys all the stars in the sky, he orders you, his pint-sized princely son, to put the twinkle back in the heavens above. Players can also play on multiplayer mode with a friend by using the two Joy-cons on the Switch. ...",

      brand: "pc",
    },
    {
      id: 56,
      img: "https://images.gog-statics.com/522bdad548039d81937db1c78742bcbb52ec066b3d71d0532352a3160e80bab4_product_card_v2_mobile_slider_639.jpg",

      title: "Killer Is Dead: Nightmare Edition",
      desc: "A cybernetically enhanced assassin.",
      price: 35,
      details: "A PC version was announced on February 17, 2014 as Killer Is Dead: Nightmare Edition. It was released on May 23, 2014 on a disc and as a digital download. It includes a new difficulty mode called Nightmare. In it enemies can only be defeated using three attacks: Adrenaline Burst, Dodge Burst and Headshots.",

      brand: "pc",
    },
    {
      id: 57,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/313690/capsule_616x353.jpg?t=1573510385",

      title: "Lego Batman 3: Beyond Gotham",
      desc: "An action-packed adventure!",
      price: 25,
      details: "The best-selling LEGO Batman videogame franchise returns in an out-of-this-world, action-packed adventure! In LEGO Batman™️ 3: Beyond Gotham, the Caped Crusader joins forces with the super heroes of the DC Comics universe and blasts off to outer space to stop the evil Brainiac from destroying Earth.",

      brand: "pc",
    },
    {
      id: 58,
      img: "https://steamcdn-a.akamaihd.net/steam/apps/742300/capsule_616x353.jpg?t=1591584092",

      title: "Mega Man 11",
      desc: "Mega Man 11 ... The Blue Bomber is Back! The newest entry in this iconic series ",
      price: 30,
      details: "Mega Man 11 features 3D polygonal characters and hand-drawn environments, departing from the pixel art-based approach from previous games, and is displayed in 2.5D. It was directed by Koji Oda and produced by Kazuhiro Tsuchiya, with character designs by Yuji Ishihara, and music by Marika Suzuki.",

      brand: "pc",
    },
    {
      id: 59,
      img: "https://i.ytimg.com/vi/Hp-APwxE-hc/maxresdefault.jpg",

      title: "Metal Gear Rising: Revengeance",
      desc: "Raiden faces off against cyborg soldiers and UGs .",
      price: 45,
      details: "The events of Metal Gear Rising are set in the year 2018, four years after the events of Guns of the Patriots. The Patriots, a powerful shadow organization running the world's war economy, have been destroyed and Private Military Companies (PMC) have splintered into numerous factions.",

      brand: "pc",
    },
    {
      id: 60,
      img: "https://i.ytimg.com/vi/y8ByV0Z5oBk/maxresdefault.jpg",

      title: "Ninja Gaiden: Master Collection",
      desc: "Deluxe Edition includes the three games.",
      price: 45,
      details: "NINJA GAIDEN: Master Collection Deluxe Edition includes the three games, digital artbook, and the game soundtrack. With more than 70 pages in the artbook and over 180 tracks in the soundtrack collection, long-time fans and newcomers alike will get a deeper look into the world of NINJA GAIDEN.",

      brand: "pc",
    },
    {
      id: 61,
      img: "https://vgs.co.il/wp-content/uploads/2020/06/PS5-CONSOLE-HORIZANTAL.jpg",

      title: "Playstation 5",
      desc: "Deluxe Edition + Get A Free Game Of Your Choice .",
      price: 499,
      details: "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020,",

      brand: "store",
    },
    {
      id: 62,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/6966432/original/d08bb7c2cb636667c4ecd8b8d4aa072a.jpg",

      title: "DualSense wireless controller",
      desc: "xperience Varying Force & Tension At Your Fingertips",
      price: 69,
      details: "Experience Varying Force & Tension At Your Fingertips With Adaptive Triggers - Learn More. Chat Online Using The Built-In Microphone Or By Connecting A Headset To The 3.5mm Jack.",
      brand: "store",
    },
    {
      id: 63,
      img: "https://static.turbosquid.com/Preview/2020/09/25__04_43_01/Sony_PS5_Charging_01.jpg9DFC576C-135D-4224-8F96-9006F24424B9Large.jpg",

      title: "DualSense charging station",
      desc: "Charge up to two DualSense wireless controllers at the same time and  dock them quickly and easily ",
      price: 40,
      details: "Charge up to two DualSense wireless controllers simultaneously. Dock your DualSense wireless controllers quickly and easily with the charging station's click-in design. Controllers charge as quickly as when connected to your PS5 console.",

      brand: "store",
    },
    {
      id: 64,
      img: "https://i.ytimg.com/vi/y8ByV0Z5oBk/maxresdefault.jpg",

      title: "PULSE 3d wireless headset",
      desc: "specifically tuned to deliver the 3D Audio made possible by the PS5",
      price: 79,
      details: "Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles. The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, built-in rechargeable battery, and an array of easy-access controls. Available when feature is supported by game.",

      brand: "store",
    },
    {
      id: 65,
      img: "https://gamingintel.com/wp-content/uploads/2021/11/Halo-Infinite-Xbox-Series-X-Elite-Controller-Restock-Best-Buy-Target-Microsoft-Amazon-More-November-15-21.jpg",

      title: "XBOX SERIES X HALO",
      desc: "Xbox series x halo infinte limited edition bundle.",
      price: 349,
      brand: "store",
      details: "Celebrate Halo’s 20th anniversary and confront the most ruthless foe the Master Chief has ever faced with Xbox Series X Halo Infinite Limited Edition Bundle. Includes a custom console design imprinted with stars as seen from the surface of Zeta Halo – extending onto the fan behind a blue vent inspired by Cortana.",
    },
    {
      id: 66,
      img: "https://compass-ssl.xbox.com/assets/b3/a7/b3a73caf-ad9d-42b0-af31-1fc4a527875b.jpg?n=214388_gallery_01_1056x594.jpg",

      title: "Backbone One for iOS",
      desc: "Backbone One Mobile Gaming Controller for iPhone ",
      price: 79,
      details: "With Backbone One, next-level gaming has never been more magical and effortless. Just connect the controller to your iPhone, press the Backbone Button to open the app, and instantly start playing games like Minecraft anywhere, in seconds.",

      brand: "store",
    },
    {
      id: 67,
      img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60e590b07db96583dd049065%2F0x0.jpg",

      title: "Nintendo Switch – OLED Model White set",
      desc: "7-inch OLED screen - vivid colors and crisp contrast, a screen that makes colors pop · Wide adjustable stand – Freely angle the system's wide ...",
      price: 349,
      details: "Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch™️ – OLED Model system. In addition to a new screen with vivid colors and sharp contrast, the Nintendo Switch – OLED Model includes a wide adjustable stand for more comfortable viewing angles, a dock with a wired LAN port for TV mode (LAN cable sold separately), 64GB of internal storage, and enhanced audio in Handheld and Tabletop modes using the system’s speakers.",

      brand: "store",
    },
    {
      id: 68,
      img: "https://www.gamestorm.co.il/files/products/image1_5556_2021-10-03_19-44-28.png",

      title: "Nintendo Switch Lite - Dialga & Palkia Edition",
      desc: "Optimized for personal, handheld play, Nintendo Switch Lite is a small and light Nintendo Switch system",
      price: 199,
      details: "The Switch Lite Dialga and Palkia Edition features a dark exterior, black buttons and a flashy rear design with metallic outlines of the two legendary Pokémon from the upcoming games. This finish is only available on the handheld version of the Switch, not the main console.",

      brand: "store",
    },
    {
      id: 69,
      img: "https://www.presse-citron.net/app/uploads/2021/02/guide-precommande-joycon-zelda-skyward-sword.jpg",

      title: "Joy-Con The Legend of Zelda",
      desc: "The Legend of Zelda: Skyward Sword HD, with this set of specially-designed Joy-Con controllers. The right Joy-Con controller ...",
      price: 35,
      details: "Joy‑Con and Nintendo Switch™️ give you total gameplay flexibility. Games come to life through easy-to-use motion controls and HD rumble—advanced vibration features built into each Joy‑Con. Depending on the game, you might use a single Joy‑Con in each hand—or even give the second one to a friend.",

      brand: "store",
    },
    {
      id: 70,
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SY450_.jpg",

      title: "Redragon s101 keyboard",
      desc: "Gaming Keyboard Mouse Combo, RGB LED Backlit 104 Keys",
      price: 39,
      details: "RGB BACKLIT GAMING KEYBOARD: Redragon LED RGB Keyboard: 4 backlight color effects, 5 levels backlight breathing speed, Ergonomic designed keyboard with 104 keys, 25 keys without conflict, 12 multimedia keys, 8 independent control keys for quick management, splash-proof, WIN key can be disabled for gaming.",

      brand: "store",
    },
    {
      id: 71,
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6265/6265133_sd.jpg",

      title: "Gaming Mouse",
      desc: "Another important gaming accessory for a gamer.",
      price: 25,
      details: "A mouse designed for gamers. Gaming mice have adjustable sensitivity, which is configurable as the number of dots per inch (DPI). ... Higher DPI lets the gamer make quick movements, while lower DPI allows for smaller, precise movements. See DPI, gaming PC and gaming keyboard.",

      brand: "store",
    },
    {
      id: 72,
      img: "https://media.steelseriescdn.com/thumbs/filer_public/f6/6e/f66ebbf9-aff2-48ff-854d-70e96bc5d22d/arctis_bt_comfort_001.jpg__1920x1080_q100_crop-fit_optimize_subsampling-2.jpg",

      title: "SteelSeries Arctis 3",
      desc: "The SteelSeries Arctis 3 2019 Edition are good gaming headphones",
      price: 39,
      details: "Discord-certified ClearCast noise cancelling microphone for clear, natural-sounding voice communication on all platforms Arctis signature soundscape emphasizes critical sounds to give you an audio advantage. Play all day with athletics-inspired performance fabric Airweave ear cushions.",

      brand: "store",
    },
  ],
  // ternery that checks if any "cartItems" are in local storage fetch them if not return empty []
  addedItems: localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : [],
  // ternery that checks if "total" is in local storage fetch it if not return 0
  total: localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
};
const cartReducer = (state = initialState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    // find runs on items object looking for the same id as the actions id
    localStorage.setItem('cartItems', JSON.stringify(state.addedItems))

    let addedItem = state.items.find((item) => item.id === action.id);
    //here were looking for an item inside "addeditems" array that matches the given id

    let existed_item = state.addedItems.find((item) => action.id === item.id);
    // if we find an item  inside "addeitems"
    if (existed_item) {
      addedItem.qty = 1;
      return {
        // taking a copy of the state
        ...state,
        // mapping the item and if the id matches increment the qty by 1 else return item

        addedItems: state.addedItems.map((item) =>
          item.id === action.id ? {

            ...item,
            qty: (item.qty += 1)
          } :
          item
        ),
        // taking the total from the state and adding the item's price to it
        total: state.total + addedItem.price,
      };
      // if we DONT find an item inside "addedItems"
    } else {
      addedItem.qty = 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        // spread on addedItems and adds the new item
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }

  if (action.type === REMOVE_ITEM_FROM_CART) {

    // find runs on items object looking for the same id as the action id
    let itemToRemove = state.addedItems.find((item) => item.id === action.id);
    // filters throw "items" and removes the one with the same id
    let new_items = state.addedItems.filter((item) => action.id !== item.id);


    localStorage.setItem('cartItems', JSON.stringify(new_items));


    let newTotal = state.total - itemToRemove.price * itemToRemove.qty;
    return {
      ...state,
      // returns the new array without the filtered item
      addedItems: new_items,
      //set the state.total + item.price - the quantity
      total: newTotal,
    };
  }
  if (action.type === SUBTRACT_FROM_CART) {
    // find runs on items object looking for the same id as the action id
    let addedItem = state.addedItems.find((item) => item.id === action.id);
    localStorage.setItem('cartItems', JSON.stringify(state.addedItems));
    if (addedItem.qty === 1) {
      //delete the item
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      localStorage.setItem('cartItems', JSON.stringify(state.addedItems));
      return {
        ...state,
        addedItems: new_items,
        // reduce the price of deleted item from total
        total: newTotal,
      };

      // if qty is more than 1
    } else {
      // subtract price of item from total
      let newSubTotal = state.total - addedItem.price;
      // mapping the items if id maches  decrement qty by 1 ,else return item
      const updatedItems = state.addedItems.map((item) =>
        item.id === action.id ? {
          ...item,
          qty: item.qty - 1
        } : item
      );
      return {
        ...state,
        addedItems: updatedItems,
        total: newSubTotal,
      };
    }
  }
  return state;
};

export default cartReducer;