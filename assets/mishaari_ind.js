$.getJSON('https://api.npoint.io/99c279bb173a6e28359c/data', function(data){
    // let menu = data['data'];    
  
    $.each(data, function(i, data){
        $('#daftar_menu').append(`
        <div class="col-md-6 col-lg-4 mb-1">
            <li class="card ps-4 fs-3 shadow">
            ${data.nomor}. ${data.nama}
                <audio controls>
                    <source src="${data.audio}" type="audio/mpeg">
                </audio>
            </li>
        </div>`);

    });
    
});