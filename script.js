const characters = document.querySelectorAll(".character-item");
const stories = document.querySelectorAll(".story-item");
let characterIndex = 0;

function findIndex(target, object) {
  for (let index = 0; index < object.length; index++) {
    if (object[index] == target) {
      console.log(object[index]);
      return index;
    }
  }
}

function ChangeActive(index, object) {
  for (let index = 0; index < object.length; index++) {
    object[index].classList.remove("active");
  }
  characterIndex = index;

  object[characterIndex].classList.add("active");
}

characters.forEach((el) => {
  el.addEventListener("click", function (event) {
    ChangeActive(
      findIndex(event.target.parentElement.parentElement, characters),
      characters
    );
  });
});

stories.forEach((el) => {
  el.addEventListener("click", function (event) {
    ChangeActive(findIndex(event.target, stories), stories);
  });
});
