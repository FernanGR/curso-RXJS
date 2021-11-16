import { fromEvent, interval} from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

const interval$ = interval(5000)

const click$ = fromEvent<MouseEvent>(document, 'click');



click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(3000)
)
.subscribe(console.log);
 