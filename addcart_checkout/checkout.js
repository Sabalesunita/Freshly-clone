function datefun() {
    var date = document.querySelector("#calendar").value;
    document.querySelector(".rightDate").textContent = " " + date;
    localStorage.setItem("date", date);                 //"date" is stored in local storage here
}


var addcartItems = [
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012873/production-meal-image-2fd3df62-8abf-413e-8650-afca039518ec.jpg",
        name: "Steak Peppercorn",
        side: "with Sautéed Carrots & French Green Beans",
        gluten: "Gluten Free",
        cal: 500,
        carbs: 38,
        protein: 29,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012874/production-meal-image-6b3a83c1-9167-4a16-897e-d12f9460236a.jpg",
        category: "signaturecollection"

    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012265/production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpg",
        name: "Homestyle Chicken",
        side: "with Masterful Mac & Cheese",
        gluten: "Gluten Free",
        cal: 560,
        carbs: 38,
        protein: 29,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012266/production-meal-image-03fedc66-e34e-451c-a935-514e3602cbb2.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012554/production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpg",
        name: "Cauliflower Shell Beef Bolognese",
        side: "with Nonna’s Soffritto & Italian Cheeses",
        gluten: "Gluten Free",
        cal: 490,
        carbs: 49,
        protein: 31,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012555/production-meal-image-325b3588-a742-402b-87a9-a81caca4095f.jpg",
        category: "signaturecollection"

    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012391/production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpg",
        name: "Sausage Baked Penne",
        side: "with Sautéed Zucchini & Spinach",
        gluten: "Gluten Free",
        cal: 470,
        carbs: 41,
        protein: 20,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012392/production-meal-image-0963d196-5110-4dc7-888a-8121e5b91142.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012614/production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpg",
        name: "Savory-Sweet Chicken Teriyaki Bowl",
        side: "with Basmati Rice & Veggies",
        gluten: "Gluten Free",
        cal: 480,
        carbs: 66,
        protein: 25,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012615/production-meal-image-9ad161f0-f33f-4551-b099-38188c9d783e.jpg",
        category: "signaturecollection",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1607770959/production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpg",
        name: "Protein-Packed Chicken Parm",
        side: "with Mozzarella & Garlicky Broccoli",
        gluten: "Gluten Free",
        cal: 410,
        carbs: 18,
        protein: 42,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1607982766/production-meal-image-5c0776ef-ec85-447d-80a5-abd2e8d0b766.jpg",
        category: "freshlyfit"

    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012331/production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpg",
        name: "Golden Oven-Fried Chicken & Mash",
        side: "with Roasted Sweet Corn",
        gluten: "Gluten Free",
        cal: 510,
        carbs: 45,
        protein: 26,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012332/production-meal-image-0d752eeb-2e73-4dae-8a86-b86047e00008.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1602722020/production-meal-image-1a05b254-2fc5-4eec-9cec-5b1cde753c06.jpg",
        name: "Chicken Livorno",
        side: "with Hearty White Beans & Kale",
        gluten: "Gluten Free",
        cal: 490,
        carbs: 20,
        protein: 40,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1602722020/production-meal-image-ba5fc182-386f-4a1e-a1b6-4267400aa3f0.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012184/production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpg",
        name: "Zingy Buffalo Chicken",
        side: "with Loaded Cauliflower",
        gluten: "Gluten Free",
        cal: 470,
        carbs: 15,
        protein: 40,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012185/production-meal-image-4692b403-09e7-4fae-9569-0584d7452792.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1609775112/production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpg",
        name: "White Bean Turkey Chili Bowl",
        side: "with Basmati Rice & Cheddar Cheese",
        gluten: "Gluten Free",
        cal: 540,
        carbs: 60,
        protein: 27,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1609775112/production-meal-image-174ca15c-2d12-47ce-ba29-7cf03256c06c.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638803780/production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpg",
        name: "Pork Carnitas",
        side: "with Basmati Rice, Black Beans & Corn",
        gluten: "Gluten Free",
        cal: 480,
        carbs: 32,
        protein: 28,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638803781/production-meal-image-10e5c47f-13e4-4f86-8cd1-5b975cc61403.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638803638/production-meal-image-a4feff11-ec91-43e8-bab5-e6daf8b55eea.jpg",
        name: "Sesame-Ginger Chicken & Noodles",
        side: "with Bright Stir-Fried Veggies",
        gluten: "Has Gluten",
        cal: 430,
        carbs: 29,
        protein: 29,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638803638/production-meal-image-e394488f-2367-4cb7-a03c-eecea42bf470.jpg",
        category: "signaturecollection",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1628175392/production-meal-image-d49fdb42-ecc3-4c0f-ae05-6968f1049a73.jpg",
        name: "Baja Pork Bowl",
        side: "with Chile Verde & Bright Veggie Medley",
        gluten: "Has Gluten",
        cal: 420,
        carbs: 46,
        protein: 17,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1628175393/production-meal-image-6a9b1bed-3899-4ee1-8aa9-ff6d5ecf79a7.jpg",
        category: "signaturecollection",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1628190837/production-meal-image-e184440d-cfea-4806-b7e3-1e5856975959.jpg",
        name: "Sautéed French Green Beans (11 Oz)",
        side: "with Garlic & Toasted Sliced Almonds",
        gluten: "Gluten Free",
        cal: 140,
        carbs: 12,
        protein: 5,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1628190838/production-meal-image-1dac9ad7-cc55-441e-a46d-0d30680a587c.jpg",
        category: "protein&slides",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1602616373/production-meal-image-53e1a296-8d48-4ba8-acb3-0d9032960be2.jpg",
        name: "Hearty Chipotle-Chicken Stew",
        side: "with Black Beans & Monterey Jack",
        gluten: "Gluten Free",
        cal: 420,
        carbs: 26,
        protein: 24,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1602598383/production-meal-image-7c8b41d2-fae4-4ede-b7bd-e6011a34ae4e.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1633020453/production-meal-image-09259aec-5f39-4b6a-8894-fed742f5ab3c.jpg",
        name: "Oven-Baked Chicken Florentine",
        side: "with Creamed Spinach & Riced Broccoli Pilaf",
        gluten: "Gluten Free",
        cal: 410,
        carbs: 16,
        protein: 39,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1633020452/production-meal-image-0712993a-1159-4060-a73c-6489cd86fcca.jpg",
        category: "freshlyfit"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012800/production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpg",
        name: "Chicken Tikka Masala",
        side: "with Seven-Spice Vegetable Biryani",
        gluten: "Gluten Free",
        cal: 570,
        carbs: 48,
        protein: 27,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012801/production-meal-image-cc993f69-51fe-470b-83bf-bb8e8baa4b61.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626467296/production-meal-image-4f9663de-bbc4-4f97-be87-2540179dd6d4.jpg",
        name: "Masterful Mash (16 Oz)",
        side: "with Potato, Cauliflower & Chives",
        gluten: "Gluten Free",
        cal: 160,
        carbs: 14,
        protein: 3,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626467297/production-meal-image-63e5ca11-46fa-4b14-9766-35c7e0c1c40f.jpg",
        category: "protein&slides"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626458301/production-meal-image-9fdab000-4502-436e-9e8f-125b47135d8e.jpg",
        name: "Masterful Mac & Cheese (15 Oz)",
        side: "with Butternut Squash & Two Cheeses",
        gluten: "Gluten Free",
        cal: 470,
        carbs: 38,
        protein: 18,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626458300/production-meal-image-fb33ab23-d82b-4b98-b196-61e707954f86.jpg",
        category: "protein&slides"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626457027/production-meal-image-536ab066-5461-4cc0-bbad-f3246a0bb7df.jpg",
        name: "3 Grilled Chicken Breasts (9.75 Oz)",
        side: "",
        gluten: "Gluten Free",
        cal: 160,
        carbs: 0,
        protein: 29,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626457026/production-meal-image-3da6c881-3d4c-4ee4-9deb-4fe698cdd5a2.jpg",
        category: "protein&slides",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626451152/production-meal-image-578506ac-e956-4c6f-bcbc-4e709ab34f98.jpg",
        name: "8 Baked Turkey Meatballs (9.98 Oz)",
        side: "",
        gluten: "Gluten Free",
        cal: 110,
        carbs: 3,
        protein: 13,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1626451151/production-meal-image-c79a5038-349e-4919-92fb-8d704982ad41.jpg",
        category: "protein&slides"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1625766505/production-meal-image-51fe566d-7bc5-4500-91b0-622d6c2e665c.jpg",
        name: "Unwrapped Salsa Verde Burrito",
        side: "with Purely Plant Crumbles",
        gluten: "Gluten Free",
        cal: 400,
        carbs: 58,
        protein: 11,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1625766506/production-meal-image-0cc19a5f-2b35-4be6-a09f-09f584df81dc.jpg",
        category: "purelyplant",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1627314048/production-meal-image-b845ba48-1300-4ecb-b9d0-d545b084f15a.jpg",
        name: "Farmstead Baked Lentil Pasta",
        side: "with Seasonal Veggies & Creamy Marinara",
        gluten: "Gluten Free",
        cal: 500,
        carbs: 62,
        protein: 12,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1627314049/production-meal-image-15321b6a-c4bc-433d-b944-3f2ab2feb446.jpg",
        category: "purelyplant",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638803151/production-meal-image-63479068-f450-4424-a206-229bd42ab321.jpg",
        name: "Asian-Style Chicken & Noodles",
        side: "with Almond-Tahini Sauce & Veggies",
        gluten: "Has Gluten",
        cal: 400,
        carbs: 46,
        protein: 29,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638803152/production-meal-image-67840c3a-4462-4e1a-8746-cc49a14ca086.jpg",
        category: "signaturecollection",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1632491750/production-meal-image-79ab8e74-c2fa-404a-a107-a6756aba68fa.jpg",
        name: "Pork Chile Colorado",
        side: "with Slow-Simmered Black Beans & Rice",
        gluten: "Gluten Free",
        cal: 570,
        carbs: 55,
        protein: 31,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1632491751/production-meal-image-2cae7b28-0b79-4dbc-896d-b0ce02c74f2a.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1636048134/production-meal-image-b8bb2dcf-52be-4f84-be7c-bf019107f2cc.jpg",
        name: "Country Chicken Stew",
        side: "with Rice & Mixed Veggies",
        gluten: "Gluten Free",
        cal: 200,
        carbs: 13,
        protein: 26,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1636048133/production-meal-image-2983b31b-03d3-4122-b0c7-1a804c302129.jpg",
        category: "signaturecollection",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1617808137/production-meal-image-f28dfb4e-efc8-4dff-b95c-9239797edcb0.jpg",
        name: "Shrimp & Andouille Paella",
        side: "with Roasted Red Peppers",
        gluten: "Gluten Free",
        cal: 530,
        carbs: 68,
        protein: 37,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1617808180/production-meal-image-1ec9b2b3-0882-4684-95c9-0ac37e00d870.jpg",
        category: "signaturecollection",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1634562520/production-meal-image-dd5b71cb-e0fc-4917-bd2b-52678a77f47b.jpg",
        name: "Supper Club Top Blade Steak",
        side: "with Mushroom Risotto & Sautéed Greens",
        gluten: "Gluten Free",
        cal: 520,
        carbs: 33,
        protein: 37,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1634562521/production-meal-image-c54c4386-3c3b-436f-a0de-78801088b237.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1634562520/production-meal-image-dd5b71cb-e0fc-4917-bd2b-52678a77f47b.jpg",
        name: "Super Kale Pesto Chicken",
        side: "with Roasted Seasonal Veggies",
        gluten: "Gluten Free",
        cal: 400,
        carbs: 19,
        protein: 37,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1634917790/production-meal-image-efcf6066-d5ff-464a-a942-b85f72796df6.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1602259209/production-meal-image-4aa973ed-846f-4957-9341-272c1125725d.jpg",
        name: "Very Verde Chicken",
        side: "with Super Greens & Roasted Cauliflower",
        gluten: "Gluten Free",
        cal: 470,
        carbs: 11,
        protein: 40,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1602259208/production-meal-image-3c424b96-3f8a-4fc1-b3e4-2cad1498ab43.jpg",
        category: "freshlyfit"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1636048197/production-meal-image-b22511da-67a6-428b-a50d-10212f5cea17.jpg",
        name: "Bangers & Mash",
        side: "with Red Eye Gravy & Brussels Sprout Slaw",
        gluten: "Gluten Free",
        cal: 500,
        carbs: 28,
        protein: 24,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1636048196/production-meal-image-6805e4fa-afb3-4658-96a8-7698b87cc2ac.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1636048268/production-meal-image-603e4274-71b0-48a1-8072-c11baab58220.jpg",
        name: "Chipotle Chicken Bowl",
        side: "with Carb-Smart Cauli Rice",
        gluten: "Gluten Free",
        cal: 240,
        carbs: 16,
        protein: 20,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1636048267/production-meal-image-c4d90852-72e6-453d-ac20-92d18cf4d53b.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637001680/production-meal-image-d5e81f22-3f38-4eaa-932a-c0bca23a021c.jpg",
        name: "Chicken & Pumpkin Parmesan Risotto",
        side: "with Brown-Butter Spinach",
        gluten: "Gluten Free",
        cal: 530,
        carbs: 43,
        protein: 39,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637001679/production-meal-image-106b9cda-b7ff-49c3-b57f-67013cee02a6.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637002383/production-meal-image-93da874b-3677-4881-9674-1a9f3a39ba38.jpg",
        name: "Wintertime Turkey Meatloaf",
        side: "with Creamed Spinach & Mushroom Gravy",
        gluten: "Gluten Free",
        cal: 500,
        carbs: 25,
        protein: 33,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637002384/production-meal-image-7c5a2853-030d-4776-b2b7-8c101ffd42f3.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637257869/production-meal-image-1ae8822e-987c-4a7e-8961-557d69673c01.jpg",
        name: "Tricolor Beef Lasagna",
        side: "with Brown-Rice & Spinach Pasta Sheets",
        gluten: "Gluten Free",
        cal: 650,
        carbs: 45,
        protein: 28,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637257871/production-meal-image-b8813d88-4dbb-40d4-b2da-d9cfd65e4130.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184333/production-meal-image-cd1dace6-cfd9-406d-a1ee-e836f2f386ea.jpg",
        name: "Southwest Beef Stew",
        side: "with Garden Vegetables",
        gluten: "Gluten Free",
        cal: 350,
        carbs: 20,
        protein: 22,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184332/production-meal-image-b062da34-2125-4a1e-8f5e-e889000340d5.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1625766663/production-meal-image-fa4ff532-e487-4656-b98f-f489d59e73b6.jpg",
        name: "Indian-Spiced Chickpea Curry Bowl",
        side: "with Basmati Rice, Lentils & Veggies",
        gluten: "Gluten Free",
        cal: 360,
        carbs: 50,
        protein: 11,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1625766664/production-meal-image-e4411fe1-381b-4c35-98d2-3f0d2fb4afb5.jpg",
        category: "purelyplant",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639417068/production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpg",
        name: "BBQ Bison Burger",
        side: "with Masterful Mac & Cheese",
        gluten: "Gluten Free",
        cal: 600,
        carbs: 41,
        protein: 29,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639417067/production-meal-image-9eddc975-4cfc-40a0-a0ad-588d1e603506.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639417296/production-meal-image-2e64815b-800d-4a38-9664-c7a524148b2f.jpg",
        name: "Jerk Chicken Bowl",
        side: "with Fire-Roasted Veggies & Basmati Rice",
        gluten: "Gluten Free",
        cal: 380,
        carbs: 45,
        protein: 22,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639417295/production-meal-image-4491df61-c0e3-4e74-9f4e-2c6ff3d84087.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639417369/production-meal-image-93be0073-891b-4443-a6a0-9ab21a1d309c.jpg",
        name: "Sticky-Sweet BBQ Beef Bowl",
        side: "with Korean-Style Sauce & Market Veggies",
        gluten: "Gluten Free",
        cal: 390,
        carbs: 53,
        protein: 22,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639417368/production-meal-image-9c0eb3fb-e81c-4d28-8a86-0eae6b581c68.jpg",
        category: "signaturecollection",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184438/production-meal-image-7a3ba895-37a7-4f47-9e32-3667bb6141d3.jpg",
        name: "Sheet Pan Chicken",
        side: "with Roasted Rainbow Vegetables",
        gluten: "Gluten Free",
        cal: 420,
        carbs: 22,
        protein: 37,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184437/production-meal-image-1e1adf3a-85c3-44da-816a-fbf7fc40795c.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637001562/production-meal-image-933355a9-e575-456c-9961-d6ac01cb50da.jpg",
        name: "Oven-Baked Sweet Potato Cakes",
        side: "with Mole Sauce & Turmeric Rice",
        gluten: "Gluten Free",
        cal: 430,
        carbs: 78,
        protein: 10,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637001562/production-meal-image-257d0491-6daa-4deb-8881-59f3f90a1a6b.jpg",
        category: "purelyplant",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637002787/production-meal-image-b70b17ff-88b4-453d-b192-2be3cc18e849.jpg",
        name: "Dijon Pork Chop",
        side: "with Sea Salt Potatoes & Roasted Carrots",
        gluten: "Gluten Free",
        cal: 630,
        carbs: 43,
        protein: 27,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637002788/production-meal-image-7183218a-fccc-4a67-add1-46aa016855e8.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639769253/production-meal-image-0a3b0cc8-11c7-4dd7-9b62-21a8a91c6a07.jpg",
        name: "Three-Grain Harvest Bowl",
        side: "with Almonds & Cilantro-Turmeric Sauce",
        gluten: "Gluten Free",
        cal: 420,
        carbs: 67,
        protein: 13,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639769252/production-meal-image-0ed8f9ab-f7ce-46c4-815f-2d1c94425bba.jpg",
        category: "purelyplant",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639769149/production-meal-image-1daa7db4-183a-4aa0-bd4c-2ab21a5a47a5.jpg",
        name: "Brown-Butter Pork & Cauli Shells",
        side: "with Roasted Butternut Squash",
        gluten: "Gluten Free",
        cal: 600,
        carbs: 56,
        protein: 20,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639769148/production-meal-image-7b4a1416-2cd2-4bf0-9ce5-fac1f8df094f.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184196/production-meal-image-ff2c65b9-af43-4b4f-af72-835f41bc4a2b.jpg",
        name: "Hearty Veggie Bolognese",
        side: "with Red Lentil Ziti & Parmesan Cheese",
        gluten: "Gluten Free",
        cal: 470,
        carbs: 49,
        protein: 20,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184195/production-meal-image-9ed585d1-c6c5-4c01-ac14-f0fbe8173e62.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184092/production-meal-image-68fb94dd-b723-4a29-8a8e-ad7b6a02c2ec.jpg",
        name: "Chicken ’N’ Drop Biscuits",
        side: "with Smoked Maple Crema & Sautéed Greens",
        gluten: "Gluten Free",
        cal: 700,
        carbs: 51,
        protein: 38,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640184091/production-meal-image-ff66b115-48a9-4633-9668-dd49b08e3466.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640183960/production-meal-image-7448fb51-c1f4-4ac8-ad5b-1406fc1bfcfd.jpg",
        name: "Huli Huli Chicken",
        side: "with Coconut Confetti Rice",
        gluten: "Gluten Free",
        cal: 460,
        carbs: 41,
        protein: 33,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1640183959/production-meal-image-afb4ec51-f9ba-4fda-a9b5-7c57f1762981.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638479660/production-meal-image-2f53a0bb-c83f-48f7-b920-53e9157ac5e1.jpg",
        name: "Super-Grain Pulled Pork Bowl",
        side: "with Red Pepper Sauce & Quinoa",
        gluten: "Gluten Free",
        cal: 400,
        carbs: 20,
        protein: 17,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638479659/production-meal-image-66efbf43-1a2c-43bf-9320-277b9bb79507.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637257669/production-meal-image-197e49d6-cfcc-4a4b-b0ea-4854553694de.jpg",
        name: "Middle Eastern Falafel",
        side: "with Garlicky Tahini Sauce & Whole Grains",
        gluten: "Gluten Free",
        cal: 470,
        carbs: 68,
        protein: 13,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637602171/production-meal-image-b8bcc8fa-603c-4e18-896d-4c35c4bb0a49.jpg",
        category: "purelyplant",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1611268764/production-meal-image-c92760b3-d1c8-463a-9721-8effc5cbc614.jpg",
        name: "Miso-Glazed Beef Bowl",
        side: "with Carb Swap Cauli Rice",
        gluten: "Gluten Free",
        cal: 330,
        carbs: 17,
        protein: 26,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1638572563/production-meal-image-82ec7ed4-920a-42bd-b5c6-a4c26e012525.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"

    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1607030397/production-meal-image-e11563a9-0714-42b4-aac9-239a7592018b.jpg",
        name: "Keto-Friendly Chicken Bowl",
        side: "with Super Greens Pesto & Cauli Rice",
        gluten: "Gluten Free",
        cal: 340,
        carbs: 13,
        protein: 29,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1639083859/production-meal-image-d60d91c2-7925-41c5-8c35-95f237826e3e.jpg",
        category: "freshlyfit"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1627310195/production-meal-image-36a77436-ae4f-446d-885c-e9fd7ae139fa.jpg",
        name: "Coconut Lemongrass Pork Bowl",
        side: "with Cauli Rice & Fire-Roasted Veg",
        gluten: "Gluten Free",
        cal: 400,
        carbs: 19,
        protein: 22,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1627310196/production-meal-image-cf7ed67f-c569-42ac-bb59-cb35f688ef91.jpg",
        category: "freshlyfit",
        diet: "Dairy-Free"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1629125756/production-meal-image-2d36ad62-ae02-42fe-9c16-f2064587d892.jpg",
        name: "Baked Turkey Meatballs",
        side: "with Zoodles & Eight-Veggie Ragù",
        gluten: "Gluten Free",
        cal: 360,
        carbs: 20,
        protein: 32,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1629125758/production-meal-image-07a4293d-5b0c-4321-b228-4af6dc3ef214.jpg",
        category: "freshlyfit"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637602080/production-meal-image-207ee5a9-50b6-4d3f-a0bb-e31354d0e606.jpg",
        name: "Creamy Mushroom Risotto",
        side: "with Parisian Carrots & Broccoli",
        gluten: "Gluten Free",
        cal: 460,
        carbs: 46,
        protein: 14,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637602079/production-meal-image-b06a0e30-b973-4cdd-86fd-93780c5f14ac.jpg",
        category: "signaturecollection"
    },
    {
        image: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1633017856/production-meal-image-8f27cccd-b0db-405a-9341-3f4adabcbe9c.jpg",
        name: "Chicken Cordon Bleu",
        side: "with Canadian Bacon & Swiss Cheese",
        gluten: "Gluten Free",
        cal: 710,
        carbs: 37,
        protein: 46,
        smallimage: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1633017854/production-meal-image-f63602dc-d261-41fe-9af9-1fda66c12fab.jpg",
        category: "signaturecollection"
    },
]

