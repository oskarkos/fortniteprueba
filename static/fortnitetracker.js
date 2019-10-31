$(function(){

    var submitBTN = $('#submit');
    var submitBTN1 = $('#submit1');
    var results = $('#results');
    var results1 = $('#results1');
        
    submitBTN.click(function(){

        var nickName = $('#epicNickName');
        var platformSelection = $("#platform option:selected").val();
        
        var data = {};
        data.nickName = nickName.val().toLowerCase();
        data.platformSelection = platformSelection.toLowerCase();
        $.ajax({
            type: "POST",
            url: '/',
            dataType: 'json',
            data: data,
            success:function(data){
                data = JSON.parse(data);
                if(data.epicUserHandle == nickName.val() && data.platformName == platformSelection){
                    displayData(data);
                }else if(platformSelection == "xbl"){
                    displayError();
                }else{
                    displayError();
                }
            }
        });
    });

    function resetResult(){
        var nickName = $('#epicNickName');
        results.html('');
        nickName.html('');
    }

    submitBTN1.click(function(){

        var nickName = $('#epicNickName1');
        var platformSelection = $("#platform1 option:selected").val();

        var data = {};
        data.nickName = nickName.val().toLowerCase();
        data.platformSelection = platformSelection.toLowerCase();
        $.ajax({
            type: "POST",
            url: '/',
            dataType: 'json',
            data: data,
            success:function(data){
                data = JSON.parse(data);
                if(data.epicUserHandle == nickName.val() && data.platformName == platformSelection){
                    displayData1(data);
                }else if(platformSelection == "xbl"){
                    displayError1();
                }else{
                    displayError1();
                }
            }
        });
    });

    function resetResult(){
        var nickName = $('#epicNickName1');
        results1.html('');
        nickName.html('');
    }

    function displayError(){

        results.html('');
        var template = '<div class="alert alert-danger" role="alert">'+
                            'Jugador No encontrado!'+
                        '</div>';

        results.html(template);
    }

    function displayError1(){

        results1.html('');
        var template = '<div class="alert alert-danger" role="alert">'+
                            'Jugador No encontrado!'+
                        '</div>';

        results1.html(template);
    }

    function displayData(data){
        results.html('');
        var epicUserHandle = data.epicUserHandle;

        var PLayerInfo = data.lifeTimeStats[7].value;

        var list = '<ul class="list-group">'+
                    '<li class="list-group-item">'+'Solo'+ " " + data.stats.p2.top1.value +'</li>'+
                    '<li class="list-group-item">'+'Duos'+ " " + data.stats.p10.top1.value +'</li>'+
                    '<li class="list-group-item">'+'Teams'+ " " + data.stats.p9.top1.value +'</li>'+
                '</ul>';

        var listInfo = '<ul class="list-group">'+
                    '<li class="list-group-item">'+'Kills'+ " " + data.lifeTimeStats[10].value +'</li>'+
                    '<li class="list-group-item">'+'Info'+ " " + PLayerInfo +'</li>'+
                    '<li class="list-group-item">'+'Kills Por Partida'+ " " + data.lifeTimeStats[11].value +'</li>'+
                '</ul>';

        var template = '<div class="card">'+
                        '<div class="card-header">'+ epicUserHandle +'</div>'+
                        '<div class="card-body">'+
                        '<h5 class="card-title">Wins</h5>'+
                        '<p class="card-text">'+ list +'</p>'+
                        '<h5 class="card-title">Info General</h5>'+
                        '<p class="card-text">'+ listInfo +'</p>'+
                        '<a href="#" class="btn btn-primary">Go somewhere</a>'+
                        '</div>'+
                    '</div>';
        results.html(template);
    }

    function displayData1(data){
        results1.html('');
        var epicUserHandle = data.epicUserHandle;

        var PLayerInfo = data.lifeTimeStats[7].value;
        
        var list = '<ul class="list-group">'+
                    '<li class="list-group-item">'+'Solo'+ " " + data.stats.p2.top1.value +'</li>'+
                    '<li class="list-group-item">'+'Duos'+ " " + data.stats.p10.top1.value +'</li>'+
                    '<li class="list-group-item">'+'Teams'+ " " + data.stats.p9.top1.value +'</li>'+
                   '</ul>';

        var listInfo = '<ul class="list-group">'+
                        '<li class="list-group-item">'+'Kills'+ " " + data.lifeTimeStats[10].value +'</li>'+
                        '<li class="list-group-item">'+'Info'+ " " + PLayerInfo +'</li>'+
                        '<li class="list-group-item">'+'Kills Por Partida'+ " " + data.lifeTimeStats[11].value +'</li>'+
                    '</ul>';

        var template = '<div class="card">'+
                            '<div class="card-header">'+ epicUserHandle +'</div>'+
                            '<div class="card-body">'+
                            '<h5 class="card-title">Wins</h5>'+
                            '<p class="card-text">'+ list +'</p>'+
                            '<h5 class="card-title">Info General</h5>'+
                            '<p class="card-text">'+ listInfo +'</p>'+
                            '<a href="#" class="btn btn-primary">Go somewhere</a>'+
                            '</div>'+
                        '</div>';
        results1.html(template);
    }

    
});