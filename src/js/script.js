let btn = document.getElementById('btn');

function conversor () {
    let metrosInput = document.querySelector('input').value;
    let textMm = document.querySelector('.textMm');
    let kmContent = document.querySelector('.km > span');
    let hmContent = document.querySelector('.hm > span');
    let damContent = document.querySelector('.dam > span');
    let dmContent = document.querySelector('.dm > span');
    let cmContent = document.querySelector('.cm > span');
    let mmContent = document.querySelector('.mm > span');

    let km = (metrosInput / 1000).toFixed(3);
    let hm = (metrosInput / 100).toFixed(2);
    let dam = (metrosInput / 10).toFixed(1);
    let dm = metrosInput * 10;
    let cm = metrosInput * 100;
    let mm = metrosInput * 1000;

    textMm.innerHTML = `${metrosInput} metros convertidos para:`;
    kmContent.innerHTML = km + ' (km)';
    hmContent.innerHTML = hm + ' (hm)';
    damContent.innerHTML = dam + ' (dam)';
    dmContent.innerHTML = dm + ' (dm)';
    cmContent.innerHTML = cm + ' (cm)';
    mmContent.innerHTML = mm + ' (mm)';

    
}
btn.addEventListener('click', conversor);
