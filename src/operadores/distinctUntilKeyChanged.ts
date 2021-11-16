import { distinctUntilChanged, distinctUntilKeyChanged, from, of } from 'rxjs';

const numeros$ = of(1,'1',1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
];

from (personajes).pipe(
    distinctUntilKeyChanged('nombre')
    ).subscribe(console.log);