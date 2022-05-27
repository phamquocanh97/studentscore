$(document).ready(function() {
    //tạo đối tượng để lưu tên và điểm số của sinh viên
    var testCore = {
        name: "",
        math: 0,
        physical: 0,
        chemistry: 0,


    }



    var i = 0;
    $('#nhap').click(function() {

        testCore.name = $('#name').val();
        testCore.math = $('#math').val();
        testCore.physical = $('#physical').val();
        testCore.chemistry = $('#chemistry').val();
        if (testCore.name == "" || testCore.math == "" || testCore.physical == "" || testCore.chemistry == "") {
            if (testCore.name == "") {
                $('.erro_name').html('Bạn vui lòng nhập tên');
                $('.erro_name').css('display', 'block');
            } else {
                $('.erro_name').css('display', 'none');
            }
            if (testCore.math == "") {
                $('.erro_math').html('Bạn vui lòng nhập điểm toán');
                $('.erro_math').css('display', 'block');
            } else {
                $('.erro_math').css('display', 'none');
            }
            if (testCore.physical == "") {
                $('.erro_physical').html('Bạn vui lòng nhập điểm lý');
                $('.erro_physical').css('display', 'block');
            } else {
                $('.erro_physical').css('display', 'none');
            }
            if (testCore.chemistry == "") {
                $('.erro_chemistry').html("Bạn vui lòng nhập điểm hóa");
                $('.erro_chemistry').css('display', ' block');

            } else {
                $('.erro_chemistry').css('display', 'none');
            }
        } else {
            i++;
            $('.erro_find').css('display', 'none');
            $('.erro_masv').css('display', 'none');
            $('.erro_name').css('display', 'none');
            $('.erro_math').css('display', 'none');
            $('.erro_physical').css('display', 'none');
            $('.erro_chemistry').css('display', 'none');

            $('table').append($('<tr>')

                .append($('<td>').append(i))
                .append($('<td>').append(testCore.name))
                .append($('<td>').append(testCore.math))
                .append($('<td>').append(testCore.physical))
                .append($('<td>').append(testCore.chemistry))
                .append($('<td>').append('?'))

            )

            $('form').trigger('reset');

        }


    });
    $('#tinhDiemTB').click(function() {
        $('tr').each(function() {
            testCore.math = parseFloat($(this).children('td').eq(2).html());
            testCore.physical = parseFloat($(this).children('td').eq(3).html());
            testCore.chemistry = parseFloat($(this).children('td').eq(4).html());
            var diemTB = ((testCore.math + testCore.physical + testCore.chemistry) / 3).toFixed(1);
            $(this).children('td').eq(5).html(diemTB);
        });

    });

    $('#xacDinhHSG').click(function() {
        $('tr').each(function() {
            if (parseFloat($(this).children('td').eq(5).html()) >= 8) {
                $(this).children('td').css('color', 'red');
            }
        });

    });

    $('#remove').click(function() {
        $('.erro_find').css('display', 'none');
        testCore.name = $('#name').val();
        if (testCore.name == "") {
            $('.erro_name').html('Bạn vui lòng nhập tên sinh viên cần xóa');
            $('.erro_name').css('display', 'block');
        } else {
            $('.erro_name').css('display', 'none');
            $('tr').each(function() {

                if (testCore.name == $(this).children('td').eq(1).html()) {
                    $(this).remove();
                    $('.erro_find').html('Xóa thành công sinh viên');
                    $('.erro_find').css('display', 'block');
                    return false;
                } else {
                    $('.erro_find').html('không tìm thấy sinh viên');
                    $('.erro_find').css('display', 'block');
                }

            });

        }


    });

    $('#modify1').click(function() {
        $('tr').each(function() {
            testCore.masv = $(this).children('td').eq(1).html();
            testCore.name = $(this).children('td').eq(2).html();
            testCore.math = $(this).children('td').eq(3).html();
            testCore.physical = $(this).children('td').eq(4).html();
            testCore.chemistry = $(this).children('td').eq(5).html();
            $('#masv').val(testCore.masv);
            $('#name').val(testCore.name);
            $('#math').val(testCore.math);
            $('#physical').val(testCore.physical);
            $('#chemistry').val(testCore.chemistry);

        });
    });

})




function newFunction() {
    var img1 = "<img src=",
        image;
    /modify.png" alt="modify">"/;
}