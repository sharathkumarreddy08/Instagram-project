var random=Math.floor(Math.random()*12+1)
document.querySelector('.numOfPosts').innerHTML=random;
var randomFollwers=Math.floor(Math.random()*10000+1)
document.querySelector('.numOfFollowers').innerHTML=randomFollwers;
var randomFollowing=Math.floor(Math.random()*50+1)
document.querySelector('.numOfFollowing').innerHTML=randomFollowing;
fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user=data.results[0];
        //console.log(user)
        document.querySelector('.profileName').innerHTML=user.name.first
        document.querySelector('.bioName').innerHTML=user.name.first+' '+user.name.last
        document.querySelector('.profilePicture').src=user.picture.medium
        for(let i=0;i<random;i++){
          let img=document.createElement('img')
          img.src='https://picsum.photos/90'+i;
          document.querySelector('.posts').append(img);
        }
    })
});