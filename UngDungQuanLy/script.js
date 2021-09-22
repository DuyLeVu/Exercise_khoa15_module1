let testArr = ["Sony Xperia", "Samsung Galaxy", "Nokia 6"];
productDisplay(testArr);

function productAdd() {
    let productValue = document.getElementById('productInput').value;
    testArr.push(productValue);
    productDisplay(testArr);
}

function productDisplay(newArr) {
    let data = "<table>";
    for (let i = 0; i < newArr.length; i++) {
        data = data + "<tr>" + "<td class='product'>" + newArr[i] + "</td>";
        data = data + "<td><button class='btn' onclick='productEdit(testArr)'>Edit</button></td>"
            + "<td><button class='btn' id='btndelete' onclick='productDelete(" + i + ")'>Delete</button></td>";

        data = data + "</tr>";
    }
    data = data + "</table>";
    document.getElementById("output").innerHTML = data;
}

function productEdit(newArr) {
    let data2 = "<select name='' id='optionEdit'><option>All product</option>";
    for (let i = 0; i < newArr.length; i++) {
        data2 = data2 + "<option value=" + i + ">" + newArr[i] + "</option>";
    }
    data2 = data2 + "</select>";
    data2 = data2 + "<input class='edit_input' type='text' id='inputEdit'>"
    data2 = data2 + "<button class='btn' type='button' onclick='productChangeName()'>Change Name</button>";
    console.log(newArr);
    document.getElementById("outputEdit").innerHTML = data2;

}

function productChangeName() {
    let productTxtEdit = document.getElementById('inputEdit').value;
    // console.log(productTxtEdit);
    let index = document.getElementById('optionEdit').value;
    // console.log(index);
    // let index = e.options(e.selectedIndex);
    // console.log(index);
    for (let i = 0; i < testArr.length; i++) {
        if (i == index) {
            testArr[i] = productTxtEdit;
        }
    }
    productDisplay(testArr);
}

function productDelete(index) {
    // console.log(n);
    testArr.splice(index, 1);
    productDisplay(testArr);
}
