import Team from '../Team';

let team;

beforeEach(() => {
    team = new Team();
});

test('Добавление одного персонажа', () => {
    const character = {
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    team.add(character);
    expect(team.toArray()).toContain(character);
});

test('Добавление нескольких персонажей', () => {
    const characters = [
        {
            name: 'Magician',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        },
        {
            name: 'Daemon',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        },
        {
            name: 'Swordsman',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10
        }
    ];
    team.addAll(...characters);
    expect(team.toArray()).toEqual(characters);
});

test('Добавление повторяющихся персонажа с несколькими', () => {
    const characters = [
        {
            name: 'Magician',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        },
        {
            name: 'Daemon',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        },
        {
            name: 'Swordsman',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10
        },
        {
            name: 'Swordsman',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10
        }
    ];
    team.addAll(...characters);
    team.addAll(...characters);
    expect(team.toArray()).toEqual(characters);
});

test('Добавление существующего персонажа', () => {
    const character = {
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    team.add(character);
    expect(() => {
        team.add(character);
    }).toThrow('Такой персонаж уже существует в команде');
});