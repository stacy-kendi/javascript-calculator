<!DOCTYPE <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>JavaScript Calculator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cardo" rel="stylesheet">

    <script src="jquery-3.3.1.min.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="bootstrap/js/jquery min3.2.1.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"> </script>
    <script src="script.js" defer></script>
</head>
<body>
    
    <div class="container">
        <h1>SIMPLE CALCULATOR</h1>
        <div class="content-container">
            <!-- <div class="keys"></div>
            <div class="form-group">
                <input type="text" class="screen" name="value" value="0" disabled>
            </div>
                
                <button type="button" class="clear">AC</button>
                <button type="button" value="()">()</button>
                <button type="button" class="operand" value="%">%</button>
                <button type="button" class="operand" value="/">&divide;</button>
                
                <button type="button" value="7">7</button>
                <button type="button" value="8">8</button>
                <button type="button" value="9">9</button>
                <button type="button" class="operand" value="*">&times;</button>
                <button type="button" value="7">4</button>
                <button type="button" value="7">5</button>
                <button type="button" value="7">6</button>
                <button type="button" class="operand" value="-">-</button>
                <button type="button" value="1">1</button>
                <button type="button" value="2">2</button>
                <button type="button" value="3">3</button>
                <button type="button" class="operand" value="+">+</button>
                <button type="button" value="0">0</button>
                <button type="button" class="decimal" value=".">.</button>
                <button type="button" class="equal-sign" value="=">=</button>-->

                <div class="calculator-outlook">

                    <div class="outputview">

                        <div data-previous-input class="previous-input">
                            
                        </div>

                        <div data-current-input class="current-input">
                            
                        </div>

                    </div> <!--Output view-->

                    <button data-clear class="clear">AC</button>
                    <button data-delete>DEL</button>
                    <button data-operand>%</button>
                    <button data-operand>&divide;</button>
                    
    
                    <button data-number>7</button>
                    <button data-number>8</button>
                    <button data-number>9</button>
                    <button data-operand>&times;</button>
    
                    <button data-number>4</button>
                    <button data-number>5</button>
                    <button data-number>6</button>
                    <button data-operand>-</button>
    
                    <button data-number>1</button>
                    <button data-number>2</button>
                    <button data-number>3</button>
                    <button data-operand>+</button>
    
                    <button data-number>0</button>
                    <button data-number>.</button>
                    <button data-equals class="equal-sign">=</button>

                </div>

        </div>
    </div> 

    

</body>
</html>
