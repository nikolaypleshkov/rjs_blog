import React from "react";
import "./Cards.css";
function Cards() {
  return (
    <div class="container card-main-container">
      <div class="row card-row">
        <div class="col-md-4 card-col">
          <div class="card text-center min-card">
            <div class="card-body">
              <h5 class="card-title">Все още нямате група ?</h5>
              <p class="card-text">
                Можете да създадете група или да се включите във вече съществуваща такава
              </p>
              <a href="#" class="btn btn-primary">
                Намиране на група
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 ms-auto card-col-ms-auto">
          <div class="card text-center min-card">
            <div class="card-body">
              <h5 class="card-title">Започнете вашия блог сега</h5>
              <p class="card-text">
                Можете да създавате блогове, които се одобряват от нашите админи
              </p>
              <a href="#" class="btn btn-primary">
                Създаване на статия
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
