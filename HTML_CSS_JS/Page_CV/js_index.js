const textanim = document.getElementById('textanim');

new Typewriter(textanim, {
    loop : true,
    deleteSpeed : 20
})
.changeDelay(45)
.typeString('Moi c\'est José')
.pauseFor(400)
.typeString(', Dev <strong style="font-weight : bolder; color: #d7d7d7;">Full-Stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.changeDelay(60)
.typeString('<span style="color : red">HTML</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color : #44ca20">CSS</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color : yellow">JS</span> !')
.pauseFor(1000)
.start();
