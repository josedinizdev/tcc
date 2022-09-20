-- SQLBook: Code

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

/ see categories (get)
*/

# see categories (get)
select ds_categoria     categoria
    from tb_categoria;