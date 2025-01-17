package com.loginandregister.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loginandregister.models.User;

@Repository
public interface UserRepo extends CrudRepository<User,Long> {
	
	List<User>findAll();
	
	Optional<User>findByEmail(String email);
}
