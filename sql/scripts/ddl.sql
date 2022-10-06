-- SQLBook: Code
create database if not exists `withu`;
use `withu`;

/* user
/* user login  (ref user)
/* user img (ref user)
/* user admin (ref user)
/* user opinion (ref user)
/* user ask support (ref user)
/* user idea (ref user)
*/

# user
create table if not exists `tb_usuario`(
    `id_usuario`              int primary key auto_increment,
    `nm_usuario`              varchar(150) default null,
    `dt_registro`             datetime default null,
    `ds_genero`               varchar(10),
    `ds_email`                varchar(75) default null,
    `nr_celular`              int,
    `ds_sobre`                varchar(2500),
    `dt_nascimento`           date default null,
    `img_usuario`             blob
);

# user login
create table if not exists `tb_login`(
    `id_login`                int primary key auto_increment,
    `id_usuario`              int default null,
    `ds_senha`                varchar(27) default null,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);

# user admin
create table if not exists `tb_admin`(
    `id_admin`                int primary key auto_increment,
    `id_usuario`              int default null,
    `bt_admin`                bool default null,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);

# user opinion
create table if not exists `tb_opiniao`(
    `id_opiniao`              int primary key auto_increment,
    `id_usuario`              int,
    `ds_opiniao`              varchar(3500),
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);

# user ask support
create table if not exists `tb_suporte`(
    `id_suporte`              int primary key auto_increment,
    `id_usuario`              int default null,
    `nm_suporte`              varchar(100) default null,
    `ds_suporte`              varchar(3500) default null,
    `nm_envolvido`            varchar(150),
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);

# user idea
create table if not exists `tb_ideia`(
    `id_ideia`                int primary key auto_increment,
    `id_usuario`              int default null,
    `nm_ideia`                varchar(150) default null,
    `ds_link`                 varchar(200) default null,
    `img_capa`                blob default null,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);


/* chat
/* user in chat
/* user message
*/

# chat
create table if not exists `tb_chat`(
    `id_chat`                 int primary key auto_increment,
    `dt_chat`                 datetime
);

# user in chat
create table if not exists `tb_atribuido_chat`(
    `id_atribuido_chat`       int primary key auto_increment,
    `id_usuario`              int default null,
    `id_chat`                 int default null,
    foreign key (`id_chat`) references `tb_chat` (`id_chat`),
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);

# user message
create table if not exists `tb_mensagem`(
    `id_mensagem`             int primary key auto_increment,
    `id_usuario`              int default null,
    `id_chat`                 int default null,
    `ds_mensagem`             varchar(2700),
    `bt_visualizado`          bool,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);

/* services (ref usuario local category)
/* category
/* local
*/

# local
create table if not exists `tb_local`(
    `id_local`                int primary key auto_increment,
    `ds_estado`               varchar(150) default null,
    `ds_cidade`               varchar(150) default null,
    `ds_endereco`             varchar(300) default null,
    `ds_numero`               varchar(10) default null,
    `ds_cep`                  varchar(8) default null,
    `ds_complemento`          varchar(50)
);

# category
create table if not exists `tb_categoria`(
    `id_categoria`            int primary key auto_increment,
    `ds_categoria`            varchar(150) default null
);

# services
create table if not exists `tb_servico`(
    `id_servico`              int primary key auto_increment,
    `id_usuario`              int default null,
    `id_local`                int default null,
    `nm_servico`              varchar(200) default null,
    `ds_servico`              varchar(7500) default null,
    `ds_ideias`               varchar(3500) default null,
    `ds_requisitos`           varchar(3500) default null,
    `dt_publicado`            datetime default null,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`),
    foreign key (`id_local`) references `tb_local` (`id_local`)
);

create table if not exists `tb_servico_categoria`(
	`id_servico_categoria`	int primary key auto_increment,
    `id_servico`				int,
    `id_categoria`			int,
    foreign key (`id_categoria`) references `tb_categoria` (`id_categoria`),
    foreign key (`id_servico`) references `tb_servico` (`id_servico`)
);

/* worker (ref user)
/* cargo (ref worker)
/* worker in service (ref worker services)
*/

# worker
create table if not exists `tb_worker`(
    `id_worker`               int primary key auto_increment,
    `id_usuario`              int default null,
    `nr_cpf`                  int default null,
    `nm_cargo`                varchar(150) default null,
    `ds_habilidades`          varchar(350) default null,
    `ds_estado`               varchar(150) default null,
    `ds_email_profissional`   varchar(250) default null,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);

# cargo
create table if not exists `tb_avaliacao`(
    `id_avaliacao`            int primary key auto_increment,
    `id_worker`               int default null,
    `id_usuario`              int default null,
    `vl_avaliacao`            decimal(2,2) default null,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`),
    foreign key (`id_worker`) references `tb_worker` (`id_worker`)
);

# worker in service
create table if not exists `tb_atribuido`(
    `id_atribuido`            int primary key auto_increment,
    `id_worker`               int default null,
    `id_servico`              int default null,
    foreign key (`id_worker`) references `tb_worker` (`id_worker`),
    foreign key (`id_servico`) references `tb_servico` (`id_servico`)
);

create table if not exists `tb_contato`(
	`id_contato` 			int primary key auto_increment,
    `id_usuario`			int default null,
    foreign key (`id_usuario`) references `tb_usuario` (`id_usuario`)
);