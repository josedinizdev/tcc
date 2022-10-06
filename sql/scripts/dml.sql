-- SQLBook: Code

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
       values('José Diogo Caetano Diniz', current_date(), 'jdcdiniz@gmail.com', '2004-04-27');

insert into tb_login(id_usuario, ds_senha)
        values(1, '1234');

insert into tb_admin(id_usuario, bt_admin)
        values(1, true);

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('João Vitor Moura', current_date(), 'joaovitormoura@gmail.com', '2004-09-24');

insert into tb_login(id_usuario, ds_senha)
        values(2, '1234');

insert into tb_admin(id_usuario, bt_admin)
        values(2, true);

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('David Douglas Gonçalves Ribeiro', current_date(), 'daviddouglas1042@gmail.com', '2006-02-03');

insert into tb_login(id_usuario, ds_senha)
        values(3, '1234');

insert into tb_admin(id_usuario, bt_admin)
        values(3, true);

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante1@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(4, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante2@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(5, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante3@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(6, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante4@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(7, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante5@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(8, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante6@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(9, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante7@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(10, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante8@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(11, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante9@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(12, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante10@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(13, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante11@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(14, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante12@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(15, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante13@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(16, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante14@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(17, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante15@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(18, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante16@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(19, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Visitante', current_date(), 'visitante17@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(20, '1234');

insert into tb_categoria(ds_categoria)
        values('Assistência técnica');

insert into tb_categoria(ds_categoria)
        values('Aulas');

insert into tb_categoria(ds_categoria)
        values('Autos');

insert into tb_categoria(ds_categoria)
        values('Consultoria');

insert into tb_categoria(ds_categoria)
        values('Design');

insert into tb_categoria(ds_categoria)
        values('Desenvolvimento Web');

insert into tb_categoria(ds_categoria)
        values('Desenvolvimento de Software');

insert into tb_categoria(ds_categoria)
        values('Decorações');

insert into tb_categoria(ds_categoria)
        values('Reparo');

insert into tb_categoria(ds_categoria)
        values('Banco de Dados');

insert into tb_categoria(ds_categoria)
        values('Front-end');

insert into tb_categoria(ds_categoria)
        values('Back-end');

insert into tb_categoria(ds_categoria)
        values('Eventos');

insert into tb_categoria(ds_categoria)
        values('Moda e beleza');

insert into tb_categoria(ds_categoria)
        values('Reformas e reparos');

insert into tb_categoria(ds_categoria)
        values('Saúde');

insert into tb_categoria(ds_categoria)
        values('Serviços Domésticos');

insert into tb_local(ds_estado, ds_cidade, ds_endereco, ds_numero, ds_cep, ds_complemento)
        values('São Paulo', 'São Paulo', 'Rua 25 de Março', '235', '09999190', 'condomínio');

insert into tb_servico(id_usuario, id_local, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado)
        values(1, 1, 'Reparo de Máquina', 'Reparo', 'Máquina mt doida', 'Deixar a maquina foda', current_timestamp());

insert into tb_servico_categoria(id_servico, id_categoria)
        values(1, 9);

insert into tb_servico(id_usuario, id_local, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado)
        values(1, 2, 'Reparo de Máquina', 'Reparo', 'Máquina mt doida', 'Deixar a maquina foda', current_timestamp());

insert into tb_servico_categoria(id_servico, id_categoria)
        values(2, 9);
        
insert into tb_local(ds_estado, ds_cidade, ds_endereco, ds_numero, ds_cep, ds_complemento)
        values('São Paulo', 'São Paulo', 'Rua 25 de Março', '235', '09999190', 'condomínio');

insert into tb_servico(id_usuario, id_local, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado)
        values(1, 3, 'Reparo de Máquina', 'Reparo', 'Máquina mt doida', 'Deixar a maquina foda', current_timestamp());

insert into tb_servico_categoria(id_servico, id_categoria)
        values(3, 9);

insert into tb_local(ds_estado, ds_cidade, ds_endereco, ds_numero, ds_cep, ds_complemento)
        values('São Paulo', 'São Paulo', 'Rua 25 de Março', '235', '09999190', 'condomínio');

insert into tb_servico(id_usuario, id_local, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado)
        values(1, 4, 'Reparo de Máquina', 'Reparo', 'Máquina mt doida', 'Deixar a maquina foda', current_timestamp());

insert into tb_servico_categoria(id_servico, id_categoria)
        values(4, 9);
        
insert into tb_local(ds_estado, ds_cidade, ds_endereco, ds_numero, ds_cep, ds_complemento)
        values('São Paulo', 'São Paulo', 'Rua 25 de Março', '235', '09999190', 'condomínio');

insert into tb_servico(id_usuario, id_local, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado)
        values(1, 5, 'Reparo de Máquina', 'Reparo', 'Máquina mt doida', 'Deixar a maquina foda', current_timestamp());

insert into tb_servico_categoria(id_servico, id_categoria)
        values(5, 9);