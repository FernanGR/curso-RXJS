import { Observable, Observer } from 'rxjs'


const observer: Observer<any> = { 
    next: value => console.log('next: ', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.info('Completado')
};


const intervalo$ = new Observable<number>(subscriber => {

    //crear un contador, 1, 2 ,3, 4, 5, 6...
    let count = 0;

    const interval = setInterval(() => {
        //cada segundo
        count++;
        subscriber.next(count);
        console.log(count);
    },1000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})


const subs1 = intervalo$.subscribe( );
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

subs1.add( subs2 );
subs1.add( subs3 );
    
setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

        console.log('Completado timeout');
},6000);