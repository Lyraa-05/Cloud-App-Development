export type Course = "starter" | "main" | "dessert";

export interface MenuItem {
    id: number;
    name: string;
    course: Course;
    price: number;
    nutrition: {
        calories: number;
        allergens: string[];
    }
    discountPercent?: number;
    availableFrom?: Date;
}

export interface ComboDeal {
    id: number;
    name: string;
    items: MenuItem[];
    price: number;
}

export type KitchenTicket = ReadOnly<Pick<MenuItem, "name" | "course">>;

// TS: An allergy card is a MenuItem without its nutrition property, but with a
//     'warning' string added. Declare its type with Omit<> and an intersection
//     (&) - see the EventPass example in the Utility Types section.

export type AllergyCard  = Omit<MenuItem, "nutrition"> & {
    warning: string;
}