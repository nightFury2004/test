let levels = {
  1: {
    first: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
    second: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
  },
  2: {
    first: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
    second: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
  },
  3: {
    first: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
    second: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
  },
  4: {
    first: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
    second: {
      books: 6,
      lectures: 0,
      sections: 0,
      questions: 0,
    },
  },
};
// =============================================================================
let level = 1;
let mini_list = "books";
let term = "first";
// =============================================================================

function writeContent(lvl, menu_list, course) {
  let body = document.querySelector("body");

  let content = document.createElement("section");
  content.classList.add("content");

  let h1 = document.createElement("h1");
  h1.innerText = `level ${lvl}`;

  let container = document.createElement("div");
  container.classList.add("container");

  let miniList = document.createElement("div");
  miniList.classList.add("mini-list");

  let button1 = document.createElement("button");
  button1.innerText = "Lectures";
  let button2 = document.createElement("button");
  button2.innerText = "Sections";
  let button3 = document.createElement("button");
  button3.innerText = "Questions";
  let button4 = document.createElement("button");
  button4.innerText = "Books & Res";

  let bigList = document.createElement("div");
  bigList.classList.add("big-list");

  let termChoose = document.createElement("div");
  termChoose.classList.add("term-choose");

  let button_1 = document.createElement("button");
  button_1.innerText = "first";
  let button_2 = document.createElement("button");
  button_2.innerText = "second";

  let materials = document.createElement("div");
  materials.classList.add("materials");

  let extension = menu_list === "books"? "pdf": menu_list === "question"? "pdf":"mp4";

  for (let i = 1; i <= levels[lvl][course][menu_list]; i++) {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      `./levels/level_${lvl}/${menu_list}/${course}/${i}.${extension}`
    );
    element.innerText = `${i}.${extension}`;
    materials.appendChild(element);
  }

  // ===========================================
  miniList.appendChild(button1);
  miniList.appendChild(button2);
  miniList.appendChild(button3);
  miniList.appendChild(button4);
  termChoose.appendChild(button_1);
  termChoose.appendChild(button_2);
  bigList.appendChild(termChoose);
  bigList.appendChild(materials);
  container.appendChild(miniList);
  container.appendChild(bigList);
  content.appendChild(h1);
  content.appendChild(container);
  body.appendChild(content);
}
writeContent(level, mini_list, term);
// =============================================================================
let levelsList = document.querySelectorAll(".level-choose .levels .level");
