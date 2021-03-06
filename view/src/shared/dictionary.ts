class Dictionary {
    NENHUM_REGISTRO_ENCONTRADO: string = 'Nenhum registro encontrado!';
    CONFIRMAR: string = 'Confirmar';
    NAO: string = 'Não';
    SIM: string = 'Sim';
    SALVAR: string = 'Salvar';
    CANCEL: string = 'Cancelar';
    CLOSE: string = 'Fechar';
    MANDATORY: string = 'Obrigatório: ( * )';
    DELETAR_REGISTRO: string = 'Deletar registro';
    EDITAR_REGISTRO: string = 'Editar registro';
    // book
    BOOK_AUTHOR: string = 'Autor';
    BOOK_NAME: string = 'Nome';
    BOOK_DESCRIPTION: string = 'Descrição';
    BOOK_COVER: string = 'Capa';
    BOOK_ACTIONS: string = 'Ação';
    BOOK_TITLE: string = 'Livros';
    BOOK_ADD_NEW: string = 'Adicionar';
    BOOK_PLACEHOLDER_NAME: string = 'Nome do livro...';
    BOOK_PLACEHOLDER_AUTHOR: string = 'Nome do autor...';
    BOOK_PLACEHOLDER_DESCRIPTION: string = 'Descrição do livro...';
    BOOK_SELECT: string = 'Selecione';
    BOOK_DELETE_CONFIRM: string = 'Você deseja realmente deletar o livro {{ param }}?';
    BOOK_REGISTER_TITLE: string = 'Cadastrar';
    BOOK_EVALUATION: string = 'Avaliações';
    // header
    HEADER_TITLE: string = 'Biblioteca';
    HEADER_BOOKS: string = 'Livros';
    // paginate
    PAGINATE_PRIMEIRA: string = 'Primeira';
    PAGINATE_ANTERIOR: string = 'Anterior';
    PAGINATE_PROXIMA: string = 'Próxima';
    PAGINATE_ULTIMA: string = 'Última';
    PAGINATE_MOSTRANDO: string = 'Mostrando';
    PAGINATE_DE: string = 'de';
    PAGINATE_ATE: string = 'até';
    // user
    USER_LOGIN: string = 'Login';
    USER_NAME: string = 'Nome';
    USER_ADMIN: string = 'Administrador';
    USER_PLACEHOLDER_NAME: string = 'Digite o nome...';
    USER_PLACEHOLDER_LOGIN: string = 'Digite o login...';
    USER_PASSWORD: string = 'Senha';
    USER_CONFIRM_PASSWORD: string = 'Confirmar senha';
    USER_LOGIN_PLACEHOLDER: string = 'Digite seu usuário...';
    USER_LOGIN_BTN: string = 'Entrar';
    USER_REGISTER: string = 'Cadastre-se';
    USER_PASSWORD_PLACEHOLDER: string = 'Digite sua senha...';
    USER_CONFIRM_PASSWORD_PLACEHOLDER: string = 'Confirme sua senha...';
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
