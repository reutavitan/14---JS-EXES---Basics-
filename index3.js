let family = {
    parents: {},
    children: [
        { name: "Ali" },
        { name: "Lea" },
        { name: "Mona" }
    ]
};
console.log(family.children[2].name);
let names = family.children.map (child => child.name);
console.log(names.join(','));