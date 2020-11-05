'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () =>{
        const results = 
        ['ゆうかん','熱心','たのもしい','あっさり','さっぱり','つんとした','短気','いいかげん','おさない',
        'のんき',        '温和','気のいい','行動力のある','根気強い','器用','用心深い','強がり','生意気',
        'ずうずうしい','すばらしい','みりょくがある','言うことなし','二つとない','特色のある','望ましい',
        '予想どおり','身近','親しみのある','たしか','ゆたか','くらべものにならない','大げさ','かすか','わずか',
        'かろやか','かんぺき','さすが','せいけつ','きょうみ深い','ゆとりのある','重大','力強い','はげしい',
        'ささやか','単調','きつい','あらい','気味が悪い','あやしい','弱点','かた苦しい','どちらが――かというと',
        '――は、――をふくむ','――の点では――','に対して――は','もし――なら','まとめると','つまり――','例えば――',
        'たとえ――だとしても','――もよると','――かもしれない','――のはずだ','――にちがいない','気はずかしい','注意',
        'むちゅう','打ちこむ','期待','引きつけられる','心温まる','感動','関心をもつ','うかれる','がっかり','苦手',
        'にくい','なやむ','しぶしぶ','いい気がしない','おそれる','じれったい','心が動く','むねがいっぱいになる',
        'あっけにとられる','かたの力をぬく','頭をかかえる','うっとり','ぐっとくる','好む','親しむ','こいしい',
        'いたわる','ほこらしい','しんけん','はり切る','注目','思いこむ','こだわる','こりる','苦心','しんぼう',
        'こらえる','ふきげん','心が晴れる','心がはずむ','冷やあせをかく','はらを決める','気が遠くなる','気がすむ','気が重い',
        ]
        btn.textContent = results[Math.floor(Math.random() * results.length)];
    });
}
