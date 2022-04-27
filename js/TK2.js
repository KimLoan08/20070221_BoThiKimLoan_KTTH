$(document).ready(() => {
    var i = 2;

    $('#btnDK').click(() => {
        $("#myModal").modal();
    })

    function kiemTraMaSV() {
        const mauKT = /^[1-9]{1}[0-9]{9}$/;
        const chuoi = $('#txtMaSV').val();
        if (mauKT.test(chuoi) == true) {
            console.log('bạn nhập mã sinh viên đúng');
            return true;
        } else {
            console.log('bạn nhập mã sinh viên sai hoặc để trống');
            return false
        }

        return true;
    }
    $('#txtMaSV').blur(kiemTraMaSV);

    function kiemTraHoTen() {
        const mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        const chuoi = $('#txtHT').val();
        if (mauKT.test(chuoi) == true) {
            console.log('bạn nhập họ tên đúng');
            return true;
        } else {
            console.log('bạn nhập họ tên sai hoặc để trống');
            return false
        }

        return true;
    }
    $('#txtHT').blur(kiemTraHoTen);

    function kiemTraNTG() {
        if ($('#txtDate').val() == '') {
            console.log('không để trống')
            return false;
        }
        const today = new Date();
        const ntt = new Date($('#txtDate').val());
        if (today > ntt) {
            console.log('phải sau ngày hiện tại 7 ngày')
            return false;
        } else {
            console.log('bạn nhập ngày tham gia đúng');
            return true;
        }

        return true;
    }
    $('#txtDate').blur(kiemTraNTG);

    function kiemTraEmail() {
        const mauKT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        const chuoi = $('#txtEmail').val();
        if (mauKT.test(chuoi) == true) {
            console.log('bạn nhập email đúng');
            return true;
        } else {
            console.log('bạn nhập email sai hoặc để trống');
            return false
        }

        return true;
    }
    $('#txtEmail').blur(kiemTraEmail);

    function kiemTraSDT() {
        const mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        const chuoi = $('#txtSDT').val();

        if (mauKT.test(chuoi) == true) {
            console.log('bạn nhập số điện thoại đúng');
            return true;
        } else {
            console.log('bạn nhập số điện thoại sai hoặc để trống');
            return false;
        }

        return true;
    }
    $('#txtSDT').blur(kiemTraSDT);

    $('#btnSubDK').click(() => {
        if (kiemTraMaSV() == true && kiemTraHoTen() == true && kiemTraEmail() == true && kiemTraNTG() == true && kiemTraSDT() == true) {
            row = '<tr>';
            row += '<td>' + (i++) + '</td>';
            row += '<td>' + $('#txtMaSV').val() + '</td>';
            row += '<td>' + $('#txtHT').val() + '</td>';
            row += '<td>' + $('#txtDate').val() + '</td>';
            row += '<td>' + $('#txtEmail').val() + '</td>';
            row += '<td>' + $('#txtSDT').val() + '</td>';
            $('tbody').append(row);
            $('#myModal').modal('hide');
        }
    })
})