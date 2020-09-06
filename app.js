function calBMR() {
    var weight = parseFloat(document.bmrform.weight.value);

    var height = parseFloat(document.bmrform.height.value);

    var age = parseInt(document.bmrform.age.value);

    if (document.getElementById("Male").checked == true) {
        var bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else if (document.getElementById("Female").checked == true) {
        var bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else {
        alert("กรุณาเลือกเพศ")
    }

    document.bmrform.bmr.value = Math.round(bmr * 100) / 100.0;

    // return bmr;
}

function calTDEE_1(bmr) {
    tdee = bmr * 1.2
    document.bmrform.tdee.value = Math.round(tdee * 100) / 100.0;
}

function calTDEE_2(bmr) {
    tdee = bmr * 1.375
    document.bmrform.tdee.value = Math.round(tdee * 100) / 100.0;
}

function calTDEE_3(bmr) {
    tdee = bmr * 1.55
    document.bmrform.tdee.value = Math.round(tdee * 100) / 100.0;
}

function calTDEE_4(bmr) {
    tdee = bmr * 1.725
    document.bmrform.tdee.value = Math.round(tdee * 100) / 100.0;
}

function calTDEE_5(bmr) {
    tdee = bmr * 1.9
    document.bmrform.tdee.value = Math.round(tdee * 100) / 100.0;
}


function calBMI() {
    var weight = parseFloat(document.bmiform.weight.value);

    var height = parseFloat(document.bmiform.height.value);

    var bmi = weight / (height / 100 * height / 100);

    document.bmiform.bmi.value = Math.round(bmi * 100) / 100.0;

    if(bmi < 18.50)
    {
        document.getElementById("table_1").innerHTML = "<tr  class=\"table-success\"><td>น้อยกว่า 18.50</td><td>น้ำหนักน้อย / ผอม</td><td>มากกว่าคนปกติ</td></tr><tr><td>ระหว่าง 18.50 - 22.99</td><td>ปกติ (สุขภาพดี)</td><td>เท่าคนปกติ</td></tr><tr><td>ระหว่าง 23 - 24.99</td><td>ท้วม / โรคอ้วนระดับ 1</td><td>อันตรายระดับ 1</td></tr><tr><td>ระหว่าง 25 - 29.99</td><td>อ้วน / โรคอ้วนระดับ 2</td><td>อันตรายระดับ 2</td></tr><tr><td>มากกว่า 30</td><td>อ้วนมาก / โรคอ้วนระดับ 3</td><td>อันตรายระดับ 3</td></tr>";
    }
    else if(bmi >= 18.50 && bmi <= 22.99)
    {
        document.getElementById("table_1").innerHTML = "<tr><td>น้อยกว่า 18.50</td><td>น้ำหนักน้อย / ผอม</td><td>มากกว่าคนปกติ</td></tr><tr class=\"table-success\"><td>ระหว่าง 18.50 - 22.99</td><td>ปกติ (สุขภาพดี)</td><td>เท่าคนปกติ</td></tr><tr><td>ระหว่าง 23 - 24.99</td><td>ท้วม / โรคอ้วนระดับ 1</td><td>อันตรายระดับ 1</td></tr><tr><td>ระหว่าง 25 - 29.99</td><td>อ้วน / โรคอ้วนระดับ 2</td><td>อันตรายระดับ 2</td></tr><tr><td>มากกว่า 30</td><td>อ้วนมาก / โรคอ้วนระดับ 3</td><td>อันตรายระดับ 3</td></tr>";
    }
    else if(bmi >= 23 && bmi <= 24.99)
    {
        document.getElementById("table_1").innerHTML = "<tr><td>น้อยกว่า 18.50</td><td>น้ำหนักน้อย / ผอม</td><td>มากกว่าคนปกติ</td></tr><tr><td>ระหว่าง 18.50 - 22.99</td><td>ปกติ (สุขภาพดี)</td><td>เท่าคนปกติ</td></tr><tr class=\"table-success\"><td>ระหว่าง 23 - 24.99</td><td>ท้วม / โรคอ้วนระดับ 1</td><td>อันตรายระดับ 1</td></tr><tr><td>ระหว่าง 25 - 29.99</td><td>อ้วน / โรคอ้วนระดับ 2</td><td>อันตรายระดับ 2</td></tr><tr><td>มากกว่า 30</td><td>อ้วนมาก / โรคอ้วนระดับ 3</td><td>อันตรายระดับ 3</td></tr>";
    }
    else if(bmi >= 25 && bmi <= 29.99)
    {
        document.getElementById("table_1").innerHTML = "<tr><td>น้อยกว่า 18.50</td><td>น้ำหนักน้อย / ผอม</td><td>มากกว่าคนปกติ</td></tr><tr><td>ระหว่าง 18.50 - 22.99</td><td>ปกติ (สุขภาพดี)</td><td>เท่าคนปกติ</td></tr><tr><td>ระหว่าง 23 - 24.99</td><td>ท้วม / โรคอ้วนระดับ 1</td><td>อันตรายระดับ 1</td></tr><tr class=\"table-success\" ><td>ระหว่าง 25 - 29.99</td><td>อ้วน / โรคอ้วนระดับ 2</td><td>อันตรายระดับ 2</td></tr><tr><td>มากกว่า 30</td><td>อ้วนมาก / โรคอ้วนระดับ 3</td><td>อันตรายระดับ 3</td></tr>";
    }
    else if(bmi >= 30)
    {
        document.getElementById("table_1").innerHTML = "<tr><td>น้อยกว่า 18.50</td><td>น้ำหนักน้อย / ผอม</td><td>มากกว่าคนปกติ</td></tr><tr><td>ระหว่าง 18.50 - 22.99</td><td>ปกติ (สุขภาพดี)</td><td>เท่าคนปกติ</td></tr><tr><td>ระหว่าง 23 - 24.99</td><td>ท้วม / โรคอ้วนระดับ 1</td><td>อันตรายระดับ 1</td></tr><tr><td>ระหว่าง 25 - 29.99</td><td>อ้วน / โรคอ้วนระดับ 2</td><td>อันตรายระดับ 2</td></tr><tr class=\"table-success\" ><td>มากกว่า 30</td><td>อ้วนมาก / โรคอ้วนระดับ 3</td><td>อันตรายระดับ 3</td></tr>";
    }
}