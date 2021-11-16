import { filter, fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map ( ({x, y}) => ({x, y}) ),
    takeWhile( ({x, y}) => x >= 150 && y >= 150, true)
)

.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})

