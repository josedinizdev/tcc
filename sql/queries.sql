-- SQLBook: Code

/* user
/* user register
/* user login
/* update image
/* list users (search or not)
/* delete image
*/

# user register
insert into tb_usuario(nm_usuario, dt_registro, ds_email, dt_nascimento)
       values(?, current_date(), ?, ?);

insert into tb_login(id_usuario, ds_senha)
       values(?, ?);

# user login
select tb_usuario.id_usuario     as id,
       tb_usuario.nm_usuario     as nome
  from tb_usuario
 inner join tb_login
    on tb_login.id_usuario       = tb_usuario.id_usuario
 where tb_usuario.ds_email       = ?
   and tb_login.ds_senha         = ?;

# details user
select id_usuario                as id,
       nm_usuario                as nome,
       ds_sobre                  as sobre,
       img_usuario               as foto,
       ds_email                  as email,
       nr_celuar                 as celular,
       dt_nascimento             as nascimento
 from tb_usuario
  where id_usuario = ?;


# update image
update tb_usuario
   set img_usuario = ?
 where id_usuario = ?;

# update user
update tb_usuario
   set nm_usuario = ?,
       ds_genero = ?,
       ds_email = ?,
       nr_celular = ?,
       ds_sobre = ?,
       dt_nascimento = ?
 where id_usuario = ?;

# list users (search or not)
select id_usuario                as id,
       nm_usuario                as nome,
       ds_sobre                  as sobre,
       img_usuario               as foto
 from tb_usuario
  where nm_usuario like ?;

# delete user
delete from tb_usuario
  where id_usuario = ?;

# list my contacts
select id_usuario                as id,
       nm_usuario                as nome,
       ds_sobre                  as sobre,
       img_usuario               as foto
 from tb_usuario
inner join tb_contato
   on tb_contanto.id_usuario = tb_usuario.id_usuario 
where nm_usuario like ?
  and tb_contato.id_usuario = ?;

/* worker
/* be worker
/* is worker?
/* evaluate worker
/* delete worker
*/

# be worker
insert into tb_worker(id_usuario, nr_cpf, ds_estado, ds_email_profissional, nm_cargo, ds_habilidades)
       values(?, ?, ?, ?, ?, ?);

# is worker?
select tb_worker.id_usuario     as id,
  from tb_worker
 inner join tb_usuario
    on tb_usuario.id_usuario    = tb_worker.id_usuario
 where tb_worker.id_usuario     = ?;

# evaluate worker
insert into tb_avaliacao(id_worker, id_usuario, vl_avaliacao)
       values(?, ?, ?);

# get evaluated worker
select vl_avaliacao             as avaliacao
  from tb_avaliacao
 where id_worker                = ?;

# delete worker
delete from tb_worker
 where id_worker = ?;

/* services
/* see categories
/* create service
/* list services (search by or for)
/* see details of service
/* if there's an applied worker
/* apply
/* update service
/* delete service
/* delete local
/* delete applied
/* delete category
*/

# see categories
select ds_categoria     categoria
    from tb_categoria;

# create service
insert into tb_servico_categoria(id_servico, id_categoria)
       values(?, ?);

insert into tb_local(ds_estado, ds_cidade, ds_endereco, ds_numero, ds_cep, ds_complemento)
       values(?, ?, ?, ?, ?, ?)

insert into tb_servico(id_usuario, id_local, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado)
       values(?, ?, ?, ?, ?, ?, current_data());

# list services (search by or for)
select tb_servico.id_servico     as idServico,
       tb_servico.nm_servico     as titulo,
       tb_servico.dt_publicado   as data,
       tb_categoria.ds_categoria as categoria,
  from tb_servico
 inner join tb_servico_categoria
	on tb_servico_categoria.id_servico = tb_servico.id_servico
 inner join tb_categoria
    on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
 where tb_categoria.id_categoria = ?
   and tb_servico.nm_servico     = ?;

