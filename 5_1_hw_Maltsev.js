

/* 
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/


(function () {

    let chessDesk = document.getElementsByClassName('container');
    chessDesk[0].style.width = '1200px';
    chessDesk[0].style.margin = '0 auto';

    let line = document.getElementsByClassName('row');
    for (let i = 0; i < line.length; i++) {
        line[i].style.display = 'flex';
        line[i].style.height = '150px';
    }

    let whiteCell = document.getElementsByClassName('cellWhite');
    for (let i = 0; i < whiteCell.length; i++) {
        whiteCell[i].style.width = '150px';
        
    }

    let blackCell = document.getElementsByClassName('cellBlack');
    for (let i = 0; i < blackCell.length; i++) {
        blackCell[i].style.width = '150px';
        blackCell[i].style.background = 'black';
    }

    let columnRow = document.getElementsByClassName('column_row');
    for (let i = 0; i < columnRow.length; i++) {
        columnRow[i].style.display = 'flex';
        columnRow[i].style.textAlign = 'center';
        columnRow[i].style.fontSize = '30px';
        columnRow[i].style.paddingTop = '8px';
        columnRow[i].style.paddingBottom = '8px';
    }
    let numberCell = document.getElementsByClassName('number_cell');
    for (let i = 0; i < numberCell.length; i++) {
        numberCell[i].style.fontSize = '30px';
        numberCell[i].style.lineHeight = '150px';
        numberCell[i].style.paddingLeft = '8px';
        numberCell[i].style.paddingRight = '8px';
    }


})();
// ___________________________________________________________





