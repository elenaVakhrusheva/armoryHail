

    // set countUp options
    var options = {
        useEasing : true, // toggle easing
        useGrouping : true, // 1,000,000 vs 1000000
        separator : '', // character to use as a separator
        decimal : '', // character to use as a decimal
    }
    var useOnComplete = false;
    var useEasing = true;
    var useGrouping = true;
    
    // create instance
    window.onload = function() {
        // fire animation
        // var element = document.querySelector('.jumbo');
        var demo = new countUp('myTargetElement-0', 24.02, 94.62, 2, 2.5, options);
        demo.start();
           var demo = new countUp( 'myTargetElement-1', 24.02, 94.62, 2, 2.5, options);
        demo.start();
           var demo = new countUp( 'myTargetElement-2', 24.02, 94.62, 2, 2.5, options);
        demo.start();
           var demo = new countUp( 'myTargetElement-3', 24.02, 94.62, 2, 2.5, options);
        demo.start();
    }

    // for demo:
    function swapValues() {
        var oldStartVal = document.getElementById("startVal").value;
        var oldEndVal = document.getElementById("endVal").value;
        document.getElementById("startVal").value = oldEndVal;
        document.getElementById("endVal").value = oldStartVal;
        updateCodeVisualizer();
    }
    var code;
    function createCountUp() {

        var startVal = document.getElementById("startVal").value;
        startVal = Number(startVal.replace(',','').replace(' ',''));
        var endVal = document.getElementById("endVal").value;
        endVal = Number(endVal.replace(',','').replace(' ',''));
        var decimals = document.getElementById("decimals").value;
        var duration = document.getElementById("duration").value; 

        options = {
            useEasing : useEasing,
            useGrouping : useGrouping,
            separator : document.getElementById("separator").value,
            decimal : document.getElementById("decimal").value
        }

        // you don't have to create a new instance of countUp every time you start an animation,
        // but I do here in case user changes values in demo.
        demo = new countUp("myTargetElement-0", startVal, endVal, decimals, duration, options);
         demo = new countUp("myTargetElement-1", startVal, endVal, decimals, duration, options);
          demo = new countUp("myTargetElement-2", startVal, endVal, decimals, duration, options);
           demo = new countUp("myTargetElement-3", startVal, endVal, decimals, duration, options);

        if (useOnComplete) {
            demo.start(methodToCallOnComplete);
        } else {
            demo.start();
        }

        updateCodeVisualizer();
    }
    function showCodeAndStop() {
        code = 'demo.stop();';
        document.getElementById("codeVisualizer").innerHTML = code;

        demo.stop();
    }
    function showCodeAndReset() {
        code = 'demo.reset();';
        document.getElementById("codeVisualizer").innerHTML = code;

        demo.reset();
    }
    function showCodeAndResume() {
        code = 'demo.resume();';
        document.getElementById("codeVisualizer").innerHTML = code;

        demo.resume();
    }
    function toggleOnComplete(checkbox) {

        if (checkbox.checked) {
            useOnComplete = true;
        } else {
            useOnComplete = false;
        }
        updateCodeVisualizer();
    }
    function toggleEasing(checkbox) {

        if (checkbox.checked) {
            useEasing = true;
        } else {
            useEasing = false;
        }
        updateCodeVisualizer();
    }
    function toggleGrouping(checkbox) {

        if (checkbox.checked) {
            useGrouping = true;
        } else {
            useGrouping = false;
        }
        updateCodeVisualizer();
    }
    function methodToCallOnComplete() {
        console.log('COMPLETE!');
        alert('COMPLETE!');
    }
    function updateCodeVisualizer() {
        var startVal = document.getElementById("startVal").value;
        startVal = Number(startVal.replace(',','').replace(' ',''));
        var endVal = document.getElementById("endVal").value;
        endVal = Number(endVal.replace(',','').replace(' ',''));
        var decimals = document.getElementById("decimals").value;
        var duration = document.getElementById("duration").value;
        var separator = document.getElementById("separator").value;
        var decimal = document.getElementById("decimal").value;

        var code = 'var options = {<br>';
        code += (useEasing) ? '&emsp;&emsp;useEasing : true, <br>' : '&emsp;&emsp;useEasing : false, <br>';
        code += (useGrouping) ? '&emsp;&emsp;useGrouping : true, <br>' : '&emsp;&emsp;useGrouping : false, <br>';
        code += '&emsp;&emsp;separator : \''+separator+'\', <br>';
        code += '&emsp;&emsp;decimal : \''+decimal+'\' <br>';
        code += '}<br>';
        code += 'var demo = new countUp("myTargetElement-0", "myTargetElement-1","myTargetElement-2", "myTargetElement-3", '+startVal+', '+endVal+', '+decimals+', '+duration+', options);<br>';
        if (useOnComplete) {
            code += 'demo.start(methodToCallOnComplete);';
        } else {
            code += 'demo.start();';
        }
        document.getElementById("codeVisualizer").innerHTML = code;
    }
