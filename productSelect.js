$(document).ready(function(){

    var grandTl = 0;

    //Pouch Inclusion
    var pQty1 = 0;
    var count1 = 0;
    var pAmt1 = 0;
    var pPrice1 = 299;
    $("#pouch").click(function(){
        count1 += 1;
        pQty1 += 1;
        pAmt1 += pPrice1;
        //Display of summary and migration to PHP variables
        if (count1==1){            
            $("#brkdTemplate").append(
                '<div class="row" id="P">'+
                '<div class="col-sm-3">P</div><input type="hidden" name="pPurchase1" value="P">'+
                '<div class="col-sm-3">'+pPrice1+'</div><input type="hidden" name="pPrice1" value="'+pPrice1+'">'+
                '<div class="col-sm-3" id="prodQty1">'+pQty1+'</div><input type="hidden" id="in1" name="prodQty1" value="'+pQty1+'">'+
                '<div class="col-sm-3" id="prodAmt1">'+pAmt1+'</div><input type="hidden" id="in2" name="prodAmt1" value="'+pAmt1+'">'+
                '</div>'
            );
        } else {
            $("#prodQty1").text(pQty1);
            $("#prodAmt1").text(pAmt1);
            $("#in1").val(pQty1);
            $("#in2").val(pAmt1);
        };
        //Adding of summary total to grand total
        $("#total").text(grandTl += pPrice1);
    });

    //SmallBox Inclusion
    var pQty2 = 0;
    var count2 = 0;
    var pAmt2 = 0;
    var pPrice2 = 459;
    $("#small").click(function(){
        count2 += 1;
        pQty2 += 1;
        pAmt2 += pPrice2;
        //Display of summary and migration to PHP variables
        if (count2==1){            
            $("#brkdTemplate").append(
              '<div class="row" id="Sbx">'+
              '<div class="col-sm-3">Sbx</div><input type="hidden" name="pPurchase2" value="Sbx">'+
              '<div class="col-sm-3">'+pPrice2+'</div><input type="hidden" name="pPrice2" value="'+pPrice2+'">'+
              '<div class="col-sm-3" id="prodQty2">'+pQty2+'</div><input type="hidden" id="in3" name="prodQty2" value="'+pQty2+'">'+
              '<div class="col-sm-3" id="prodAmt2">'+pAmt2+'</div><input type="hidden" id="in4" name="prodAmt2" value="'+pAmt2+'">'+
              '</div>'
            );
        } else {
            $("#prodQty2").text(pQty2);
            $("#prodAmt2").text(pAmt2);
            $("#in3").val(pQty2);
            $("#in4").val(pAmt2);
        };
        //Adding of summary total to grand total
        $("#total").text(grandTl += pPrice2);
    });

    //MediumBox Inclusion
    var pQty3 = 0;
    var count3 = 0;
    var pAmt3 = 0;
    var pPrice3 = 599;
    $("#medium").click(function(){
        count3 += 1;
        pQty3 += 1;
        pAmt3 += pPrice3;
        //Display of summary and migration to PHP variables
        if (count3==1){            
            $("#brkdTemplate").append(
              '<div class="row" id="Mbx">'+
              '<div class="col-sm-3">Mbx</div><input type="hidden" name="pPurchase3" value="Mbx">'+
              '<div class="col-sm-3">'+pPrice3+'</div><input type="hidden" name="pPrice3" value="'+pPrice3+'">'+
              '<div class="col-sm-3" id="prodQty3">'+pQty3+'</div><input type="hidden" id="in5" name="prodQty3" value="'+pQty3+'">'+
              '<div class="col-sm-3" id="prodAmt3">'+pAmt3+'</div><input type="hidden" id="in6" name="prodAmt3" value="'+pAmt3+'">'+
              '</div>'
            );
        } else {
            $("#prodQty3").text(pQty3);
            $("#prodAmt3").text(pAmt3);
            $("#in5").val(pQty3);
            $("#in6").val(pAmt3);
        };
        //Adding of summary total to grand total
        $("#total").text(grandTl += pPrice3);
    });

    //LargeBox Inclusion
    var pQty4 = 0;
    var count4 = 0;
    var pAmt4 = 0;
    var pPrice4 = 659;
    $("#large").click(function(){
        count4 += 1;
        pQty4 += 1;
        pAmt4 += pPrice4;
        //Display of summary and migration to PHP variables
        if (count4==1){            
            $("#brkdTemplate").append(
              '<div class="row" id="Lbx">'+
              '<div class="col-sm-3">Lbx</div><input type="hidden" name="pPurchase4" value="Lbx">'+
              '<div class="col-sm-3">'+pPrice4+'</div><input type="hidden" name="pPrice4" value="'+pPrice3+'">'+
              '<div class="col-sm-3" id="prodQty4">'+pQty4+'</div><input type="hidden" id="in7" name="prodQty4" value="'+pQty4+'">'+
              '<div class="col-sm-3" id="prodAmt4">'+pAmt4+'</div><input type="hidden" id="in8 name="prodAmt4" value="'+pAmt4+'">'+
              '</div>'
            );
        } else {
            $("#prodQty4").text(pQty4);
            $("#prodAmt4").text(pAmt4);
            $("#in7").val(pQty4);
            $("#in8").val(pAmt4);
        };
        //Adding of summary total to grand total
        $("#total").text(grandTl += pPrice4);
    });

    //XLargeBox Inclusion
    var pQty5 = 0;
    var count5 = 0;
    var pAmt5 = 0;
    var pPrice5 = 799;
    $("#xlarge").click(function(){
        count5 += 1;
        pQty5 += 1;
        pAmt5 += pPrice5;
        //Display of summary and migration to PHP variables
        if (count5==1){            
            $("#brkdTemplate").append(
              '<div class="row" id="XLbx">'+
              '<div class="col-sm-3">XLbx</div><input type="hidden" name="pPurchase5" value="XLbx">'+
              '<div class="col-sm-3">'+pPrice5+'</div><input type="hidden" name="pPrice5" value="'+pPrice3+'">'+
              '<div class="col-sm-3" id="prodQty5">'+pQty5+'</div><input type="hidden" id="in9" name="prodQty5" value="'+pQty5+'">'+
              '<div class="col-sm-3" id="prodAmt5">'+pAmt5+'</div><input type="hidden" id="in10" name="prodAmt5" value="'+pAmt5+'">'+
              '</div>'
            );
        } else {
            $("#prodQty5").text(pQty5);
            $("#prodAmt5").text(pAmt5);
            $("#in9").val(pQty5);
            $("#in10").val(pAmt5);
        };
        //Adding of summary total to grand total
        $("#total").text(grandTl += pPrice5);
    });

    //Void Option
    $("#voidOption").click(function(){
        (async () => {

            const { value: product } = await Swal.fire({
              title: 'Product Void',
              input: 'select',
              inputOptions: {
                  P: 'P',
                  Sbx: 'Sbx',
                  Mbx: 'Mbx',
                  Lbx: 'Lbx',
                  XLbx: 'XLbx'
              },
              inputPlaceholder: 'Select a product',
              showCancelButton: true,
              inputValidator: (value) => {
                return new Promise((resolve) => {
                  if (value === 'P') {
                    //Voiding (Deleting) data for pouch pruchase summary
                    $("#total").text(grandTl -= (pPrice1 * pQty1));resolve();
                    count1 *= 0;resolve();
                    pQty1 *= 0;resolve();
                    $("#P").remove();
                  } 
                  else if (value === 'Sbx') {
                    //Voiding (Deleting) data for small box pruchase summary
                    $("#total").text(grandTl -= (pPrice2 * pQty2));resolve();
                    count1 *= 0;resolve();
                    pQty1 *= 0;resolve();
                    $("#Sbx").remove();
                  } 
                  else if (value === 'Mbx') {
                    //Voiding (Deleting) data for medium box pruchase summary
                    $("#total").text(grandTl -= (pPrice3 * pQty3));resolve();
                    count3 *= 0;resolve();
                    pQty3 *= 0;resolve();
                    $("#Mbx").remove();
                  } 
                  else if (value === 'Lbx') {
                    //Voiding (Deleting) data for large box pruchase summary
                    $("#total").text(grandTl -= (pPrice4 * pQty4));resolve();
                    count4 *= 0;resolve();
                    pQty4 *= 0;resolve();
                    $("#Lbx").remove();
                  } 
                  else if (value === 'XLbx') {
                    //Voiding (Deleting) data for x-large box pruchase summary
                    $("#total").text(grandTl -= (pPrice5 * pQty5));resolve();
                    count5 *= 0;resolve();
                    pQty5 *= 0;resolve();
                    $("#XLbx").remove();
                  } 
                  else {
                    resolve('You need to select a product')
                  }
                })
              }
            })
            
            if (product) {
              Swal.fire(`Product voided`)
            }
            
            })()
    }); 

    //Discount Option
    $("#discount").click(function(){
        (async () => {

            const { value: discount } = await Swal.fire({
              title: 'Discount',
              input: 'select',
              inputOptions: {
                  SRD: 'Senior Discount',
                  PWD: 'PWD Discount',
                  MYS: 'Mid-Year Sale',
              },
              inputPlaceholder: 'Select a discount option',
              showCancelButton: true,
              inputValidator: (value) => {
                return new Promise((resolve) => {
                  if (value === 'SRD') {
                    //Inclusion of senior discount
                    $("#total").text((grandTl /= 1.15).toFixed(2));resolve();
                    $("#discPrnt").text("Senior Discount: -15%");resolve();
                    $("#discountPHP").val(15);resolve();
                  } 
                  else if (value === 'PWD') {
                    //Inclusion of person's with disabilty discount
                    $("#total").text((grandTl /= 1.12).toFixed(2));resolve();
                    $("#discPrnt").text("PWD Discount: -12%");resolve();
                    $("#discountPHP").val(12);resolve();
                  } 
                  else if (value === 'MYS') {
                    //Inclusion of mid year sale discount
                    $("#total").text((grandTl /= 1.10).toFixed(2));resolve();
                    $("#discPrnt").text("Mid Year Sale: -10%");resolve();
                    $("#discountPHP").val(10);resolve();
                  } 
                  else {
                    resolve('You need to select a discount option')
                  }
                })
              }
            })
            
            if (product) {
              Swal.fire(`Product voided`)
            }
            
            })()
    });

    //Cancel Option
    $("#cancelOption").click(function(){
        Swal.fire({
          //nullifying all data inputed with reload option
            title: 'Attention!',
            text: 'Do you wish to cancel the transaction?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result) => {
                if (result.isConfirmed){
                  location.reload();
                }
          });
    }); 
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//validation from https://getbootstrap.com/docs/4.6/components/forms/#validation