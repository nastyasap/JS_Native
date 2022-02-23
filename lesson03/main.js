const sm = document.getElementById('small')
const onClickHandler_1 = () => alert('yo!')
const onClickHandler_2 = () => alert('hey!')
const onClickHandler_3 = (e) => console.dir(e.currentTarget)

/*sm.onclick = onClickHandler_1
sm.onclick = null //отменяет (перезатирает)*/

sm.addEventListener('click',onClickHandler_2)
//sm.addEventListener('click',onClickHandler_1)
sm.removeEventListener('click', onClickHandler_2)

//sm.addEventListener('click', ()=>alert('hey!'))
sm.removeEventListener('click', ()=>alert('hey!'))
//не получится, т.к. новая ссылка не сотрется

const md = document.getElementById('medium')
const bg = document.getElementById('big')
sm.addEventListener('click', onClickHandler_3)
md.addEventListener('click', onClickHandler_3)
bg.addEventListener('click', onClickHandler_3)
