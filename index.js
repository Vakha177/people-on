window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/astros.json")
    .then((res) => {
      return res.json();
    })
.then((data) => {
        const countElement = document.getElementById("count");
        countElement.textContent = data.number;
        const tableElem = document.querySelector('table')
        for(let i = 0 ; i < data.people.length; i++) {
          const ul = document.createElement('tr')
          let li = document.createElement('td')
          let li2 = document.createElement('td')
          let li3= document.createElement('td')

          ul.append(li,li2,li3)
          li.textContent = i+1 
          li2.textContent = data.people[i].craft 
          li3.textContent = data.people[i].name
         tableElem.append(ul)
        }
      // ТВОЕ РЕШЕНИЕ

    })
    .catch(() => {
      const count = document.querySelector('#count')
      const tablerone = document.querySelector('table')
      const errorMessage = document.createElement('div')
      count.textContent('Ошибка')
      errorMessage.classList.add('error')
      errorMessage.textContent('Ошибка при запросе')
      tablerone.replaceWith(errorMessage)


      // ОБРАБОТКА ОШИБОК

    })
});