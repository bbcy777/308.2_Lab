const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const min_space = 0.8;

let num_plants = 100;
let num_week = 10;

num_plants *= 2**num_week;

console.log(`By the end of week ${num_week}, there will be ${num_plants} plants`);

let plant_area = num_plants * min_space;
console.log(`Space needed for all plants will be ${plant_area} square meters`);

try {
    if (plant_area > area) {
        throw `Plants can't fit in the available space.`;
    }
} catch (error) {
    console.log(error);
}
console.log(`Additonal space will be ${plant_area - area}`)
let new_radius = (plant_area/PI) ** 0.5
console.log (`Radius for the expanded garde will be ${new_radius}`);

if (plant_area > area * 0.8) {
    console.log(`Pruned`)
}
else if (plant_area >= area * 0.5) {
    console.log(`Monitored`)
}
else {
    console.log(`Planted`)
}

