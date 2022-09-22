use withu;

/* user
/* user register (post)
/* user login (get)
*/

# user register (post)
insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values(?, current_date(), ?, ?);

insert into tb_login(id_usuario, ds_email, ds_senha)
        values(?, ?, ?);

# user login (get)
select tb_usuario.id_usuario     as id,
       tb_usuario.nm_usuario     as nome
  from tb_usuario
inner join tb_login
    on tb_login.id_usuario = tb_usuario.id_usuario
 where tb_usuario.ds_email = ?
   and tb_login.ds_senha = ?;

/* see categories (get)
*/

# see categories (get)
select ds_categoria     categoria
    from tb_categoria;
insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('José Diogo Caetano Diniz', current_date(), 'jdcdiniz@gmail.com', '2004-04-27');

insert into tb_login(id_usuario, ds_senha)
        values(1, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('João Vitor Moura', current_date(), 'joaovitormoura@gmail.com', '2004-09-24');

insert into tb_login(id_usuario, ds_senha)
        values(2, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('David Douglas Gonçalves Ribeiro', current_date(), 'daviddouglas1042@gmail.com', '2006-02-03');

insert into tb_login(id_usuario, ds_senha)
        values(3, '1234');

insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
        values('Camilly Oliveira da Costa', current_date(), 'camillyoliveiradacosta15@gmail.com', '2005-04-22');

insert into tb_login(id_usuario, ds_senha)
        values(4, '1234');

select tb_usuario.id_usuario     as id,
       tb_usuario.nm_usuario     as nome,
       tb_login.ds_senha         as senha
  from tb_usuario
 inner join tb_login
    on tb_login.id_usuario = tb_usuario.id_usuario;

select tb_usuario.id_usuario     as id,
       tb_usuario.nm_usuario     as nome
  from tb_usuario
 inner join tb_login
    on tb_login.id_usuario = tb_usuario.id_usuario
 where tb_usuario.ds_email = 'jdcdiniz@gmail.com'
   and tb_login.ds_senha = '1234';
