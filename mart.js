var name = prompt('Please enter your Name: ');

// Variables initialization 
let Product_1_minus = document.getElementById('Product_1_minus');
let Product_2_minus = document.getElementById('Product_2_minus');
let Product_3_minus = document.getElementById('Product_3_minus');
let Product_4_minus = document.getElementById('Product_4_minus');
let Product_5_minus = document.getElementById('Product_5_minus');
let Product_6_minus = document.getElementById('Product_6_minus');
// =====================================================================
let Product_1_quantity = document.getElementById('Product_1_quantity');
let Product_2_quantity = document.getElementById('Product_2_quantity');
let Product_3_quantity = document.getElementById('Product_3_quantity');
let Product_4_quantity = document.getElementById('Product_4_quantity');
let Product_5_quantity = document.getElementById('Product_5_quantity');
let Product_6_quantity = document.getElementById('Product_6_quantity');
// =====================================================================
let Product_1_plus = document.getElementById('Product_1_plus');
let Product_2_plus = document.getElementById('Product_2_plus');
let Product_3_plus = document.getElementById('Product_3_plus');
let Product_4_plus = document.getElementById('Product_4_plus');
let Product_5_plus = document.getElementById('Product_5_plus');
let Product_6_plus = document.getElementById('Product_6_plus');
// =====================================================================
                   
                      // Add cart button 

let Product_1_total = document.getElementById('Product_1_total');
let Product_2_total = document.getElementById('Product_2_total');
let Product_3_total = document.getElementById('Product_3_total');
let Product_4_total = document.getElementById('Product_4_total');
let Product_5_total = document.getElementById('Product_5_total');
let Product_6_total = document.getElementById('Product_6_total');

// =====================================================================
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
// ======================================================================
let p1_price = 1500;
let p2_price = 1600;
let p3_price = 1700;
let p4_price = 1800;
let p5_price = 1900;
let p6_price = 2000;
// ========================================================================
let p1_total_price = 0;
let p2_total_price = 0;
let p3_total_price = 0;
let p4_total_price = 0;
let p5_total_price = 0;
let p6_total_price = 0;

let final_total_price = 0;
// ========================================================================


//  Data Entry in left Form 


Customer_name.value = name;
rightf1.value = name;
// document.getElementById("Product_1_quantity").value = 5;



//  Data Entry in left Form
let right_f_1 = document.getElementById("right_f_1");
let right_f_2 = document.getElementById("right_f_2");
let right_f_3 = document.getElementById("right_f_3");
let right_f_4 = document.getElementById("right_f_4");
let right_f_5 = document.getElementById("right_f_5");
let right_f_6 = document.getElementById("right_f_6");
let right_f_7 = document.getElementById("right_f_7");
let right_f_8 = document.getElementById("right_f_8");





// ===========================[ Product 1 + - Total]=======================
Product_1_plus.addEventListener('click', () => {
    if (counter1 < 5) {
        counter1++;
        Product_1_quantity.value = counter1;
        Product_1_plus.style.background = 'green';
        // let c1 = counter1;
        
    }
    if (counter1 == 5) {
        Product_1_plus.style.background = 'grey';
        Product_1_minus.style.background = 'green';
    }
});

Product_1_minus.addEventListener('click', () => {
    
    if (counter1 > 0) {
        counter1--;
        Product_1_quantity.value = counter1;
        // p1_total_price = p1_price * counter1;
        Product_1_minus.style.background = 'green';
        Product_1_plus.style.background = 'green';
        
    }
    
    if (counter1 == 0) {
        Product_1_minus.style.cursor = 'pointer';
        Product_1_minus.style.background = 'grey';
    }
});

function Product1(){

    var audio = document.getElementById("add_to_cart_Audio");
    audio.play();
    document.getElementById("add-p1").style.background = 'green';
    p1_total_price = p1_price * counter1;
}




// ===========================[ Product 2 + - Total]=======================
Product_2_plus.addEventListener('click', () => {
    if (counter2 < 5) {
        counter2++;
        Product_2_quantity.value = counter2;
        Product_2_plus.style.background = 'green';
    }
    if (counter2 == 5) {
        Product_2_plus.style.background = 'grey';
        Product_2_minus.style.background = 'green';
    }
});

Product_2_minus.addEventListener('click', () => {
    
    if (counter2 > 0) {
        counter2--;
        Product_2_quantity.value = counter2;
        // p2_total_price = p2_price * counter2;
        Product_2_minus.style.background = 'green';
        Product_2_plus.style.background = 'green';
        
    }
    
    if (counter2 == 0) {
        Product_2_minus.style.cursor = 'pointer';
        Product_2_minus.style.background = 'grey';
    }
});

function Product2(){
    
    var audio2 = document.getElementById("add_to_cart_Audio");
    audio2.play();
    document.getElementById("add-p2").style.background = 'green';
    p2_total_price = p2_price * counter2;
}


// ===========================[ Product 3 + - Total]=======================
Product_3_plus.addEventListener('click', () => {
    if (counter3 < 5) {
        counter3++;
        Product_3_quantity.value = counter3;
        Product_3_plus.style.background = 'green';
    }
    if (counter3 == 5) {
        Product_3_plus.style.background = 'grey';
        Product_3_minus.style.background = 'green';
    }
});

