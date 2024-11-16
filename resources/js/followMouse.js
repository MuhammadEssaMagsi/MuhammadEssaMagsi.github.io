const blob = document.getElementById('mouseBlob');


document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    // blob.style.left = `${clientX}px`;
    // blob.style.top = `${clientY}px`;

    blob.animate({ 
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: 'forwards'});
}