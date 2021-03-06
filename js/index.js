$(document).ready(function(){
    plateSettingConstruct();
    // controlDrag();
    // const wells = document.querySelectorAll('.well');
    // wells.forEach(well => {
    //     well.addEventListener('dragenter', dragEnter);
    //     well.addEventListener('dragover', dragOver);
    //     well.addEventListener('dragleave', dragLeave);
    //     well.addEventListener('drop', drop);
    // });
    $("#plate").selectable({
        cancel:'.handle',
        fliter:'div'
    });
    $("#plate").sortable({
        handle: '.handle',
        helper: function (e, item) {
            if (!item.hasClass('ui-selected')) {
                $('#plate').find('.ui-selected').removeClass('ui-selected');
                item.addClass('ui-selected');
            };
            var selected = $('.ui-selected').clone();
            item.data('multidrag', selected);
            $('.ui-selected').not(item).remove();
            return $('<li class="transporter" />').append(selected);
        },
        stop: function (e, ui) {
            var selected = ui.item.data('multidrag');
            ui.item.after(selected);
            ui.item.remove();
        }
    }).disableSelection();
});


function plateSettingConstruct(){
    const plateRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] ;
    var rowCount = 0
    var columnCount = 1 
    for(plateIndex = 0; plateIndex < 96; plateIndex++){
        if(plateIndex % 12 == 0 && plateIndex != 0){
            rowCount++;
            columnCount = 1;
        };
        var $well = $('<div/>').attr('id', plateRows[rowCount] + columnCount).addClass('well').html(plateRows[rowCount]  + columnCount);
        $('#plate').append($well);
        columnCount++;
    };
}

/* draggable element */
// function controlDrag(){
//     const controls= document.querySelectorAll('.control');
//     controls.forEach(control=>{
//         control.addEventListener('dragstart', dragStart);
//         function dragStart(e) {
//             e.dataTransfer.setData('text/plain', e.target.id);
//             setTimeout(() => {
//                 e.target.classList.add('hide');
//             }, 0);
//         }
//     })
// }

// function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }

// function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }

// function dragLeave(e) {
//     e.target.classList.remove('drag-over');
// }

// function drop(e) {
//     e.target.classList.remove('drag-over');

//     // get the draggable element
//     var id = e.dataTransfer.getData('text/plain');
//     console.log(id)
//     console.log(document.getElementById(id))
//     var draggable = document.getElementById(id);
//     // add it to the drop target
//     e.target.appendChild(draggable);
//     console.log(draggable)
//     // display the draggable element
//     draggable.classList.remove('hide');
//     controlDrag();
//     //$(e.target).off('dragover');
// }

