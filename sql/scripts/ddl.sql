-- SQLBook: Code
create database withu;
use withu;

/* user
/* user login  (ref user)
/* user img (ref user)
/* user admin (ref user)
/* user opinion (ref user)
/* user ask support (ref user)
/* user idea (ref user)
*/

# user
create table tb_usuario(
    id_usuario              int primary key auto_increment,
    nm_usuario              varchar(150) not null,
    dt_registro             datetime not null,
    ds_genero               varchar(10),
    ds_email                varchar(75) not null,
    nr_celular              int,
    ds_sobre                varchar(2500),
    dt_nascimento           date not null,
    img_usuario             blob
);

# user login
create table tb_login(
    id_login                int primary key auto_increment,
    id_usuario              int not null,
    ds_senha                varchar(27) not null,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

# user admin
create table tb_admin(
    id_admin                int primary key auto_increment,
    id_usuario              int not null,
    bt_admin                bool not null,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

# user opinion
create table tb_opiniao(
    id_opiniao              int primary key auto_increment,
    id_usuario              int,
    ds_opiniao              varchar(3500),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

# user ask support
create table tb_suporte(
    id_suporte              int primary key auto_increment,
    id_usuario              int not null,
    nm_suporte              varchar(100) not null,
    ds_suporte              varchar(3500) not null,
    nm_envolvido            varchar(150),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

# user idea
create table tb_ideia(
    id_ideia                int primary key auto_increment,
    id_usuario              int not null,
    nm_ideia                varchar(150) not null,
    ds_link                 varchar(200) not null,
    img_capa                blob not null,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);


/* chat
/* user in chat
/* user message
*/

# chat
create table tb_chat(
    id_chat                 int primary key auto_increment
);

# user in chat
create table tb_atribuido_chat(
    id_atribuido_chat       int primary key auto_increment,
    id_usuario              int not null,
    id_chat                 int not null,
    foreign key (id_chat) references tb_chat (id_chat),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

# user message
create table tb_mensagem(
    id_mensagem             int primary key auto_increment,
    id_usuario              int not null,
    id_chat                 int not null,
    ds_mensagem             varchar(2700),
    bt_visualizado          bool,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

/* services (ref usuario local category)
/* category
/* local
*/

# local
create table tb_local(
    id_local                int primary key auto_increment,
    ds_estado               varchar(150) not null,
    ds_cidade               varchar(150) not null,
    ds_endereco             varchar(300) not null,
    ds_numero               varchar(10) not null,
    ds_cep                  varchar(8) not null,
    ds_complemento          varchar(50)
);

# category
create table tb_categoria(
    id_categoria            int primary key auto_increment,
    ds_categoria            varchar(150) not null
);

# services
create table tb_servico(
    id_servico              int primary key auto_increment,
    id_usuario              int not null,
    id_local                int,
    nm_servico              varchar(200) not null,
    ds_servico              varchar(7500) not null,
    ds_ideias               varchar(3500) not null,
    ds_requisitos           varchar(3500) not null,
    dt_publicado            datetime not null,
    foreign key (id_usuario) references tb_usuario (id_usuario),
    foreign key (id_local) references tb_local (id_local)
);

create table tb_servico_categoria(
	id_servico_categoria	int primary key auto_increment,
    id_servico				int,
    id_categoria			int,
    foreign key (id_categoria) references tb_categoria (id_categoria),
    foreign key (id_servico) references tb_servico (id_servico)
);

/* worker (ref user)
/* cargo (ref worker)
/* worker in service (ref worker services)
*/

# worker
create table tb_worker(
    id_worker               int primary key auto_increment,
    id_usuario              int not null,
    nr_cpf                  int not null,
    nm_cargo                varchar(150) not null,
    ds_habilidades          varchar(350) not null,
    ds_estado               varchar(150) not null,
    ds_email_profissional   varchar(250) not null,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

# cargo
create table tb_avaliacao(
    id_avaliacao            int primary key auto_increment,
    id_worker               int not null,
    id_usuario              int not null,
    vl_avaliacao            decimal(2,2) not null,
    foreign key (id_usuario) references tb_usuario (id_usuario),
    foreign key (id_worker) references tb_worker (id_worker)
);

# worker in service
create table tb_atribuido(
    id_atribuido            int primary key auto_increment,
    id_worker               int not null,
    id_servico              int not null,
    foreign key (id_worker) references tb_worker (id_worker),
    foreign key (id_servico) references tb_servico (id_servico)
);