

  function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('files');
  const url = 'https://launchpadapi.mediafly.com/3/items?productId=201458d47426431b827dd10b7448a0ab&accessToken=468c740cedfb464caf6064ee28dcaebe&accessType=view';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    //title, thumbnail, description, created date, modified date, and modified by
    let files = data.response.items;
    return files.map(function(file) {
      let rootli = createNode('li')
          roottitle = createNode('span')
          nestedul = createNode ('ul')
          li = createNode('li'),
          title = createNode('div')
          thumbnail = createNode('img'),
          description = createNode('span');
          div = createNode('div');
      roottitle.innerHTML = `<h2>${file.title}<h2>` 
      description.className = "metadata"
      thumbnail.src = file.thumbnail.url;
      title.innerHTML = `<strong>${file.title}</strong>` 
//TODO: Make dates pretty
      description.innerHTML = `${file.description} <br />  Created: ${file.created} <br /> Modified: ${file.modified}  by ${file.modifiedBy}`
      




    })
  })

$('myFiles').click(function () {
 $(nav).show();   
});
$(function(){

  var nav = $("nav"),
      navTitle = nav.children().first(),
      navTitleLabel = navTitle.text(),
      mainList = navTitle.next(),
      subLevels = mainList.find("ul"),
      hiddenClass = "hidden";

  nav.addClass("js");
  mainList.find("a:last-child").addClass("files");
  subLevels.addClass(hiddenClass);

  navTitle.wrap($("<div/>")).before($("<a/>", {
    href: "#",
    className: hiddenClass,
    click: function(e){
      var $this = $(this),
          activeList = subLevels.filter(":visible:last"),
          activeListParents = activeList.parents("ul");
      navTitle.text($this.text());
      if(activeListParents.length > 2)
        $this.text(activeListParents.eq(1).prev().text());
      else if (activeListParents.length > 1)
        $this.text(navTitleLabel)
      else
        $this.addClass(hiddenClass).empty();
      setTimeout(
        function(){
          activeList.addClass(hiddenClass);
        }, slideDuration - 100
      );
      mainList.css("left", parseInt(mainList.css("left")) + navWidth + "px");
      e.preventDefault();
    }
  }));

  subLevels.prev().wrap($("<a/>", {
      href:"#",
      click: function(e){
        var $this = $(this);
        backArrow.removeClass(hiddenClass).text(navTitle.text());
        navTitle.text($this.text());
        $this.next().removeClass(hiddenClass);
        mainList.css("left", parseInt(mainList.css("left")) - navWidth + "px");
        e.preventDefault();
      }
    }));

  var backArrow = navTitle.prev(),
      navWidth = nav.width(),
      firstSubLevel = subLevels.eq(0),
      docStyle = document.documentElement.style,
      slideDuration = 0,
      timingRatio = 1000;

  if(docStyle.WebkitTransition !== undefined)
    slideDuration = parseFloat(
      firstSubLevel.css("-webkit-transition-duration")
    ) * timingRatio;

  if(docStyle.MozTransition !== undefined)
    slideDuration = parseFloat(
      firstSubLevel.css("-moz-transition-duration")
    ) * timingRatio;

  if(docStyle.OTransition !== undefined)
    slideDuration = parseFloat(
      firstSubLevel.css("-o-transition-duration")
    ) * timingRatio;

});




  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   
