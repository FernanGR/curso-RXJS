import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent(document, 'click');


click$.pipe(
    tap(console.log),
    // first<MouseEvent>(event => event.clientY >= 150)
    // map(event =>({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map(({clientX, clientY}) =>({clientY, clientX})),

    first(event => event.clientY >= 150)

)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}
);