displaydata(addcartItems);

//-------------------------------------------Below function for display data-----------------------------------------

function displaydata(addcartItems) {
    addcartItems.forEach(function (elem) {

        var div = document.createElement("div");
        div.setAttribute("id", "onefoodbox");

        var image = document.createElement("img");
        image.setAttribute("id", "foodimage");
        image.setAttribute("src", elem.image);

        var textdiv = document.createElement("div");
        textdiv.setAttribute("id", "textdiv");

        var name = document.createElement("h5");
        name.textContent = elem.name;

        var side = document.createElement("p");
        side.setAttribute("id", "side");
        side.textContent = elem.side;

        var nameSide = document.createElement("div");
        nameSide.setAttribute("id", "nameSide");

        var contents = document.createElement("div");
        contents.setAttribute("id", "contents");

        var gluten = document.createElement("p");
        gluten.setAttribute("id", "gluten")
        gluten.textContent = elem.gluten;

        var cal = document.createElement("p");
        cal.setAttribute("id", "cal")
        cal.textContent = elem.cal + " Cals";

        var carbs = document.createElement("p");
        carbs.setAttribute("id", "carbs");
        carbs.textContent = elem.carbs + "g Carbs";

        var protein = document.createElement("p");
        protein.textContent = elem.protein + "g Protein";
        protein.setAttribute("id", "pro");

        var add = document.createElement("button");
        add.setAttribute("id", "add");
        add.textContent = "+ Add";
        add.addEventListener("click", function () {
            displayAdded(elem);
        })


        var button_content = document.createElement("div");
        button_content.setAttribute("id", "buttonContent");

        contents.append(gluten, cal, carbs, protein);
        button_content.append(contents, add);
        nameSide.append(name, side);
        textdiv.append(nameSide, button_content);
        div.append(image, textdiv);

        document.querySelector(".mainitems").append(div);
    })
}