# list user created services
select tb_servico.id_servico     as idServico,
       tb_servico.nm_servico     as titulo,
       tb_servico.ds_servico     as descricao,
       tb_servico.ds_ideias      as ideias,
       tb_servico.ds_requisitos  as requisitos,
       tb_servico.dt_publicado   as data,
       tb_categoria.ds_categoria as categoria,
       tb_usuario.id_usuario     as idUsuario,
       tb_usuario.nm_usuario     as nomeUsuario,
       tb_usuario.img_usuario    as imgUsuario,
       tb_local.id_local         as idLocal,
       tb_local.ds_endereco      as endereco,
       tb_local.ds_cep           as cep
  from tb_servico
 inner join tb_servico_categoria
	on tb_servico_categoria.id_servico = tb_servico.id_servico
 inner join tb_categoria
    on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
 inner join tb_usuario
    on tb_usuario.id_usuario = tb_servico.id_usuario
 inner join tb_local
	on tb_local.id_local = tb_servico.id_local
 where tb_servico.id_usuario     = ?
   and tb_categoria.id_categoria = ?
   and tb_servico.nm_servico     = ?;

# see details of service
select tb_servico.id_servico     as idServico,
       tb_servico.nm_servico     as titulo,
       tb_servico.ds_servico     as descricao,
       tb_servico.ds_ideias      as ideias,
       tb_servico.ds_requisitos  as requisitos,
       tb_servico.dt_publicado   as data,
       tb_categoria.ds_categoria as categoria,
       tb_usuario.id_usuario     as idUsuario,
       tb_usuario.nm_usuario     as nomeUsuario,
       tb_usuario.img_usuario    as imgUsuario,
       tb_local.id_local         as idLocal,
       tb_local.ds_endereco      as endereco,
       tb_local.ds_cep           as cep
  from tb_servico
 inner join tb_servico_categoria
	on tb_servico_categoria.id_servico = tb_servico.id_servico
 inner join tb_categoria
    on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
 inner join tb_usuario
    on tb_usuario.id_usuario = tb_servico.id_usuario
 inner join tb_local
	on tb_local.id_local = tb_servico.id_local
 where tb_servico.id_servico     = ?;

# if there's an applied worker
select tb_usuario.id_usuario     as id,
       tb_usuario.nm_usuario     as usuario,
       tb_usuario.img_usuario    as foto
  from tb_usuario
 inner join tb_worker
    on tb_worker.id_usuario      = tb_usuario.id_usuario
 inner join tb_atribuido
    on tb_atribuido.id_worker    = tb_worker.id_worker
 where tb_atribuido.id_atribuido = ?;   

# apply
insert into tb_atribuido(id_servico, id_worker)
        values(?, ?);

update tb_servico
   set id_atribuido              = ?
 where id_servico                = ?;

# list applied services
select tb_servico.id_servico     as idServico,
       tb_servico.nm_servico     as titulo,
       tb_servico.dt_publicado   as data,
       tb_categoria.ds_categoria as categoria,
  from tb_servico
 inner join tb_servico_categoria
	on tb_servico_categoria.id_servico = tb_servico.id_servico
 inner join tb_categoria
    on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
 inner join tb_atribuido
    on tb_atribuido.id_servico = tb_servico.id_servico
 where tb_categoria.id_categoria = ?
   and tb_servico.nm_servico     = ?
   and tb_atribuido.id_worker    = ?;

# mark service as done
update tb_servico
   set bt_servico = true
 where id_servico = ?;

# undone
update tb_servico
   set bt_servico = false
 where id_servico = ?;

# update service
update tb_servico
   set tb_servico.ds_titulo      = ?,
       tb_servico.nm_servico       = ?,
       tb_servico.ds_servico      = ?, 
       tb_servico.ds_requisitos  = ?,  
       tb_categoria.ds_categoria = ?, 
       tb_local.ds_endereco      = ?,
       tb_local.ds_cep           = ?
 inner join tb_categoria
    on tb_servico.id_categoria   = tb_categoria.id_categoria
 inner join tb_usuario
    on tb_servico.id_usuario     = tb_usuario.id_usuario     
 inner join tb_local
    on tb_servico.id_local       = tb_local.id_local
 where tb_servico.id_servico      = ?;  

# delete service
delete from tb_servico
 where id_servico = ?;

# delete applied
delete from tb_atribuido
 where id_atribuido = ?;

# delete local
delete from tb_local
 where id_local = ?;

# delete category
delete from tb_categoria
 where id_categoria = ?;