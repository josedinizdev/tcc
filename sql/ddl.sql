-- SQLBook: Code
create database withu;
use withu;

/* user
/* user login  (ref user)
/* user img (ref user)
*/

# user
create table tb_usuario(
    id_usuario          int primary key auto_increment,
    nm_usuario          varchar(150) not null,
    dt_registo          datetime not null,
    ds_genero           varchar(10) not null,
    ds_email            varchar(75) not null,
    nr_celular          int not null,
    ds_sobre            varchar(2500),
    dt_nascimento       date not null
);

# user login
create table tb_login(
    id_login            int primary key auto_increment,
    id_usuario          int not null,
    ds_senha            varchar(27) not null,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

# user img
create table tb_imagem_perfil(
    id_imagem_perfil    int primary key auto_increment,
    id_usuario,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

/* services
/* 
*/

create table tb_servico(
    id_servico          int primary key auto_increment,
    id_classificacao    int not null,
    id_local            int not null,
    id_usuario          int not null,
    id_atribuido        int not null
);