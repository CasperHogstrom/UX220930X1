Drive = () => {
    const lost = new XMLHttpRequest();

    lost.onload = () => {
        console.log(lost.Elementname(h1));
    };

    lost.open('GET', 'structure.json');
    lost.send();
}
