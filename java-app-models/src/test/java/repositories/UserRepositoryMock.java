// package org.njax.trinetco.netgrid.java.app.models;
//
// import java.time.LocalDate;
// import java.util.ArrayList;
// import java.util.List;
// import java.util.Optional;
//
// import org.njax.trinetco.netgrid.java.app.models.UserEntity;
//
// public class UserRepositoryMock implements UserRepository {
// 	List<UserEntity> userEntities = new ArrayList<UserEntity>();
//
// 	public UserRepositoryMock(final UserEntity ce) {
// 		userEntities.add(ce);
// 	}
//
// 	@Override
// 	public List<UserEntity> findAll() {
// 		// TODO Auto-generated method stub
// 		return null;
// 	}
//
// 	@Override
// 	public List<UserEntity> findAllById(Iterable<Integer> ids) {
// 		// TODO Auto-generated method stub
// 		return null;
// 	}
//
// 	@Override
// 	public <S extends UserEntity> List<S> saveAll(Iterable<S> entities) {
// 		// TODO Auto-generated method stub
// 		return null;
// 	}
//
// 	@Override
// 	public <S extends UserEntity> S save(S entity) {
// 		// TODO Auto-generated method stub
// 		return null;
// 	}
//
// 	@Override
// 	public Optional<UserEntity> findById(Integer id) {
// 		for(UserEntity entity : userEntities) {
// 			if(entity.getId() == id) {
// 				return Optional.of(entity);
// 			}
// 		}
// 		return null;
// 	}
//
// 	@Override
// 	public boolean existsById(Integer id) {
// 		// TODO Auto-generated method stub
// 		return false;
// 	}
//
// 	@Override
// 	public long count() {
// 		// TODO Auto-generated method stub
// 		return 0;
// 	}
//
// 	@Override
// 	public void deleteById(Integer id) {
// 		// TODO Auto-generated method stub
//
// 	}
//
// 	@Override
// 	public void delete(UserEntity entity) {
// 		// TODO Auto-generated method stub
//
// 	}
//
// 	@Override
// 	public void deleteAll(Iterable<? extends UserEntity> entities) {
// 		// TODO Auto-generated method stub
// 	}
//
//     @Override
// 	public void deleteAll() {
// 		// TODO Auto-generated method stub
// 	}
//
// }
