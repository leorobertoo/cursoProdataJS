
/**
 * Created by leonardo on 12/11/2016.
 */

angular.module('pdApp')
    .service('AlertService', AlertService);

function AlertService (toastr){
    this.sucess=sucess;
    this.error=error;
    this.info=info;
    this.alert=alert;
}

function sucess(mensagem,titulo){
    titulo=titulo || 'info';
    toastr.info(mensagem, titulo);

}

function sucess(mensagem,titulo){
    titulo=titulo || 'OK';
    toastr.sucess(mensagem, titulo);

}


function sucess(mensagem,titulo){
    titulo=titulo || 'Error';
    toastr.error(mensagem, titulo);

}

function sucess(mensagem){
    toastr.sucess(mensagem, 'ok');
}

function error(mensagem){
    toastr.error(mensagem, 'Erro');
}

function info(mensagem){
    toastr.info(mensagem, 'Info');
}

function alert(mensagem){
    toastr.warning(mensagem, 'Atenção');
}