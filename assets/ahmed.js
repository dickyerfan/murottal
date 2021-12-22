$.getJSON('https://quran-endpoint.vercel.app/quran', function(data){
    let menu = data['data'];  
    $.each(menu, function(i, data){
        $('#daftar_menu').append(`
        <div class="col-md-6 col-lg-4 mb-1">
            <li class="card card ps-4 fs-3 shadow">
            ${data.number}. ${data.asma.id.short}
                <audio controls>
                    <source src="${data.recitation.full}" type="audio/mpeg">
                </audio>
            </li>
        </div>`);

    });
});