$('.popup-post').magnificPopup({
    delegate: 'a',
    type: 'image',
    zoom: {
        enabled: true
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const asmCodeBlocks = document.querySelectorAll('code.language-asm');

    const keywords = {
        directives: ['\\.MODEL', '\\.CODE', '\\.END', '\\.DATA', '\\.STACK'],
        procedures: ['PROC', 'ENDP'],
        declarations: ['PUBLIC', 'PRIVATE', 'EXTERN', 'USES'],
        types: ['WORD', 'BYTE', 'DWORD', 'QWORD', 'MEDIUM', 'SMALL', 'LARGE', 'COMPACT', 'TINY', 'FLAT', 'NEAR', 'FAR'],
        instructions: [
            'mov', 'add', 'sub', 'mul', 'div', 'inc', 'dec',
            'and', 'or', 'xor', 'not', 'neg',
            'push', 'pop', 'call', 'ret',
            'jmp', 'je', 'jne', 'jg', 'jl', 'jge', 'jle',
            'cmp', 'test'
        ],
        registers: [
            'AX', 'BX', 'CX', 'DX',
            'AH', 'AL', 'BH', 'BL', 'CH', 'CL', 'DH', 'DL',
            'SI', 'DI', 'SP', 'BP',
            'CS', 'DS', 'ES', 'SS'
        ]
    };

    asmCodeBlocks.forEach(block => {
        let html = block.innerHTML;

        Object.entries(keywords).forEach(([category, words]) => {
            words.forEach(word => {
                const regex = new RegExp(`\\b${word}\\b`, 'gi');
                html = html.replace(regex, match => `<span class="${match.toLowerCase().replace('.', '')}">${match}</span>`);
            });
        });

        block.innerHTML = html;
    });
});
