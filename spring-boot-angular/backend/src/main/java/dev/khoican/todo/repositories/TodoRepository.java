package dev.khoican.todo.repositories;

import dev.khoican.todo.models.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long> {

}
