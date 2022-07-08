select usuario.id, usuario.nombre, usuario.correo , ventas.totalventa, ventas.fecha, categoria.tipo,  producto.nombre , producto.descripcion, producto.descripcion2 from usuario
inner JOIN ventas
ON ventas.usuario_id = usuario.id
inner JOIN producto
on producto.id = ventas.producto_id
inner join categoria
on categoria.id = producto.categoria_id
where totalventa <14000
order by id asc;