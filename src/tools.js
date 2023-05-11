//const cible = document.querySelector("app");
//const cible = document.body;

//const div = document.createElement("div");
class CreateTarget {
  constructor(target, props) {
    this.target = target;
    this.props = props;
  }
  create() {
    const cible = document.createElement(this.target);

    cible.classList.add("box");
    document.body.append(cible);
  }
  delete() {
    this.target.remove();
  }
}

function afficher(target, message) {
  const cible = document.querySelector(target);
  cible.innerText = message;
}

export { CreateTarget, afficher };
