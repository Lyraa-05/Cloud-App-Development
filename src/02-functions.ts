import { friends, colleagues } from './01-basics'
import {Friend, Colleague} from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

console.log(older(friends[0]))

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(
    cs: Colleague[],
    name: string,
    department: string,
    email: string
): number {
    const newExtension = highestExtension(cs).contact.extension + 1;

    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: newExtension,
        },
    };

    cs.push(newColleague);
    return newExtension;
}


addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));