//-------------------------------------------------------------------------------------------------------------------------

//------------------------below code is for displaying the data once product is selected------------------------------------

var count = 0;
var price = 0;
var arr = [];
function displayAdded(elem) {
    arr.push(elem);
    console.log(arr);
    var cartbox = document.createElement("div");
    cartbox.setAttribute("id", "cartBoxItem")

    var smallimage = document.createElement("img");
    smallimage.setAttribute("id", "smallimage");
    smallimage.setAttribute("src", elem.smallimage);

    var name = document.createElement("h5");
    name.textContent = elem.name;

    cartbox.append(smallimage, name);
    document.querySelector(".addedToCart").append(cartbox);

    price = price + 11.79;

    count++;
    document.querySelector("#countNumber").innerHTML = "";
    document.querySelector("#countNumber").append(count);
    ordersummary(price, count);

}

function ordersummary(price, count) {

    localStorage.setItem("addedtocart", JSON.stringify(arr));        //the items added to cart are stored in local storage at this point
    //console.log(arr);                                             // the name of local storage is "addedtocart"
    price = price.toFixed(2);
    if (count == 1) {
        document.querySelector(".secondLine").textContent = "Add 3 To Continue";
    }
    else if (count == 2) {
        document.querySelector(".secondLine").textContent = "Add 2 To Continue";
    }
    else if (count == 3) {
        document.querySelector(".secondLine").textContent = "Add 1 To Continue";
    }
    else if (count >= 4) {
        document.querySelector(".secondLine").innerHTML = "Next";
        document.querySelector(".secondLineDiv").style.backgroundColor = "#2a6dff";
        document.querySelector(".secondLine").style.color = '#ffffff';
        //you have to set the link to Rashmi's page to "next box" at this point-----class for that is (.secondlineDiv)
        document.querySelector(".secondLine").addEventListener("click", function () {
            window.location.href = "/checkout/checkputpage.html"
        })
    }
    //-------------------------------------------------------------------------


    if (count == 4) {
        document.querySelector(".offer").textContent = "Add 2 more meals to save $10.80!";
    }
    else if (count == 5) {
        document.querySelector(".offer").textContent = "Add 1 more meal to save $10.80!";
    }
    else if (count >= 6) {
        document.querySelector(".offer").textContent = "The more you'll add, the more you'll save!";
        price = price - 10;
        price = price.toFixed(2);
    }

    //------------------------------------------------------------------------------------
    document.querySelector("#summary").innerHTML = "";
    document.querySelector("#sub").innerHTML = "";

    var title = document.createElement("h5");
    title.textContent = "Order Summary";

    var description1 = document.createElement("div");
    description1.setAttribute("id", "des1");

    var mealcount = document.createElement("p");
    if (count == 1) {
        mealcount.textContent = count + " meal ";
    } else {
        mealcount.textContent = count + " meals ";
    }


    var priceDisplay = document.createElement("p");
    priceDisplay.textContent = "$" + price;

    description1.append(mealcount, priceDisplay);


    var description2 = document.createElement("div");
    description2.setAttribute("id", "des2");

    var subtotal = document.createElement("h5");
    subtotal.textContent = "Subtotal:";

    var priceDisplay2 = document.createElement("h5");
    priceDisplay2.textContent = "$" + price;

    description2.append(subtotal, priceDisplay2);


    document.querySelector("#summary").append(title, description1, description2);



    var subtotal1 = document.createElement("h5");
    subtotal1.textContent = "Subtotal:";

    var priceDisplay3 = document.createElement("h5");
    priceDisplay3.textContent = "$" + price;

    document.querySelector("#sub").append(subtotal1, priceDisplay3);
    localStorage.setItem("price", price);                    //price is updated in local storage here and the name is "price"
}

