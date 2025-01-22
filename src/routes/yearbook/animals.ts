export type Animal = {
	name: string;
	latinName: string;
	photo: string;
	weight: string;
	lifespan: string;
	class: string;
};

export const animals: Animal[] = [
	{
		name: 'Red fox',
		latinName: 'Vulpes vulpes africana',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vulpes_vulpes_ssp_fulvus.jpg/640px-Vulpes_vulpes_ssp_fulvus.jpg',
		weight: '2.2–3.2 kg',
		lifespan: '3-4 years',
		class: 'Mammal'
	},
	{
		name: 'African Elephant',
		latinName: 'Loxodonta africana',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Loxodontacyclotis.jpg/640px-Loxodontacyclotis.jpg',
		weight: '6000 kg',
		lifespan: '60-70 years',
		class: 'Mammal'
	},
	{
		name: 'Bald Eagle',
		latinName: 'Haliaeetus leucocephalus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/600px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg',
		weight: '4-6.3 kg',
		lifespan: '20-30 years',
		class: 'Bird'
	},
	{
		name: 'King Cobra',
		latinName: 'Ophiophagus hannah',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg/640px-12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg',
		weight: '6 kg',
		lifespan: '20 years',
		class: 'Reptile'
	},
	{
		name: 'Blue Whale',
		latinName: 'Balaenoptera musculus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/640px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg',
		weight: '190,000 kg',
		lifespan: '80-90 years',
		class: 'Mammal'
	},
	{
		name: 'Emperor Penguin',
		latinName: 'Aptenodytes forsteri',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Penguin_in_Antarctica_jumping_out_of_the_water.jpg/640px-Penguin_in_Antarctica_jumping_out_of_the_water.jpg',
		weight: '23-45 kg',
		lifespan: '15-20 years',
		class: 'Bird'
	},
	{
		name: 'Komodo Dragon',
		latinName: 'Varanus komodoensis',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Komodo_dragon_%28Varanus_komodoensis%29.jpg/609px-Komodo_dragon_%28Varanus_komodoensis%29.jpg',
		weight: '70-90 kg',
		lifespan: '30 years',
		class: 'Reptile'
	},
	{
		name: 'Great White Shark',
		latinName: 'Carcharodon carcharias',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/640px-White_shark.jpg',
		weight: '1100-2500 kg',
		lifespan: '70 years',
		class: 'Fish'
	},
	{
		name: 'Giant Panda',
		latinName: 'Ailuropoda melanoleuca',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG',
		weight: '70-100 kg',
		lifespan: '20 years',
		class: 'Mammal'
	},
	{
		name: 'Cheetah',
		latinName: 'Acinonyx jubatus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/640px-Male_cheetah_facing_left_in_South_Africa.jpg',
		weight: '21-72 kg',
		lifespan: '10-12 years',
		class: 'Mammal'
	},
	{
		name: 'Green Anaconda',
		latinName: 'Eunectes murinus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sucuri_verde.jpg/640px-Sucuri_verde.jpg',
		weight: '30-70 kg',
		lifespan: '10 years',
		class: 'Reptile'
	},
	{
		name: 'Snow Leopard',
		latinName: 'Panthera uncia',
		photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/640px-Irbis4.JPG',
		weight: '22-55 kg',
		lifespan: '10-12 years',
		class: 'Mammal'
	},
	{
		name: 'Harpy Eagle',
		latinName: 'Harpia harpyja',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Harpy_Eagle_with_wings_lifted.jpg/640px-Harpy_Eagle_with_wings_lifted.jpg',
		weight: '4-9 kg',
		lifespan: '25-35 years',
		class: 'Bird'
	},
	{
		name: 'Leatherback Sea Turtle',
		latinName: 'Dermochelys coriacea',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg/640px-Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg',
		weight: '250-700 kg',
		lifespan: '45 years',
		class: 'Reptile'
	},
	{
		name: 'Orca',
		latinName: 'Orcinus orca',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/640px-Killerwhales_jumping.jpg',
		weight: '3,600-5,400 kg',
		lifespan: '50-80 years',
		class: 'Mammal'
	},
	{
		name: 'Axolotl',
		latinName: 'Ambystoma mexicanum',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Axolot%27s_head_%28Ambystoma_mexicanum%29.jpg/640px-Axolot%27s_head_%28Ambystoma_mexicanum%29.jpg',
		weight: '60-200 g',
		lifespan: '10-15 years',
		class: 'Amphibian'
	}
];
