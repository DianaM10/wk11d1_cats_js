// window.onload =function() {

  var addCat = function(li, li2, imagelink) {
    var newCat = createNewCat();
    var li = createNewLi(li);
    var li2 = createNewLi(li2);
    var image = createImage(imagelink);
    var cats = document.querySelector('#cats');
    cats.append(newCat);
    appendElements(cats, newCat, li, li2, image);
  }

  var createNewCat = function() {
    var newCat = document.createElement('ul');
    newCat.classList.add('cat');
    return newCat;
  };

  var createNewLi = function(details) {
    var li = document.createElement('li');
    li.innerText = details;
    return li;
  }

  var createImage = function(imagelink) {
    var image = document.createElement('img');
     image.src = imagelink;
     image.style.width = '500px';
     return image;
  }

  var appendElements = function(cats, newCat, li, li2, image) {
    newCat.appendChild(li);
    newCat.appendChild(li2);
    newCat.appendChild(image);
    cats.append(newCat);
  }

  var cats_array = [
      {li: "Name: Catbus",
      li2: "Fav food: Sushi",
      imagelink: "http://beforeitsnews.com/mediadrop/uploads/2014/24/cd5dd1ec97f0035788f3cf71f5c026ceab7edc38.jpg"
        },
      {li: "Name: Boba",
      li2: "Fav food: Sock Fluff",
      imagelink: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
        },
      {li: "Name: Barnaby",
      li2: "Fav food: Tuna",
      imagelink: "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"
        },
      {li: "Name: Max",
      li2: "Fav food: Whiskas Temptations",
      imagelink: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
        }
  ]

  var init =function() {
    for(var i = 0; i < cats_array.length; i++) {
      addCat(cats_array[i].li, cats_array[i].li2, cats_array[i].imagelink);
    }
  }
  
  window.onload = init;

  // }

    // addCat("Name: Catbus", "Fav Food: Sushi", "http://beforeitsnews.com/mediadrop/uploads/2014/24/cd5dd1ec97f0035788f3cf71f5c026ceab7edc38.jpg")

  // }

  // var newCat = document.createElement('ul');
  // newCat.classList.add('cat');

  // var li = document.createElement('li');
  // li.innerText = "Name: Catbus";

  // var li2 = document.createElement('li');
  // li2.innerText = "Fav food: Sushi";

  // var image = document.createElement('img');
  // image.src = "http://beforeitsnews.com/mediadrop/uploads/2014/24/cd5dd1ec97f0035788f3cf71f5c026ceab7edc38.jpg";
  // image.style.width = '500px';

  // newCat.appendChild(li);
  // newCat.appendChild(li2);
  // newCat.appendChild(image);

  // var cats = document.querySelector('#cats');

  // cats.append(newCat);

  
  