//-----------------------------------------------------------------------------------------------------------------------------------


//----------------------------the below code is for clear all functionality----------------------------------------------------------

document.querySelector("#clear").addEventListener("click", function () {

    document.querySelector(".addedToCart").innerHTML = "";
    document.querySelector("#summary").innerHTML = "";
    document.querySelector("#sub").innerHTML = "";
    document.querySelector("#countNumber").innerHTML = "";

    document.querySelector(".offer").textContent = "";

    document.querySelector(".secondLine").innerHTML = "Add 4 to Continue";
    document.querySelector(".secondLineDiv").style.backgroundColor = "#ededed";
    document.querySelector(".secondLine").style.color = '#d0d0d0';
    //here once you clear off all element, the next button should be disabled, so the link provided to rashmi's page should be disabled here


    localStorage.removeItem("addedtocart");     //local storage items are deleted when clicked clear all here
    price = 0;
    count = 0;
})

//--------------------------------------------------------------------------------------------------------------------



//---------------------------below is for hide/show the filters box---------------------------------------------------

document.querySelector("#filter").addEventListener("click", function () {
    //alert("hi");
    var e = document.querySelector("#hides");
    if (e.style.display == "none") {
        e.style.display = "block";
        document.querySelector("#allitems").classList.remove("mainitems");
        document.querySelector("#allitems").classList.add("afterhide");
    }
    else {
        e.style.display = "none";
        document.querySelector("#allitems").classList.remove("afterhide");
        document.querySelector("#allitems").classList.add("mainitems");

    }
})