Product_3_minus.addEventListener('click', () => {
    
    if (counter3 > 0) {
        counter3 --;
        Product_3_quantity.value = counter3;
        // p3_total_price = p3_price * counter3;
        Product_3_minus.style.background = 'green';
        Product_3_plus.style.background = 'green';

    }

    if (counter3 == 0) {
        Product_3_minus.style.cursor = 'pointer';
        Product_3_minus.style.background = 'grey';
    }
});

function Product3(){
    
    var audio3 = document.getElementById("add_to_cart_Audio");
    audio3.play();
    document.getElementById("add-p3").style.background = 'green';
    p3_total_price = p3_price * counter3;
}


// ===========================[ Product 4 + - Total]=======================
Product_4_plus.addEventListener('click', () => {
    if (counter4 < 5) {
        counter4++;
        Product_4_quantity.value = counter4;
        Product_4_plus.style.background = 'green';
    }
    if (counter4 == 5) {
        Product_4_plus.style.background = 'grey';
        Product_4_minus.style.background = 'green';
    }
});

Product_4_minus.addEventListener('click', () => {
    
    if (counter4 > 0) {
        counter4 --;
        Product_4_quantity.value = counter4;
        // p4_total_price = p4_price * counter4;
        Product_4_minus.style.background = 'green';
        Product_4_plus.style.background = 'green';
        
    }
    
    if (counter4 == 0) {
        Product_4_minus.style.cursor = 'pointer';
        Product_4_minus.style.background = 'grey';
    }
});

function Product4(){

    document.getElementById("add-p4").style.background = 'green';
    
    var audio4 = document.getElementById("add_to_cart_Audio");
    audio4.play();
    p4_total_price = p4_price * counter4;
}




// ===========================[ Product 5 + - Total]=======================
Product_5_plus.addEventListener('click', () => {
    if (counter5 < 5) {
        counter5++;
        Product_5_quantity.value = counter5;
        Product_5_plus.style.background = 'green';
    }
    if (counter5 == 5) {
        Product_5_plus.style.background = 'grey';
        Product_5_minus.style.background = 'green';
    }
});

Product_5_minus.addEventListener('click', () => {
    
    if (counter5 > 0) {
        counter5 --;
        Product_5_quantity.value = counter5;
        // p5_total_price = p5_price * counter5;
        Product_5_minus.style.background = 'green';
        Product_5_plus.style.background = 'green';
        
    }
    
    if (counter5 == 0) {
        Product_5_minus.style.cursor = 'pointer';
        Product_5_minus.style.background = 'grey';
    }
});

function Product5(){
    
    var audio5 = document.getElementById("add_to_cart_Audio");
    audio5.play();
    p5_total_price = p5_price * counter5;
    document.getElementById("add-p5").style.background = 'green';
}


// ===========================[ Product 6 + - Total]=======================
Product_6_plus.addEventListener('click', () => {
    if (counter6 < 5) {
        counter6++;
        Product_6_quantity.value = counter6;
        Product_6_plus.style.background = 'green';
    }
    if (counter6 == 5) {
        Product_6_plus.style.background = 'grey';
        Product_6_minus.style.background = 'green';
    }
});

Product_6_minus.addEventListener('click', () => {
    
    if (counter6 > 0) {
        counter6 --;
        Product_6_quantity.value = counter6;
        // p6_total_price = p6_price * counter6;
        Product_6_minus.style.background = 'green';
        Product_6_plus.style.background = 'green';
        
    }
    
    if (counter6 == 0) {
        Product_6_minus.style.cursor = 'pointer';
        Product_6_minus.style.background = 'grey';
    }
});


function Product6(){
    
    var audio6 = document.getElementById("add_to_cart_Audio");
    audio6.play();
    p6_total_price = p6_price * counter6;
    document.getElementById("add-p6").style.background = 'green';
}

// =====================================================================================






// function yes() {

    
// }

function no() {
    
//    left Form Calculation  
final_total_price = p1_total_price + p2_total_price + p3_total_price + p4_total_price + p5_total_price + p6_total_price;

document.getElementById("p1").value = p1_total_price;
document.getElementById("p2").value = p2_total_price;
document.getElementById("p3").value = p3_total_price;
document.getElementById("p4").value = p4_total_price;
document.getElementById("p5").value = p5_total_price;
document.getElementById("p6").value = p6_total_price;

document.getElementById("final_bill").value = final_total_price;



//    Right Form Calculation  
document.getElementById("rightf2").value= counter1+counter2+counter3 + counter4 + counter5 + counter6;
document.getElementById("rightf3").value= final_total_price;

// GST
let gst = final_total_price * (15/100);

let final_total_price2 = final_total_price + gst;
// Discount
let dis = final_total_price * (10/100);
let final_total_price3 = final_total_price2 - dis;
// Net Total 
let net_total = final_total_price2 - dis;



document.getElementById("rightf4").value = gst;
document.getElementById("rightf5").value = dis;
document.getElementById("rightf6").value= net_total;
// document.getElementById("rightf7").value =  "Monday";
// document.getElementById("rightf8").value=  "4-June-2023";






        
}