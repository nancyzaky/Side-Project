import React from 'react';

function Background() {
  var bgColorArray = [
      'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/1254736/pexels-photo-1254736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/2443590/pexels-photo-2443590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
      'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=768&w=1024',
    ],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

  document.body.style.backgroundImage = 'url(' + selectBG + ')';

  //   function randomBG() {
  //     const randomNum = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  //     console.log(
  //       `https://images.pexels.com/photos/${randomNum}/pexels-photo-${randomNum}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  //     );
  //     return `https://images.pexels.com/photos/{randomNum}/pexels-photo-{randomNum}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
  //   }
  //   randomBG();

  return <div></div>;
}

export default Background;