//---------------------------------------------------------------------------------------------------------------------------


//------------------below is for sorting the data in ascending order in term of calories, carbs, proteins-------------

//var filtereddata=[];
//console.log(addcartItems);
function ascendcal() {
    var filtereddata = addcartItems.sort(function (a, b) {
        return a.cal - b.cal;
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(filtereddata);
}

function ascendcarbs() {
    var filtereddata = addcartItems.sort(function (a, b) {
        return a.carbs - b.carbs;
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(filtereddata);
}
function ascendprotein() {
    var filtereddata = addcartItems.sort(function (a, b) {
        return a.protein - b.protein;
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(filtereddata);
}
function unchanged() {
    document.querySelector("#allitems").innerHTML = "";

    displaydataFilter(addcartItems);

}

function displaydataFilter(addcartItems) {
    addcartItems.forEach(function (elem) {

        var div = document.createElement("div");
        div.setAttribute("id", "onefoodbox");

        var image = document.createElement("img");
        image.setAttribute("id", "foodimage");
        image.setAttribute("src", elem.image);

        var textdiv = document.createElement("div");
        textdiv.setAttribute("id", "textdiv");

        var name = document.createElement("h5");
        name.textContent = elem.name;

        var side = document.createElement("p");
        side.setAttribute("id", "side");
        side.textContent = elem.side;

        var nameSide = document.createElement("div");
        nameSide.setAttribute("id", "nameSide");

        var contents = document.createElement("div");
        contents.setAttribute("id", "contents");

        var gluten = document.createElement("p");
        gluten.setAttribute("id", "gluten")
        gluten.textContent = elem.gluten;

        var cal = document.createElement("p");
        cal.setAttribute("id", "cal")
        cal.textContent = elem.cal + " Cals";

        var carbs = document.createElement("p");
        carbs.setAttribute("id", "carbs");
        carbs.textContent = elem.carbs + "g Carbs";

        var protein = document.createElement("p");
        protein.textContent = elem.protein + "g Protein";
        protein.setAttribute("id", "pro");

        var add = document.createElement("button");
        add.setAttribute("id", "add");
        add.textContent = "+ Add";
        add.addEventListener("click", function () {
            displayAdded(elem);
        })


        var button_content = document.createElement("div");
        button_content.setAttribute("id", "buttonContent");

        contents.append(gluten, cal, carbs, protein);
        button_content.append(contents, add);
        nameSide.append(name, side);
        textdiv.append(nameSide, button_content);
        div.append(image, textdiv);

        document.querySelector("#allitems").append(div);

    })
}

//-------------------------------------------------------------------------------------------------------------

//--------------Below is for categories functions -------------------------------------------------------------

document.querySelector("#purelyplant").addEventListener("change", plant);
function plant() {
    var filtered = addcartItems.filter(function (elem) {
        return elem.category == "purelyplant";
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(filtered);
}

document.querySelector("#freshlyfit").addEventListener("change", fresh);
function fresh() {
    var filtered = addcartItems.filter(function (elem) {
        return elem.category == "freshlyfit";
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(filtered);
}

document.querySelector("#signature").addEventListener("change", signature);
function signature() {
    var filtered = addcartItems.filter(function (elem) {
        return elem.category == "signaturecollection";
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(filtered);
}

document.querySelector("#pro_sli").addEventListener("change", proteinSlide);
function proteinSlide() {
    var filtered = addcartItems.filter(function (elem) {
        return elem.category == "protein&slides";
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(filtered);
}

document.querySelector("#fullmenu").addEventListener("change", fullmenu);
function fullmenu() {

    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(addcartItems);
}

//-------------------------------------------------------------------------------------------------------------

//------------------------------below is for Diet category in filter options -------------------------------------

var newArr = [];
document.querySelector("#plant").addEventListener("change", function () {
    newArr = addcartItems.filter(function (elem) {
        return elem.category == "purelyplant";
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(newArr);
})

document.querySelector("#glutenfree").addEventListener("change", function () {
    newArr = addcartItems.filter(function (elem) {
        return elem.gluten == "Gluten Free";
    })
    document.querySelector("#allitems").innerHTML = "";
    displaydataFilter(newArr);
})

//-------------------------------------------------------------------------------------------------------------------


