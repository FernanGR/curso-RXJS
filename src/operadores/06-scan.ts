import { from, map, reduce, scan } from "rxjs";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulado =  (acc,cur) => {
//     return acc + cur;
// }


const totalAcumulado =  (acc,cur) =>  acc + cur;

//reduce
from (numeros ).pipe(
    reduce(totalAcumulado,0)
)
.subscribe( console.log );


//scan
from (numeros ).pipe(
    scan(totalAcumulado,0)
)
.subscribe( console.log );


//redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'fernando', autenticado: false, token: null},
    {id: 'fernando', autenticado: true, token: 'ABC'},
    {id: 'fernando', autenticado: true, token: 'ABC123'},
];

// const state$ = from(user).pipe(
//     scan<Usuario>( (acc,cur) => {
//         return {...acc, ...cur}
//     },{ edad:33 })
// );

// const id$ = state$.pipe(   
//     map( state => state.id)
// );

