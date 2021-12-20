fetch('types.json')
.then(r => r.json())
.then(effect => {
    const url = new URL(window.location.href);
    let res = url.searchParams.get('q');
    console.log(res)
    if (res == "normal"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.normal[0]}" href="type.html?q=${effect.not_effective.normal[0]}">${effect.not_effective.normal[0]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p><u>Not effective against anything.</u></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p class="type-list"><a class="${effect.immune.normal[0]}" href="type.html?q=${effect.immune.normal[0]}">${effect.immune.normal[0]}</a></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "fire"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.fire[0]}" href="type.html?q=${effect.not_effective.fire[0]}">${effect.not_effective.fire[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.fire[1]}" href="type.html?q=${effect.not_effective.fire[1]}">${effect.not_effective.fire[1]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.fire[2]}" href="type.html?q=${effect.not_effective.fire[2]}">${effect.not_effective.fire[2]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.fire[3]}" href="type.html?q=${effect.not_effective.fire[3]}">${effect.not_effective.fire[3]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.fire[0]}" href="type.html?q=${effect.effective.fire[0]}">${effect.effective.fire[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.fire[1]}" href="type.html?q=${effect.effective.fire[1]}">${effect.effective.fire[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.fire[2]}" href="type.html?q=${effect.effective.fire[2]}">${effect.effective.fire[2]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "water"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.water[0]}" href="type.html?q=${effect.not_effective.water[0]}">${effect.not_effective.water[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.water[1]}" href="type.html?q=${effect.not_effective.water[1]}">${effect.not_effective.water[1]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.water[2]}" href="type.html?q=${effect.not_effective.water[2]}">${effect.not_effective.water[2]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.water[0]}" href="type.html?q=${effect.effective.water[0]}">${effect.effective.water[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.water[1]}" href="type.html?q=${effect.effective.water[1]}">${effect.effective.water[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.water[2]}" href="type.html?q=${effect.effective.water[2]}">${effect.effective.water[2]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "electric"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.electric[0]}" href="type.html?q=${effect.not_effective.electric[0]}">${effect.not_effective.electric[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.electric[1]}" href="type.html?q=${effect.not_effective.electric[1]}">${effect.not_effective.electric[1]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.electric[2]}" href="type.html?q=${effect.not_effective.electric[2]}">${effect.not_effective.electric[2]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.electric[0]}" href="type.html?q=${effect.effective.electric[0]}">${effect.effective.electric[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.electric[1]}" href="type.html?q=${effect.effective.electric[1]}">${effect.effective.electric[1]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "grass"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.grass[0]}" href="type.html?q=${effect.not_effective.grass[0]}">${effect.not_effective.grass[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.grass[1]}" href="type.html?q=${effect.not_effective.grass[1]}">${effect.not_effective.grass[1]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.grass[2]}" href="type.html?q=${effect.not_effective.grass[2]}">${effect.not_effective.grass[2]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.grass[3]}" href="type.html?q=${effect.not_effective.grass[3]}">${effect.not_effective.grass[3]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.grass[4]}" href="type.html?q=${effect.not_effective.grass[4]}">${effect.not_effective.grass[4]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.grass[5]}" href="type.html?q=${effect.not_effective.grass[5]}">${effect.not_effective.grass[5]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.grass[0]}" href="type.html?q=${effect.effective.grass[0]}">${effect.effective.grass[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.grass[1]}" href="type.html?q=${effect.effective.grass[1]}">${effect.effective.grass[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.grass[2]}" href="type.html?q=${effect.effective.grass[2]}">${effect.effective.grass[2]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "ice"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.ice[0]}" href="type.html?q=${effect.not_effective.ice[0]}">${effect.not_effective.ice[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.ice[1]}" href="type.html?q=${effect.not_effective.ice[1]}">${effect.not_effective.ice[1]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.ice[0]}" href="type.html?q=${effect.effective.ice[0]}">${effect.effective.ice[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.ice[1]}" href="type.html?q=${effect.effective.ice[1]}">${effect.effective.ice[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.ice[2]}" href="type.html?q=${effect.effective.ice[2]}">${effect.effective.ice[2]}</a></p>
        <p class="type-list"><a class="${effect.effective.ice[3]}" href="type.html?q=${effect.effective.ice[3]}">${effect.effective.ice[3]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "fighting"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.fighting[0]}" href="type.html?q=${effect.not_effective.fighting[0]}">${effect.not_effective.fighting[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.fighting[1]}" href="type.html?q=${effect.not_effective.fighting[1]}">${effect.not_effective.fighting[1]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.fighting[2]}" href="type.html?q=${effect.not_effective.fighting[2]}">${effect.not_effective.fighting[2]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.fighting[3]}" href="type.html?q=${effect.not_effective.fighting[3]}">${effect.not_effective.fighting[3]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.fighting[0]}" href="type.html?q=${effect.effective.fighting[0]}">${effect.effective.fighting[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.fighting[1]}" href="type.html?q=${effect.effective.fighting[1]}">${effect.effective.fighting[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.fighting[2]}" href="type.html?q=${effect.effective.fighting[2]}">${effect.effective.fighting[2]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "poison"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.poison[0]}" href="type.html?q=${effect.not_effective.poison[0]}">${effect.not_effective.poison[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.poison[1]}" href="type.html?q=${effect.not_effective.poison[1]}">${effect.not_effective.poison[1]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.poison[2]}" href="type.html?q=${effect.not_effective.poison[2]}">${effect.not_effective.poison[2]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.poison[3]}" href="type.html?q=${effect.not_effective.poison[3]}">${effect.not_effective.poison[3]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.poison[0]}" href="type.html?q=${effect.effective.poison[0]}">${effect.effective.poison[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.poison[1]}" href="type.html?q=${effect.effective.poison[1]}">${effect.effective.poison[1]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "ground"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.ground[0]}" href="type.html?q=${effect.not_effective.ground[0]}">${effect.not_effective.ground[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.ground[1]}" href="type.html?q=${effect.not_effective.ground[1]}">${effect.not_effective.ground[1]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.ground[0]}" href="type.html?q=${effect.effective.ground[0]}">${effect.effective.ground[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.ground[1]}" href="type.html?q=${effect.effective.ground[1]}">${effect.effective.ground[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.ground[2]}" href="type.html?q=${effect.effective.ground[2]}">${effect.effective.ground[2]}</a></p>
        <p class="type-list"><a class="${effect.effective.ground[3]}" href="type.html?q=${effect.effective.ground[3]}">${effect.effective.ground[3]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p class="type-list"><a class="${effect.immune.ground[0]}" href="type.html?q=${effect.immune.ground[0]}">${effect.immune.ground[0]}</a></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "flying"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.flying[0]}" href="type.html?q=${effect.not_effective.flying[0]}">${effect.not_effective.flying[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.flying[1]}" href="type.html?q=${effect.not_effective.flying[1]}">${effect.not_effective.flying[1]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.flying[0]}" href="type.html?q=${effect.effective.flying[0]}">${effect.effective.flying[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.flying[1]}" href="type.html?q=${effect.effective.flying[1]}">${effect.effective.flying[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.flying[2]}" href="type.html?q=${effect.effective.flying[2]}">${effect.effective.flying[2]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p class="type-list"><a class="${effect.immune.flying[0]}" href="type.html?q=${effect.immune.flying[0]}">${effect.immune.flying[0]}</a></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "psychic"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.psychic[0]}" href="type.html?q=${effect.not_effective.psychic[0]}">${effect.not_effective.psychic[0]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.psychic[0]}" href="type.html?q=${effect.effective.psychic[0]}">${effect.effective.psychic[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.psychic[1]}" href="type.html?q=${effect.effective.psychic[1]}">${effect.effective.psychic[1]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p class="type-list"><a class="${effect.immune.psychic[0]}" href="type.html?q=${effect.immune.psychic[0]}">${effect.immune.psychic[0]}</a></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "bug"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.bug[0]}" href="type.html?q=${effect.not_effective.bug[0]}">${effect.not_effective.bug[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.bug[1]}" href="type.html?q=${effect.not_effective.bug[1]}">${effect.not_effective.bug[1]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.bug[2]}" href="type.html?q=${effect.not_effective.bug[2]}">${effect.not_effective.bug[2]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.bug[0]}" href="type.html?q=${effect.effective.bug[0]}">${effect.effective.bug[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.bug[1]}" href="type.html?q=${effect.effective.bug[1]}">${effect.effective.bug[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.bug[2]}" href="type.html?q=${effect.effective.bug[2]}">${effect.effective.bug[2]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "rock"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p class="type-list"><a class="${effect.not_effective.rock[0]}" href="type.html?q=${effect.not_effective.rock[0]}">${effect.not_effective.rock[0]}</a></p>
        <p class="type-list"><a class="${effect.not_effective.rock[1]}" href="type.html?q=${effect.not_effective.rock[1]}">${effect.not_effective.rock[1]}</a></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.rock[0]}" href="type.html?q=${effect.effective.rock[0]}">${effect.effective.rock[0]}</a></p>
        <p class="type-list"><a class="${effect.effective.rock[1]}" href="type.html?q=${effect.effective.rock[1]}">${effect.effective.rock[1]}</a></p>
        <p class="type-list"><a class="${effect.effective.rock[2]}" href="type.html?q=${effect.effective.rock[2]}">${effect.effective.rock[2]}</a></p>
        <p class="type-list"><a class="${effect.effective.rock[3]}" href="type.html?q=${effect.effective.rock[3]}">${effect.effective.rock[3]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune to anything.</u></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "ghost"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p><u>Not weak against anything.</u></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.ghost[0]}" href="type.html?q=${effect.effective.ghost[0]}">${effect.effective.ghost[0]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p class="type-list"><a class="${effect.immune.ghost[0]}" href="type.html?q=${effect.immune.ghost[0]}">${effect.immune.ghost[0]}</a></p>
        <p class="type-list"><a class="${effect.immune.ghost[1]}" href="type.html?q=${effect.immune.ghost[1]}">${effect.immune.ghost[1]}</a></p>`;
        immune.innerHTML = immuneto;
    }else if (res == "dragon"){
        let weak = document.querySelector('.weak');
        let not_effective = `<p><u>Not weak against anything.</u></p>`;
        weak.innerHTML = not_effective;

        let strong = document.querySelector('.strong');
        let effective = `<p class="type-list"><a class="${effect.effective.dragon[0]}" href="type.html?q=${effect.effective.dragon[0]}">${effect.effective.dragon[0]}</a></p>`;
        strong.innerHTML = effective;

        let immune = document.querySelector('.immune');
        let immuneto = `<p><u>Not immune against anything.</u></p>`;
        immune.innerHTML = immuneto;
    }
})