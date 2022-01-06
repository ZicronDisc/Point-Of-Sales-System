<!DOCTYPE html>
<head>
    <title>WmPh-POS</title>
</head>

<!--Bootstrap-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

<!--JQuery-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="sweetalert2.all.min.js"></script>

<!--File Linking-->
<link rel="stylesheet" href="main.css">
<script src="productSelect.js"></script>

<!--Responsive-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>" class="needs-validation" novalidate>
    <div class="container">
        <div class="row">
            <div class="col-sm-1"></div>
            <!--Breakdown & Summary-->
            <div class="col-sm-5 BreakCSS">
                <div class="row">
                    <div class="col-sm 3">Name</div>
                    <div class="col-sm 3">Price</div>
                    <div class="col-sm 3">Qty</div>
                    <div class="col-sm 3">Amount</div>
                </div>
                <hr id="brkdTemplate">
            </div>
            <div class="col-sm-5">
                <div class="row">
                <!--Pouch-->
                    <div class="col-sm-4 prodCSS" id="pouch">P</div>
                <!--Small Box-->
                    <div class="col-sm-4 prodCSS" id="small">Sbx</div>
                <!--Medium Box-->
                    <div class="col-sm-4 prodCSS" id="medium">Mbx</div>
                <!--Large Box-->
                    <div class="col-sm-4 prodCSS" id="large">Lbx</div>
                <!--XLarge Box-->
                    <div class="col-sm-4 prodCSS" id="xlarge">XLbx</div>
                <!--Discount-->
                    <div class="col-sm-4 lessCSS" id="discount">Disc</div>
                <!--Void-->
                    <div class="col-sm-6 delCSS" id="voidOption" >Void</div>

                <!--Cancel-->
                    <div class="col-sm-6 delCSS" id="cancelOption">Cancel</div>
                </div>
            </div>
            <div class="col-sm-1"></div>
        </div>
        <div class="row">
            <div class="col-sm-1"></div>
            <!--Sum Total of Amount-->
            <div class="col-sm-5 AmtCSS">Total <b id="total">0</b></div>
            <div class="col-sm-3">
                <div id="discPrnt"></div><input type="hidden" id="discountPHP" name="discountPHP" value="0">
                <br>
                <div>
                    <label><b>Payment</b></label>
                    <input type="text" class="form-control" name="payment" id="payment validationCustom01" required>
                </div>
            </div>
            <!--Payment Options-->
            <button type="submit" name="btnPrint" class="col-sm-2 printCSS">Pay</button>
            <div class="col-sm-1"></div>
        </div>
    </div>
</form> 

<?php
error_reporting(0);

//Product Documentation from JQuery migrating to PHP variable
$purchase1 = $_REQUEST['pPurchase1'];
$price1 = 299;
$qty1 = $_REQUEST['prodQty1'];
$amt1 = $qty1*$price1;

$purchase2 = $_REQUEST['pPurchase2'];
$price2 = 459;
$qty2 = $_REQUEST['prodQty2'];
$amt2 = $qty2*$price2;

$purchase3 = $_REQUEST['pPurchase3'];
$price3 = 599;
$qty3 = $_REQUEST['prodQty3'];
$amt3 = $qty3*$price3;

$purchase4 = $_REQUEST['pPurchase4'];
$price4 = 659;
$qty4 = $_REQUEST['prodQty4'];
$amt4 = $qty4*$price4;

$purchase5 = $_REQUEST['pPurchase5'];
$price5 = 799;
$qty5 = $_REQUEST['prodQty5'];
$amt5 = $qty5*$price5;

    //Main array for all data input
    $mainArray = array(
            array(),
            array(),
            array(),
            array(),
            array(),
            array()
        );  
        array_push($mainArray[0],"Product","Price","Qty","Amt");
        array_push($mainArray[1],$purchase1,$price1,$qty1,$amt1);
        array_push($mainArray[2],$purchase2,$price2,$qty2,$amt2);
        array_push($mainArray[3],$purchase3,$price3,$qty3,$amt3);
        array_push($mainArray[4],$purchase4,$price4,$qty4,$amt4);
        array_push($mainArray[5],$purchase5,$price5,$qty5,$amt5);

