import { fromEvent, map, sample, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(1000),
    map(({x, y}) => ({x, y}))
)
.subscribe(console.log);