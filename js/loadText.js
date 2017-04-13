main();

function main() {
    var editables = document.getElementsByClassName("editable")

    // console.log(editables);

    for (var i = 0; i < editables.length; i++) {
        // console.log(getId(editables[i].id));
        var sectionId = getSection(editables[i].id);
        var id = getId(editables[i].id);
        if (id == "modalContainer") {
            createModal(sectionId, id, editables[i]);

        } else if (id == "carousel") {

            createCarousel(sectionId, id, editables[i]);

        } else {
            if (jsonData[sectionId] != null) {
                var section = jsonData[sectionId]

                if (section[id] != null) {


                    if (editables[i].tagName == "IMG") {
                        editables[i].src = section[id];
                    }else if(editables[i].tagName == "A" && editables[i].id == "title button"){
                        // console.log(editables[i]);
                        editables[i].setAttribute("href", "#portfolio");
                        editables[i].style.background = "#c1d72d";
                        editables[i].style.borderColor = "#c1d72d";
                        // console.log(editables[i].attributes["href"]);
                        editables[i].innerHTML = section[id];
                    }
                    else {
                        editables[i].innerHTML = section[id];
                    }

                }
            }
        }

    }
}

function createCarousel(sectionId, id, editable) {
    var carouselSection = document.getElementById("carousel-generic");

    // console.log(editable.firstElementChild.innerHTML);
    // console.log(jsonData[sectionId].images)
    var dots = "";
    var imageDivs = "";
    var images = jsonData[sectionId].images;

    for (var i = 0; i < images.length; i++) {
        if (i == 0) {
            dots += `<li data-target="#carousel-generic" data-slide-to="0" class="active"></li>`;
            imageDivs += `
            <div class="item active">
                <img class="fill" src="` + images[i] + `" alt="...">
                <div class="carousel-caption">
                    <!-- <h3>Caption Text</h3> -->
                </div>
            </div>
            `
        } else {
            dots += `<li data-target="#carousel-generic" data-slide-to="` + i + `"></li>`;
            imageDivs += `
            <div class="item">
                <img class="fill" src="` + images[i] + `" alt="...">
                <div class="carousel-caption">
                    <!-- <h3>Caption Text</h3> -->
                </div>
            </div>
            `
        }
    }

    editable.firstElementChild.innerHTML = `
    <ol class="carousel-indicators">
        ` + dots + `
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
        ` + imageDivs + `
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#carousel-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
    `;

}

function createModal(sectionId, id, editable) {

    // editable.innerHTML = "";

    var modalSection = document.getElementById("modalSection");
    // console.log(modalSection.innerHTML);



    var columns = "col-md-12 col-sm-12";
    if (jsonData[sectionId].columns == "3") {
        columns = "col-md-4 col-sm-6";
    } else if (jsonData[sectionId].columns == "4") {
        columns = "col-md-3 col-sm-6";
    } else if (jsonData[sectionId].columns == "2") {
        columns = "col-md-6 col-sm-6";
    } else if (jsonData[sectionId].columns == "5") {
        columns = "col-md-2 col-sm-6";
    } else if (jsonData[sectionId].columns == "1") {
        columns = "col-md-12 col-sm-12";
    }

    for (var i = 0; i < jsonData[sectionId].modals.length; i++) {
        modal = jsonData[sectionId].modals[i]

        console.log();
        var link;
        var image = modal.image;
        var title = modal.title;



        var price = modal.price;
        var extraText = modal.extraText;
        var element;

        var items = "";
        var link = "portfolio_" + sectionId + "_" + i;

        if (jsonData[sectionId].noLink == "false") {
        for (var j = 0; j < modal.items.length; j++) {
            if (isArray(modal.items[j])) {

                subModal = modal.items[j];
                items += "<ul>";
                for (var k = 0; k < subModal.length; k++) {
                    items += "<li>" + subModal[k] + "</li>";
                }
                items += "</ul>";
            } else {
                items += "<li>" + modal.items[j] + "</li>\n";
            }
        }

            var element = `<div class=\"` + columns + ` portfolio-item">
                <a href="#` + link + `" class="portfolio-link" data-toggle="modal">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src="` + image + `" class="img-responsive" alt="">
                    <div class="portfolio-caption">
                        <h4>` + title + `</h4>
                        <p class="text-muted">` + price + `</p>
                    </div>
                </a>
            </div>
            `
            var modalElement = `<div class="portfolio-modal modal fade" id="` + link + `" tabindex="-1" role="dialog" aria-hidden="true">
                                  <div class="modal-dialog">
                                      <div class="modal-content">
                                          <div class="close-modal" data-dismiss="modal">
                                              <div class="lr">
                                                  <div class="rl">
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="container">
                                              <div class="row">
                                                  <div class=".col-lg-1 col-lg-offset-2">
                                                      <div class="modal-body">
                                                          <h2>` + title + `</h2>
                                                          <p class="item-intro text-muted">` + price + "</br>" + extraText + `</p>
                                                          <ul>
                                                          ` + items + `
                                                          </ul>

                                                          <img class="img-responsive img-rounded" src="` + image + `" alt="">
                                                          <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Luk</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>`;
            modalSection.innerHTML += modalElement;
        } else {
            var element = `<div class=\"` + columns + ` portfolio-item">
                    <img src="` + image + `" class="img-responsive" alt="">
                    <div class="portfolio-caption">
                        <h4>` + title + `</h4>
                        <p class="text-muted">` + price + `</p>
                    </div>
            </div>
            `
        }
        // for (jj = 0; jj < modal.items)
        editable.innerHTML += element;
    }
}

function getSection(id) {
    return id.split(" ")[0]
}

function getId(id) {
    return id.split(" ")[1]
}

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}