//Amount totality of purchase
$grandTotal = $amt1+$amt2+$amt3+$amt4+$amt5;

//Retrieval of discount data
$discountPHP = $_REQUEST['discountPHP'];

if ($discountPHP == 10) {
    $grandTotal /= 1.10;
} 
else if ($discountPHP == 12) {
    $grandTotal /= 1.12;
}
else if ($discountPHP == 15) {
    $grandTotal /= 1.15;
};

//The Payment & Change transaction
$payment = $_REQUEST['payment'];
$change = $payment - $grandTotal;

//Dummy transaction number generator
$chars = array(0,1,2,3,4,5,6,7,8,9);
  $refNum = '';
  $max = count($chars)-1;
  for($i=0;$i<10;$i++){
   	$refNum .= $chars[rand(0, $max)];
  }

 if ($_SERVER["REQUEST_METHOD"] == "POST"){

    if (isset($_REQUEST['btnPrint'])){ 

        echo"<script type='text/javascript'>  
                Swal.fire({
                    icon: 'success',
                    title: 'Transaction Reciept',
                    html: 
                        '<hr><div class=",'"container"',">'+";
                            echo"'<div class=",'"row"',">'+";

                            //Loop for labels of reciept inclusion
                            for ($i=0;$i<4;$i++){
                                echo"'<div class=",'"col-3"',"><b>",$mainArray[0][$i],"</b></div>'+";
                                }
                            echo"'</div><hr>'+";

                            //Loop for pouch reciept inclusion
                            if ($amt1 != 0){
                                echo"'<div class=",'"row"',">'+";
                            for ($i=0;$i<4;$i++){
                                echo"'<div class=",'"col-3"',">",$mainArray[1][$i],"</div>'+";
                                }
                            echo"'</div>'+";
                            }

                            //Loop for small box reciept inclusion
                            if ($amt2 != 0){
                                echo"'<div class=",'"row"',">'+";
                            for ($i=0;$i<4;$i++){
                                echo"'<div class=",'"col-3"',">",$mainArray[2][$i],"</div>'+";
                                }
                            echo"'</div>'+";
                            }

                            //Loop for medium box reciept inclusion
                            if ($amt3 != 0){
                                echo"'<div class=",'"row"',">'+";
                            for ($i=0;$i<4;$i++){
                                echo"'<div class=",'"col-3"',">",$mainArray[3][$i],"</div>'+";
                                }
                            echo"'</div>'+";
                            }

                            //Loop for large box reciept inclusion
                            if ($amt4 != 0){
                                echo"'<div class=",'"row"',">'+";
                            for ($i=0;$i<4;$i++){
                                echo"'<div class=",'"col-3"',">",$mainArray[4][$i],"</div>'+";
                                }
                            echo"'</div>'+";
                            }

                            //Loop for x-large box reciept inclusion
                            if ($amt5 != 0){
                                echo"'<div class=",'"row"',">'+";
                            for ($i=0;$i<4;$i++){
                                echo"'<div class=",'"col-3"',">",$mainArray[5][$i],"</div>'+";
                                }
                            echo"'</div>'+";
                            }

                            echo"
                        '</div>",
                        //Display of discounts, transaction numbers, grand total, payment, & change
                        "<hr>Discount: ","$discountPHP","%",
                        "<hr>Trans No: ","$refNum",
                        "<hrr><b><h3>","Total: ",round($grandTotal,2),"</h3></b>Payment: ","$payment","<br>Change:","&nbsp",round($change,2),"',
                    backdrop: 'rgb(16, 42, 90)'           
                });
                if ( window.history.replaceState ) {
                    window.history.replaceState( null, null, window.location.href );
                  };
                </script>
                ";//nullifying all inputs to avoid sweet alert resubmission
    }
 }

?>
</body>
</html>