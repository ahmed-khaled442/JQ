// to open side nav-bar
$("#open").click(function () {
  let sidewidth = $("#setion").outerWidth();
  let leftsetion = $("#setion").offset().left;
  console.log(leftsetion);
  if (leftsetion == 0) {
    $("#setion").css({ left: `-${sidewidth}px`, transition: "1s all" });
  } else {
    $("#setion").css({ left: `0px`, transition: "1s all" });
  }
});

// to show and hide pragraf
let singet = $(".up");
console.log(singet);
singet.click(function () {
  console.log("hi");
  console.log($(".visible"));
  console.log(this);

  $(this).next().toggle(1000);
  $(".visible").not($(this).next()).hide(1000);
});

//to count down
let countDownt = new Date("Oct 30,2024 23:59:59 ").getTime();
console.log(countDownt);
let counter = setInterval(() => {
  let dayNown = new Date().getTime();

  let datediff = countDownt - dayNown;

  let day = Math.floor(datediff / (1000 * 60 * 60 * 24));
  $("#days").html(day + "day");

  let houres = Math.floor(
    (datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  $("#houres").html(houres + "houres");

  let min = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));

  $("#minutes").html(min + "min");
  let secound = Math.floor((datediff % (1000 * 60)) / 1000);

  $("#secound").html(secound + "sec");
}, 1000);

// to scroll smoth to section
let maxcarte = 100;
$("#max").keyup(function () {
  console.log($(this).val().length);
  let numberlength = $(this).val().length;
  let eqal = maxcarte - numberlength;
  console.log(eqal);

  if (eqal <= 0) {
    $("#text").text("your available character finished Characyer Reamining");
  } else {
    $("#mines").html(eqal);
  }
});

console.log($(".nav-link"));
$(".nav-link").click(function () {
  console.log(this);
  let sectionid = $(this).attr("href");
  console.log(sectionid);
  let setiontop = $(sectionid).offset().top;
  console.log(setiontop);
  $("html,body").animate(
    {
      scrollTop: setiontop,
    },
    2000
  );
});
