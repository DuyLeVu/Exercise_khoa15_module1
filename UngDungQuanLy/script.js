let arrProduct = ["Sony Xperia", "Samsung Galaxy", "Nokia 6"];
displayProduct(arrProduct);

function addProduct() {
    let valueProduct = document.getElementById('productInput').value;
    arrProduct.push(valueProduct);
    displayProduct(arrProduct);
}

function displayProduct(newArr) {
    let data = "<table>";
    for (let i = 0; i < newArr.length; i++) {
        data = data + "<tr>" + "<td class='product'>" + newArr[i] + "</td>";
        data = data + "<td><button class='btn' onclick='editProduct(arrProduct)'>Edit</button></td>"
            + "<td><button class='btn' id='btndelete' onclick='deleteProduct(" + i + ")'>Delete</button></td>";
        data = data + "</tr>";
    }
    data = data + "</table>";
    document.getElementById("output").innerHTML = data;
}

function editProduct(newArr) {
    let data2 = "<select name='' id='optionEdit'><option>All product</option>";
    for (let i = 0; i < newArr.length; i++) {
        data2 = data2 + "<option value=" + i + ">" + newArr[i] + "</option>";
    }
    data2 = data2 + "</select>";
    data2 = data2 + "<input class='edit_input' type='text' id='inputEdit'>"
    data2 = data2 + "<button class='btn' type='button' onclick='changeProductName()'>Change Name</button>";
    console.log(newArr);
    document.getElementById("outputEdit").innerHTML = data2;

}

function changeProductName() {
    let productTxtEdit = document.getElementById('inputEdit').value;
    // console.log(productTxtEdit);
    let index = document.getElementById('optionEdit').value;
    // console.log(index);
    // let index = e.options(e.selectedIndex);
    // console.log(index);
    for (let i = 0; i < arrProduct.length; i++) {
        if (i == index) {
            arrProduct[i] = productTxtEdit;
        }
    }
    displayProduct(arrProduct);
}

function deleteProduct(index) {
    // console.log(n);
    arrProduct.splice(index, 1);
    displayProduct(testArr);
}
