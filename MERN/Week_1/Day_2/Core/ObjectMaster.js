const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// 1
const pkid= pokemon.filter(p => p.id % 3 ===0);
console.log(pkid)

// 2
const pkfire=pokemon.filter(p => p.types.filter(type => type === "fire").length>0)
console.log(pkfire)

// 3
const pklength=pokemon.filter(p=>p.types.length>1)
console.log(pklength)

// 4
const pknames=pokemon.map(p=>p.name)
console.log(pknames)

// 5
const pkNameId=pokemon.filter(p=>p.id>99).map(p=>p.name)
console.log(pkNameId)

// 6
const pkpoison=pokemon.filter(p=>p.types.length===1).filter(p=>p.types.filter(type=>type==="poison").length>0).map(p=>p.name)
console.log(pkpoison)

// 7
const  pkflying=pokemon.filter(p=>p.types[1]==="flying").map(p=>p.types[0])
console.log(pkflying)

// 8
const pkNormal=pokemon.filter(p => p.types.filter(type => type === "normal").length>0).length  
console.log(pkNormal)

// 9
const pkExpect=pokemon.filter(p => p.id !=148)
console.log(pkExpect)

// 10
const pklist=pokemon.map(p => {
        if (p.id === 35) {
            return {
            ...p,
            
            types: p.types.map(type => type === "normal" ? "fairy" : type)
            };
        }
        return p;
    });
console.log(pklist)