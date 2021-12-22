$.getJSON('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json', function(data){

    $.each(data, function(i, data){
        $('#daftar_menu').append('<div class="col-md-3"><div class="card mb-3"><div class="card-body"><h5 class="card-title">'+ data.name +'</h5><h5 class="card-title">'+ data.name_translations.ar +'</h5><h5 class="card-title">Surat ke - '+ data.number_of_surah +'</h5><a href="'+ data.recitation +'" target="_blank" style="text-decoration: none;color:black;">Play</a></div></div></div>');
        // $('#daftar_menu').append('<div class="col-md-3"><div class="card mb-3"><h5 class="card-title m-1">'+ data.name +'</h5><h5 class="card-title m-1">Surat ke - '+ data.number_of_surah +' </h5><a href="'+ data.recitation +'" class="card-title m-1" target="_blank" style="text-decoration: none;color:black;">Setel</a></div></div>');
    });
});