// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');

contentButton.addEventListener('click', function() {
  myName.innerHTML = "My name is bob";
  myHobby.innerHTML = "I like to skateboard in my free time and I also like to partake in math competitions as well as type races with my friends. In addition to all these I also like to play basketball and scroll through tik-tok. "
  myLocation.innerHTML = "I live Jamaica, which is in Queens, New York, which is in the United States, which on planet Earth, within the Milkly Way galaxy."
});
image1Button.addEventListener('click', function() {
  image.src = "https://img.freepik.com/free-vector/set-wild-animals_1308-29055.jpg";
});

image2Button.addEventListener("click", function() {
  image.src = "https://lumiere-a.akamaihd.net/v1/images/ct_mickeymouseandfriends_mickey_ddt-16970_4e99445d.jpeg?region=0,0,600,600&width=480"
});
image2Button.addEventListener('dblclick', function() {
  image.src = "https://live.staticflickr.com/4828/46056853325_366678d107_h.jpg"
});

// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.







// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
