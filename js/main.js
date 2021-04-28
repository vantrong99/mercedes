//scroll effect
var s = skrollr.init();

/**
 * ẩn hiện dropdown menu trên nút share của nav
 */
var shareClick = 0;
document.getElementById("menu__share").addEventListener("click", function () {
    var width = window.innerWidth;
    if (width > 768) {
        document.querySelector(".dropdown__menu").style.visibility = "visible";
        return;
    }

    if (shareClick == 0) {
        document.querySelector(".dropdown__menu").style.height = "336px";
        shareClick = 1;
    } else {
        document.querySelector(".dropdown__menu").style.height = "0px";
        shareClick = 0;
    };
});

/**
 * hiệu ứng khi bấm navbar toggle của header
 */
var buttonCollapse = 1;
document.querySelector(".buttonCollapse").addEventListener("click", function () {
    if (buttonCollapse == 1) {
        document.querySelector(".movingNav").style.display = "none";
        buttonCollapse = 0;
    } else {
        document.querySelector(".movingNav").style.display = "block";
        buttonCollapse = 1;
    }
})

/**
 * hiệu ứng cho header khi window scroll
 */
var hiddenHeader = document.querySelector(".header");
var scrollValue = 0;

window.addEventListener("scroll", function () {
    if (buttonCollapse === 0) {
        return;
    }
    if (document.documentElement.scrollTop > scrollValue) {
        hiddenHeader.style.visibility = "hidden";
        hiddenHeader.style.transform = "translateY(-108px)";
        scrollValue = document.documentElement.scrollTop;
    } else {
        hiddenHeader.style.visibility = "visible";
        hiddenHeader.style.transform = "translateY(0px)";
        scrollValue = document.documentElement.scrollTop;
    }
});



/**
 * showmore buttom
 */

function hiddenItem() {
    var x = document.getElementsByClassName("hidden__item");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline-block";
    }
    var a = document.getElementsByClassName("new__button");
    a[0].style.display = "none";
}
function hiddenItem1() {
    var x = document.getElementsByClassName("hidden__item_1");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline-block";
    }
    var a = document.getElementsByClassName("new__button");
    a[1].style.display = "none";
}
function hiddenItem2() {
    var x = document.getElementsByClassName("hidden__item_2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline-block";
    }
    var a = document.getElementsByClassName("new__button");
    a[2].style.display = "none";
}