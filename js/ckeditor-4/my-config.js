// CKEditor initialization <textarea id='body'></textarea>
CKEDITOR.replace('description', {
    contentsLangDirection : 'rtl',
    height: '400px',
    toolbar: [
        { name: 'document', items: [ 'Source', 'Bold', 'Italic', 'Underline', 'Strike', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', 'Undo', 'Redo'] },
        { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'BidiLtr', 'BidiRtl', 'Link', 'Unlink' , 'Image', 			'Table','TextColor', 'BGColor' ] },
    ]
});