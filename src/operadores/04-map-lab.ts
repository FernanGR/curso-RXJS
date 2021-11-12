import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae pulvinar nisi. Duis vel sapien sagittis, pulvinar ipsum vitae, semper eros. Duis non gravida urna. Aliquam non enim ut orci eleifend malesuada vitae eu ligula. Quisque in pellentesque dolor. Praesent nec vulputate ante, in iaculis tortor. Duis non dignissim elit, sed gravida arcu. Vestibulum sit amet nunc felis. Vestibulum sodales dolor egestas dui venenatis rutrum. Quisque nunc est, aliquam eu ligula ac, porttitor vehicula enim. Sed accumsan lectus sed magna sagittis, id rutrum massa eleifend. Fusce justo mi, pretium id suscipit ac, facilisis eu dui. Quisque nec mi vel nisl ultrices posuere. Sed pulvinar mauris mauris, eget dapibus ligula vehicula eget. Nunc ullamcorper varius dolor a sodales. Cras rhoncus sit amet ex varius lobortis.
<br>
Nulla id massa at lacus gravida congue et in sem. Nunc et sapien rhoncus, semper sapien at, pharetra ante. Morbi eget placerat lacus. Mauris efficitur aliquet enim lobortis mattis. Integer condimentum fringilla augue vel commodo. Nunc quis tortor elementum, lobortis dolor ut, pulvinar quam. Vivamus ornare, tellus eu auctor tempor, arcu mauris faucibus ipsum, et fermentum quam enim in dolor. Maecenas tempor, dui eu semper lobortis, diam elit volutpat ipsum, ac convallis ligula risus id mauris. Sed varius nisi id mauris lacinia, posuere efficitur ligula interdum. Nam tortor lectus, iaculis eget imperdiet id, aliquam id est. Praesent ac nibh ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis molestie odio. Fusce finibus porta nisi id finibus.
<br>
Cras dictum risus eu ligula laoreet sollicitudin. Mauris sed lacus odio. Proin et gravida urna. Nulla vestibulum a est vel eleifend. In tincidunt aliquet nisi, non sodales diam ornare id. Morbi libero urna, imperdiet et interdum vel, imperdiet ac ipsum. Aliquam erat volutpat. Nulla dignissim laoreet nulla, sed vestibulum lectus luctus nec. Proin leo libero, molestie ut urna et, porttitor vulputate quam. Sed id justo rutrum, tristique massa in, congue magna. Suspendisse mollis ipsum at massa vehicula feugiat. Cras eget nunc ut velit posuere porttitor et eleifend tortor. Sed ullamcorper suscipit elementum.
<br>
Aenean arcu diam, viverra vitae dui lobortis, maximus lobortis felis. Integer venenatis urna a augue porttitor convallis. Fusce aliquet mattis magna, sed dapibus felis viverra id. Quisque viverra tortor sed purus bibendum, et molestie mi tempor. Vestibulum nibh ligula, interdum in augue a, viverra ultricies ipsum. Donec a scelerisque ipsum. In hac habitasse platea dictumst. Vestibulum facilisis odio sit amet diam iaculis, quis ornare justo varius. Morbi in lectus orci.
<br>
Maecenas iaculis sed justo vel ultricies. Proin consectetur tempor sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit justo vitae nibh malesuada, et laoreet arcu euismod. Pellentesque scelerisque, orci eget viverra semper, mi magna efficitur felis, ut porta lectus nisi et sapien.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event: any) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    console.log({scrollTop, scrollHeight, clientHeight});
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scroll$ = fromEvent( document, 'scroll')
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    map ( event => calcularPorcentajeScroll(event),
    tap(console.log) )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`
});
