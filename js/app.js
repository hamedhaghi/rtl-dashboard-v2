$('document').ready(function () {
    expand();
    alert_close_up();
    keep_submenu_focused_on_load();
});

function keep_submenu_focused_on_load() {
    let element = $('.sidebar ul li.menu') || '';
    let exists = false;
    let li = '';
    let ul = '';
    let a = '';
    if (element.length <= 0) {
        return true;
    }
    $(element).each(function (index, value) {
        if ($(value).find('ul li').hasClass('focus')) {
            li = $(value);
            ul = $(value).find('ul');
            a = $(value).find('a');
            exists = true;
            return false;
        }
    });
    if(exists){
        $(li).css("background-color", "rgba(33, 48, 75, 0.89)");
        $(ul).addClass('show');
        $(a).find('i.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
    }





}

function expand() {
    $('.menu a').on("click", function () {
        let a = $(this);
        let i = $(a).find('i.menu-arrow');
        if ($(i).hasClass('fa-angle-right')) {
            collapse();
            $(i).removeClass('fa-angle-right');
            $(i).addClass('fa-angle-down');
            $(a).parent().css("background-color", "rgba(33, 48, 75, 0.89)");
        } else {
            collapse();
            $(i).removeClass('fa-angle-down');
            $(i).addClass('fa-angle-right');
            $(a).parent().css("background-color", "");
        }

    })
}

function collapse() {
    let element = $('.sidebar ul li.menu') || '';
    if (element.length <= 0) {
        return true;
    }
    $(element).each(function (index, value) {
        let a = $(value).find('a');
        let i = $(a).find('i.menu-arrow');
        $(i).removeClass('fa-angle-down');
        $(i).addClass('fa-angle-right');
        $(a).parent().css("background-color", "");
        $('.collapse').collapse('hide');

    });
}

function alert_close_up() {
    if ($(".alert").length > 0) {
        //$(".alert").fadeOut(7000);
        $('.alert').delay(7000).slideUp(500);
    }
}



