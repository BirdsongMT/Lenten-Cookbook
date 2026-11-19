// ─────────────────────────────────────────────────────────────
// LENTEN COOKBOOK RECIPES
// To add a recipe: copy any block below, give it the next id,
// and fill in the fields. Chapters: soups, stews, grains, baked,
// quick, bread. oil: "none" (no oil), "swap" (add oilSwap text),
// or "needs" (oil days only). photo: "photos/<file>.jpg" or null.
// ─────────────────────────────────────────────────────────────
window.CHAPTERS = [
  { key: "soups",  title: "Soups",                   icon: "bowl"  },
  { key: "stews",  title: "Stews & Curries",         icon: "pot"   },
  { key: "grains", title: "Rice, Grains & Pasta",    icon: "grain" },
  { key: "baked",  title: "Stuffed & Baked",         icon: "oven"  },
  { key: "quick",  title: "Quick Meals & Salads",    icon: "leaf"  },
  { key: "bread",  title: "Bread & Sweets",          icon: "bread" }
];

window.RECIPES = [
  {
    "id": 1,
    "title": "Easy Spicy Vegan Potato Curry",
    "chapter": "stews",
    "emoji": "🥔",
    "photo": null,
    "time": "30 min",
    "timeMin": 30,
    "timeCategory": "30-40",
    "servings": "4",
    "tag": "One-pan",
    "isGreek": false,
    "oil": "swap",
    "oilSwap": "Sauté in a few Tbsp of water or broth instead of oil.",
    "ingredients": [
      "1 Tbsp coconut or olive oil",
      "½ tsp minced garlic",
      "6 small red potatoes, cut in ½-inch cubes",
      "1 large bell pepper, sliced",
      "2 Tbsp vegan curry paste (many Thai pastes contain shrimp, check the label)",
      "1 can chickpeas, drained",
      "1½ cups coconut milk",
      "½ cup veggie broth",
      "2 cups spinach",
      "Salt to taste"
    ],
    "steps": [
      "Sauté potatoes, pepper, and garlic in oil (8–10 min).",
      "Stir in curry paste for 1 min.",
      "Add chickpeas, coconut milk, and broth. Simmer 12–15 min until potatoes are tender.",
      "Stir in spinach until wilted. Season with salt. Serve over rice."
    ],
    "tip": "Serve over fluffy basmati rice for a complete meal. A squeeze of lime at the end brightens everything up!"
  },
  {
    "id": 2,
    "title": "Greek Lentil Soup (Fakes)",
    "chapter": "soups",
    "emoji": "🍲",
    "photo": null,
    "time": "60 min",
    "timeMin": 60,
    "timeCategory": "45-60",
    "servings": "4",
    "tag": "Classic",
    "isGreek": true,
    "oil": "swap",
    "oilSwap": "Skip the oil and soften the vegetables in a little water. Lighter, still delicious.",
    "ingredients": [
      "2 cups dry brown lentils",
      "⅓ cup olive oil",
      "1½ onions, chopped",
      "1 carrot & 1 celery stalk, diced",
      "3 garlic cloves, sliced",
      "6 cups water",
      "1⅓ cups tomato sauce",
      "2 bay leaves",
      "Salt & pepper",
      "Red wine vinegar (for serving)"
    ],
    "steps": [
      "Sauté onion, carrot, celery, and garlic in oil.",
      "Add rinsed lentils, water, tomato sauce, and bay leaves.",
      "Simmer 30–45 min until lentils are tender. Season with salt and pepper.",
      "Crucial: Add a splash of vinegar to each bowl before eating!"
    ],
    "tip": "Don't skip the red wine vinegar! That final splash in each bowl is the defining character of authentic Greek Fakes — it transforms the soup completely."
  },
  {
    "id": 3,
    "title": "Spanakorizo (Spinach Rice)",
    "chapter": "grains",
    "emoji": "🌿",
    "photo": null,
    "time": "40 min",
    "timeMin": 40,
    "timeCategory": "30-40",
    "servings": "4",
    "tag": "Comforting",
    "isGreek": true,
    "oil": "needs",
    "ingredients": [
      "1 cup long-grain rice",
      "20 oz fresh spinach, chopped",
      "½ cup olive oil",
      "4 spring onions, chopped",
      "½ cup tomato passata",
      "2 cups water",
      "Fresh dill (optional)",
      "Salt & pepper",
      "Lemon juice (for serving)"
    ],
    "steps": [
      "Sauté onions in olive oil until soft.",
      "Add spinach in handfuls and cook until wilted.",
      "Add rice, water, passata, salt, and pepper. Bring to a boil.",
      "Cover and simmer on low for 18–20 min until rice is tender. Add a splash of water if it looks dry. Let rest 5 min, then serve with lemon."
    ],
    "tip": "Let it rest those 5 minutes — the rice finishes steaming and the dish becomes even silkier. A drizzle of good olive oil on top before serving is the real Greek finish."
  },
  {
    "id": 4,
    "title": "One-Pot Quinoa Chili",
    "chapter": "stews",
    "emoji": "🌶️",
    "photo": null,
    "time": "30 min",
    "timeMin": 30,
    "timeCategory": "30-40",
    "servings": "6",
    "tag": "Smoky",
    "isGreek": false,
    "oil": "swap",
    "oilSwap": "Sauté the onion and pepper in a splash of broth.",
    "ingredients": [
      "1 cup dry quinoa, rinsed",
      "1 onion & 1 bell pepper, diced",
      "4 cups veggie broth",
      "1 can tomato sauce",
      "1 can black beans & 1 can kidney beans",
      "3 Tbsp chili powder, 1 Tbsp cumin",
      "1 cup corn (frozen or canned)",
      "3 garlic cloves, minced",
      "Salt to taste"
    ],
    "steps": [
      "Sauté onion and pepper. Add quinoa and garlic.",
      "Add tomato sauce, 3 cups broth, and spices. Simmer 10 min.",
      "Add beans, corn, and remaining broth. Cook 10 min more.",
      "Season with salt. Top with avocado if desired."
    ],
    "tip": "Quinoa absorbs liquid quickly, so keep an eye on it and add extra broth if it looks too thick. Leftovers thicken overnight — just add a splash of water when reheating."
  },
  {
    "id": 5,
    "title": "Fresh Four Bean Salad",
    "chapter": "quick",
    "emoji": "🥗",
    "photo": null,
    "time": "10 min + chill",
    "timeMin": 10,
    "timeCategory": "under20",
    "servings": "8",
    "tag": "No-Cook",
    "isGreek": false,
    "oil": "none",
    "ingredients": [
      "1 can chickpeas, drained",
      "1 can cannellini beans, drained",
      "1 can kidney beans, drained",
      "1½ cups cooked edamame",
      "1 red onion, diced",
      "2 Tbsp maple syrup",
      "2 Tbsp lemon juice",
      "1 Tbsp Dijon mustard",
      "Salt & pepper to taste"
    ],
    "steps": [
      "Whisk together maple syrup, lemon juice, and Dijon mustard for the dressing.",
      "Drain and rinse all canned beans.",
      "Toss all beans, edamame, and red onion together in a large bowl.",
      "Pour dressing over and toss well. Chill at least 30 min before serving. Best served cold!"
    ],
    "tip": "This salad gets even better the next day when all the flavors have melded together. Make it the night before for the best result. Great for potlucks!"
  },
  {
    "id": 6,
    "title": "Vegan Burrito Bowl",
    "chapter": "quick",
    "emoji": "🥗",
    "photo": null,
    "time": "20 min",
    "timeMin": 20,
    "timeCategory": "under20",
    "servings": "4",
    "tag": "Customizable",
    "isGreek": false,
    "oil": "none",
    "ingredients": [
      "1 cup instant (quick-cooking) rice",
      "1 can (15 oz) black beans, drained",
      "1 medium red onion, sliced into strips",
      "2 bell peppers, sliced into strips",
      "1 head romaine lettuce, chopped",
      "Salsa of choice",
      "½ tsp each: coriander, chili powder, garlic powder, oregano",
      "Salt & pepper",
      "Optional: Avocado, vegan sour cream, cilantro, lime wedges"
    ],
    "steps": [
      "Fajita Veggies: Sear onion and peppers in a skillet over medium-high heat with spices for 8–10 min. Use a splash of water if they stick.",
      "Rice: Cook instant rice according to the package (usually about 5 min).",
      "Beans: In the same skillet, add drained beans, spices, and ½ cup water. Heat until water reduces and beans are warm.",
      "Assemble: Set out all the components in bowls and let everyone build their own masterpiece!"
    ],
    "tip": "For extra flavor, stir a squeeze of lime and some chopped cilantro into the rice once it's finished cooking. A pro move that takes 10 seconds and makes a huge difference."
  },
  {
    "id": 7,
    "title": "15-Minute Chickpea Curry",
    "chapter": "stews",
    "emoji": "🍛",
    "photo": null,
    "time": "15 min",
    "timeMin": 15,
    "timeCategory": "under20",
    "servings": "3",
    "tag": "Fastest Meal",
    "isGreek": false,
    "oil": "swap",
    "oilSwap": "Sauté the onion and ginger in water (already an option).",
    "ingredients": [
      "1 can (15 oz) chickpeas, drained",
      "1 can (14 oz) full-fat coconut milk",
      "1 small onion, diced",
      "1 tsp ginger, minced",
      "1 Tbsp curry powder",
      "1 cup fresh spinach",
      "Salt to taste",
      "Rice for serving"
    ],
    "steps": [
      "Aromatics: Sauté the onion and ginger in a bit of oil or water until translucent.",
      "Spice: Add the curry powder and stir for 30 seconds until fragrant.",
      "Simmer: Pour in the coconut milk and add the chickpeas. Simmer for 5–8 minutes.",
      "Finish: Stir in the spinach until wilted. Serve hot over rice."
    ],
    "tip": "For a thicker, creamier sauce, mash a few chickpeas with the back of your spoon while simmering. This releases starches that make the curry incredibly luscious!"
  },
  {
    "id": 8,
    "title": "5-Ingredient Creamy Mushroom Pasta",
    "chapter": "grains",
    "emoji": "🍝",
    "photo": null,
    "time": "20 min",
    "timeMin": 20,
    "timeCategory": "under20",
    "servings": "2",
    "tag": "Silky & dairy-free",
    "isGreek": false,
    "oil": "none",
    "ingredients": [
      "8 oz (225g) egg-free pasta (penne or fusilli)",
      "8 oz (225g) mushrooms, sliced",
      "2 cloves garlic, minced",
      "3 Tbsp tahini",
      "½ lemon, juiced",
      "Salt and heavy black pepper"
    ],
    "steps": [
      "Pasta: Cook pasta in salted water. Crucial: Reserve ½ cup of starchy pasta water before draining.",
      "Mushrooms: In a hot dry pan, cook mushrooms until they release their water and brown, about 8 min. Add garlic and a splash of pasta water for the last minute.",
      "The Sauce: Whisk together tahini, lemon juice, and splashes of hot pasta water until smooth and creamy.",
      "Combine: Toss cooked pasta and mushrooms in the tahini sauce. Add more pasta water if too thick. Season with plenty of black pepper."
    ],
    "tip": "If your tahini is very thick, whisk it with the lemon juice first — it will seize up. Then slowly add the hot pasta water to \"break\" it back into a silky cream. The heat is the key!"
  },
  {
    "id": 9,
    "title": "20-Minute Black Bean Tacos",
    "chapter": "quick",
    "emoji": "🌮",
    "photo": null,
    "time": "20 min",
    "timeMin": 20,
    "timeCategory": "under20",
    "servings": "2–3",
    "tag": "Zesty",
    "isGreek": false,
    "oil": "none",
    "ingredients": [
      "1 can (15 oz) black beans, drained",
      "1 tsp cumin",
      "1 tsp chili powder",
      "1 lime, juiced",
      "Salt to taste",
      "6–8 small corn tortillas",
      "Avocado, salsa, fresh cilantro (for topping)"
    ],
    "steps": [
      "Season: Add black beans to a pan with cumin, chili powder, and lime juice. Heat over medium.",
      "Texture: (Optional) Smash about ¼ of the beans with a fork for a creamier texture.",
      "Tortillas: Warm or char corn tortillas over a gas flame or in a dry skillet until slightly toasted.",
      "Assemble: Fill tortillas with warm beans. Top with avocado, salsa, and fresh cilantro."
    ],
    "tip": "For a \"pro\" taco, quick-pickle some red onions: soak sliced onions in lime juice and a pinch of salt for 10 minutes while you heat the beans. The acidity is a game-changer."
  },
  {
    "id": 10,
    "title": "Mujadara (Lentils, Rice & Caramelized Onions)",
    "chapter": "grains",
    "emoji": "🍚",
    "photo": null,
    "time": "45 min",
    "timeMin": 45,
    "timeCategory": "45-60",
    "servings": "3–4",
    "tag": "Middle Eastern Classic",
    "isGreek": false,
    "oil": "needs",
    "specialBadge": "Ultimate Lenten Comfort Food",
    "ingredients": [
      "½ cup green or brown lentils",
      "½ cup basmati rice",
      "2 large onions, thinly sliced",
      "3 Tbsp olive oil",
      "Salt and black pepper"
    ],
    "steps": [
      "Lentils: Place lentils in a pot with 2 cups of water. Bring to a boil, then simmer for 15 minutes.",
      "Rice: Add rice and a pinch of salt to the same pot. Add 1 more cup of water. Cover and simmer for 15–20 minutes until absorbed.",
      "Onions: Heat olive oil in a skillet. Fry sliced onions over medium-high heat, stirring often, until dark brown, caramelized, and slightly crispy.",
      "Serve: Fluff the rice and lentils with a fork. Plate and top with a generous pile of the crispy onions and cracked black pepper."
    ],
    "tip": "Don't be afraid to let the onions go very dark! That deep brown color is where all the \"meatiness\" and sweetness of the dish comes from. Patience here is everything."
  },
  {
    "id": 11,
    "title": "Revithada (Greek Chickpea Stew)",
    "chapter": "stews",
    "emoji": "🍲",
    "photo": null,
    "time": "2 hrs + soak (1 hr canned)",
    "timeMin": 120,
    "timeCategory": "over60",
    "servings": "4–6",
    "tag": "Greek Island Classic",
    "isGreek": true,
    "oil": "needs",
    "ingredients": [
      "2 cups dry chickpeas (soaked overnight) or 3 cans drained",
      "½ cup olive oil",
      "2 large onions, chopped",
      "4 garlic cloves, minced",
      "1 can (28 oz) crushed tomatoes",
      "2 bay leaves",
      "1 tsp oregano",
      "½ tsp cinnamon (optional — a traditional touch)",
      "Salt & pepper",
      "Fresh parsley & lemon wedges for serving"
    ],
    "steps": [
      "Prep Chickpeas: Boil soaked chickpeas in fresh water 45–60 min until tender. (If using canned, skip this step.)",
      "Aromatics: In a large pot, sauté onions and garlic in oil for 5–7 min until soft.",
      "Simmer: Add tomatoes, bay leaves, oregano, cinnamon, and chickpeas. Add water just to cover. Simmer 30–45 min until sauce is thick.",
      "Season & Serve: Add salt and pepper. Serve hot with parsley and a fresh lemon squeeze."
    ],
    "tip": "Slow cooker version: throw everything in the crockpot (using soaked chickpeas) and cook on low for 8 hours. The chickpeas become incredibly creamy and the flavor deepens beautifully."
  },
  {
    "id": 12,
    "title": "Briam (Greek Roasted Veggie Medley)",
    "chapter": "baked",
    "emoji": "🥘",
    "photo": null,
    "time": "1 hr 15 min",
    "timeMin": 75,
    "timeCategory": "over60",
    "servings": "4–6",
    "tag": "Rustic Sheet-Pan",
    "isGreek": true,
    "oil": "swap",
    "oilSwap": "Replace the olive oil with vegetable broth (see tip).",
    "ingredients": [
      "2 potatoes, sliced into rounds",
      "2 zucchini, sliced into rounds",
      "1 eggplant, sliced into rounds",
      "2 onions, sliced",
      "4 tomatoes, chopped (or 1 can diced)",
      "½ cup olive oil",
      "4 garlic cloves, sliced",
      "1 tsp oregano",
      "Salt & pepper",
      "Fresh parsley or dill for serving"
    ],
    "steps": [
      "Prep: Preheat your oven to 400°F (200°C).",
      "Toss: In a large bowl, toss all vegetables, garlic, oregano, olive oil, salt, and pepper until well-coated.",
      "Bake: Spread into a large baking dish. Cover tightly with foil and bake for 30 minutes.",
      "Caramelize: Remove the foil and bake another 20–30 min until vegetables are tender and edges are slightly caramelized. Finish with fresh herbs."
    ],
    "tip": "Do it the Greek way — eat it at room temperature with plenty of crusty bread for dipping. For an oil-free version, replace olive oil with vegetable broth. Toss in bell peppers or carrots for extra color."
  },
  {
    "id": 13,
    "title": "Arakas (Greek Peas & Potatoes Stew)",
    "chapter": "stews",
    "emoji": "🥘",
    "photo": null,
    "time": "40 min",
    "timeMin": 40,
    "timeCategory": "30-40",
    "servings": "4",
    "tag": "Sweet & Light Classic",
    "isGreek": true,
    "oil": "needs",
    "ingredients": [
      "4 potatoes, cubed",
      "1 lb (450g) frozen peas",
      "1 onion, chopped",
      "¼ cup olive oil",
      "1 can (15 oz) tomato sauce",
      "2 cups water",
      "Salt, pepper, and generous fresh dill",
      "Lemon wedges for serving"
    ],
    "steps": [
      "Base: Sauté chopped onion in olive oil for about 5 minutes until translucent.",
      "Combine: Add cubed potatoes, frozen peas, tomato sauce, water, and seasonings.",
      "Simmer: Bring to a boil, then reduce heat and simmer 25–30 min until potatoes are fork-tender and sauce has thickened.",
      "Finish: Taste, adjust seasoning, and serve warm with a fresh squeeze of lemon."
    ],
    "tip": "For extra sweetness and color, add two sliced carrots along with the potatoes. The dill is not optional in Greece — use it generously!",
    "relatedIds": [
      25
    ]
  },
  {
    "id": 14,
    "title": "Gemista (Stuffed Peppers – Vegan)",
    "chapter": "baked",
    "emoji": "🥙",
    "photo": null,
    "time": "1 hr 20 min",
    "timeMin": 80,
    "timeCategory": "over60",
    "servings": "4–6",
    "tag": "Jewel of Greek Vegan Cooking",
    "isGreek": true,
    "oil": "needs",
    "specialBadge": "The Jewel of Greek Vegan Cooking",
    "ingredients": [
      "6 bell peppers (any color, tops cut off and reserved)",
      "1 cup long-grain rice",
      "1 onion, chopped",
      "2 zucchini, grated",
      "2 tomatoes, grated (keep the pulp)",
      "¼ cup olive oil",
      "Fresh parsley and mint",
      "Salt & pepper",
      "2 cups vegetable broth or water"
    ],
    "steps": [
      "The Filling: Sauté onion and grated zucchini in a little oil for 5 minutes. Remove from heat and stir in rice, grated tomato pulp, herbs, salt, and pepper.",
      "Stuffing: Spoon rice mixture into hollowed-out peppers — don't pack too tight, as rice expands! Place the \"lids\" back on.",
      "Set Up: Arrange peppers upright in a deep baking dish. Pour broth and a drizzle of olive oil into the bottom.",
      "Bake: Cover with foil and bake at 400°F for 45 min. Remove foil and bake 15 more minutes until peppers are tender and lightly charred."
    ],
    "tip": "This dish is actually better the next day when the flavors have fully melded! You can also stuff large hollowed tomatoes using their scooped pulp in the rice filling."
  },
  {
    "id": 15,
    "title": "Fasolada (Greek White Bean Soup)",
    "chapter": "soups",
    "emoji": "🥣",
    "photo": null,
    "time": "2 hrs + soak",
    "timeMin": 120,
    "timeCategory": "over60",
    "servings": "4–6",
    "tag": "The National Dish of Greece",
    "isGreek": true,
    "oil": "needs",
    "specialBadge": "🇬🇷 The National Dish of Greece",
    "badge": "🇬🇷",
    "ingredients": [
      "2 cups dry white beans (soaked overnight)",
      "⅓ cup olive oil",
      "2 onions, chopped",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "1 can (28 oz) crushed or diced tomatoes",
      "2–3 bay leaves",
      "Salt & pepper"
    ],
    "steps": [
      "The Beans: Drain soaked beans and simmer in fresh water with the bay leaves for 60–90 min until fully tender. Bite one to check. Tomatoes keep beans from softening, so they must be soft first.",
      "The Base: Sauté onions, carrots, and celery in olive oil.",
      "Simmer: Add sautéed veggies and tomatoes to the bean pot. Keep everything submerged. Simmer 30 min until thick and \"creamy.\"",
      "Finish: Season heavily with salt and pepper. Drizzle extra olive oil into each bowl when serving."
    ],
    "tip": "Don't skimp on the olive oil — it creates the signature thick, luscious texture. In a rush? Use 3 cans of cannellini beans and skip the overnight soak and initial boiling!"
  },
  {
    "id": 16,
    "title": "Imam Bayildi (Stuffed Eggplant)",
    "chapter": "baked",
    "emoji": "🍆",
    "photo": null,
    "time": "1 hr 15 min",
    "timeMin": 75,
    "timeCategory": "over60",
    "servings": "4",
    "tag": "Melt-in-your-mouth",
    "isGreek": true,
    "oil": "needs",
    "funFact": "✨ The name literally translates to \"The Imam Fainted\" — supposedly because it tasted so impossibly good!",
    "ingredients": [
      "4 medium eggplants, halved lengthwise",
      "3 large onions, thinly sliced",
      "4 tomatoes, chopped",
      "4 garlic cloves, minced",
      "½ cup olive oil",
      "Fresh parsley, salt, and pepper"
    ],
    "steps": [
      "Prep Eggplant: Brush cut sides with oil and roast cut-side down at 400°F (200°C) for 20–25 min until softened. Scoop out some flesh to make a \"boat,\" keeping the skin intact. Chop the scooped flesh.",
      "The Filling: Sauté onions, garlic, and chopped eggplant flesh in olive oil until soft. Add tomatoes and herbs; simmer for 10 minutes.",
      "Stuff & Bake: Fill the mixture back into the eggplant halves. Place them in a baking dish.",
      "Roast: Drizzle with extra oil, add ¼ cup water to the dish, and bake at 375°F (190°C) for 30–35 minutes until buttery soft."
    ],
    "tip": "For a lighter version, brush the eggplants with oil instead of using the full amount. Best served at room temperature — like all great Greek dishes!"
  },
  {
    "id": 17,
    "title": "Gigantes Plaki (Giant Baked Beans)",
    "chapter": "baked",
    "emoji": "🫘",
    "photo": null,
    "time": "2.5 hrs + soak",
    "timeMin": 150,
    "timeCategory": "over60",
    "servings": "6",
    "tag": "Creamy Greek Favorite",
    "isGreek": true,
    "oil": "needs",
    "ingredients": [
      "1 lb dried gigante beans or large lima beans (soaked overnight)",
      "½ cup olive oil",
      "2 onions, chopped",
      "4 garlic cloves, minced",
      "1 can (28 oz) crushed or diced tomatoes",
      "Fresh parsley and dill",
      "Salt and pepper"
    ],
    "steps": [
      "The Beans: Drain soaked beans. Boil in fresh water for about 1 hour until tender but not falling apart. Drain.",
      "The Sauce: While beans boil, sauté onions and garlic in olive oil until soft. Stir in tomatoes and herbs.",
      "Bake: Mix boiled beans with tomato sauce in a large baking dish.",
      "Slow Roast: Bake at 375°F (190°C) for 45–60 min until beans are creamy and sauce is thick and bubbly."
    ],
    "tip": "In a time crunch? Use 3–4 cans of butter beans (lima beans), skip the boiling step, and go straight to the baking dish. Still delicious!"
  },
  {
    "id": 18,
    "title": "Vegan Dolmades (Stuffed Grape Leaves)",
    "chapter": "baked",
    "emoji": "🌿",
    "photo": null,
    "time": "1 hr 45 min",
    "timeMin": 105,
    "timeCategory": "over60",
    "servings": "6",
    "tag": "Mediterranean Classic",
    "isGreek": true,
    "oil": "needs",
    "ingredients": [
      "1 jar grape leaves (rinsed and drained)",
      "1 cup long-grain rice (uncooked)",
      "1 onion, grated",
      "¼ cup olive oil",
      "Fresh dill and mint, finely chopped",
      "Juice of 2 lemons",
      "Salt and pepper"
    ],
    "steps": [
      "The Filling: Mix raw rice, grated onion, herbs, half the olive oil, and half the lemon juice. Season well.",
      "The Roll: Place a grape leaf flat, vein side up. Put 1 tsp of filling near the stem. Fold the sides in and roll tightly like a small cigar.",
      "The Pot: Line the bottom of a heavy pot with torn leaves. Pack dolmades in tight layers, seam-side down.",
      "Simmer: Add water just to cover the rolls, plus remaining oil and lemon. Place a heavy plate on top to keep them submerged. Simmer on low for 45–50 min. Cool in the pot to soak up juices."
    ],
    "tip": "Have a pressure cooker? These only take 15–20 minutes! They are traditionally served cold or at room temperature — perfect for making ahead for gatherings."
  },
  {
    "id": 19,
    "title": "Red Lentil & Spinach Soup (Greek-style)",
    "chapter": "soups",
    "emoji": "🥘",
    "photo": null,
    "time": "40 min",
    "timeMin": 40,
    "timeCategory": "30-40",
    "servings": "4",
    "tag": "Quick & Nourishing",
    "isGreek": true,
    "oil": "swap",
    "oilSwap": "Sauté in water or broth (already an option).",
    "ingredients": [
      "1 cup red lentils, rinsed",
      "1 onion, chopped",
      "2 carrots, diced",
      "6 cups vegetable broth or water",
      "4 cups fresh spinach",
      "2 garlic cloves, minced",
      "Juice of 1 lemon",
      "Salt & pepper",
      "Optional: 1 tsp cumin"
    ],
    "steps": [
      "Base: In a large pot, sauté onion, carrots, and garlic in a splash of oil or water for 5–7 min.",
      "Simmer: Add red lentils and broth (and cumin if using). Bring to a boil, then simmer for 20–25 min. Red lentils break down naturally, creating a thick, creamy texture.",
      "Greens: Stir in fresh spinach and cook 1–2 minutes until just wilted.",
      "Brighten: Remove from heat and stir in fresh lemon juice. Season with salt and pepper."
    ],
    "tip": "For a deeper flavor, sauté a tablespoon of tomato paste with the onions before adding the broth. This adds a \"sun-kissed\" richness to the golden lentils that makes all the difference."
  },
  {
    "id": 20,
    "title": "Fakorizo (Greek Lentil Rice Pilaf)",
    "chapter": "grains",
    "emoji": "🍛",
    "photo": null,
    "time": "45 min",
    "timeMin": 45,
    "timeCategory": "45-60",
    "servings": "4",
    "tag": "Earthy Fasting Staple",
    "isGreek": true,
    "oil": "swap",
    "oilSwap": "Soften the onion and garlic in ¼ cup water instead of oil.",
    "ingredients": [
      "1 cup brown or green lentils",
      "1 cup long-grain rice",
      "1 large onion, chopped",
      "2 garlic cloves, minced",
      "¼ cup olive oil",
      "1 can (15 oz) diced tomatoes",
      "4 cups vegetable broth or water",
      "Salt, pepper, 1 bay leaf",
      "Optional: 1 tsp cumin & fresh parsley"
    ],
    "steps": [
      "Prep: Rinse lentils and rice thoroughly under cold water.",
      "Aromatics: In a large pot, sauté onion and garlic in olive oil for about 5 minutes until soft and golden.",
      "Lentil Base: Add lentils, tomatoes, broth, and seasonings. Bring to a boil, then simmer covered for 20 min.",
      "The Pilaf: Stir in the rice. Cover and simmer another 15–20 min until both rice and lentils are tender and liquid is absorbed. Add a splash of water if it dries out before the rice is done. Let rest 5 min, then fluff with a fork."
    ],
    "tip": "Serve this with quick-pickled red onions (from the Black Bean Taco recipe!) — the acidity cuts through the earthy lentils perfectly. A match made in heaven.",
    "relatedIds": [
      9
    ]
  },
  {
    "id": 21,
    "title": "Black-Eyed Pea Soup (with Spinach & Fennel)",
    "chapter": "soups",
    "emoji": "🥣",
    "photo": null,
    "time": "50 min",
    "timeMin": 50,
    "timeCategory": "45-60",
    "servings": "4–6",
    "tag": "Protein-Packed",
    "isGreek": false,
    "oil": "swap",
    "oilSwap": "Sauté the vegetables in a splash of broth.",
    "ingredients": [
      "2 cups dry black-eyed peas or 4 cans, drained",
      "1 onion, chopped",
      "2 carrots, diced",
      "1 fennel bulb, sliced",
      "4 cups fresh spinach",
      "6 cups vegetable broth",
      "¼ cup olive oil",
      "2 garlic cloves, minced",
      "Salt, pepper, and lemon juice"
    ],
    "steps": [
      "The Peas: If using dry peas, boil in fresh water for ~30 min until tender, then drain. (Skip this step if using canned.)",
      "The Base: In a large pot, sauté onion, carrot, and fennel in olive oil for 5–7 min until fragrant and soft.",
      "Simmer: Add peas, broth, garlic, salt, and pepper. Bring to a boil, then simmer for 20 min.",
      "The Finish: Stir in fresh spinach until wilted. Remove from heat and stir in a generous squeeze of lemon juice."
    ],
    "tip": "Don't toss the fennel fronds (the feathery green tops)! Chop them up and use as a garnish for an extra punch of anise-like flavor. Zero waste, maximum deliciousness."
  },
  {
    "id": 22,
    "title": "Herbed Orzo with Chickpeas",
    "chapter": "grains",
    "emoji": "🍋",
    "photo": null,
    "time": "30 min",
    "timeMin": 30,
    "timeCategory": "30-40",
    "servings": "4",
    "tag": "Light & Herby",
    "isGreek": true,
    "oil": "swap",
    "oilSwap": "Soften the onion in broth and skip the olive oil.",
    "ingredients": [
      "1½ cups orzo pasta",
      "1 can (15 oz) chickpeas, drained",
      "1 onion, diced",
      "3 garlic cloves, minced",
      "3½ cups vegetable broth",
      "Fresh dill, parsley, and mint",
      "Lemon zest and juice",
      "Olive oil, salt, and pepper"
    ],
    "steps": [
      "Aromatics: Sauté the onion and garlic in olive oil until translucent and fragrant.",
      "Toast: Add the dry orzo to the pan and toast for about 2 minutes, stirring constantly. This adds a nutty depth.",
      "Simmer: Pour in the vegetable broth and add the chickpeas with half the herbs. Simmer uncovered 10–12 min, stirring often so it doesn't stick, until orzo is tender and most liquid is absorbed.",
      "Brighten: Remove from heat. Stir in remaining fresh herbs, lemon zest, and lemon juice. Season well."
    ],
    "tip": "Think of this as a \"quick risotto\" — add a splash more broth if the orzo looks dry before it's done. For extra greens, stir in some diced zucchini during the sauté step!"
  },
  {
    "id": 23,
    "title": "Vegan Moussaka (Nistisimos)",
    "chapter": "baked",
    "emoji": "🥘",
    "photo": null,
    "time": "1.5 hours",
    "timeMin": 90,
    "timeCategory": "over60",
    "servings": "6",
    "tag": "King of Lenten Comfort",
    "isGreek": true,
    "oil": "swap",
    "oilSwap": "Roast the vegetable slices dry on parchment instead of brushing with oil.",
    "specialBadge": "👑 The King of Lenten Comfort Food",
    "ingredients": [
      "2 eggplants, sliced into rounds",
      "3 potatoes, sliced into rounds",
      "2 zucchinis, sliced into rounds",
      "1 cup cooked lentils (brown or green)",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "1 can (15 oz) tomato sauce",
      "Cinnamon (the secret!), salt, and pepper",
      "Olive oil for brushing"
    ],
    "steps": [
      "The Veggies: Preheat oven to 400°F (200°C). Arrange eggplant, potato, and zucchini slices on baking sheets. Brush with olive oil and roast for 20–25 min until tender.",
      "The Sauce: While veggies roast, sauté onion and garlic. Stir in cooked lentils, tomato sauce, and a pinch of cinnamon (the secret to authentic Moussaka flavor!). Simmer 10 min.",
      "The Layers: In a deep baking dish, layer half the potatoes, then zucchini and eggplant. Spread the lentil-tomato sauce, then finish with a final layer of veggies.",
      "Bake: Bake at 375°F (190°C) for 30–40 min until flavors are fused and top is slightly golden."
    ],
    "tip": "This version is \"Nistisimo\" — fasting-friendly without the traditional Béchamel. It freezes beautifully, so make a double batch! Even better reheated the next day."
  },
  {
    "id": 24,
    "title": "Lagana Bread (Lenten Flatbread)",
    "chapter": "bread",
    "emoji": "🥖",
    "photo": null,
    "time": "1.5 hrs",
    "timeMin": 90,
    "timeCategory": "over60",
    "servings": "2 loaves",
    "tag": "Clean Monday Tradition",
    "isGreek": true,
    "oil": "none",
    "ingredients": [
      "4 cups all-purpose flour",
      "1½ cups warm water",
      "1 packet (2¼ tsp) active dry yeast",
      "1 tsp salt",
      "Sesame seeds for topping (optional)"
    ],
    "steps": [
      "Activate: Mix yeast into warm water and let sit for 5 min until slightly frothy.",
      "Knead: Combine flour and salt in a large bowl. Add yeast water and knead 5–10 min until smooth and elastic.",
      "Rise: Cover with a damp cloth and let rise in a warm spot for 30–45 min.",
      "Shape & Bake: Divide into two pieces. Pat out into long flat ovals (about 1 inch thick). Press deep dimples all over with your fingertips. Sprinkle with sesame seeds. Bake at 400°F (200°C) for 20–25 min until golden."
    ],
    "tip": "This version has no oil, so it works on strict fasting days. If the dough rises slowly, give it the full 45 min or a little longer. It's the perfect vessel for scooping Revithada or dipping into Gigantes sauce.",
    "relatedIds": [
      11,
      17
    ]
  },
  {
    "id": 25,
    "title": "Potatoes and Peas (Arakas Twist)",
    "chapter": "stews",
    "emoji": "🥔",
    "photo": null,
    "time": "40 min",
    "timeMin": 40,
    "timeCategory": "30-40",
    "servings": "4",
    "tag": "Hearty & Ultra-Filling",
    "isGreek": false,
    "oil": "swap",
    "oilSwap": "Use water to sauté (already an option).",
    "ingredients": [
      "6 medium potatoes, cubed",
      "2 cups frozen peas",
      "1 onion, chopped",
      "1 can (15 oz) tomato sauce",
      "Fresh dill, salt, and pepper",
      "Olive oil or water for oil-free cooking"
    ],
    "steps": [
      "Sauté: In a large pot, sauté chopped onion in olive oil for about 5 minutes until soft.",
      "Simmer: Add cubed potatoes, tomato sauce, and enough water to just cover the potatoes. Season with salt and pepper. Cover and simmer about 25 minutes.",
      "The Peas: Add frozen peas and a generous handful of fresh dill. Simmer another 10 min until potatoes are tender and peas are bright and sweet.",
      "Finish: Let it sit a few minutes to thicken before serving."
    ],
    "tip": "This variation is heartier than the classic Arakas, focusing more on the potatoes. Add a sliced carrot during the first simmer for even more natural sweetness!",
    "relatedIds": [
      13
    ]
  },
  {
    "id": 26,
    "title": "Falafel (Baked or Pan-Fried)",
    "chapter": "quick",
    "emoji": "🥖",
    "photo": null,
    "time": "30 min + overnight soak",
    "timeMin": 480,
    "timeCategory": "over60",
    "servings": "4",
    "tag": "Crispy & Protein-Packed",
    "isGreek": false,
    "oil": "needs",
    "badge": "⚠️",
    "warning": "You MUST use dried chickpeas soaked overnight — NOT canned! Canned chickpeas contain too much moisture and will make the falafel fall apart.",
    "ingredients": [
      "2 cups DRY chickpeas (soaked overnight — do NOT use canned!)",
      "1 small onion, roughly chopped",
      "3 garlic cloves",
      "1 cup fresh parsley (stems ok)",
      "1 Tbsp cumin",
      "1 tsp coriander",
      "A pinch of baking soda",
      "Salt and pepper",
      "Olive oil for frying or baking"
    ],
    "steps": [
      "The Pulse: Drain soaked chickpeas well. In a food processor, pulse them with onion, garlic, parsley, and spices. You want a coarse, grainy texture like wet sand — NOT a smooth paste.",
      "Chill: Stir in baking soda. If you have time, chill the mixture for 30 minutes to help the patties hold their shape.",
      "Form: Scoop about 2 tablespoons of mixture and form into small patties or balls.",
      "Cook (Bake): Place on a parchment-lined sheet, brush with oil, and bake at 400°F for 20–25 min, flipping halfway. (Pan-fry): Heat oil in a skillet and fry for 3–4 min per side until dark golden brown."
    ],
    "tip": "Tuck them into a pita or serve over a big salad with a drizzle of tahini sauce. The texture contrast between the crispy outside and tender inside is everything!"
  },
  {
    "id": 27,
    "title": "Lentil Meatloaf (Vegan)",
    "chapter": "quick",
    "emoji": "🍞",
    "photo": null,
    "time": "1 hour",
    "timeMin": 60,
    "timeCategory": "45-60",
    "servings": "6",
    "tag": "Hearty & Sliceable",
    "isGreek": false,
    "oil": "none",
    "ingredients": [
      "2 cups cooked lentils (brown or green)",
      "1 cup rolled oats",
      "1 onion, finely chopped",
      "1 carrot, grated",
      "2 garlic cloves, minced",
      "2 Tbsp tomato paste",
      "1 Tbsp tamari or soy sauce",
      "1 tsp dried thyme or oregano",
      "2 Tbsp ground flaxseed + 5 Tbsp water (binder)",
      "Salt and pepper",
      "Optional: Ketchup for glazing"
    ],
    "steps": [
      "The Base: Stir flaxseed into the water and set aside 5 min to thicken. In a skillet, sauté onion, grated carrot, and garlic in a splash of water for 5–7 min until soft.",
      "The Mix: Mash about half the lentils in a large bowl. Add remaining whole lentils, sautéed veggies, oats, flax mixture, tomato paste, tamari, and herbs. Mix until it holds together.",
      "The Loaf: Line a loaf pan with parchment paper. Press mixture firmly into the pan.",
      "Bake: Bake at 375°F (190°C) for 45 min. Brush the top with ketchup 15 minutes before it's done for a classic glaze. Cool in the pan for at least 10–15 min before slicing — this step is crucial!"
    ],
    "tip": "This makes the ultimate leftover sandwich the next day! Sear a cold slice in a pan for 2 minutes on each side to get it crispy and warm. Absolute comfort food."
  },
  {
    "id": 28,
    "title": "Grilled Portobello Burgers",
    "chapter": "quick",
    "emoji": "🍔",
    "photo": null,
    "time": "20 min",
    "timeMin": 20,
    "timeCategory": "under20",
    "servings": "4",
    "tag": "Smoky & Juicy",
    "isGreek": false,
    "oil": "swap",
    "oilSwap": "Use extra balsamic or broth in the marinade (see tip).",
    "ingredients": [
      "4 large portobello mushroom caps (stems removed)",
      "4 burger buns (check for milk, eggs, or butter)",
      "3 Tbsp balsamic vinegar",
      "2 Tbsp olive oil",
      "1 clove garlic, minced",
      "1 tsp dried oregano",
      "Romaine lettuce, sliced tomato, red onion rings",
      "Optional: A generous dollop of hummus as a spread"
    ],
    "steps": [
      "The Marinade: Whisk together balsamic vinegar, olive oil, garlic, and oregano in a shallow dish.",
      "Soak: Place mushroom caps in the dish, turning to coat. Marinate for 10–15 min while you prep toppings.",
      "The Grill: Heat a grill pan or outdoor grill to medium-high. Place mushrooms gill-side down and grill 5–7 min. Flip and grill 5 more min until tender and slightly charred.",
      "Assemble: Lightly toast the buns. Add the mushroom, toppings, and a generous smear of hummus or mustard."
    ],
    "tip": "Hummus as a burger spread is a revelation — try it! For an oil-free version, replace olive oil in the marinade with extra balsamic vinegar or vegetable broth."
  },
  {
    "id": 29,
    "title": "Tahini & Maple Cookies (Nistisima)",
    "chapter": "bread",
    "emoji": "🍪",
    "photo": null,
    "time": "30 min",
    "timeMin": 30,
    "timeCategory": "30-40",
    "servings": "20 cookies",
    "tag": "Naturally Vegan",
    "isGreek": true,
    "oil": "none",
    "ingredients": [
      "1 cup tahini (well-stirred)",
      "½ cup maple syrup",
      "1 cup all-purpose flour (or oat flour for chewier texture)",
      "½ tsp baking soda",
      "¼ tsp salt",
      "1 tsp vanilla extract",
      "¼ cup sesame seeds (for rolling)"
    ],
    "steps": [
      "The Mix: In a medium bowl, whisk together tahini, maple syrup, and vanilla until smooth.",
      "The Dough: Fold in flour, baking soda, and salt. Stir until a soft dough forms. If it feels too oily, let it sit for 5 min to firm up.",
      "Shape: Roll dough into small balls (about 1 Tbsp each). Roll each ball in sesame seeds until evenly coated.",
      "Bake: Place on a parchment-lined sheet and press down slightly. Bake at 350°F (175°C) for 10–12 min. Very important: let them cool completely on the tray to firm up into a perfect shortbread texture."
    ],
    "tip": "These are the ultimate \"dunking\" cookies for morning coffee or tea. Using maple syrup instead of traditional honey makes them 100% vegan and adds a lovely depth that pairs perfectly with the nuttiness of tahini."
  },
  {
    "id": 30,
    "title": "One-Pot Greek Lentil & Veggie Stew",
    "chapter": "soups",
    "emoji": "🥣",
    "photo": null,
    "time": "35 min",
    "timeMin": 35,
    "timeCategory": "30-40",
    "servings": "4–6",
    "tag": "Golden Comfort Bowl",
    "isGreek": true,
    "oil": "swap",
    "oilSwap": "Sauté in broth (already an option).",
    "ingredients": [
      "1 cup red lentils, rinsed",
      "1 onion, chopped",
      "2–3 carrots & 2 celery stalks, sliced",
      "3–4 garlic cloves, minced",
      "1 can (28 oz) diced tomatoes",
      "4–5 cups vegetable broth",
      "2 potatoes, cubed (optional)",
      "1 tsp oregano, 1 tsp cumin, 1 bay leaf",
      "2–3 cups spinach or kale",
      "Juice of 1–2 lemons",
      "Fresh parsley or dill"
    ],
    "steps": [
      "Sauté: In a large pot, sauté onion, carrots, celery, and garlic in a splash of oil or broth for 5–7 min until soft.",
      "Boil & Simmer: Add red lentils, tomatoes, broth, potatoes, and spices. Bring to a boil, then simmer partially covered for 20–30 min. The red lentils break down, making the stew naturally thick and creamy.",
      "Greens: Stir in spinach or kale for 2–3 min until wilted.",
      "Brighten: Remove bay leaf. Stir in fresh lemon juice and season with salt and pepper. Garnish with fresh herbs."
    ],
    "tip": "If the stew gets too thick the next day (red lentils love to soak up liquid!), just add a splash of water or broth when reheating. Perfect with a slice of warm Lagana Bread!",
    "relatedIds": [
      24
    ]
  }
];
