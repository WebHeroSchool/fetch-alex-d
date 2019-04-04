window.onload = function () {
    
    var title = document.title;
    console.log(title);
    var name = document.querySelector('.name');
    console.log(name);
    var photoWrapper = document.querySelector('.photoWrapper');
    var info = document.querySelector('.info');
    
    var searchParams = new URLSearchParams(window.location.search);
    var login = searchParams.get('username');
    
    //var url = 'https://api.github.com/users/6thSence';
    var url = 'https://api.github.com/users/' + login;;
    
    fetch(url)
        .then(response => response.json())
        .then(user => {
            if (user.name) {
                title.innerHTML = user.name;
                name.innerHTML = user.name;
                
                if(user.bio === null){
                    info.innerHTML = 'информаця о пользователе недоступна';
                }else{
                    info.innerHTML = user.bio;
                }
    
                var photo = document.createElement('img');
                photo.setAttribute('alt', name);
                photo.setAttribute('src', user.avatar_url);            
                photoWrapper.appendChild(photo);
                
                var link = document.createElement('a');
                link.innerHTML = 'Show profile';
                link.setAttribute('href', user.html_url);
                info.appendChild(link);
            }
        })
        .catch(error => console.log(error));
    
    }