import { AllergyCard, ComboDeal, KitchenTicket, MenuItem } from "./menuTypes";

const soup: MenuItem = {
  id: 1,
  name: "Roast Tomato Soup",
  course: "starter",
  price: 5.5,
  nutrition: {
    calories: 180,
    allergens: ["celery"],
  },
};

const risotto : MenuItem = {
  id: 2,
  name: "Mushroom Risotto",
  course: "main",
  price: 14.0,
  nutrition: {
    calories: 620,
    allergens: ["milk"],
  },
};

const brownie : MenuItem = {
  id: 3,
  name: "Chocolate Brownie",
  course: "dessert",
  price: 6.0,
  nutrition: {
    calories: 450,
    allergens: ["milk", "eggs", "gluten"],
  },
  discountPercent: 10,
  availableFrom: new Date("2026-10-05")
};


const menu = [soup, risotto, brownie];


const lunchCombo: ComboDeal = {
  id: 101,
  name: "Soup & Sweet",
  items: [soup, brownie],
  price: 10.0,
};



export type OrderLine = MenuItem | ComboDeal;
const currentOrder: OrderLine[] = [risotto, lunchCombo, soup];



function describe(item: MenuItem): string {
  return `${item.name} (${item.course}) - EUR ${item.price.toFixed(2)}`;
}


function lineTotal(line: OrderLine): number {
  if ("items" in line) {
    return line.price; // Combos are sold at their bundle price.
  }
  return line.price;
}

function orderTotal(lines: OrderLine[]): number {
  return lines.reduce((total, line) => total + lineTotal(line), 0);
}


function filterMenu(items: MenuItem[], predicate: (item: MenuItem) => boolean): MenuItem[] {
  return items.filter(predicate);
}


function cheapest(items: MenuItem[], max?: number) : MenuItem[] {
  const sorted = [...items].sort((a, b) => a.price - b.price);
  if (max === undefined){
    return sorted;
  }
  return sorted.slice(0, max);
}

function firstMatch<T>(data:T[], criteria: (d: T) => boolean): T | undefined {
  return data.find(criteria);
}


function updateItem(item: MenuItem, changes: Partial<MenuItem>): MenuItem {
  return { ...item, ...changes };
}


function kitchenTicket(item: MenuItem): KitchenTicket {
  return {
    name: item.name,
    course: item.course,
  };
}

function allergyCard(item:MenuItem): AllergyCard {
  return {
    id: item.id,
    name: item.name,
    course: item.course,
    price: item.price,
    warning: `Contains: ${item.nutrition.allergens.join(", ")}`,
  };
}

console.log(describe(risotto));
console.log(orderTotal(currentOrder));
console.log(filterMenu(menu, (i) => i.nutrition.calories < 500));
console.log(cheapest(menu, 2));
console.log(cheapest(menu));
console.log(firstMatch(menu, (i) => i.course === "dessert"));
console.log(updateItem(soup, { price: 6.0, discountPercent: 10 }));
console.log(kitchenTicket(brownie));
console.log(allergyCard(brownie));

// TS: The compiler will reject the next line once kitchenTicket returns a
//     Readonly<> type. Leave it commented out with a note explaining why.
// kitchenTicket(brownie).name = "Something else"; ==> Readonly<> means properties can't be changed after object is created


console.log(describe(risotto));
console.log(updateItem(soup, { price: 7.00 }));
console.log(firstMatch(menu, (i) => i.nutrition.calories < 300));
