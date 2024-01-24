class Grid {
  rows: any[];
  grid: HTMLDivElement | null;

  n_rows = 3;
  n_size = 5;

  constructor() {
    this.rows = [];
    this.grid = document.getElementsByClassName("photos__grid")[0];
    this.grid.innerHTML = "";

    for (let i = 0; i < this.n_rows; i++) {
      let row = document.createElement("div");
      row.classList.add("photos__row");

      for (let j = 0; j < this.n_size; j++) {
        let cell = document.createElement("div");
        cell.classList.add("photos__cell");

        let text = document.createElement("div");
        text.classList.add("photos__cell__facts");

        let h5 = document.createElement("h5");
        h5.innerHTML = "Andrea Munde";

        let p = document.createElement("p");
        p.innerHTML =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident alias molestiae. Commodi est, tempora vel dolores ad laboriosam temporibus!";

        text.appendChild(h5);
        text.appendChild(p);

        let img = document.createElement("img");
        img.src = "./img/andrea.jpg";
        cell.appendChild(text);
        cell.appendChild(img);
        row.appendChild(cell);
      }

      this.grid?.appendChild(row);
    }
  }
}

export default Grid;
