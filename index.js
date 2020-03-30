function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
   let info = $('.employeeform').find('input[name="name"]').val()
   return info
}
function addNewElementAsLi(){
let list = retrieveEmployeeInformation()
$('.employee-list').append(`<li>${list}</li>`)
}
function addNewLiOnClick(){
    document.querySelector('form').addEventListener('submit', function(event){
    addNewElementAsLi()
    resetInput()
    })
}


function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}
