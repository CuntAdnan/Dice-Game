//the link of the images to be displayed upon the game
const image1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABAQED09PTs7Oy5ubk7OzsjIyOTk5P8/PyXl5fx8fHl5eWrq6vp6em0tLTJycl1dXXPz88XFxdubm5/f380NDTd3d0rKyvX19eKioqnp6efn58eHh6CgoK/v79asAi8AAADTklEQVR4nO3c2XLiMBBAUQTYQMJitpCFhP//yxkqNZOUN8mWrG6Zex/zoj6ViY2B6YkZexPpAQYPYfohTD+E6Ycw/RCmH8L0Q7jIp7rLFx7C/W09SaF1tu8l3KykJ+/QatNZ+C49c+feuwkP0vP26NBBeJxLT9ur+dFZmCbwL9FVmOI/0e/q/qHWCNO7yPxUc7mpEUpP6ZWL8EN6SK8+HIQp3eirzezCk/SMnp2swkx6RM8yq3ArPaJnW6tQekLvbMKF9IDelZ8Xy8JcekDvcotwKj2gd1OE0gN6hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItSfqHC2LrJdVqxnQx4iJyzOL/9PeTkXg50jJJwtTbnlQL9JGeFTxXfvaZCzJISXpgUri8sApwkIm9eOGLMJf1x8YfUv8HfL4OdFF7YDByDGFu4sQGN2gU+MLLxYgcYEvtxEFtrWVN0L/J+r4wrr74Plwt4XowqrSyrqC/rqJqrQdh39V9DraVShIzDsIoeYwsJZGPJJI6bw7Cw8Bzw1pvDVWfga8NSIwmdnoDHP4Y6NKHzrIHwLd2xEYWXbT0sBNxtFFNpfdP8U8OV3RGHbk2+5gE/C/A75O+zQ+K+l478fjv81zQO8Lh3/s8X4nw8f4Bl//O/TjP+9tgd4v/QB3vN2eMAI/QEbnz3x+WGP2p4TQ3+0NuFzfL6L0bvRf5/mXrH/9Z2o/ei+E/Xd7JLtrrvsMtLvtcUKIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+E4xfm0gN6l1uEn9IDevdpEQZdbyBSBVT+wVZ6Qs+2VmHAbT8iVTYbVYQn6RE9O1mFZiU9o1fVVRxV4VV6SK+uDsK0r6Y1nOqPvqSn9OjLSRh0p1Hc6vY21W46SvWeWLkXNgqPc+lZezU/OguNOUhP26NDPaVpH1f4nSND17RDpXnj2CalW/+qedNP2061/W3Q5QfBmt32LQrb1rhFPtVdblu25b4XL9UQph/C9EOYfgjTD2H6IUw/hOn3B8TlR6lUjaBgAAAAAElFTkSuQmCC';
const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqD6PlwHmA6rRzqvd4KwGUleBT2BgYgZPSql-LjZGRCyGR0y5iG_yK-mOtyTclvyXvyY&usqp=CAU';
const image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16jpMhtg0De8yiMMYnnNdu7DVnHgiNR3Bkwnsrt0XsXrpsn2J_Igac5aA0rU9EEKIPUM&usqp=CAU';
const image4 = 'data:image/png;base64,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';
const image5 = 'data:image/png;base64,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';
const image6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZF8jepy6XAu25i1eejPP_HriZ9ZAXZpX1ndzuiGZlU3w0XwbZNwR2SfcOxji3l_6mOM&usqp=CAU';

//the link of the images and the html elements..
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const heading = document.querySelector('h1');
const button = document.querySelector('button');
const p = document.querySelector('p');
const div = document.querySelector('.result');




const getResult = () => {


    let res1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let res2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(res1, res2);

    if (res1 === 1) {
        player1.setAttribute("src", image1);
    } else if (res1 === 2) {
        player1.setAttribute("src", image2);
    } else if (res1 === 3) {
        player1.setAttribute("src", image3);
    } else if (res1 === 4) {
        player1.setAttribute("src", image4);
    } else if (res1 === 5) {
        player1.setAttribute("src", image5);
    } else {
        player1.setAttribute("src", image6);
    }


    if (res2 === 1) {
        player2.setAttribute("src", image1);
    } else if (res2 === 2) {
        player2.setAttribute("src", image2);
    } else if (res2 === 3) {
        player2.setAttribute("src", image3);
    } else if (res2 === 4) {
        player2.setAttribute("src", image4);
    } else if (res2 === 5) {
        player2.setAttribute("src", image5);
    } else {
        player2.setAttribute("src", image6);
    }

    
   
    if (res1 === res2) {
      console.log("Due");
      heading.textContent="Due";         
    } else if (res2 > res1) {
        heading.textContent="player 2 won";
    } else {
        heading.textContent="player 1 won";

    }


}

button.addEventListener('keypress',getResult);