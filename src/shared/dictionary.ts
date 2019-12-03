class Dictionary {
    NENHUM_REGISTRO_ENCONTRADO: string = 'Nenhum registro encontrado!';
    CONFIRMAR: string = 'Confirmar';
    NAO: string = 'Não';
    SIM: string = 'Sim';
    SALVAR: string = 'Salvar';
    CANCEL: string = 'Cancelar';
    MANDATORY: string = 'Obrigatório: ( * )';
    DELETAR_REGISTRO: string = 'Deletar registro';
    EDITAR_REGISTRO: string = 'Editar registro';
    BOOK_AUTHOR: string = 'Autor';
    BOOK_NAME: string = 'Nome';
    BOOK_DESCRIPTION: string = 'Descrição';
    BOOK_COVER: string = 'Capa';
    BOOK_ACTIONS: string = 'Ação';
    BOOK_TITLE: string = 'Livros';
    BOOK_ADD_NEW: string = 'Adicionar';
    BOOK_PLACEHOLDER_NAME: string = 'Nome do livro...';
    BOOK_PLACEHOLDER_AUTHOR: string = 'Nome d autor...';
    BOOK_PLACEHOLDER_DESCRIPTION: string = 'Descrição do livro...';
    BOOK_SELECT: string = 'Selecione';
    BOOK_DELETE_CONFIRM: string = 'Você deseja realmente deletar o livro {{ param }}?';
    BOOK_REGISTER_TITLE: string = 'Cadastrar';
    HEADER_TITLE: string = 'Biblioteca';
    HEADER_EVALUATION: string = 'Avalições';
    HEADER_BOOKS: string = 'Livros';
    PAGINATE_PRIMEIRA: string = 'Primeira';
    PAGINATE_ANTERIOR: string = 'Anterior';
    PAGINATE_PROXIMA: string = 'Próxima';
    PAGINATE_ULTIMA: string = 'Última';
    PAGINATE_MOSTRANDO: string = 'Mostrando';
    PAGINATE_DE: string = 'de';
    PAGINATE_ATE: string = 'até';
    ERROR_MESSAGE: string = 'Ocorreu um erro na requisição!';
    ERROR_TITLE: string = 'Erro';
    SUCCESS_MESSAGE: string = 'Operação realizada com sucesso!';
    SUCCESS_TITLE: string = 'Sucesso';

    constructor() {
        Object.freeze(this);
    }

    getMessageWithParam(msg: string, param: any = '') {
        // @ts-ignore
        return msg.replace('{{ param }}', param);
    }
}

export const dictionary = new Dictionary();
