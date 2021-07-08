package dev.khoican.todo.repositories;

import dev.khoican.todo.models.Todo;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {

}
